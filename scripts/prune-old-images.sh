#!/usr/bin/env bash
set -euo pipefail

IMAGE_NAME=${1:-}
KEEP_COUNT=${2:-3}

if [ -z "$IMAGE_NAME" ]; then
  echo "Usage: ./prune-old-images.sh IMAGE_NAME [KEEP_COUNT]" >&2
  exit 2
fi

if ! [[ "$KEEP_COUNT" =~ ^[0-9]+$ ]] || [ "$KEEP_COUNT" -lt 1 ]; then
  echo "KEEP_COUNT must be a positive integer." >&2
  exit 2
fi

mapfile -t release_tags < <(
  docker image ls "$IMAGE_NAME" --format '{{.Tag}}' \
    | awk 'NF && $0 != "<none>" && $0 != "latest"' \
    | sort -Vr
)

if [ "${#release_tags[@]}" -le "$KEEP_COUNT" ]; then
  echo "Found ${#release_tags[@]} release image(s) for ${IMAGE_NAME}; nothing to prune."
  exit 0
fi

tags_to_remove=("${release_tags[@]:KEEP_COUNT}")

echo "Keeping the newest ${KEEP_COUNT} release image(s) for ${IMAGE_NAME}:"
printf '  %s\n' "${release_tags[@]:0:KEEP_COUNT}"

echo "Removing older release image(s):"
printf '  %s\n' "${tags_to_remove[@]}"

for tag in "${tags_to_remove[@]}"; do
  docker image rm "${IMAGE_NAME}:${tag}" || true
done

echo "Image pruning complete."
