#!/bin/zsh

set -u

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PORT="${1:-1313}"
DEST_DIR="${PREVIEW_DEST:-/tmp/jinyi-home-build-${PORT}}"
LOG_FILE="${PREVIEW_LOG:-/tmp/jinyi-home-preview.log}"
HUGO_BIN="${HUGO_BIN:-$(command -v hugo || true)}"

if [[ -z "${HUGO_BIN}" ]]; then
  echo "Could not find Hugo on PATH. Set HUGO_BIN or install Hugo first."
  exit 1
fi

echo "Building site into ${DEST_DIR} ..."

rm -rf "${DEST_DIR}"
mkdir -p "${DEST_DIR}"

rm -f "${LOG_FILE}"

"${HUGO_BIN}" --gc --minify --destination "${DEST_DIR}" >"${LOG_FILE}" 2>&1 &
HUGO_PID=$!
BUILD_STATUS=0
INDEX_STABLE=0
LAST_SIZE=""

for _ in {1..45}; do
  if [[ -f "${DEST_DIR}/index.html" ]]; then
    CURRENT_SIZE="$(stat -f%z "${DEST_DIR}/index.html" 2>/dev/null || echo 0)"
    if [[ "${CURRENT_SIZE}" != "0" && "${CURRENT_SIZE}" == "${LAST_SIZE}" ]]; then
      INDEX_STABLE=$((INDEX_STABLE + 1))
    else
      INDEX_STABLE=0
      LAST_SIZE="${CURRENT_SIZE}"
    fi
  fi

  if ! kill -0 "${HUGO_PID}" 2>/dev/null; then
    wait "${HUGO_PID}" || BUILD_STATUS=$?
    break
  fi

  if [[ -f "${DEST_DIR}/index.html" && "${INDEX_STABLE}" -ge 2 ]]; then
    kill "${HUGO_PID}" 2>/dev/null || true
    sleep 1
    kill -0 "${HUGO_PID}" 2>/dev/null && kill -9 "${HUGO_PID}" 2>/dev/null || true
    wait "${HUGO_PID}" 2>/dev/null || BUILD_STATUS=$?
    break
  fi

  sleep 1
done

if kill -0 "${HUGO_PID}" 2>/dev/null; then
  kill "${HUGO_PID}" 2>/dev/null || true
  sleep 1
  kill -0 "${HUGO_PID}" 2>/dev/null && kill -9 "${HUGO_PID}" 2>/dev/null || true
  wait "${HUGO_PID}" 2>/dev/null || BUILD_STATUS=$?
fi

if [[ ! -f "${DEST_DIR}/index.html" ]]; then
  echo "Build failed and no preview output was generated."
  echo
  tail -n 40 "${LOG_FILE}" 2>/dev/null || true
  exit "${BUILD_STATUS}"
fi

if [[ "${BUILD_STATUS}" -ne 0 ]]; then
  echo "Hugo exited with status ${BUILD_STATUS}, but preview files were generated."
  echo "Continuing with static preview server."
  echo
  tail -n 20 "${LOG_FILE}" 2>/dev/null || true
  echo
fi

echo "Preview ready at http://127.0.0.1:${PORT}"
echo "If your browser uses a proxy, bypass proxy for 127.0.0.1 / localhost first."
echo
echo "Press Ctrl+C to stop."

cd "${ROOT_DIR}" || exit 1
exec python3 -m http.server "${PORT}" -d "${DEST_DIR}" --bind 127.0.0.1
