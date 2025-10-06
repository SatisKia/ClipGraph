md build
md build\tmp
copy htdocs\*.*            build\tmp
copy nwjs\api.js           build\tmp
copy nwjs\package_win.json build\tmp\package.json

set NODE_TLS_REJECT_UNAUTHORIZED=0

cd build\tmp
call npm install --production
@echo on
cd ..
copy ..\nwjs\app.json tmp\package.json
call nwbuild --version=0.79.1 --platform=win --arch=x64 --glob=false tmp
@echo on
cd ..

del build\out\package.nw\All.debug.js
del build\out\package.nw\clip.debug.js
del build\out\package.nw\guide.html
del build\out\package.nw\guide_e.html
del build\out\package.nw\Main.debug.js
del build\out\package.nw\guide_*.png

pause
