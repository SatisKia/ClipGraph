#!/bin/bash

mkdir build
mkdir build/tmp
cp htdocs/*.*            build/tmp
cp nwjs/api.js           build/tmp
cp nwjs/package_osx.json build/tmp/package.json

cd icns
iconutil -c icns icon.iconset
cd ..

cd build/tmp
npm install --production
cd ..
cp ../nwjs/app.json tmp/package.json
nwbuild --version=0.79.1 --platform=osx --arch=x64 --glob=false tmp
cd ..

rm build/out/ClipGraph.app/Contents/Resources/app.nw/All.debug.js
rm build/out/ClipGraph.app/Contents/Resources/app.nw/clip.debug.js
rm build/out/ClipGraph.app/Contents/Resources/app.nw/guide.html
rm build/out/ClipGraph.app/Contents/Resources/app.nw/guide_e.html
rm build/out/ClipGraph.app/Contents/Resources/app.nw/Main.debug.js
rm build/out/ClipGraph.app/Contents/Resources/app.nw/guide_*.png
