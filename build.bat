@echo off

set CPP=C:\MinGW\bin\gcc -E -P -x c
set CALC_PATH=..\..\ClipCalc
set CLIP_PATH=C:\HTML5\clip

md tmp

cd src
%CPP% -I. -I%CALC_PATH%\src -I%CLIP_PATH%\core\extras -I%CLIP_PATH%\core -DDEBUG Main.js > ..\htdocs\All.debug.js
%CPP% -I. -I%CALC_PATH%\src -I%CLIP_PATH%\core\extras -DUSE_CLIP_LIB     -DDEBUG Main.js > ..\htdocs\Main.debug.js
%CPP% -I. -I%CALC_PATH%\src -I%CLIP_PATH%\core\extras -DUSE_CLIP_LIB             Main.js > ..\tmp\Main.js
cd ..

call "C:\HTML5\Microsoft Ajax Minifier\AjaxMinCommandPromptVars"
cd htdocs
del Main.js
AjaxMin -enc:in UTF-8 ..\tmp\Main.js -out Main.js
cd ..

copy %CLIP_PATH%\core\clip.debug.js htdocs
copy %CLIP_PATH%\core\clip.js       htdocs

call cef
