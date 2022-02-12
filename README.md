
![alt Triangulate Logo](https://triangulate-game.netlify.app/img/word-logo_1080.fa33f7ae.png)
# Triangulate - Promotional Website
This is the website used to promote the Triangulate app. It's written in Vue 3 and hosted via Netlify. Note that this has only been built in a WSL2 environment so results may vary with different environments.


## Prerequisites
  - Node
  - yarn

## Setup
1. Install dependencies with `yarn install`
2. Run the site locally with `yarn start`. Note that this currently doesn't hot reload the webpage but does for the functions. To hot reload ui, run `yarn start:ui`

## Useful Commands
All commands must be prefixed with `yarn` e.g `yarn install`

|Command|Description|
|-------|-----------|
| install | Installs all required dependencies |
| lint | Runs linting checks against all files |
| test | Runs jest tests against files |
| test:watch | Watches for file changes and runs tests against them |
| build | Builds site for static hosting |
| deploy | Deploys the site to production |
| dev:build | Local instance of the static site and lambda functions.  |
| dev:invoke-contact | Send a request to the local contact function |
| dev:deploy-branch | Deploys local changes to isolated subdomain |

## Known issues
Hot reloading of the webpage doesn't work but does with the functions when running `dev:build` and `start`. 