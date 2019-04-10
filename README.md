# Poddy Chrome Extension

This is a podcast aggregator for Chrome.

## How to use/develop
- clone this repository
- run `yarn install`
- run `yarn run watch`
- goto: `chrome://extensions` in the browser and enable 'developer mode'
- press `Load unpacked` and target the folder `dist`

The project is automatically being watched, any changes to the files will recompile the project.

**NOTE**: changes to the contentPage/backgroundPage requires you to reload the extension in `chrome://extensions`


## Build/package for production

- run `yarn run build:production`
- upload `extension-build.zip` to the chrome webstore.
- (optional) you can also manually zip your extension, the production build will output to folder `dist`

This will run a production build and will automatically zip it as a extension package in the root folder `./` named: `extension-build.zip`

**NOTE**: Do not forget to update the version number inside `manifest.json`

## src folder
This folder contains the angular source code.

## Chrome folder
This folder contains the contentPage/backgroundPage script for the google chrome extension
