#!/usr/bin/env bash
# Helper: open official App Store / Google Play badge pages so you can download
# the official artwork and place them into `shared/badges/`.

set -e

echo "This script helps you fetch official store badges for Livo."
echo "It will open the official guideline pages in your default browser."
echo
echo "Apple App Store marketing guidelines (download badges here):"
echo "https://developer.apple.com/app-store/marketing/guidelines/"
open "https://developer.apple.com/app-store/marketing/guidelines/"

echo
echo "Google Play badge generator / assets:"
echo "https://play.google.com/intl/en_us/badges/"
open "https://play.google.com/intl/en_us/badges/"

echo
echo "Android TV / TV badges: check Google Play TV or adapt Play badge for TV."
echo "After downloading, place files into: shared/badges/"
echo "Recommended filenames: badge-appstore.svg, badge-googleplay.svg, badge-android-tv.svg, badge-apple-tv.svg"

echo
echo "If you have direct URLs to badge images you want to download, set env var BADGE_URLS with space-separated URLs and run this script again to automatically download them. Example:"
echo "  BADGE_URLS='https://example.com/appstore.svg https://example.com/googleplay.svg' ./scripts/fetch-official-badges.sh"

if [ -n "$BADGE_URLS" ]; then
  mkdir -p shared/badges
  for url in $BADGE_URLS; do
    echo "Downloading $url ..."
    fname=$(basename "$url")
    curl -L "$url" -o "shared/badges/$fname"
  done
  echo "Downloaded badges to shared/badges/"
fi

echo "Done."
