rem set CLIPPATH=C:\git\SatisKia\clip
set CLIPEXTFUNCPATH=%CLIPPATH%\extfunc

copy %CLIPEXTFUNCPATH%\pi.cef    htdocs
copy %CLIPEXTFUNCPATH%\e.cef     htdocs
copy %CLIPEXTFUNCPATH%\cbrt.cef  htdocs
copy %CLIPEXTFUNCPATH%\log2.cef  htdocs
copy %CLIPEXTFUNCPATH%\logn.cef  htdocs
copy %CLIPEXTFUNCPATH%\log1p.cef htdocs
copy %CLIPEXTFUNCPATH%\expm1.cef htdocs
copy %CLIPEXTFUNCPATH%\trunc.cef htdocs

pause
