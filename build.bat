@echo off

rem set SKCOMMONPATH=C:\git\SatisKia\common
rem set CLIPPATH=C:\git\SatisKia\clip
set CPP=gcc -E -P -x c -I. -I%SKCOMMONPATH% -I..\..\ClipCalc\src -I%CLIPPATH%\core\extras
rem set AJAXMINPATH=C:\Microsoft Ajax Minifier

md tmp

cd src
%CPP% -I%CLIPPATH%\core -DDEBUG Main.js > ..\htdocs\All.debug.js
%CPP% -DUSE_CLIP_LIB    -DDEBUG Main.js > ..\htdocs\Main.debug.js
%CPP% -DUSE_CLIP_LIB            Main.js > ..\tmp\Main.js
cd ..

call "%AJAXMINPATH%\AjaxMinCommandPromptVars"
cd htdocs
del Main.js
AjaxMin -enc:in UTF-8 ..\tmp\Main.js -out Main.js
cd ..

copy %CLIPPATH%\core\clip.debug.js htdocs
copy %CLIPPATH%\core\clip.js       htdocs

call cef
