# ClipGraph

Function graph display tool. You can execute a program written in the CLIP language and display a graph.

## How to build

Set the environment variables "SKCOMMONPATH", "CLIPPATH", and "AJAXMINPATH" in advance.

The following projects are required separately for building.

https://github.com/SatisKia/common
https://github.com/SatisKia/clip

Set the local project folder path to the environment variables "SKCOMMONPATH" and "CLIPPATH".

Additionally, the following tools are required separately for building.

### MinGW

Used as a UTF-8 compatible C preprocessor.

### Microsoft Ajax Minifier

A tool for compressing and obfuscating JavaScript code.  Set the path of the folder where AjaxMin.exe is stored in the environment variable "AJAXMINPATH".
