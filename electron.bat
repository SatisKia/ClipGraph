md build
md build\tmp
copy htdocs\*.*                build\tmp
copy electron\api.js           build\tmp
copy electron\index.js         build\tmp
copy electron\package_win.json build\tmp\package.json

cd build
set NODE_TLS_REJECT_UNAUTHORIZED=0
call electron-packager ./tmp ClipGraph --app-version=4.2.6 --electron-version=2.0.0 --platform=win32 --arch=x64 --app-copyright="Copyright (C) SatisKia" --icon=../htdocs/favicon.ico --overwrite
@echo on
cd ..

del build\ClipGraph-win32-x64\resources\app\All.debug.js
del build\ClipGraph-win32-x64\resources\app\clip.debug.js
del build\ClipGraph-win32-x64\resources\app\guide.html
del build\ClipGraph-win32-x64\resources\app\guide_e.html
del build\ClipGraph-win32-x64\resources\app\Main.debug.js
del build\ClipGraph-win32-x64\resources\app\guide_*.png

copy History.txt build\ClipGraph-win32-x64\
copy ReadMe.txt build\ClipGraph-win32-x64\

pause
