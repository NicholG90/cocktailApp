#!/bin/bash
set -e

echo "Deploying application ..."

export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;

# Pull the latest changes from GitHub
cd ..
git pull

# Move into the client directory and build the React app
npm install
npm run build

# Move back to the root directory and start the Docker containers
cd ..
docker compose up -d

echo "🚀 Application deployed!"
