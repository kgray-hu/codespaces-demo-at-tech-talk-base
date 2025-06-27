#!/bin/bash

echo "--- Running custom setup.sh script (from postCreateCommand) ---"

# Example: Create a dummy directory to show the script ran
mkdir -p /tmp/custom_setup_artifacts

# Example: Write a message to a file inside the dummy directory
echo "Custom setup script executed at $(date)" > /tmp/custom_setup_artifacts/log.txt

echo "--- Finished custom setup.sh script ---"
