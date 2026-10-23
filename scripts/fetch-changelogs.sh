#!/usr/bin/env bash
# Pull each product's changelog into the guide as its "What's new" page (run before building).
# A failed download keeps the copy already in the repository.
set -euo pipefail
cd "$(dirname "$0")/.."
fetch() {
  local url="$1" out="$2" product="$3" tmp
  tmp="$(mktemp)"
  if curl -fsSL "$url" -o "$tmp"; then
    {
      printf -- '---\ndescription: What changed in each version of %s.\n---\n\n' "$product"
      sed '1s/^# Changelog$/# What'"'"'s new/' "$tmp"
      printf '\n---\n\nDownloads for every version are on the [releases page](https://github.com/ZomBeatz/%s/releases).\n' "$4"
    } > "$out"
  fi
  rm -f "$tmp"
}
fetch https://raw.githubusercontent.com/ZomBeatz/Zomello/main/CHANGELOG.md site/zomello/whats-new.md Zomello Zomello
