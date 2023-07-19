#!/bin/bash

cd htdocs

iconutil -c icns icon.iconset
electron-packager . ClipGraph --app-version=4.2.6 --electron-version=2.0.0 --platform=darwin --arch=x64 --app-copyright="Copyright (C) SatisKia" --icon=./icon.icns --overwrite

cd ..

rm -r htdocs/ClipGraph-darwin-x64/ClipGraph.app/Contents/Resources/app/icon.iconset

rm htdocs/ClipGraph-darwin-x64/ClipGraph.app/Contents/Resources/app/All.debug.js
rm htdocs/ClipGraph-darwin-x64/ClipGraph.app/Contents/Resources/app/clip.debug.js
rm htdocs/ClipGraph-darwin-x64/ClipGraph.app/Contents/Resources/app/guide.html
rm htdocs/ClipGraph-darwin-x64/ClipGraph.app/Contents/Resources/app/guide_e.html
rm htdocs/ClipGraph-darwin-x64/ClipGraph.app/Contents/Resources/app/icon.icns
rm htdocs/ClipGraph-darwin-x64/ClipGraph.app/Contents/Resources/app/Main.debug.js
rm htdocs/ClipGraph-darwin-x64/ClipGraph.app/Contents/Resources/app/guide_*.png
