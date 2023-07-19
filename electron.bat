cd htdocs

call electron-packager . ClipGraph --app-version=4.2.6 --electron-version=2.0.0 --platform=win32 --arch=x64 --app-copyright="Copyright (C) SatisKia" --icon=./favicon.ico --overwrite
@echo on

cd ..

del /Q htdocs\ClipGraph-win32-x64\resources\app\icon.iconset\*.*
rd htdocs\ClipGraph-win32-x64\resources\app\icon.iconset

del htdocs\ClipGraph-win32-x64\resources\app\All.debug.js
del htdocs\ClipGraph-win32-x64\resources\app\clip.debug.js
del htdocs\ClipGraph-win32-x64\resources\app\guide.html
del htdocs\ClipGraph-win32-x64\resources\app\guide_e.html
del htdocs\ClipGraph-win32-x64\resources\app\icon.icns
del htdocs\ClipGraph-win32-x64\resources\app\Main.debug.js
del htdocs\ClipGraph-win32-x64\resources\app\guide_*.png

copy History.txt htdocs\ClipGraph-win32-x64\
copy ReadMe.txt htdocs\ClipGraph-win32-x64\

pause
