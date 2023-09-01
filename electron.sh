#!/bin/bash

mkdir build
mkdir build/tmp
cp htdocs/*.*                build/tmp
cp electron/api.js           build/tmp
cp electron/index.js         build/tmp
cp electron/package_osx.json build/tmp/package.json

cd icns
iconutil -c icns icon.iconset
cd ..

cd build
electron-packager ./tmp ClipGraph --app-version=4.2.6 --electron-version=2.0.0 --platform=darwin --arch=x64 --app-copyright="Copyright (C) SatisKia" --icon=../icns/icon.icns --overwrite
cd ..

rm build/ClipGraph-darwin-x64/ClipGraph.app/Contents/Resources/app/All.debug.js
rm build/ClipGraph-darwin-x64/ClipGraph.app/Contents/Resources/app/clip.debug.js
rm build/ClipGraph-darwin-x64/ClipGraph.app/Contents/Resources/app/guide.html
rm build/ClipGraph-darwin-x64/ClipGraph.app/Contents/Resources/app/guide_e.html
rm build/ClipGraph-darwin-x64/ClipGraph.app/Contents/Resources/app/Main.debug.js
rm build/ClipGraph-darwin-x64/ClipGraph.app/Contents/Resources/app/guide_*.png
