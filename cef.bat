rem set CLIPPATH=C:\git\SatisKia\clip
if "%CLIPPATH%"=="" goto error
set CLIPEXTFUNCPATH=%CLIPPATH%\extfunc

copy %CLIPEXTFUNCPATH%\pi.cef    htdocs
copy %CLIPEXTFUNCPATH%\e.cef     htdocs
copy %CLIPEXTFUNCPATH%\cbrt.cef  htdocs
copy %CLIPEXTFUNCPATH%\log2.cef  htdocs
copy %CLIPEXTFUNCPATH%\logn.cef  htdocs
copy %CLIPEXTFUNCPATH%\log1p.cef htdocs
copy %CLIPEXTFUNCPATH%\expm1.cef htdocs
copy %CLIPEXTFUNCPATH%\trunc.cef htdocs

goto end

:error
echo 環境変数"CLIPPATH"が設定されていません

:end
pause
