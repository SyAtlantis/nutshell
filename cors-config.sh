#!/bin/bash

ALLOW_ORIGINS='"http://localhost:3000", "https://webui.ipfs.io"'

# stop executing if anything fails
set -e

ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[$ALLOW_ORIGINS]"
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST"]'

echo "NUTSHELL API CORS headers configured for $ALLOW_ORIGINS"
echo "Please restart your NUTSHELL daemon"
