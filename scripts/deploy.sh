#!/usr/bin/env bash
set -euo pipefail

# Pull one landing image and restart the compose stack.
# Usage: ./deploy.sh <IMAGE_NAME> <TAG> [APP_DIR]

IMAGE_NAME=${1:-}
TAG=${2:-}
APP_DIR=${3:-/home/$(whoami)/deploy/livo-landing}

if [ -z "$IMAGE_NAME" ] || [ -z "$TAG" ]; then
  echo "Usage: ./deploy.sh IMAGE_NAME TAG [APP_DIR]"
  exit 2
fi

echo "Deploying ${IMAGE_NAME}:${TAG} to ${APP_DIR}"
cd "$APP_DIR"

ENV_FILE="$APP_DIR/.env"
tmpfile=$(mktemp)
trap 'rm -f "$tmpfile"' EXIT

if [ "${SKIP_ENV_FILE:-0}" != "1" ]; then
  if [ -f "$ENV_FILE" ]; then
    echo "Updating ${ENV_FILE} with IMAGE_NAME=${IMAGE_NAME}, IMAGE_TAG=${TAG}"
    awk -v image="$IMAGE_NAME" -v tag="$TAG" 'BEGIN{FS=OFS="="}
      /^IMAGE_NAME=/{print "IMAGE_NAME",image; next}
      /^IMAGE_TAG=/{print "IMAGE_TAG",tag; next}
      {print} ' "$ENV_FILE" > "$tmpfile" && mv "$tmpfile" "$ENV_FILE"
  else
    echo "Creating ${ENV_FILE} with deployment variables"
    {
      echo "IMAGE_NAME=$IMAGE_NAME"
      echo "IMAGE_TAG=$TAG"
      echo "HOST_PORT=${HOST_PORT:-3002}"
    } > "$ENV_FILE"
  fi
else
  echo "SKIP_ENV_FILE=1 set; not creating or modifying ${ENV_FILE}"
fi

GHCR_AUTH_TOKEN=${GHCR_TOKEN:-${GHCR_PAT:-}}

if [ -n "${GHCR_USER:-}" ] && [ -n "${GHCR_AUTH_TOKEN:-}" ]; then
  echo "Logging into ghcr.io as ${GHCR_USER}"
  if ! echo "$GHCR_AUTH_TOKEN" | docker login ghcr.io -u "$GHCR_USER" --password-stdin; then
    echo "WARNING: ghcr.io login failed for ${GHCR_USER}" >&2
    echo "Continuing with docker pull in case the image is public or the host already has valid credentials." >&2
  fi
elif [ -n "${GHCR_USER:-}" ] || [ -n "${GHCR_TOKEN:-}" ] || [ -n "${GHCR_PAT:-}" ]; then
  echo "WARNING: incomplete GHCR credentials provided; skipping docker login." >&2
fi

echo "Pulling image ${IMAGE_NAME}:${TAG}"
if ! docker pull "${IMAGE_NAME}:${TAG}"; then
  echo "ERROR: failed to pull ${IMAGE_NAME}:${TAG}" >&2
  echo "If this image is private, verify GHCR_USER and GHCR_TOKEN/GHCR_PAT have package read access." >&2
  exit 1
fi

if [ ! -f docker-compose.yml ]; then
  echo "ERROR: docker-compose.yml not found in ${APP_DIR}" >&2
  exit 1
fi

echo "Starting compose stack"
IMAGE_NAME="${IMAGE_NAME}" IMAGE_TAG="${TAG}" HOST_PORT="${HOST_PORT:-3002}" \
  docker compose -f docker-compose.yml up -d --remove-orphans

echo "Deployment complete."
docker ps --filter "ancestor=${IMAGE_NAME}:${TAG}" --format "{{.ID}} {{.Image}} {{.Names}}" || true
