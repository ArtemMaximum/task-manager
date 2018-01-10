#!/bin/bash

SOURCE="$(pwd)/static/images/lestad-winter.jpg"
ROOT="$(pwd)/dist/"
TARGET="${ROOT}images"

identify "$SOURCE"

mkdir -p "$TARGET"

for SIZE in 16 32 36 48 72 96 128 144 192 256 384 512
do
  echo "making icon$SIZE.png"
  convert $SOURCE -resize "${SIZE}x" "$TARGET/icon$SIZE.png"
done

echo "making favicon.ico"
convert "$TARGET/icon16.png" "$TARGET/icon32.png" "$TARGET/icon48.png" "$TARGET/icon72.png" "$TARGET/icon128.png" "$TARGET/icon192.png" "$TARGET/icon256.png" "${ROOT}/favicon.ico"
