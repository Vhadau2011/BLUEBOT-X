#!/bin/bash

echo "Starting BLUEBOT-X..."
echo "Developer: mudau_t"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    pnpm install
fi

# Start the bot
node index.js
