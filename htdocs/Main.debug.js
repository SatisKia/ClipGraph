var extFuncData = new Array();
var extFuncFile2 = new Array();
var extFuncData2 = new Array();
var COLOR_WIN = [
 0x000000, 0x000080, 0x008000, 0x008080, 0x800000, 0x800080, 0x808000, 0x808080,
 0xC0DCC0, 0xF0CAA6,
                     0xAA3F2A, 0xFF3F2A, 0x005F2A, 0x555F2A, 0xAA5F2A, 0xFF5F2A,
 0x007F2A, 0x557F2A, 0xAA7F2A, 0xFF7F2A, 0x009F2A, 0x559F2A, 0xAA9F2A, 0xFF9F2A,
 0x00BF2A, 0x55BF2A, 0xAABF2A, 0xFFBF2A, 0x00DF2A, 0x55DF2A, 0xAADF2A, 0xFFDF2A,
 0x00FF2A, 0x55FF2A, 0xAAFF2A, 0xFFFF2A,

 0x000055, 0x550055, 0xAA0055, 0xFF0055, 0x001F55, 0x551F55, 0xAA1F55, 0xFF1F55,
 0x003F55, 0x553F55, 0xAA3F55, 0xFF3F55, 0x005F55, 0x555F55, 0xAA5F55, 0xFF5F55,
 0x007F55, 0x557F55, 0xAA7F55, 0xFF7F55, 0x009F55, 0x559F55, 0xAA9F55, 0xFF9F55,
 0x00BF55, 0x55BF55, 0xAABF55, 0xFFBF55, 0x00DF55, 0x55DF55, 0xAADF55, 0xFFDF55,
 0x00FF55, 0x55FF55, 0xAAFF55, 0xFFFF55,

 0x00007F, 0x55007F, 0xAA007F, 0xFF007F, 0x001F7F, 0x551F7F, 0xAA1F7F, 0xFF1F7F,
 0x003F7F, 0x553F7F, 0xAA3F7F, 0xFF3F7F, 0x005F7F, 0x555F7F, 0xAA5F7F, 0xFF5F7F,
 0x007F7F, 0x557F7F, 0xAA7F7F, 0xFF7F7F, 0x009F7F, 0x559F7F, 0xAA9F7F, 0xFF9F7F,
 0x00BF7F, 0x55BF7F, 0xAABF7F, 0xFFBF7F, 0x00DF7F, 0x55DF7F, 0xAADF7F, 0xFFDF7F,
 0x00FF7F, 0x55FF7F, 0xAAFF7F, 0xFFFF7F,

 0x0000AA, 0x5500AA, 0xAA00AA, 0xFF00AA, 0x001FAA, 0x551FAA, 0xAA1FAA, 0xFF1FAA,
 0x003FAA, 0x553FAA, 0xAA3FAA, 0xFF3FAA, 0x005FAA, 0x555FAA, 0xAA5FAA, 0xFF5FAA,
 0x007FAA, 0x557FAA, 0xAA7FAA, 0xFF7FAA, 0x009FAA, 0x559FAA, 0xAA9FAA, 0xFF9FAA,
 0x00BFAA, 0x55BFAA, 0xAABFAA, 0xFFBFAA, 0x00DFAA, 0x55DFAA, 0xAADFAA, 0xFFDFAA,
 0x00FFAA, 0x55FFAA, 0xAAFFAA, 0xFFFFAA,

 0x0000D4, 0x5500D4, 0xAA00D4, 0xFF00D4, 0x001FD4, 0x551FD4, 0xAA1FD4, 0xFF1FD4,
 0x003FD4, 0x553FD4, 0xAA3FD4, 0xFF3FD4, 0x005FD4, 0x555FD4, 0xAA5FD4, 0xFF5FD4,
 0x007FD4, 0x557FD4, 0xAA7FD4, 0xFF7FD4, 0x009FD4, 0x559FD4, 0xAA9FD4, 0xFF9FD4,
 0x00BFD4, 0x55BFD4, 0xAABFD4, 0xFFBFD4, 0x00DFD4, 0x55DFD4, 0xAADFD4, 0xFFDFD4,
 0x00FFD4, 0x55FFD4, 0xAAFFD4, 0xFFFFD4,

           0x5500FF, 0xAA00FF, 0x001FFF, 0x551FFF, 0xAA1FFF, 0xFF1FFF,
 0x003FFF, 0x553FFF, 0xAA3FFF, 0xFF3FFF, 0x005FFF, 0x555FFF, 0xAA5FFF, 0xFF5FFF,
 0x007FFF, 0x557FFF, 0xAA7FFF, 0xFF7FFF, 0x009FFF, 0x559FFF, 0xAA9FFF, 0xFF9FFF,
 0x00BFFF, 0x55BFFF, 0xAABFFF, 0xFFBFFF, 0x00DFFF, 0x55DFFF, 0xAADFFF, 0xFFDFFF,
           0x55FFFF, 0xAAFFFF,

 0xFFCCCC, 0xFFCCFF, 0xFFFF33, 0xFFFF66, 0xFFFF99, 0xFFFFCC,

 0x007F00, 0x557F00, 0xAA7F00, 0xFF7F00, 0x009F00, 0x559F00, 0xAA9F00, 0xFF9F00,
 0x00BF00, 0x55BF00, 0xAABF00, 0xFFBF00, 0x00DF00, 0x55DF00, 0xAADF00, 0xFFDF00,
           0x55FF00, 0xAAFF00,

 0x00002A, 0x55002A, 0xAA002A, 0xFF002A, 0x001F2A, 0x551F2A, 0xAA1F2A, 0xFF1F2A,
 0x003F2A, 0x553F2A,

                                                             0xF0FBFF, 0xA4A0A0,
 0xC0C0C0, 0x0000FF, 0x00FF00, 0x00FFFF, 0xFF0000, 0xFF00FF, 0xFFFF00, 0xFFFFFF

];
function regGWorldDefCharInfo( i ){
 newGWorldCharInfo( i );
 regGWorldCharInfo( i, _CHAR( '0' ), 5, 7, 1, 4, 7, "011010011001100110011001011" );
 regGWorldCharInfo( i, _CHAR( '1' ), 4, 7, 1, 2, 7, "01110101010101" );
 regGWorldCharInfo( i, _CHAR( '2' ), 5, 7, 1, 4, 7, "0110100100010010010010001111" );
 regGWorldCharInfo( i, _CHAR( '3' ), 5, 7, 1, 4, 7, "011010010001001000011001011" );
 regGWorldCharInfo( i, _CHAR( '4' ), 5, 7, 1, 4, 7, "001001101010101011110010001" );
 regGWorldCharInfo( i, _CHAR( '5' ), 5, 7, 1, 4, 7, "111110001110100100011001011" );
 regGWorldCharInfo( i, _CHAR( '6' ), 5, 7, 1, 4, 7, "011010011000111010011001011" );
 regGWorldCharInfo( i, _CHAR( '7' ), 5, 7, 1, 4, 7, "11110001000100100010010001" );
 regGWorldCharInfo( i, _CHAR( '8' ), 5, 7, 1, 4, 7, "011010011001011010011001011" );
 regGWorldCharInfo( i, _CHAR( '9' ), 5, 7, 1, 4, 7, "011010011001011100011001011" );
 regGWorldCharInfo( i, _CHAR( 'A' ), 5, 7, 1, 4, 7, "0110100110011111100110011001" );
 regGWorldCharInfo( i, _CHAR( 'B' ), 5, 7, 1, 4, 7, "111010011001111010011001111" );
 regGWorldCharInfo( i, _CHAR( 'C' ), 5, 7, 1, 4, 7, "011010011000100010001001011" );
 regGWorldCharInfo( i, _CHAR( 'D' ), 5, 7, 1, 4, 7, "111010011001100110011001111" );
 regGWorldCharInfo( i, _CHAR( 'E' ), 5, 7, 1, 4, 7, "1111100010001111100010001111" );
 regGWorldCharInfo( i, _CHAR( 'F' ), 5, 7, 1, 4, 7, "1111100010001111100010001" );
 regGWorldCharInfo( i, _CHAR( 'G' ), 5, 7, 1, 4, 7, "011010011000101110011001011" );
 regGWorldCharInfo( i, _CHAR( 'H' ), 5, 7, 1, 4, 7, "1001100110011111100110011001" );
 regGWorldCharInfo( i, _CHAR( 'I' ), 4, 7, 1, 3, 7, "111010010010010010111" );
 regGWorldCharInfo( i, _CHAR( 'J' ), 5, 7, 1, 4, 7, "000100010001000100011001011" );
 regGWorldCharInfo( i, _CHAR( 'K' ), 5, 7, 1, 4, 7, "1001100110101100101010011001" );
 regGWorldCharInfo( i, _CHAR( 'L' ), 5, 7, 1, 4, 7, "1000100010001000100010001111" );
 regGWorldCharInfo( i, _CHAR( 'M' ), 6, 7, 1, 5, 7, "10001100011101111011101011010110101" );
 regGWorldCharInfo( i, _CHAR( 'N' ), 5, 7, 1, 4, 7, "1001110111011011101110011001" );
 regGWorldCharInfo( i, _CHAR( 'O' ), 5, 7, 1, 4, 7, "011010011001100110011001011" );
 regGWorldCharInfo( i, _CHAR( 'P' ), 5, 7, 1, 4, 7, "1110100110011110100010001" );
 regGWorldCharInfo( i, _CHAR( 'Q' ), 5, 7, 1, 4, 7, "0110100110011101101110110111" );
 regGWorldCharInfo( i, _CHAR( 'R' ), 5, 7, 1, 4, 7, "1110100110011110100110011001" );
 regGWorldCharInfo( i, _CHAR( 'S' ), 5, 7, 1, 4, 7, "011010011000011000011001011" );
 regGWorldCharInfo( i, _CHAR( 'T' ), 5, 7, 1, 4, 7, "111100100010001000100010001" );
 regGWorldCharInfo( i, _CHAR( 'U' ), 5, 7, 1, 4, 7, "100110011001100110011001011" );
 regGWorldCharInfo( i, _CHAR( 'V' ), 5, 7, 1, 4, 7, "100110011001010101010010001" );
 regGWorldCharInfo( i, _CHAR( 'W' ), 6, 7, 1, 5, 7, "1010110101101011010101010010100101" );
 regGWorldCharInfo( i, _CHAR( 'X' ), 5, 7, 1, 4, 7, "1001100110010110100110011001" );
 regGWorldCharInfo( i, _CHAR( 'Y' ), 5, 7, 1, 4, 7, "100110011001010100100010001" );
 regGWorldCharInfo( i, _CHAR( 'Z' ), 5, 7, 1, 4, 7, "1111000100100100100010001111" );
 regGWorldCharInfo( i, _CHAR( 'a' ), 5, 7, 1, 4, 5, "01100001011110010111" );
 regGWorldCharInfo( i, _CHAR( 'b' ), 5, 7, 1, 4, 7, "100010001110100110011001111" );
 regGWorldCharInfo( i, _CHAR( 'c' ), 5, 7, 1, 4, 5, "0110100110001001011" );
 regGWorldCharInfo( i, _CHAR( 'd' ), 5, 7, 1, 4, 7, "0001000101111001100110010111" );
 regGWorldCharInfo( i, _CHAR( 'e' ), 5, 7, 1, 4, 5, "01101001111110000111" );
 regGWorldCharInfo( i, _CHAR( 'f' ), 4, 7, 1, 3, 7, "00101011101001001001" );
 regGWorldCharInfo( i, _CHAR( 'g' ), 5, 7, 1, 4, 5, "01111001100101110001111" );
 regGWorldCharInfo( i, _CHAR( 'h' ), 5, 7, 1, 4, 7, "1000100011101001100110011001" );
 regGWorldCharInfo( i, _CHAR( 'i' ), 3, 7, 1, 1, 7, "1011111" );
 regGWorldCharInfo( i, _CHAR( 'j' ), 4, 7, 1, 2, 7, "010001010101011" );
 regGWorldCharInfo( i, _CHAR( 'k' ), 5, 7, 1, 4, 7, "1000100010011010110010101001" );
 regGWorldCharInfo( i, _CHAR( 'l' ), 3, 7, 1, 1, 7, "1111111" );
 regGWorldCharInfo( i, _CHAR( 'm' ), 6, 7, 1, 5, 5, "1101010101101011010110101" );
 regGWorldCharInfo( i, _CHAR( 'n' ), 5, 7, 1, 4, 5, "11101001100110011001" );
 regGWorldCharInfo( i, _CHAR( 'o' ), 5, 7, 1, 4, 5, "0110100110011001011" );
 regGWorldCharInfo( i, _CHAR( 'p' ), 5, 7, 1, 4, 5, "111010011001111010001" );
 regGWorldCharInfo( i, _CHAR( 'q' ), 5, 7, 1, 4, 5, "011110011001011100010001" );
 regGWorldCharInfo( i, _CHAR( 'r' ), 5, 7, 1, 4, 5, "10111100100010001" );
 regGWorldCharInfo( i, _CHAR( 's' ), 5, 7, 1, 4, 5, "0111100001100001111" );
 regGWorldCharInfo( i, _CHAR( 't' ), 4, 7, 1, 3, 6, "010111010010010001" );
 regGWorldCharInfo( i, _CHAR( 'u' ), 5, 7, 1, 4, 5, "10011001100110010111" );
 regGWorldCharInfo( i, _CHAR( 'v' ), 5, 7, 1, 4, 5, "1001100101010101001" );
 regGWorldCharInfo( i, _CHAR( 'w' ), 6, 7, 1, 5, 5, "101011010110101010100101" );
 regGWorldCharInfo( i, _CHAR( 'x' ), 5, 7, 1, 4, 5, "10011001011010011001" );
 regGWorldCharInfo( i, _CHAR( 'y' ), 5, 7, 1, 4, 5, "10011001100101110001111" );
 regGWorldCharInfo( i, _CHAR( 'z' ), 5, 7, 1, 4, 5, "11110001011010001111" );
 regGWorldCharInfo( i, _CHAR( ' ' ), 5, 7, 1, 4, 7, "" );
 regGWorldCharInfo( i, _CHAR( '!' ), 2, 7, 1, 1, 7, "1111101" );
 regGWorldCharInfo( i, _CHAR( '"' ), 5, 7, 1, 4, 7, "01010101101" );
 regGWorldCharInfo( i, _CHAR( '#' ), 6, 7, 1, 5, 7, "0101011111010100101001010111110101" );
 regGWorldCharInfo( i, _CHAR( '$' ), 6, 7, 1, 5, 7, "001000111110100011100010111110001" );
 regGWorldCharInfo( i, _CHAR( '%' ), 6, 7, 1, 5, 7, "0100110110010100010001010011011001" );
 regGWorldCharInfo( i, _CHAR( '&' ), 6, 7, 1, 5, 7, "01100100100110010101101011001001101" );
 regGWorldCharInfo( i, _CHAR( '\'' ), 3, 7, 1, 2, 7, "01011" );
 regGWorldCharInfo( i, _CHAR( '(' ), 4, 7, 1, 3, 7, "001010100100100010001" );
 regGWorldCharInfo( i, _CHAR( ')' ), 4, 7, 1, 3, 7, "1000100010010010101" );
 regGWorldCharInfo( i, _CHAR( '*' ), 6, 7, 1, 5, 6, "00100101010111010101001" );
 regGWorldCharInfo( i, _CHAR( '+' ), 4, 7, 1, 3, 6, "01001011101001" );
 regGWorldCharInfo( i, _CHAR( ',' ), 3, 7, 1, 2, 2, "01011" );
 regGWorldCharInfo( i, _CHAR( '-' ), 4, 7, 1, 3, 4, "111" );
 regGWorldCharInfo( i, _CHAR( '.' ), 2, 7, 1, 1, 1, "1" );
 regGWorldCharInfo( i, _CHAR( '/' ), 6, 7, 1, 5, 7, "0000100010000100010001000010001" );
 regGWorldCharInfo( i, _CHAR( ':' ), 2, 7, 1, 1, 5, "1001" );
 regGWorldCharInfo( i, _CHAR( ';' ), 3, 7, 1, 2, 5, "010000011" );
 regGWorldCharInfo( i, _CHAR( '<' ), 5, 7, 1, 4, 7, "0001001001001000010000100001" );
 regGWorldCharInfo( i, _CHAR( '=' ), 4, 7, 1, 3, 5, "111000000111" );
 regGWorldCharInfo( i, _CHAR( '>' ), 5, 7, 1, 4, 7, "1000010000100001001001001" );
 regGWorldCharInfo( i, _CHAR( '?' ), 5, 7, 1, 4, 7, "01101001001001000100000001" );
 regGWorldCharInfo( i, _CHAR( '@' ), 6, 7, 1, 5, 7, "0111010001111011010111110100000111" );
 regGWorldCharInfo( i, _CHAR( '[' ), 4, 7, 1, 3, 7, "111100100100100100111" );
 regGWorldCharInfo( i, _CHAR( '\\' ), 6, 7, 1, 5, 7, "100010101011111001001111100100001" );
 regGWorldCharInfo( i, _CHAR( ']' ), 4, 7, 1, 3, 7, "111001001001001001111" );
 regGWorldCharInfo( i, _CHAR( '^' ), 4, 7, 1, 3, 7, "010101" );
 regGWorldCharInfo( i, _CHAR( '_' ), 5, 7, 1, 4, 1, "1111" );
 regGWorldCharInfo( i, _CHAR( '`' ), 3, 7, 1, 2, 7, "101001" );
 regGWorldCharInfo( i, _CHAR( '{' ), 4, 7, 1, 3, 7, "011010010100010010011" );
 regGWorldCharInfo( i, _CHAR( '|' ), 2, 7, 1, 1, 7, "1111111" );
 regGWorldCharInfo( i, _CHAR( '}' ), 4, 7, 1, 3, 7, "11001001000101001011" );
 regGWorldCharInfo( i, _CHAR( '~' ), 5, 7, 1, 4, 7, "0101101" );
}
var resetCalculator = false;
var started = false;
var _console_break = "<br>";
function consoleBreak(){
 return _console_break;
}
function _Console( id ){
 if( window.onConsoleUpdate == undefined ) window.onConsoleUpdate = function( id ){};
 this._id = id;
 this._div = document.getElementById( this._id );
 this._html = "";
 this._blankLine = "";
 this._maxLen = 0;
 this._color = "";
 this._lastColor = "";
 this._bold = false;
 this._italic = false;
 this._lock = false;
 this._needUpdate = false;
}
_Console.prototype = {
 setMaxBlankLine : function( num ){
  this._blankLine = "";
  for( var i = 0; i <= num; i++ ){
   this._blankLine += _console_break;
  }
 },
 setMaxLen : function( len ){
  this._maxLen = len;
 },
 setColor : function( color ){
  this._color = (color == undefined) ? "" : color;
 },
 setBold : function( f ){
  this._bold = f;
 },
 setItalic : function( f ){
  this._italic = f;
 },
 lock : function(){
  this._lock = true;
  this._needUpdate = false;
 },
 unlock : function(){
  this._lock = false;
  if( this._needUpdate ){
   this._update();
   this._needUpdate = false;
  }
 },
 _update : function(){
  if( this._lock ){
   this._needUpdate = true;
   return;
  }
  if( this._maxLen > 0 ){
   while( this._html.length > this._maxLen ){
    var index = this._html.indexOf( _console_break );
    if( index < 0 ){
     break;
    }
    this._html = this._html.slice( index + _console_break.length );
   }
  }
  this._div.innerHTML = this._html;
  if( this._html.length > 0 ){
   onConsoleUpdate( this._id );
  }
 },
 _add : function( str ){
  if( str.length > 0 ){
   if( this._bold ){
    if( this._html.slice( -4 ) == "</b>" ){
     this._html = this._html.substring( 0, this._html.length - 4 );
    } else {
     this._html += "<b>";
    }
   }
   if( this._italic ){
    if( this._html.slice( -4 ) == "</i>" ){
     this._html = this._html.substring( 0, this._html.length - 4 );
    } else {
     this._html += "<i>";
    }
   }
   if( this._color.length > 0 ){
    if( (this._html.slice( -7 ) == "</span>") && (this._color == this._lastColor) ){
     this._html = this._html.substring( 0, this._html.length - 7 );
    } else {
     this._html += "<span style='color:#" + this._color + "'>";
    }
    this._lastColor = this._color;
   }
   this._html += str;
   if( this._color.length > 0 ){
    this._html += "</span>";
   }
   if( this._italic ){
    this._html += "</i>";
   }
   if( this._bold ){
    this._html += "</b>";
   }
  }
 },
 clear : function(){
  this._html = "";
  this._update();
 },
 newLine : function(){
  if( this._html.length >= _console_break.length ){
   if( this._html.slice( -_console_break.length ) != _console_break ){
    this._html += _console_break;
    this._update();
   }
  }
 },
 print : function( str ){
  if( str != undefined ){
   this._add( str );
   this._update();
  }
 },
 println : function( str ){
  var needUpdate = false;
  if( str != undefined ){
   this._add( str );
   needUpdate = true;
  }
  if( (this._blankLine.length > 0) && (this._html.length >= this._blankLine.length) ){
   if( this._html.slice( -this._blankLine.length ) != this._blankLine ){
    this._html += _console_break;
    needUpdate = true;
   }
  } else {
   this._html += _console_break;
   needUpdate = true;
  }
  if( needUpdate ){
   this._update();
  }
 },
 scrollBottom : function(){
  this._div.scrollTop = this._div.scrollHeight;
 }
};
var con;
function onConsoleUpdate( id ){
 if( started ){
  document.getElementById( "button_ui_log" ).innerHTML = "<b><span style='color:#FF0000'>！</span></b>";
  document.getElementById( "button_ui_log2" ).innerHTML = "<b><span style='color:#FF0000'>！</span></b>";
 }
}
function _Error(){
 if( window.onError == undefined ) window.onError = function( e ){};
 this._message = new String();
 this._name = new String();
 this._description = new String();
 this._number = new String();
 this._file = new String();
 this._line = new String();
 this._column = new String();
 this._stack = new String();
}
_Error.prototype = {
 message : function(){
  return this._message;
 },
 name : function(){
  return this._name;
 },
 description : function(){
  return this._description;
 },
 number : function(){
  return this._number;
 },
 file : function(){
  return this._file;
 },
 line : function(){
  return this._line;
 },
 column : function(){
  return this._column;
 },
 stack : function(){
  return this._stack;
 }
};
function catchError( e ){
 var _e = new _Error();
 _e._message = e.message;
 _e._name = e.name;
 if( e.description ) _e._description = e.description;
 if( e.number ) _e._number = "" + e.number;
 if( e.fileName ) _e._file = e.fileName;
 if( e.lineNumber ) _e._line = "" + e.lineNumber;
 if( e.columnNumber ) _e._column = "" + e.columnNumber;
 if( e.stack ) _e._stack = e.stack;
 onError( _e );
}
function clip_onerror( message, url, line ){
 var e = new _Error();
 e._message = message;
 e._file = url;
 e._line = line;
 onError( e );
 return true;
}
function onError( e ){
 con.newLine();
 con.setColor( "ff0000" );
 con.println( "message: " + e.message() );
 con.println( "name: " + e.name() );
 con.println( "description: " + e.description() );
 con.println( "number: " + e.number() );
 con.println( "file: " + e.file() );
 con.println( "line: " + e.line() );
 con.println( "column: " + e.column() );
 var tmp = new _String( e.stack() );
 tmp.escape().replaceNewLine( consoleBreak() );
 con.println( "stack: " + tmp.str() );
 con.setColor();
}
var _canvas_env;
function _CanvasEnv(){
 this._color_r = 0;
 this._color_g = 0;
 this._color_b = 0;
 this._color_a = 255;
 this._font = "";
 this._stroke_width = 1.0;
}
function setCanvasEnv( env ){
 _canvas_env = env;
}
function _Canvas( id ){
 if( id == undefined ){
  this._canvas = document.createElement( "canvas" );
  this._create = true;
 } else {
  this._canvas = document.getElementById( id );
  this._create = false;
 }
 this._context = this._canvas.getContext( "2d" );
 this._resetContext();
}
_Canvas.prototype = {
 element : function(){
  return this._canvas;
 },
 context : function(){
  return this._context;
 },
 _resetContext : function(){
  this._context.textAlign = "left";
  this._context.textBaseline = "bottom";
  this._setColor();
  this._setFont();
  this._setStrokeWidth();
 },
 setSize : function( width, height ){
  if( this._create ){
   this._canvas.width = width;
   this._canvas.height = height;
  } else {
   this._canvas.setAttribute( "width" , "" + width );
   this._canvas.setAttribute( "height", "" + height );
  }
  this._resetContext();
 },
 left : function(){
  if( this._create ){
   return 0;
  }
  var e = this._canvas;
  var left = 0;
  while( e ){
   left += e.offsetLeft;
   e = e.offsetParent;
  }
  return left;
 },
 top : function(){
  if( this._create ){
   return 0;
  }
  var e = this._canvas;
  var top = 0;
  while( e ){
   top += e.offsetTop;
   e = e.offsetParent;
  }
  return top;
 },
 width : function(){
  return parseInt( this._canvas.width );
 },
 height : function(){
  return parseInt( this._canvas.height );
 },
 _setColor : function(){
  var color;
  if( _canvas_env._color_a == 255 ){
   color = "rgb(" + _canvas_env._color_r + "," + _canvas_env._color_g + "," + _canvas_env._color_b + ")";
  } else {
   color = "rgba(" + _canvas_env._color_r + "," + _canvas_env._color_g + "," + _canvas_env._color_b + "," + (_canvas_env._color_a / 255.0) + ")";
  }
  this._context.fillStyle = color;
  this._context.strokeStyle = color;
 },
 setColor : function( r, g, b, a ){
  if( a == undefined ){
   a = 255;
  }
  if( (r != _canvas_env._color_r) || (g != _canvas_env._color_g) || (b != _canvas_env._color_b) || (a != _canvas_env._color_a) ){
   _canvas_env._color_r = r;
   _canvas_env._color_g = g;
   _canvas_env._color_b = b;
   _canvas_env._color_a = a;
   this._setColor();
  }
 },
 setColorRGB : function( rgb ){
  this.setColor( (rgb & 0xFF0000) >> 16, (rgb & 0x00FF00) >> 8, rgb & 0x0000FF );
 },
 setColorBGR : function( bgr ){
  this.setColor( bgr & 0x0000FF, (bgr & 0x00FF00) >> 8, (bgr & 0xFF0000) >> 16 );
 },
 _setFont : function(){
  if( _canvas_env._font.length > 0 ){
   this._context.font = _canvas_env._font;
  }
 },
 setFont : function( size, family ){
  _canvas_env._font = "" + size + "px " + ((family.indexOf( " " ) >= 0) ? "'" + family + "'" : family);
  this._setFont();
 },
 _setStrokeWidth : function(){
  this._context.lineWidth = _canvas_env._stroke_width;
 },
 setStrokeWidth : function( width ){
  _canvas_env._stroke_width = width;
  this._setStrokeWidth();
 },
 clearClip : function()
 {
  this._context.restore();
  this._resetContext();
 },
 setClip : function( x, y, width, height )
 {
  if( !!this._context.clip )
  {
   this.clearClip();
   this._context.save();
   this._context.beginPath();
   this._context.moveTo( x, y );
   this._context.lineTo( x + width, y );
   this._context.lineTo( x + width, y + height );
   this._context.lineTo( x, y + height );
   this._context.closePath();
   this._context.clip();
  }
 },
 clear : function( x, y, w, h ){
  if( (x == undefined) && (y == undefined) && (w == undefined) && (h == undefined) ){
   this._canvas.width = this._canvas.width;
  } else if( (w == undefined) && (h == undefined) ){
   this._context.clearRect( x, y, 1, 1 );
  } else {
   this._context.clearRect( x, y, w, h );
  }
  this._resetContext();
 },
 put : function( x, y ){
  this._context.fillRect( x, y, 1, 1 );
 },
 fill : function( x, y, w, h ){
  this._context.fillRect( x, y, w, h );
 },
 line : function( x1, y1, x2, y2, scale ){
  this._context.beginPath();
  if( scale == undefined ){
   this._context.moveTo( x1 + 0.5, y1 + 0.5 );
   this._context.lineTo( x2 + 0.5, y2 + 0.5 );
  } else {
   this._context.moveTo( (x1 + 0.5) * scale, (y1 + 0.5) * scale );
   this._context.lineTo( (x2 + 0.5) * scale, (y2 + 0.5) * scale );
  }
  this._context.stroke();
  this._context.closePath();
 },
 rect : function( x, y, w, h, scale ){
  if( scale == undefined ){
   this._context.strokeRect( x + 0.5, y + 0.5, w, h );
  } else {
   this._context.strokeRect( (x + 0.5) * scale, (y + 0.5) * scale, w * scale, h * scale );
  }
 },
 circle : function( cx, cy, r ){
  this._context.beginPath();
  this._context.arc( cx, cy, r, 0.0, Math.PI * 2.0, false );
  this._context.stroke();
 },
 drawString : function( str, x, y ){
  if( !!this._context.fillText ){
   this._context.fillText( str, x, y );
  }
 },
 drawImage : function( image, w, h ){
  if( (w == image.width) && (h == image.height) ){
   this._context.drawImage( image, 0, 0 );
  } else {
   this._context.drawImage( image, 0, 0, image.width, image.height, 0, 0, w, h );
  }
 },
 imageData : function( w, h ){
  return this._context.getImageData( 0, 0, w, h );
 }
};
function _StringUtil(){
 this._fontSize = 0;
 this._fontFamily = "";
 this._text = document.createElement( "span" );
 this._textStyle = "visibility:hidden;position:absolute;left:0;top:0";
 this._text.style.cssText = this._textStyle;
 document.body.appendChild( this._text );
 this._h = "";
 this._e = "";
}
_StringUtil.prototype = {
 setFont : function( size, family ){
  this._fontSize = size;
  this._fontFamily = (family.indexOf( " " ) >= 0) ? "'" + family + "'" : family;
  this._text.style.cssText = this._textStyle + ";font:" + this._fontSize + "px " + this._fontFamily;
 },
 stringWidth : function( str ){
  this._text.innerHTML = "'";
  var tmp = this._text.offsetWidth;
  str = str.replace( new RegExp( "<", "igm" ), "&lt;" );
  str = str.replace( new RegExp( ">", "igm" ), "&gt;" );
  this._text.innerHTML = "'" + str + "'";
  return this._text.offsetWidth - tmp * 2;
 },
 fontHeight : function(){
  return this._fontSize;
 },
 trim : function( str ){
  var ret = "";
  var i;
  var top = 0;
  for( i = 0; i < str.length; i++ ){
   if( (str.charAt( i ) != " ") && (str.charAt( i ) != "　") ){
    break;
   }
   top++;
  }
  if( top < str.length ){
   var end = str.length - 1;
   for( i = end; i >= 0; i-- ){
    if( (str.charAt( i ) != " ") && (str.charAt( i ) != "　") ){
     break;
    }
    end--;
   }
   ret = str.substring( top, end + 1 );
  }
  return ret;
 },
 truncate : function( str, width, truncation ){
  if( this.stringWidth( str ) <= width ){
   return str;
  }
  width -= this.stringWidth( truncation );
  var ret = "";
  for( var i = 0; i < str.length; i++ ){
   ret += str.charAt( i );
   if( this.stringWidth( ret ) > width ){
    if( ret.length > 1 ){
     ret = ret.substring( 0, ret.length - 1 );
     break;
    }
   }
  }
  return ret + truncation;
 },
 setHeadWrap : function( str ){
  this._h = str;
 },
 setEndWrap : function( str ){
  this._e = str;
 },
 wrap : function( str, width ){
  var ret = new Array();
  var chr;
  var j = 0;
  ret[j] = "";
  for( var i = 0; i < str.length; i++ ){
   ret[j] += str.charAt( i );
   if( this.stringWidth( ret[j] ) > width ){
    if( ret[j].length > 1 ){
     ret[j] = ret[j].substring( 0, ret[j].length - 1 );
     i--;
     if( this._h.length > 0 ){
      while( true ){
       if( i + 1 < str.length ){
        chr = str.charAt( i + 1 );
        if( this._h.indexOf( chr ) >= 0 ){
         ret[j] += chr;
         i++;
        } else {
         break;
        }
       } else {
        break;
       }
      }
     }
     if( this._e.length > 0 ){
      while( true ){
       if( ret[j].length > 1 ){
        chr = ret[j].charAt( ret[j].length - 1 );
        if( this._e.indexOf( chr ) >= 0 ){
         ret[j] = ret[j].substring( 0, ret[j].length - 1 );
         i--;
        } else {
         break;
        }
       } else {
        break;
       }
      }
     }
    }
    j++;
    ret[j] = "";
   }
  }
  return ret;
 }
};
var canvas;
var su;
var colorBack = 0;
var colorR = 0;
var colorG = 0;
var colorB = 0;
var colorA = 255;
function canvasClear(){
 canvas.clear();
}
function canvasSetColor( bgrColor ){
 colorR = bgrColor & 0x0000FF;
 colorG = (bgrColor & 0x00FF00) >> 8;
 colorB = (bgrColor & 0xFF0000) >> 16;
 colorA = 255;
 if( bgrColor == colorBack ){
  colorA = colorBackAlpha();
 }
 canvas.setColor( colorR, colorG, colorB, colorA );
}
function canvasPut( x, y ){
 if( colorA != 255 ){
  canvas.clear( x, y );
 }
 canvas.put( x, y );
}
function canvasFill( x, y, w, h ){
 canvas.fill( x, y, w, h );
}
function canvasLine( x1, y1, x2, y2 ){
 if( colorA != 255 ){
  colorA = 255;
  canvas.setColor( colorR, colorG, colorB, colorA );
 }
 canvas.line( x1, y1, x2, y2 );
}
function canvasDrawString( text, x, y ){
 canvas.drawString( text, x, y + 2 );
}
var _input_file_cnt;
var _input_file_num;
function canUseFile(){
 return (window.FileReader && window.FileList && window.File);
}
function _InputFile( id ){
 if( window.onInputFileLoadImage == undefined ) window.onInputFileLoadImage = function( name, image ){};
 if( window.onInputFileLoad == undefined ) window.onInputFileLoad = function( func, data ){};
 if( window.onInputFileLoadEnd == undefined ) window.onInputFileLoadEnd = function( num ){};
 this._input = document.getElementById( id );
 this._input.addEventListener( "change", _onInputFileChange, false );
}
_InputFile.prototype = {
 element : function(){
  return this._input;
 }
};
function _onInputFileChange( e ){
 var files = e.target.files;
 if( files.length == 0 ){
  return;
 }
 if( files[0].type.indexOf( "image/" ) == 0 ){
  var name = files[0].name;
  var reader = new FileReader();
  reader.onload = function(){
   var image = new Image();
   image.onload = function(){
    onInputFileLoadImage( name, image );
   };
   image.src = reader.result;
  };
  reader.readAsDataURL( files[0] );
  return;
 }
 _input_file_cnt = 0;
 _input_file_num = files.length;
 for( var i = 0; i < files.length; i++ ){
  var file = files.item( i );
  var reader = new FileReader();
  reader.onload = (function( f ){
   return function( e ){
    if( f.name.indexOf( ".cef" ) > 0 ){
     var j;
     var data = e.target.result;
     var func = f.name.substring( 0, f.name.indexOf( ".cef" ) );
     var top;
     for( top = 0; top < data.length; top++ ){
      if( !isCharSpace( data, top ) && (data.charAt( top ) != '\t') ){
       break;
      }
     }
     var tmp = data.substring( top, top + 11 );
     if( tmp.toLowerCase() == "#!namespace" ){
      var data2 = new _String( data );
      var data3 = data2.replaceNewLine().str();
      if( data3.indexOf( "\n" ) < 0 ){
       data3 += "\n";
      }
      var nameSpace = new String();
      for( j = top + 11; ; j++ ){
       if( !isCharSpace( data3, j ) && (data3.charAt( j ) != '\t') ){
        break;
       }
      }
      if( j > top + 11 ){
       for ( ; ; j++ ){
        var chr = data3.charAt( j );
        if( isCharSpace( data3, j ) || (chr == '\t') || (chr == '\n') ){
         break;
        }
        nameSpace += chr;
       }
       if( nameSpace.length > 0 ){
        func = nameSpace + ":" + func;
       }
      }
     }
     onInputFileLoad( func, data );
     _input_file_cnt++;
     if( _input_file_cnt >= _input_file_num ){
      onInputFileLoadEnd( _input_file_cnt );
     }
    }
   };
  })( file );
  reader.readAsText( file );
 }
}
var inputFile;
function __ProcError(){
 this._err = 0;
 this._num = 0;
 this._func = new String();
 this._token = new String();
 this._before = null;
 this._next = null;
}
function _ProcError(){
 this._top = null;
 this._end = null;
 this._num = 0;
}
_ProcError.prototype = {
 add : function( err, num, func, token ){
  var cur = this._top;
  while( true ){
   if( cur == null ){
    break;
   }
   if(
    (cur._err == err ) &&
    (cur._num == num ) &&
    (cur._func == func ) &&
    (cur._token == token)
   ){
    return;
   }
   cur = cur._next;
  }
  var tmp = new __ProcError();
  if( this._top == null ){
   this._top = tmp;
   this._end = tmp;
  } else {
   tmp._before = this._end;
   this._end._next = tmp;
   this._end = tmp;
  }
  tmp._err = err;
  tmp._num = num;
  tmp._func = func;
  tmp._token = token;
  this._num++;
 },
 delAll : function(){
  this._top = null;
  this._num = 0;
 },
 get : function( index, err , num , func , token ){
  var tmp = 0;
  var cur = this._top;
  while( true ){
   if( cur == null ){
    return false;
   }
   if( tmp == index ){
    break;
   }
   tmp++;
   cur = cur._next;
  }
  err .set( cur._err );
  num .set( cur._num );
  func .set( cur._func );
  token.set( cur._token );
  return true;
 },
 num : function(){
  return this._num;
 },
 isError : function(){
  var cur = this._top;
  while( cur != null ){
   if( (cur._err & _CLIP_PROC_WARN) == 0 ){
    return true;
   }
   cur = cur._next;
  }
  return false;
 }
};
function getProcErrorDefString( err, token, isCalculator, isEnglish ){
 var error = new String();
 switch( err ){
 case _CLIP_PROC_WARN_ARRAY:
  if( isEnglish ) error = "Array element number is negative.";
  else error = "配列の要素番号が負の値です";
  break;
 case _CLIP_PROC_WARN_DIV:
  if( isEnglish ) error = "Divide by zero.";
  else error = "ゼロで除算しました";
  break;
 case _CLIP_PROC_WARN_UNDERFLOW:
  if( isEnglish ) error = "Underflowed.";
  else error = "アンダーフローしました";
  break;
 case _CLIP_PROC_WARN_OVERFLOW:
  if( isEnglish ) error = "Overflow occurred.";
  else error = "オーバーフローしました";
  break;
 case _CLIP_PROC_WARN_ASIN:
  if( isEnglish ) error = "Argument of \"asin\" is out of the range of -1 to 1.";
  else error = "asinの引数が-1から1の範囲外になりました";
  break;
 case _CLIP_PROC_WARN_ACOS:
  if( isEnglish ) error = "Argument of \"acos\" is out of the range of -1 to 1.";
  else error = "acosの引数が-1から1の範囲外になりました";
  break;
 case _CLIP_PROC_WARN_ACOSH:
  if( isEnglish ) error = "Argument of \"acosh\" now has value less than 1.";
  else error = "acoshの引数が1未満の値になりました";
  break;
 case _CLIP_PROC_WARN_ATANH:
  if( isEnglish ) error = "The argument of \"atanh\" is less than or equal to -1 or 1 or more.";
  else error = "atanhの引数が-1以下または1以上の値になりました";
  break;
 case _CLIP_PROC_WARN_LOG:
  if( isEnglish ) error = "Argument of \"" + (isCalculator ? "ln" : "log") + "\" is 0 or negative value.";
  else error = (isCalculator ? "ln" : "log") + "の引数が0または負の値になりました";
  break;
 case _CLIP_PROC_WARN_LOG10:
  if( isEnglish ) error = "Argument of \"" + (isCalculator ? "log" : "log10") + "\" has become 0 or negative value.";
  else error = (isCalculator ? "log" : "log10") + "の引数が0または負の値になりました";
  break;
 case _CLIP_PROC_WARN_SQRT:
  if( isEnglish ) error = "Argument of \"sqrt\" has a negative value.";
  else error = "sqrtの引数が負の値になりました";
  break;
 case _CLIP_PROC_WARN_FUNCTION:
  if( isEnglish ) error = "Invalid argument for \"" + token + "\".";
  else error = token + "の引数が無効です";
  break;
 case _CLIP_PROC_WARN_RETURN:
  if( isEnglish ) error = "\"return\" can not return a value.";
  else error = "returnで値を返すことができません";
  break;
 case _CLIP_PROC_WARN_DEAD_TOKEN:
  if( isEnglish ) error = "Token is not executed.";
  else error = "実行されないトークンです";
  break;
 case _CLIP_PROC_WARN_SE_RETURN:
  if( isEnglish ) error = "\"$RETURN_A\" can not return a value.";
  else error = "$RETURN_Aで値を返すことができません";
  break;
 case _CLIP_LOOP_ERR_NULL:
  if( isEnglish ) error = "There is no token.";
  else error = "トークンがありません";
  break;
 case _CLIP_LOOP_ERR_COMMAND:
  if( isEnglish ) error = "Command not supported.";
  else error = "コマンドはサポートされていません";
  break;
 case _CLIP_LOOP_ERR_STAT:
  if( isEnglish ) error = "Control structure is not supported.";
  else error = "制御構造はサポートされていません";
  break;
 case _CLIP_PROC_ERR_UNARY:
  if( isEnglish ) error = "\"" + token + "\": Unary operator expression is incorrect.";
  else error = token + ":単項演算子表現が間違っています";
  break;
 case _CLIP_PROC_ERR_OPERATOR:
  if( isEnglish ) error = "\"" + token + "\": Operator expression is wrong.";
  else error = token + ":演算子表現が間違っています";
  break;
 case _CLIP_PROC_ERR_ARRAY:
  if( isEnglish ) error = "\"" + token + "\": Array representation is incorrect.";
  else error = token + ":配列表現が間違っています";
  break;
 case _CLIP_PROC_ERR_FUNCTION:
  if( isEnglish ) error = "Argument of function \"" + token + "\" is wrong.";
  else error = "関数" + token + "の引数が間違っています";
  break;
 case _CLIP_PROC_ERR_LVALUE:
  if( isEnglish ) error = "The left side of \"" + token + "\" must be a variable or an array.";
  else error = token + "の左辺は変数または配列でなければなりません";
  break;
 case _CLIP_PROC_ERR_RVALUE:
  if( isEnglish ) error = "The right side of \"" + token + "\" must be a variable or an array.";
  else error = token + "の右辺は変数または配列でなければなりません";
  break;
 case _CLIP_PROC_ERR_RVALUE_NULL:
  if( isEnglish ) error = "There is no right side of \"" + token + "\".";
  else error = token + "の右辺がありません";
  break;
 case _CLIP_PROC_ERR_CONDITIONAL:
  if( isEnglish ) error = "Two constant or variable are not specified on the right side of the ternary operator \"" + token + "\".";
  else error = "三項演算子" + token + "の右辺に定数または変数が2個指定されていません";
  break;
 case _CLIP_PROC_ERR_EXTFUNC:
  if( isEnglish ) error = "Execution of the external function \"" + token.slice( 1 ) + "\" was interrupted.";
  else error = "外部関数" + token.slice( 1 ) + "の実行が中断されました";
  break;
 case _CLIP_PROC_ERR_USERFUNC:
  if( isEnglish ) error = "Execution of function \"" + token + "\" was interrupted.";
  else error = "関数" + token + "の実行が中断されました";
  break;
 case _CLIP_PROC_ERR_CONSTANT:
  if( isEnglish ) error = "\"" + token + "\": Constant expression is wrong.";
  else error = token + ":定数表現が間違っています";
  break;
 case _CLIP_PROC_ERR_STRING:
  if( isEnglish ) error = "\"" + token + "\": String representation is incorrect.";
  else error = token + ":文字列表現が間違っています";
  break;
 case _CLIP_PROC_ERR_COMPLEX:
  if( isEnglish ) error = "\"" + token + "\": Wrong complex number representation.";
  else error = token + ":複素数表現が間違っています";
  break;
 case _CLIP_PROC_ERR_FRACT:
  if( isEnglish ) error = "\"" + token + "\": Fractional representation is incorrect.";
  else error = token + ":分数表現が間違っています";
  break;
 case _CLIP_PROC_ERR_ASS:
  if( isEnglish ) error = "Assignment to a constant by \"" + token + "\" is invalid.";
  else error = token + "による定数への代入は無効です";
  break;
 case _CLIP_PROC_ERR_CALL:
  if( isEnglish ) error = "Function call failed.";
  else error = "関数呼び出しに失敗しました";
  break;
 case _CLIP_PROC_ERR_EVAL:
  if( isEnglish ) error = "Execution of evaluation was interrupted.";
  else error = "evalの実行が中断されました";
  break;
 case _CLIP_PROC_ERR_STAT_IF:
  if( isEnglish ) error = "\"" + token + "\" too many nests.";
  else error = token + "のネスト数が多すぎます";
  break;
 case _CLIP_PROC_ERR_STAT_ENDIF:
  if( isEnglish ) error = "There is no \"if\" corresponding to \"" + token + "\".";
  else error = token + "に対応するifがありません";
  break;
 case _CLIP_PROC_ERR_STAT_SWITCH:
  if( isEnglish ) error = "\"" + token + "\" too many nests.";
  else error = token + "のネスト数が多すぎます";
  break;
 case _CLIP_PROC_ERR_STAT_ENDSWI:
  if( isEnglish ) error = "There is no \"switch\" corresponding to \"" + token + "\".";
  else error = token + "に対応するswitchがありません";
  break;
 case _CLIP_PROC_ERR_STAT_UNTIL:
  if( isEnglish ) error = "No \"do\" corresponding to \"" + token + "\".";
  else error = token + "に対応するdoがありません";
  break;
 case _CLIP_PROC_ERR_STAT_ENDWHILE:
  if( isEnglish ) error = "There is no \"while\" corresponding to \"" + token + "\".";
  else error = token + "に対応するwhileがありません";
  break;
 case _CLIP_PROC_ERR_STAT_FOR_CON:
  if( isEnglish ) error = "No condition part in \"" + token + "\".";
  else error = token + "における条件部がありません";
  break;
 case _CLIP_PROC_ERR_STAT_FOR_EXP:
  if( isEnglish ) error = "There is no update expression in \"" + token + "\".";
  else error = token + "における更新式がありません";
  break;
 case _CLIP_PROC_ERR_STAT_NEXT:
  if( isEnglish ) error = "There is no \"for\" corresponding to \"" + token + "\".";
  else error = token + "に対応するforがありません";
  break;
 case _CLIP_PROC_ERR_STAT_CONTINUE:
  if( isEnglish ) error = "\"" + token + "\" is invalid.";
  else error = token + "は無効です";
  break;
 case _CLIP_PROC_ERR_STAT_BREAK:
  if( isEnglish ) error = "\"" + token + "\" is invalid.";
  else error = token + "は無効です";
  break;
 case _CLIP_PROC_ERR_STAT_FUNC:
  if( isEnglish ) error = "Too many functions.";
  else error = "関数の数が多すぎます";
  break;
 case _CLIP_PROC_ERR_STAT_FUNC_NEST:
  if( isEnglish ) error = "Function can not be defined in function.";
  else error = "関数内で関数は定義できません";
  break;
 case _CLIP_PROC_ERR_STAT_ENDFUNC:
  if( isEnglish ) error = "There is no \"func\" corresponding to \"" + token + "\".";
  else error = token + "に対応するfuncがありません";
  break;
 case _CLIP_PROC_ERR_STAT_FUNCNAME:
  if( isEnglish ) error = "\"" + token + "\": Function name is invalid.";
  else error = token + ":関数名は無効です";
  break;
 case _CLIP_PROC_ERR_STAT_FUNCPARAM:
  if( isEnglish ) error = "\"" + token + "\": Label can not be set for function argument.";
  else error = token + ":関数の引数にラベル設定できません";
  break;
 case _CLIP_PROC_ERR_STAT_LOOP:
  if( isEnglish ) error = "Number of loops exceeded the upper limit.";
  else error = "ループ回数オーバーしました";
  break;
 case _CLIP_PROC_ERR_COMMAND_NULL:
  if( isEnglish ) error = "The command is incorrect.";
  else error = "コマンドが間違っています";
  break;
 case _CLIP_PROC_ERR_COMMAND_PARAM:
  if( isEnglish ) error = "The argument of the command \"" + token.slice( 1 ) + "\" is incorrect.";
  else error = "コマンド" + token.slice( 1 ) + "の引数が間違っています";
  break;
 case _CLIP_PROC_ERR_COMMAND_DEFINE:
  if( isEnglish ) error = "\"" + token + "\" has already been defined.";
  else error = token + "は既に定義されています";
  break;
 case _CLIP_PROC_ERR_COMMAND_UNDEF:
  if( isEnglish ) error = "\"" + token + "\" is not defined.";
  else error = token + "は定義されていません";
  break;
 case _CLIP_PROC_ERR_COMMAND_PARAMS:
  if( isEnglish ) error = "You can only specify up to 10 arguments for the command \"" + token.slice( 1 ) + "\".";
  else error = "コマンド" + token.slice( 1 ) + "の引数は10個までしか指定できません";
  break;
 case _CLIP_PROC_ERR_COMMAND_RADIX:
  if( isEnglish ) error = "Command \"" + token.slice( 1 ) + "\" is invalid.";
  else error = "コマンド" + token.slice( 1 ) + "は無効です";
  break;
 case _CLIP_PROC_ERR_FUNC_OPEN:
  if( isEnglish ) error = "The external function \"" + token.slice( 1 ) + "\" can not be opened.";
  else error = "外部関数" + token.slice( 1 ) + "がオープンできません";
  break;
 case _CLIP_PROC_ERR_FUNC_PARANUM:
  if( isEnglish ) error = "Up to 10 arguments of external function can be specified.";
  else error = "外部関数の引数は10個までしか指定できません";
  break;
 case _CLIP_PROC_ERR_FUNC_PARACODE:
  if( isEnglish ) error = "\"token\": The argument of the external function must be a constant, variable or array name.";
  else error = token + ":外部関数の引数は定数、変数または配列名でなければなりません";
  break;
 case _CLIP_PROC_ERR_SE_NULL:
  if( isEnglish ) error = "The single expression is incorrect.";
  else error = "単一式が間違っています";
  break;
 case _CLIP_PROC_ERR_SE_OPERAND:
  if( isEnglish ) error = "Operand of the single expression is incorrect.";
  else error = "単一式のオペランドが間違っています";
  break;
 case _CLIP_PROC_ERR_SE_LOOPEND:
  if( isEnglish ) error = "No \"$LOOPSTART\" corresponding to \"$LOOPEND\".";
  else error = "$LOOPENDに対応する$LOOPSTARTがありません";
  break;
 case _CLIP_PROC_ERR_SE_LOOPCONT:
  if( isEnglish ) error = "No \"$LOOPSTART\" corresponding to \"$LOOPCONT\".";
  else error = "$LOOPCONTに対応する$LOOPSTARTがありません";
  break;
 case _CLIP_PROC_ERR_SE_CONTINUE:
  if( isEnglish ) error = "\"$CONTINUE\" is invalid.";
  else error = "$CONTINUEは無効です";
  break;
 case _CLIP_PROC_ERR_SE_BREAK:
  if( isEnglish ) error = "\"$BREAK\" is invalid.";
  else error = "$BREAKは無効です";
  break;
 }
 return error;
}
var procError;
var silentErr = false;
function EditExprToken( token ){
 this._token = token;
 this._before = null;
 this._next = null;
}
function EditExpr( id ){
 this._id = id;
 this._top = null;
 this._end = null;
 this._num = 0;
 this._cur = null;
 this._cursor = 0;
 this._disp = 2;
 this._forward = 0;
 this._scroll = 0;
 this._selAll = false;
 this._firstChars = "(*/+-%[&^|<>";
}
EditExpr.prototype = {
 setDispLen : function( dspLen, fwdLen ){
  this._disp = (dspLen < 2) ? 2 : dspLen;
  this._forward = (fwdLen < 0) ? 0 : fwdLen;
  if( this._forward >= this._disp ){
   this._forward = this._disp - 1;
  }
 },
 _searchList : function( num ){
  if( num < 0 ){
   return false;
  }
  var tmp = 0;
  this._cur = this._top;
  while( true ){
   if( this._cur == null ){
    return false;
   }
   if( tmp == num ){
    break;
   }
   tmp++;
   this._cur = this._cur._next;
  }
  return true;
 },
 _lastChar : function( str ){
  if( str.length == 0 ){
   return 0;
  }
  return str.charAt( str.length - 1 );
 },
 add : function( token ){
  if( this._selAll ){
   this.delAll();
  }
  var tmp = new EditExprToken( token );
  if( this._top == null ){
   if( token == " " ){
    return;
   }
   this._top = tmp;
   this._end = tmp;
  } else {
   if( (token == " ") && (this._lastChar( this._end._token ) == ' ') ){
    return;
   }
   tmp._before = this._end;
   this._end._next = tmp;
   this._end = tmp;
  }
  this._num++;
  this._cursor = this._num;
 },
 ins : function( token ){
  if( this._selAll ){
   this.delAll();
  }
  if( !this._searchList( this._cursor ) ){
   this.add( token );
   return;
  }
  if( token == " " ){
   if( this._cur._before == null ){
    return;
   }
   if( (this._cur._token == " ") || (this._lastChar( this._cur._before._token ) == ' ') ){
    return;
   }
  }
  var tmp = new EditExprToken( token );
  tmp._before = this._cur._before;
  tmp._next = this._cur;
  if( this._cur._before != null ){
   this._cur._before._next = tmp;
  } else {
   this._top = tmp;
  }
  this._cur._before = tmp;
  this._num++;
  this._cursor++;
 },
 del : function(){
  if( this._selAll ){
   this.delAll();
   return;
  }
  if( !this._searchList( this._cursor - 1 ) ){
   this.forward();
   if( !this._searchList( this._cursor - 1 ) ){
    return;
   }
  }
  if( this._cur._before != null ){
   this._cur._before._next = this._cur._next;
  } else {
   this._top = this._cur._next;
  }
  if( this._cur._next != null ){
   this._cur._next._before = this._cur._before;
  } else {
   this._end = this._cur._before;
  }
  this._num--;
  this._cursor--;
 },
 delAll : function(){
  this._top = null;
  this._num = 0;
  this._cursor = 0;
  this._scroll = 0;
  this._unsetAll();
 },
 num : function(){
  return this._num;
 },
 token : function( index ){
  if( this._searchList( index ) ){
   return this._cur._token;
  }
  return null;
 },
 set : function( index, token ){
  if( this._searchList( index ) ){
   this._cur._token = token;
  }
 },
 top : function(){
  this._cursor = 0;
  this._unsetAll();
 },
 end : function(){
  this._cursor = this._num;
  this._unsetAll();
 },
 backward : function(){
  if( this._selAll ){
   this.top();
   return;
  }
  if( this._cursor > 0 ){
   this._cursor--;
  }
 },
 forward : function(){
  if( this._selAll ){
   this.end();
   return;
  }
  if( this._cursor < this._num ){
   this._cursor++;
  }
 },
 _unsetAll : function(){
  if( this._selAll ){
   onEditExprUpdateSelAll( this._id, false );
  }
  this._selAll = false;
 },
 selAll : function(){
  if( !this._selAll ){
   onEditExprUpdateSelAll( this._id, true );
  }
  this._selAll = true;
 },
 isSelAll : function(){
  return this._selAll;
 },
 get : function( forward , after , dispFlag ){
  if( dispFlag == undefined ){
   dispFlag = false;
  }
  var tmpToken = new _String();
  forward.set( "" );
  after .set( "" );
  var tmp = 0;
  var cur = this._top;
  while( cur != null ){
   if( tmp < this._cursor ){
    if( (this._lastChar( forward.str() ) == ' ') && (this._firstChars.indexOf( "" + cur._token.charAt( 0 ) ) >= 0) ){
     var str = forward.str();
     forward.set( str.substr( 0, str.length - 1 ) );
    }
    forward.add( cur._token );
   } else {
    if( (this._lastChar( after.str() ) == ' ') && (this._firstChars.indexOf( "" + cur._token.charAt( 0 ) ) >= 0) ){
     var str = after.str();
     after.set( str.substr( 0, str.length - 1 ) );
    }
    after.add( cur._token );
   }
   tmp++;
   cur = cur._next;
  }
  if( dispFlag ){
   if( forward.str().length - this._scroll >= this._disp ){
    this._scroll = forward.str().length - (this._disp - 1);
   }
   if( forward.str().length < this._scroll + this._forward ){
    this._scroll = forward.str().length - this._forward;
    if( this._scroll < 0 ){
     this._scroll = 0;
    }
   }
   forward.set( forward.str().slice( this._scroll ) );
   after.set( after.str().substring( 0, this._disp - forward.str().length ) );
  }
 },
 exportLog : function( expr ){
  var tmpToken = new _String();
  expr.set( "" );
  var tmp = 0;
  var cur = this._top;
  while( cur != null ){
   if( cur == this._end ){
    if( cur._token == " " ){
     break;
    }
   }
   if( expr.str().length != 0 ){
    expr.add( "," );
   }
   tmpToken.set( cur._token );
   tmpToken.replace( "\\", "\\\\" );
   tmpToken.replace( "," , "\\," );
   expr.add( tmpToken.str() );
   tmp++;
   cur = cur._next;
  }
 },
 importLog : function( expr ){
  var token = new String();
  var tmpToken = new _String();
  this.delAll();
  var top = 0;
  var cur = 0;
  while( cur < expr.length ){
   if( expr.charAt( cur ) == '\\' ){
    cur++;
    if( cur >= expr.length ){
     break;
    }
   } else if( expr.charAt( cur ) == ',' ){
    if( top != cur ){
     token = expr.substring( top, cur );
     tmpToken.set( token );
     tmpToken.replace( "\\," , "," );
     tmpToken.replace( "\\\\", "\\" );
     this.add( tmpToken.str() );
    }
    top = cur + 1;
   }
   cur++;
  }
  if( top < expr.length ){
   token = expr.slice( top );
   tmpToken.set( token );
   tmpToken.replace( "\\," , "," );
   tmpToken.replace( "\\\\", "\\" );
   this.add( tmpToken.str() );
  }
 }
};
var editExpr = new Array( 3 );
function ListBoxObj( obj ){
 this._obj = obj;
 this._before = null;
 this._next = null;
}
function ListBox( id ){
 this._e = document.getElementById( id );
 this._top = null;
 this._end = null;
 this._num = 0;
 this._index = 0;
 this._line = 1;
 this._scroll = 0;
}
ListBox.prototype = {
 element : function(){
  return this._e;
 },
 click : function( e, offsetY, lineHeight ){
  var top = 0;
  var tmp = this._e;
  while( tmp ){
   top += tmp.offsetTop;
   tmp = tmp.offsetParent;
  }
  var index = _DIV( e.clientY - offsetY - top, lineHeight );
  if( index < this._line ){
   this.setIndex( this._scroll + index );
   return true;
  }
  return false;
 },
 _searchList : function( num ){
  if( num < 0 ){
   return null;
  }
  var tmp = 0;
  var cur = this._top;
  while( true ){
   if( cur == null ){
    return null;
   }
   if( tmp == num ){
    break;
   }
   tmp++;
   cur = cur._next;
  }
  return cur;
 },
 add : function( obj ){
  var tmp = new ListBoxObj( obj );
  if( this._top == null ){
   this._top = tmp;
   this._end = tmp;
  } else {
   tmp._before = this._end;
   this._end._next = tmp;
   this._end = tmp;
  }
  this._num++;
  this._index = this._num - 1;
  this._updateScroll();
 },
 ins : function( index, obj ){
  var cur = this._searchList( index );
  if( cur == null ){
   this.add( obj );
   return;
  }
  this._index = index;
  this._updateScroll();
  var tmp = new ListBoxObj( obj );
  tmp._before = cur._before;
  tmp._next = cur;
  if( cur._before != null ){
   cur._before._next = tmp;
  } else {
   this._top = tmp;
  }
  cur._before = tmp;
  this._num++;
 },
 del : function( index ){
  var cur = this._searchList( index );
  if( cur == null ){
   return;
  }
  if( cur._before != null ){
   cur._before._next = cur._next;
  } else {
   this._top = cur._next;
  }
  if( cur._next != null ){
   cur._next._before = cur._before;
  } else {
   this._end = cur._before;
  }
  this._num--;
  if( this._index >= this._num ){
   this._index = this._num - 1;
  }
  if( this._index < 0 ){
   this._index = 0;
  }
  this._updateScroll();
 },
 delAll : function(){
  this._top = null;
  this._num = 0;
  this._index = 0;
  this._scroll = 0;
 },
 num : function(){
  return this._num;
 },
 obj : function( index ){
  var cur = this._searchList( index );
  if( cur != null ){
   return cur._obj;
  }
  return null;
 },
 set : function( index, obj ){
  var cur = this._searchList( index );
  if( cur != null ){
   cur._obj = obj;
  }
 },
 setLineNum : function( lineNum ){
  this._line = lineNum;
  if( this._line < 1 ){
   this._line = 1;
  }
 },
 lineNum : function(){
  return this._line;
 },
 setIndex : function( index ){
  this._index = index;
  if( this._index >= this._num ){
   this._index = this._num - 1;
  }
  if( this._index < 0 ){
   this._index = 0;
  }
  this._updateScroll();
 },
 index : function(){
  return this._index;
 },
 _updateScroll : function(){
  if( this._index - this._scroll < 0 ){
   this._scroll = this._index;
  }
  if( this._index - this._scroll >= this._line ){
   this._scroll = this._index - (this._line - 1);
  }
 },
 scroll : function(){
  return this._scroll;
 },
 up : function(){
  if( this._index > 0 ){
   this._index--;
   this._updateScroll();
  }
 },
 down : function(){
  if( this._index < this._num - 1 ){
   this._index++;
   this._updateScroll();
  }
 }
};
var logExpr;
var listTable = new Array( 3 );
function ListTableItem( x, y1, y2 ){
 this._x = x;
 this._y1 = y1;
 this._y2 = y2;
}
var listImage;
function ListImageItem( url, x, y ){
 this._url = url;
 this._x = x;
 this._y = y;
}
var _editor_cursor_pos = 0;
var _editor_text = "";
var _editor_smart = true;
function setEditorSmartFlag( flag ){
 _editor_smart = flag;
}
function editorSmartFlag(){
 return _editor_smart;
}
function _Editor( id ){
 if( window.onEditorUpdateText == undefined ) window.onEditorUpdateText = function( len ){};
 this._textarea = document.getElementById( id );
 this._textarea.addEventListener( "input", _onEditorInput, false );
 this._textarea.addEventListener( "keydown", _onEditorKeyDown, false );
}
_Editor.prototype = {
 element : function(){
  return this._textarea;
 },
 text : function(){
  return this._textarea.value;
 },
 setText : function( text ){
  this._textarea.value = text;
  _editor_cursor_pos = this._textarea.selectionStart;
  _editor_text = this._textarea.value;
 }
};
function _onEditorInput( e ){
 var elem = e.target;
 var pos = elem.selectionStart;
 if( _editor_smart && (pos > 0) && (pos != _editor_cursor_pos) ){
  var val = elem.value;
  if( val.length > _editor_text.length ){
   if( isCharSpace( val, pos - 1 ) ){
    if( (pos == 1) || (val.charAt( pos - 2 ) == '\t') ){
     elem.value = val.substr( 0, pos - 1 ) + "\t" + val.slice( pos );
     elem.setSelectionRange( pos, pos );
    } else if( val.charAt( pos - 2 ) == '\n' ){
     var i;
     for( i = pos - 3; i >= 0; i-- ){
      if( val.charAt( i ) == '\n' ){
       break;
      }
     }
     i++;
     var tmp = "";
     while( val.charAt( i ) == '\t' ){
      tmp += "\t";
      i++;
     }
     if( tmp.length == 0 ){
      tmp = "\t";
     }
     elem.value = val.substr( 0, pos - 1 ) + tmp + val.slice( pos );
     elem.setSelectionRange( pos - 1 + tmp.length, pos - 1 + tmp.length );
    }
   } else if( val.charAt( pos - 1 ) == '\n' ){
    var i;
    for( i = pos - 2; i >= 0; i-- ){
     if( val.charAt( i ) == '\n' ){
      break;
     }
    }
    i++;
    var tmp = "";
    while( val.charAt( i ) == '\t' ){
     tmp += "\t";
     i++;
    }
    elem.value = val.substr( 0, pos ) + tmp + val.slice( pos );
    elem.setSelectionRange( pos + tmp.length, pos + tmp.length );
   }
  }
 }
 _editor_cursor_pos = elem.selectionStart;
 _editor_text = elem.value;
 onEditorUpdateText( _editor_text.length );
}
function _onEditorKeyDown( e ){
 var elem = e.target;
 if( e.keyCode == 9 ){
  e.preventDefault();
  var val = elem.value;
  var pos = elem.selectionStart;
  if( _editor_smart && (pos > 0) && (val.charAt( pos - 1 ) == '\n') ){
   var i;
   for( i = pos - 2; i >= 0; i-- ){
    if( val.charAt( i ) == '\n' ){
     break;
    }
   }
   i++;
   var tmp = "";
   while( val.charAt( i ) == '\t' ){
    tmp += "\t";
    i++;
   }
   if( tmp.length == 0 ){
    tmp = "\t";
   }
   elem.value = val.substr( 0, pos ) + tmp + val.slice( pos );
   elem.setSelectionRange( pos + tmp.length, pos + tmp.length );
  } else {
   elem.value = val.substr( 0, pos ) + "\t" + val.slice( pos );
   elem.setSelectionRange( pos + 1, pos + 1 );
  }
  _editor_text = elem.value;
  onEditorUpdateText( _editor_text.length );
 }
 _editor_cursor_pos = elem.selectionStart;
}
var editor;
var selFunc;
var curFunc;
var topProc;
var topParam;
function _StringUtil(){
 this._fontSize = 0;
 this._fontFamily = "";
 this._text = document.createElement( "span" );
 this._textStyle = "visibility:hidden;position:absolute;left:0;top:0";
 this._text.style.cssText = this._textStyle;
 document.body.appendChild( this._text );
 this._h = "";
 this._e = "";
}
_StringUtil.prototype = {
 setFont : function( size, family ){
  this._fontSize = size;
  this._fontFamily = (family.indexOf( " " ) >= 0) ? "'" + family + "'" : family;
  this._text.style.cssText = this._textStyle + ";font:" + this._fontSize + "px " + this._fontFamily;
 },
 stringWidth : function( str ){
  this._text.innerHTML = "'";
  var tmp = this._text.offsetWidth;
  str = str.replace( new RegExp( "<", "igm" ), "&lt;" );
  str = str.replace( new RegExp( ">", "igm" ), "&gt;" );
  this._text.innerHTML = "'" + str + "'";
  return this._text.offsetWidth - tmp * 2;
 },
 fontHeight : function(){
  return this._fontSize;
 },
 trim : function( str ){
  var ret = "";
  var i;
  var top = 0;
  for( i = 0; i < str.length; i++ ){
   if( (str.charAt( i ) != " ") && (str.charAt( i ) != "　") ){
    break;
   }
   top++;
  }
  if( top < str.length ){
   var end = str.length - 1;
   for( i = end; i >= 0; i-- ){
    if( (str.charAt( i ) != " ") && (str.charAt( i ) != "　") ){
     break;
    }
    end--;
   }
   ret = str.substring( top, end + 1 );
  }
  return ret;
 },
 truncate : function( str, width, truncation ){
  if( this.stringWidth( str ) <= width ){
   return str;
  }
  width -= this.stringWidth( truncation );
  var ret = "";
  for( var i = 0; i < str.length; i++ ){
   ret += str.charAt( i );
   if( this.stringWidth( ret ) > width ){
    if( ret.length > 1 ){
     ret = ret.substring( 0, ret.length - 1 );
     break;
    }
   }
  }
  return ret + truncation;
 },
 setHeadWrap : function( str ){
  this._h = str;
 },
 setEndWrap : function( str ){
  this._e = str;
 },
 wrap : function( str, width ){
  var ret = new Array();
  var chr;
  var j = 0;
  ret[j] = "";
  for( var i = 0; i < str.length; i++ ){
   ret[j] += str.charAt( i );
   if( this.stringWidth( ret[j] ) > width ){
    if( ret[j].length > 1 ){
     ret[j] = ret[j].substring( 0, ret[j].length - 1 );
     i--;
     if( this._h.length > 0 ){
      while( true ){
       if( i + 1 < str.length ){
        chr = str.charAt( i + 1 );
        if( this._h.indexOf( chr ) >= 0 ){
         ret[j] += chr;
         i++;
        } else {
         break;
        }
       } else {
        break;
       }
      }
     }
     if( this._e.length > 0 ){
      while( true ){
       if( ret[j].length > 1 ){
        chr = ret[j].charAt( ret[j].length - 1 );
        if( this._e.indexOf( chr ) >= 0 ){
         ret[j] = ret[j].substring( 0, ret[j].length - 1 );
         i--;
        } else {
         break;
        }
       } else {
        break;
       }
      }
     }
    }
    j++;
    ret[j] = "";
   }
  }
  return ret;
 }
};
function Common(){
 var userAgent = window.navigator.userAgent;
 this._androidMobile = false;
 this._androidTablet = false;
 this._iPhone = false;
 this._iPad = false;
 if( userAgent.indexOf( "iPad" ) != -1 ){
  this._iPad = true;
 } else if( (userAgent.indexOf( "iPhone" ) != -1) || (userAgent.indexOf( "iPod" ) != -1) ){
  this._iPhone = true;
 } else if( userAgent.indexOf( "Android" ) != -1 ){
  if( userAgent.indexOf( "Mobile" ) != -1 ){
   this._androidMobile = true;
  } else {
   this._androidTablet = true;
  }
 }
 this._app = false;
 if( userAgent.lastIndexOf( " APP" ) == userAgent.length - 4 ){
  this._app = true;
 }
 this._su = new _StringUtil();
}
Common.prototype = {
 isAndroidMobile : function(){
  return this._androidMobile;
 },
 isAndroidTablet : function(){
  return this._androidTablet;
 },
 isIPhone : function(){
  return this._iPhone;
 },
 isIPad : function(){
  return this._iPad;
 },
 isPC : function(){
  return (!this._androidMobile && !this._androidTablet && !this._iPhone && !this._iPad);
 },
 isApp : function(){
  return this._app;
 },
 setFont : function( size, family ){
  this._su.setFont( size, family );
 },
 stringWidth : function( str ){
  return this._su.stringWidth( str );
 },
 fontHeight : function(){
  return this,_su.fontHeight();
 },
 truncate : function( str, width, truncation ){
  return this._su.truncate( str, width, truncation );
 },
 escape : function( str ){
  return (new _String( str )).escape().str();
 }
};
function cssGetPropertyValue( selector, property ){
 var i, j;
 var value = new String();
 var styleSheets = document.styleSheets;
 var styleSheet;
 var rules;
 var rule;
 for( i = 0; i < styleSheets.length; i++ ){
  styleSheet = styleSheets[i];
  rules = styleSheet.rules || styleSheet.cssRules;
  for( j = 0; j < rules.length; j++ ){
   rule = rules[j];
   if( rule.selectorText == selector ){
    value = rule.style.getPropertyValue( property );
   }
  }
 }
 return value;
}
function cssSetPropertyValue( selector, property, value ){
 var i, j;
 var styleSheets = document.styleSheets;
 var styleSheet;
 var rules;
 var rule;
 for( i = 0; i < styleSheets.length; i++ ){
  styleSheet = styleSheets[i];
  rules = styleSheet.rules || styleSheet.cssRules;
  for( j = 0; j < rules.length; j++ ){
   rule = rules[j];
   if( rule.selectorText == selector ){
    rule.style.setProperty( property, value );
   }
  }
 }
}
var _css_display_none = null;
var _css_display_block = null;
function cssLockStyleDisplay(){
 _css_display_none = new Array();
 _css_display_block = new Array();
}
function cssSetStyleDisplay( element, flag ){
 if( _css_display_none == null ){
  element.style.display = flag ? "block" : "none";
 } else if( flag ){
  _css_display_block[_css_display_block.length] = element;
 } else {
  _css_display_none[_css_display_none.length] = element;
 }
}
function cssSetStyleDisplayById( id, flag ){
 cssSetStyleDisplay( document.getElementById( id ), flag );
}
function cssUnlockStyleDisplay(){
 var i;
 for( i = 0; i < _css_display_none.length; i++ ){
  _css_display_none[i].style.display = "none";
 }
 for( i = 0; i < _css_display_block.length; i++ ){
  _css_display_block[i].style.display = "block";
 }
 _css_display_none = null;
 _css_display_block = null;
}
function cssSetButton( selector, gradientType, start, end, color, shadow, flag ){
 cssSetPropertyValue( selector, "background", "-webkit-gradient(" + gradientType + ",color-stop(0%," + start + "),color-stop(100%," + end + "))" );
 cssSetPropertyValue( selector, "color", color );
 cssSetPropertyValue( selector, "text-shadow", (flag ? "1px 1px " : "-1px -1px ") + shadow );
}
function cssSetSelect( selector, gradientType, start, end, color, shadow, flag ){
 cssSetPropertyValue( selector, "background", "-webkit-gradient(" + gradientType + ",color-stop(0%," + start + "),color-stop(100%," + end + "))" );
 cssSetPropertyValue( selector, "color", color );
 if( shadow.length > 0 ){
  cssSetPropertyValue( selector, "text-shadow", (flag ? "1px 1px " : "-1px -1px ") + shadow );
 } else {
  cssSetPropertyValue( selector, "text-shadow", "0 0" );
 }
}
function initSelect( id, selectedIndex ){
 var select = document.getElementById( id );
 for( var i = 0; i < select.options.length; i++ ){
  select.options[i].selected = (i == selectedIndex) ? true : false;
 }
}
function doButtonUpFloat( id, step, max ){
 var val = parseFloat( document.getElementById( id ).value );
 if( !_ISNAN( val ) ){
  if( (max == undefined) || (val < max) ){
   val += step;
   if( (max != undefined) && (val > max) ){
    val = max;
   }
   document.getElementById( id ).value = floatToStringPoint( val );
   return true;
  }
 }
 return false;
}
function doButtonDownFloat( id, step, min ){
 var val = parseFloat( document.getElementById( id ).value );
 if( !_ISNAN( val ) ){
  if( (min == undefined) || (val > min) ){
   val -= step;
   if( (min != undefined) && (val < min) ){
    val = min;
   }
   document.getElementById( id ).value = floatToStringPoint( val );
   return true;
  }
 }
 return false;
}
function doButtonUpInt( id, step, max ){
 var val = parseInt( document.getElementById( id ).value );
 if( !_ISNAN( val ) ){
  if( (max == undefined) || (val < max) ){
   val += step;
   if( (max != undefined) && (val > max) ){
    val = max;
   }
   document.getElementById( id ).value = "" + val;
   return true;
  }
 }
 return false;
}
function doButtonDownInt( id, step, min ){
 var val = parseInt( document.getElementById( id ).value );
 if( !_ISNAN( val ) ){
  if( (min == undefined) || (val > min) ){
   val -= step;
   if( (min != undefined) && (val < min) ){
    val = min;
   }
   document.getElementById( id ).value = "" + val;
   return true;
  }
 }
 return false;
}
function printUsage( token, proc, param, isEnglish, divId ){
 var usage = new String();
 if( token == "!" ){ usage = isEnglish ? "factorial" : "階乗"; }
 if( token == "e+" ){ usage = isEnglish ? "exponent part of floating point constant" : "浮動小数点定数の指数部"; }
 if( token == "e-" ){ usage = isEnglish ? "exponent part of floating point constant" : "浮動小数点定数の指数部"; }
 if( token == "d" ){ usage = isEnglish ? "degrees" : "度"; }
 if( token == "g" ){ usage = isEnglish ? "gradian" : "グラジアン"; }
 if( token == "r" ){ usage = isEnglish ? "radians" : "ラジアン"; }
 if( token == "h" ){ usage = isEnglish ? "hour" : "時"; }
 if( token == "m" ){ usage = isEnglish ? "min" : "分"; }
 if( token == "s" ){ usage = isEnglish ? "second" : "秒"; }
 if( token == "f" ){ usage = isEnglish ? "frame" : "フレーム"; }
 if( token == "_" ){ usage = isEnglish ? "fraction" : "分数"; }
 if( token == "i" ){ usage = isEnglish ? "imaginary part of complex number" : "複素数の虚数部"; }
 if( token == ":" ){ usage = isEnglish ? "time" : "時間"; }
 if( token == "\\" ){ usage = isEnglish ? "n-ary notation" : "n進表記"; }
 if( token == "b" ){ usage = isEnglish ? "in binary notation" : "2進表記"; }
 if( token == "x" ){ usage = isEnglish ? "hexadecimal notation" : "16進表記"; }
 if( token == "\\-" ){ usage = isEnglish ? "unary minus (for constant)" : "単項マイナス(定数用)"; }
 if( token == "\\+" ){ usage = isEnglish ? "unary plus (for constant)" : "単項プラス(定数用)"; }
 if( token == "[-]" ){ usage = isEnglish ? "unary minus" : "単項マイナス"; }
 if( token == "[~]" ){ usage = isEnglish ? "complement (unary operator)" : "補数(単項演算子)"; }
 if( token == "+" ){ usage = isEnglish ? "addition (binomial plus)" : "加算(二項プラス)"; }
 if( token == "-" ){ usage = isEnglish ? "subtraction (binomial minus)" : "減算(二項マイナス)"; }
 if( token == "*" ){ usage = isEnglish ? "multiplication" : "乗算"; }
 if( token == "/" ){ usage = isEnglish ? "division" : "除算"; }
 if( token == "%" ){ usage = isEnglish ? "modulo (remainder)" : "モジュロ(剰余)"; }
 if( token == "&" ){ usage = isEnglish ? "bitwise logical AND" : "ビット単位の論理積"; }
 if( token == "^" ){ usage = ((param._mode & _CLIP_MODE_INT) == 0) ? (isEnglish ? "power" : "累乗") : (isEnglish ? "bitwise exclusive OR" : "ビット単位の排他的論理和"); }
 if( token == "|" ){ usage = isEnglish ? "inclusive logical sum of bits" : "ビット単位の内包的論理和"; }
 if( token == "<<" ){ usage = isEnglish ? "shift left" : "左シフト"; }
 if( token == ">>" ){ usage = isEnglish ? "shift right" : "右シフト"; }
 if( token == "(" ){ usage = isEnglish ? "beginning of parenthesis indicating priority of operation" : "演算の優先順位を示す括弧の始まり"; }
 if( token == ")" ){ usage = isEnglish ? "end of parenthesis indicating the priority of operation" : "演算の優先順位を示す括弧の終わり"; }
 if( token == " " ){ usage = isEnglish ? "space" : "空白"; }
 if( token == "sin " ){ usage = "sin &lt;x&gt; : " + (isEnglish ? "sine" : "正弦"); }
 if( token == "cos " ){ usage = "cos &lt;x&gt; : " + (isEnglish ? "cosine" : "余弦"); }
 if( token == "tan " ){ usage = "tan &lt;x&gt; : " + (isEnglish ? "tangent" : "正接"); }
 if( token == "asin " ){ usage = "asin &lt;x&gt; : " + (isEnglish ? "arc sine" : "逆正弦"); }
 if( token == "acos " ){ usage = "acos &lt;x&gt; : " + (isEnglish ? "arc cosine" : "逆余弦"); }
 if( token == "atan " ){ usage = "atan &lt;x&gt; : " + (isEnglish ? "arc tangent" : "逆正接"); }
 if( token == "sinh " ){ usage = "sinh &lt;x&gt; : " + (isEnglish ? "hyperbolic sine" : "双曲線正弦"); }
 if( token == "cosh " ){ usage = "cosh &lt;x&gt; : " + (isEnglish ? "hyperbolic cosine" : "双曲線余弦"); }
 if( token == "tanh " ){ usage = "tanh &lt;x&gt; : " + (isEnglish ? "hyperbolic tangent" : "双曲線正接"); }
 if( token == "asinh " ){ usage = "asinh &lt;x&gt; : " + (isEnglish ? "inverse hyperbolic sine" : "逆双曲線正弦"); }
 if( token == "acosh " ){ usage = "acosh &lt;x&gt; : " + (isEnglish ? "inverse hyperbolic cosine" : "逆双曲線余弦"); }
 if( token == "atanh " ){ usage = "atanh &lt;x&gt; : " + (isEnglish ? "inverse hyperbolic tangent" : "逆双曲線正接"); }
 if( token == "ln " ){ usage = "ln &lt;x&gt; : " + (isEnglish ? "natural logarithm" : "自然対数"); }
 if( token == "log " ){ usage = "log &lt;x&gt; : " + (param._calculator ? (isEnglish ? "base 10 logarithm" : "底10の対数") : (isEnglish ? "natural logarithm" : "自然対数")); }
 if( token == "log10 " ){ usage = "log10 &lt;x&gt; : " + (isEnglish ? "base 10 logarithm" : "底10の対数"); }
 if( token == "exp " ){ usage = "exp &lt;x&gt; : " + (isEnglish ? "exponent" : "指数"); }
 if( token == "exp10 " ){ usage = "exp10 &lt;x&gt; : " + (isEnglish ? "base 10 exponent" : "底10の指数"); }
 if( token == "sqr " ){ usage = "sqr &lt;x&gt; : " + (isEnglish ? "squared" : "自乗"); }
 if( token == "sqrt " ){ usage = "sqrt &lt;x&gt; : " + (isEnglish ? "square root" : "平方根"); }
 if( token == "atan2 " ){ usage = "atan2 &lt;y&gt; &lt;x&gt; : " + (isEnglish ? "arc tangent of &lt;y&gt;/&lt;x&gt;" : "&lt;y&gt;/&lt;x&gt;の逆正接"); }
 if( token == "abs " ){ usage = "abs &lt;x&gt; : " + (isEnglish ? "absolute value" : "絶対値"); }
 if( token == "ceil " ){ usage = "ceil &lt;x&gt; : " + (isEnglish ? "the smallest integer greater than or equal to &lt;x&gt;" : "&lt;x&gt;以上の最小の整数"); }
 if( token == "floor " ){ usage = "floor &lt;x&gt; : " + (isEnglish ? "the largest integer less than or equal to &lt;x&gt;" : "&lt;x&gt;以下の最大の整数"); }
 if( token == "int " ){ usage = "int &lt;x&gt; : " + (isEnglish ? "integer" : "整数"); }
 if( token == "ldexp " ){ usage = "ldexp &lt;x&gt; &lt;exp&gt; : " + (isEnglish ? "calculate real numbers from mantissa &lt;x&gt; and exponent &lt;exp&gt;" : "仮数&lt;x&gt;と指数&lt;exp&gt;から実数を計算"); }
 if( token == "frexp " ){ usage = "frexp &lt;x&gt; &lt;var_exp&gt; : " + (isEnglish ? "returns the mantissa of &lt;x&gt;, stores the exponent in &lt;var_exp&gt;" : "&lt;x&gt;の仮数を返し、変数&lt;var_exp&gt;に指数を格納"); }
 if( token == "modf " ){ usage = "modf &lt;x&gt; &lt;var_int&gt; : " + (isEnglish ? "returns the fraction part of &lt;x&gt;, stores the integer part in &lt;var_int&gt;" : "&lt;x&gt;の小数部を返し、変数&lt;var_int&gt;に整数部を格納"); }
 if( token == "pow " ){ usage = "pow &lt;x&gt; &lt;y&gt; : " + (isEnglish ? "the &lt;y&gt; power of &lt;x&gt;" : "&lt;x&gt;の&lt;y&gt;乗"); }
 if( token == "fact " ){ usage = "fact &lt;x&gt; : " + (isEnglish ? "factorial of &lt;x&gt;" : "&lt;x&gt;の階乗"); }
 if( token == "num " ){ usage = "num &lt;x&gt; : " + (isEnglish ? "numerator of fraction" : "分数の分子"); }
 if( token == "denom " ){ usage = "denom &lt;x&gt; : " + (isEnglish ? "denominator of fraction" : "分数の分母"); }
 if( token == "real " ){ usage = "real &lt;x&gt; : " + (isEnglish ? "real part of complex number" : "複素数の実数部"); }
 if( token == "imag " ){ usage = "imag &lt;x&gt; : " + (isEnglish ? "imaginary part of complex number" : "複素数の虚数部"); }
 if( token == "arg " ){ usage = "arg &lt;x&gt; : " + (isEnglish ? "phase angle of complex number" : "複素数の位相角度"); }
 if( token == "norm " ){ usage = "norm &lt;x&gt; : " + (isEnglish ? "squared absolute value" : "絶対値の自乗"); }
 if( token == "conjg " ){ usage = "conjg &lt;x&gt; : " + (isEnglish ? "conjugate complex number" : "共役複素数"); }
 if( token == "polar " ){ usage = "polar &lt;rho&gt; &lt;t&gt; : " + (isEnglish ? "complex value of absolute value &lt;rho&gt; and phase angle &lt;t&gt;" : "絶対値&lt;rho&gt;、位相角度&lt;t&gt;の複素数値"); }
 if( token == "rand " ){ usage = "rand : " + (isEnglish ? "pseudorandom number" : "疑似乱数"); }
 if( token == "time " ){ usage = "time : " + (isEnglish ? "current time" : "現在の時刻"); }
 if( usage.length > 0 ){
  document.getElementById( divId ).innerHTML = usage;
 }
 if( (token.charAt( 0 ) == '!') && (token.charAt( token.length - 1 ) == ' ') ){
  var func = token.substring( 1, token.length - 1 );
  proc.usage( func, param, true );
 }
}
function getUrlParameter( key ){
 var ret = "";
 var start = location.href.indexOf( "?" + key + "=" );
 if( start < 0 ){
  start = location.href.indexOf( "&" + key + "=" );
 }
 if( start >= 0 ){
  start += key.length + 2;
  var end = location.href.indexOf( "&", start );
  if( end < 0 ){
   end = location.href.length;
  }
  ret = location.href.substring( start, end );
 }
 return decodeURIComponent( ret );
}
function _RGB( r, g, b ){
 if( r > 255 ) r = 255;
 if( g > 255 ) g = 255;
 if( b > 255 ) b = 255;
 if( r < 0 ) r = 0;
 if( g < 0 ) g = 0;
 if( b < 0 ) b = 0;
 return "#" + intToString( r, 16, 2 ) + intToString( g, 16, 2 ) + intToString( b, 16, 2 );
}
function RGB( r, g, b, flag ){
 this.r = r;
 this.g = g;
 this.b = b;
 this.f = (flag == undefined) ? 7 : flag;
}
RGB.prototype = {
 get : function( add ){
  var rr = ((this.f & 1) != 0) ? add : 0;
  var gg = ((this.f & 2) != 0) ? add : 0;
  var bb = ((this.f & 4) != 0) ? add : 0;
  return _RGB( this.r + rr, this.g + gg, this.b + bb );
 }
};
var GREEN_LIGHT = new RGB( 71,128,128);
var GREEN_DARK = new RGB( 76, 99, 99);
var GREEN_RED = new RGB(255, 96,112);
var GREEN_BLUE = new RGB(112,128,255);
var GREEN_EMERALD = new RGB( 37,218,219);
var GREEN_GRAY = new RGB(169,169,158);
var GREEN_SELECT = new RGB(192,192,192);
var GREEN_BG = _RGB( 98,143,189);
var GREEN_TEXT = _RGB(255,255,255);
var GREEN_SPAN = _RGB(255,255,255);
var GREEN_CHECKED = _RGB( 32,128,176);
var GRAY_LIGHT_1 = _RGB(112,112,120);
var GRAY_LIGHT_2 = _RGB(144,144,152);
var GRAY_DARK_1 = _RGB( 64, 64, 64);
var GRAY_DARK_2 = _RGB( 72, 72, 72);
var GRAY_RED_1 = _RGB(160, 0, 48);
var GRAY_RED_2 = _RGB(224, 0, 80);
var GRAY_SYSTEM = new RGB(192,192,192);
var GRAY_SELECT = new RGB(192,192,192);
var GRAY_BG = _RGB( 96, 96, 96);
var GRAY_TEXT = _RGB(224,224,224);
var GRAY_SPAN = _RGB(255,255,255);
var GRAY_CHECKED = _RGB( 32,128,176);
var PURPLE_BLUE_1 = _RGB(141,141,234);
var PURPLE_BLUE_2 = _RGB(100,100,141);
var PURPLE_GRAY_1 = _RGB(180,180,180);
var PURPLE_GRAY_2 = _RGB(121,121,121);
var PURPLE_SELECT = new RGB(192,192,192);
var PURPLE_BG = _RGB(110,110,130);
var PURPLE_TEXT = _RGB(255,255,255);
var PURPLE_SPAN = _RGB(255,255,255);
var PURPLE_CHECKED = _RGB( 32,128,176);
var GOLD_CHECKED = _RGB( 32,128,176);
var SILVER_CHECKED = _RGB( 32,128,176);
var IRON_CHECKED = _RGB( 32,128,176);
var COLOR = [
 [ 161,161,161,7 ],
 [ 160, 61, 54,7 ],
 [ 246,101,118,6 ],
 [ 255,144,255,2 ],
 [ 255,164, 26,6 ],
 [ 247,235, 88,4 ],
 [ 107,203, 52,3 ],
 [ 76,189,233,3 ],
 [ 87,109,197,3 ],
 [ 181,132,197,3 ],
 [ 161,161,161,7 ]
];
var COLOR_LIGHT;
var COLOR_DARK;
var COLOR_SYSTEM;
var COLOR_SELECT;
var COLOR_BG;
var COLOR_CHECKED;
var IMAGE_CHECKED;
function makeColor( i, editR, editG, editB ){
 if( i == COLOR.length - 1 ){
  COLOR[i][0] = parseInt( document.getElementById( editR ).value );
  COLOR[i][1] = parseInt( document.getElementById( editG ).value );
  COLOR[i][2] = parseInt( document.getElementById( editB ).value );
  COLOR[i][3] = 0;
  if( !skinLockR ) COLOR[i][3] += 1;
  if( !skinLockG ) COLOR[i][3] += 2;
  if( !skinLockB ) COLOR[i][3] += 4;
 }
 var r = COLOR[i][0];
 var g = COLOR[i][1];
 var b = COLOR[i][2];
 COLOR_BG = _RGB( r, g, b );
 var count = 0;
 if( (COLOR[i][3] & 1) != 0 ) count++;
 if( (COLOR[i][3] & 2) != 0 ) count++;
 if( (COLOR[i][3] & 4) != 0 ) count++;
 var offset = 40 - 8 * count;
 if( (COLOR[i][3] & 1) != 0 ) r += offset;
 if( (COLOR[i][3] & 2) != 0 ) g += offset;
 if( (COLOR[i][3] & 4) != 0 ) b += offset;
 COLOR_LIGHT = new RGB( r, g, b, COLOR[i][3] );
 if( (COLOR[i][3] & 1) != 0 ) r -= offset * 2;
 if( (COLOR[i][3] & 2) != 0 ) g -= offset * 2;
 if( (COLOR[i][3] & 4) != 0 ) b -= offset * 2;
 COLOR_DARK = new RGB( r, g, b, COLOR[i][3] );
 COLOR_SYSTEM = COLOR_LIGHT;
 COLOR_SELECT = COLOR_LIGHT;
 if( (COLOR[i][3] & 1) != 0 ) r -= offset * 2;
 if( (COLOR[i][3] & 2) != 0 ) g -= offset * 2;
 if( (COLOR[i][3] & 4) != 0 ) b -= offset * 2;
 COLOR_CHECKED = _RGB( r, g, b );
 IMAGE_CHECKED = ((r == g) && (g == b)) ? _RGB( 32,128,176) : COLOR_CHECKED;
}
var common;
function GraphUI( proc, param ){
 this._proc = proc;
 this._param = param;
 this._curVar = 65;
 this._graph = procGraph();
 this._gWorld = procGWorld();
 this._mode = 0;
 this._rectOffsetX = _DIV( this._gWorld._width , 2 );
 this._rectOffsetY = _DIV( this._gWorld._height, 2 );
 this._rectRatioX = 20.0;
 this._rectRatioY = -20.0;
 this._paramOffsetX = _DIV( this._gWorld._width , 2 );
 this._paramOffsetY = _DIV( this._gWorld._height, 2 );
 this._paramRatioX = 20.0;
 this._paramRatioY = -20.0;
 this._paramMin = 0.0;
 this._paramMax = 360.0;
 this._paramPitch = 1.0;
 this._polarOffsetX = _DIV( this._gWorld._width , 2 );
 this._polarOffsetY = _DIV( this._gWorld._height, 2 );
 this._polarRatioX = 20.0;
 this._polarRatioY = -20.0;
 this._polarMin = 0.0;
 this._polarMax = 360.0;
 this._polarPitch = 1.0;
 this._colorBack = 11;
 this._colorScale = 12;
 this._colorUnit = 14;
 this._colorText = 15;
 this._color = new Array();
 this._unitX = 1.0;
 this._unitY = 1.0;
 this._textX = 1;
 this._textY = 1;
 this._rePlotModeFlag = true;
 this._rePlotAngleFlag = true;
 this._rePlotWindowFlag = true;
 this._tool = 0;
 this._scrollFlag = false;
 this._toolX = 0;
 this._toolY = 0;
 this._posX = 0.0;
 this._posY = 0.0;
 this._posY2 = 0.0;
 this._endX = 0.0;
 this._endY = 0.0;
 this._drawFlag = false;
 this._envType = 0;
 this._envOffsetX = 0.0;
 this._envOffsetY = 0.0;
 this._envRatioX = 0.0;
 this._envRatioY = 0.0;
 this._staticExpr1 = new String();
 this._staticExpr2 = new String();
 this._editExpr1 = new String();
 this._editExpr2 = new String();
 this._staticX = new String();
 this._staticY1 = new String();
 this._staticY2 = new String();
 this._editX = new String();
 this._editY1 = new String();
 this._editY2 = new String();
 this._tableX = new String();
 this._tableY1 = new String();
 this._tableY2 = new String();
 this._editMin = new String();
 this._editMax = new String();
 this._editPitch = new String();
 this._editEnvOffsetX = new String();
 this._editEnvOffsetY = new String();
 this._editEnvRatioX = new String();
 this._editEnvRatioY = new String();
 this._editEnvLeft = new String();
 this._editEnvBottom = new String();
 this._editEnvRight = new String();
 this._editEnvTop = new String();
 onGraphInitEnv( this );
 this.setMode();
}
GraphUI.prototype = {
 setRePlotModeFlag : function( flag ){
  this._rePlotModeFlag = flag;
 },
 rePlotModeFlag : function(){
  return this._rePlotModeFlag;
 },
 setRePlotAngleFlag : function( flag ){
  this._rePlotAngleFlag = flag;
 },
 rePlotAngleFlag : function(){
  return this._rePlotAngleFlag;
 },
 setRePlotWindowFlag : function( flag ){
  this._rePlotWindowFlag = flag;
 },
 rePlotWindowFlag : function(){
  return this._rePlotWindowFlag;
 },
 _getWindow : function(){
  var tmpOffsetX = new _Float();
  var tmpOffsetY = new _Float();
  var tmpRatioX = new _Float();
  var tmpRatioY = new _Float();
  this._gWorld.getWindow( tmpOffsetX, tmpOffsetY, tmpRatioX, tmpRatioY );
  switch( this._graph.mode() ){
  case _GRAPH_MODE_RECT:
   this._rectOffsetX = tmpOffsetX._val;
   this._rectOffsetY = tmpOffsetY._val;
   this._rectRatioX = tmpRatioX ._val;
   this._rectRatioY = tmpRatioY ._val;
   break;
  case _GRAPH_MODE_PARAM:
   this._paramOffsetX = tmpOffsetX._val;
   this._paramOffsetY = tmpOffsetY._val;
   this._paramRatioX = tmpRatioX ._val;
   this._paramRatioY = tmpRatioY ._val;
   break;
  case _GRAPH_MODE_POLAR:
   this._polarOffsetX = tmpOffsetX._val;
   this._polarOffsetY = tmpOffsetY._val;
   this._polarRatioX = tmpRatioX ._val;
   this._polarRatioY = tmpRatioY ._val;
   break;
  }
 },
 _setWindow : function(){
  switch( this._graph.mode() ){
  case _GRAPH_MODE_RECT:
   this._gWorld.setWindow( this._rectOffsetX, this._rectOffsetY, this._rectRatioX, this._rectRatioY );
   break;
  case _GRAPH_MODE_PARAM:
   this._gWorld.setWindow( this._paramOffsetX, this._paramOffsetY, this._paramRatioX, this._paramRatioY );
   break;
  case _GRAPH_MODE_POLAR:
   this._gWorld.setWindow( this._polarOffsetX, this._polarOffsetY, this._polarRatioX, this._polarRatioY );
   break;
  }
 },
 setValue : function( x, y1, y2 ){
  this._editX = floatToString( x );
  this._editY1 = floatToString( y1 );
  if( this._graph.mode() == _GRAPH_MODE_PARAM ){
   this._editY2 = floatToString( y2 );
  } else {
   this._editY2 = "";
  }
  onGraphUpdateValue( this );
  this._graph.mark( x, y1, y2 );
 },
 getMinMaxPitch : function(){
  var ret = false;
  var oldMin;
  var oldMax;
  var oldPitch;
  var x = new _Value();
  switch( this._graph.mode() ){
  case _GRAPH_MODE_RECT:
   break;
  case _GRAPH_MODE_PARAM:
   oldMin = this._paramMin;
   oldMax = this._paramMax;
   oldPitch = this._paramPitch;
   procToken().stringToValue( this._param, this._editMin , x ); this._paramMin = x.toFloat();
   procToken().stringToValue( this._param, this._editMax , x ); this._paramMax = x.toFloat();
   procToken().stringToValue( this._param, this._editPitch, x ); this._paramPitch = x.toFloat();
   if(
    (this._paramMin != oldMin ) ||
    (this._paramMax != oldMax ) ||
    (this._paramPitch != oldPitch)
   ){
    ret = true;
   }
   break;
  case _GRAPH_MODE_POLAR:
   oldMin = this._polarMin;
   oldMax = this._polarMax;
   oldPitch = this._polarPitch;
   var type = new _Integer();
   var updateFlag = new _Boolean();
   this._proc.getAngType( type, updateFlag );
   var tmpValue = newValueArray( 3 );
   procToken().stringToValue( this._param, this._editMin , x ); tmpValue[0].ass( x.toFloat() );
   procToken().stringToValue( this._param, this._editMax , x ); tmpValue[1].ass( x.toFloat() );
   procToken().stringToValue( this._param, this._editPitch, x ); tmpValue[2].ass( x.toFloat() );
   tmpValue[0].angToAng( type._val, _ANG_TYPE_DEG ); this._polarMin = tmpValue[0].toFloat();
   tmpValue[1].angToAng( type._val, _ANG_TYPE_DEG ); this._polarMax = tmpValue[1].toFloat();
   tmpValue[2].angToAng( type._val, _ANG_TYPE_DEG ); this._polarPitch = tmpValue[2].toFloat();
   if(
    (this._polarMin != oldMin ) ||
    (this._polarMax != oldMax ) ||
    (this._polarPitch != oldPitch)
   ){
    ret = true;
   }
   break;
  }
  return ret;
 },
 setMinMaxPitch : function(){
  switch( this._graph.mode() ){
  case _GRAPH_MODE_RECT:
   this._editMin = "";
   this._editMax = "";
   this._editPitch = "";
   break;
  case _GRAPH_MODE_PARAM:
   this._editMin = floatToStringPoint( this._paramMin );
   this._editMax = floatToStringPoint( this._paramMax );
   this._editPitch = floatToStringPoint( this._paramPitch );
   break;
  case _GRAPH_MODE_POLAR:
   var type = new _Integer();
   var updateFlag = new _Boolean();
   this._proc.getAngType( type, updateFlag );
   var tmpValue = newValueArray( 3 );
   tmpValue[0].ass( this._polarMin ); tmpValue[0].angToAng( _ANG_TYPE_DEG, type._val );
   tmpValue[1].ass( this._polarMax ); tmpValue[1].angToAng( _ANG_TYPE_DEG, type._val );
   tmpValue[2].ass( this._polarPitch ); tmpValue[2].angToAng( _ANG_TYPE_DEG, type._val );
   this._editMin = floatToStringPoint( tmpValue[0].toFloat() );
   this._editMax = floatToStringPoint( tmpValue[1].toFloat() );
   this._editPitch = floatToStringPoint( tmpValue[2].toFloat() );
   break;
  }
  onGraphUpdatePitch( this );
 },
 redraw : function(){
  this._graph.clear(
   this.indexToColor( this._colorBack ),
   this.indexToColor( this._colorScale ),
   this.indexToColor( this._colorUnit ), this._unitX, this._unitY,
   this.indexToColor( this._colorText ), this._textX, this._textY
   );
  if( this.indexToColor( this._color[this._graph._curIndex] ) != this._graph.color() ){
   this._graph.setColor( this.indexToColor( this._color[this._graph._curIndex] ) );
  }
try {
  this._graph.rePlot();
} catch( e ){ catchError( e ); }
 },
 _rePlotWindow : function(){
  if( this._rePlotWindowFlag ){
   switch( this._graph.mode() ){
   case _GRAPH_MODE_RECT:
    this.clear();
    this.draw();
    break;
   case _GRAPH_MODE_PARAM:
   case _GRAPH_MODE_POLAR:
    if( this.getMinMaxPitch() ){
     this.clear();
     this.draw();
    } else {
     this.redraw();
    }
    break;
   }
  } else {
   this.redraw();
  }
 },
 indexToColor : function( index ){
  switch( index ){
  case 0: return 0;
  case 1: return 1;
  case 2: return 249;
  case 3: return 2;
  case 4: return 250;
  case 5: return 3;
  case 6: return 251;
  case 7: return 4;
  case 8: return 252;
  case 9: return 5;
  case 10: return 253;
  case 11: return 6;
  case 12: return 254;
  case 13: return 7;
  case 14: return 247;
  case 15: return 255;
  }
  return 0;
 },
 startTool : function( x, y ){
  this._toolX = x;
  this._toolY = y;
  if(
   (this._toolX >= 0 ) &&
   (this._toolY >= 0 ) &&
   (this._toolX < (0 + this._gWorld._width )) &&
   (this._toolY < (0 + this._gWorld._height))
  ){
   switch( this._tool ){
   case 0:
    var ans = new _GraphAns();
    if( this._graph.getAns(
     this._toolX - 0 ,
     this._toolY - 0 ,
     ans
    ) ){
     this._posX = ans._x;
     this._posY = ans._y1;
     this._posY2 = ans._y2;
     this._editX = floatToString( this._posX );
     this._editY1 = floatToString( this._posY );
     if( this._graph.mode() == _GRAPH_MODE_PARAM ){
      this._editY2 = floatToString( this._posY2 );
     }
     onGraphUpdateValue( this );
     this._drawFlag = true;
    } else {
     this._editX = "";
     this._editY1 = "";
     this._editY2 = "";
     onGraphUpdateValue( this );
     this._drawFlag = false;
    }
    break;
   case 2:
    this._posX = this._gWorld.wndPosX( this._toolX - 0 );
    this._posY = this._gWorld.wndPosY( this._toolY - 0 );
    this._endX = this._posX;
    this._endY = this._posY;
    break;
   }
   if( !this._scrollFlag ){
    this._scrollFlag = true;
    switch( this._tool ){
    case 0:
     if( this._drawFlag ){
      this._graph.mark( this._posX, this._posY, this._posY2 );
     }
     break;
    case 2:
     this._graph.markRect( this._posX, this._posY, this._endX, this._endY );
     break;
    case 1:
     this._gWorld.beginScroll( this._toolX, this._toolY );
     break;
    }
   }
  }
 },
 endTool : function(){
  var tmp;
  if( this._scrollFlag ){
   this._scrollFlag = false;
   switch( this._tool ){
   case 0:
    if( this._drawFlag ){
     this._graph.mark( this._posX, this._posY, this._posY2 );
    }
    break;
   case 2:
    this._graph.mark( this._posX, this._posY, this._endX, this._endY );
    if( this._posX > this._endX ){
     tmp = this._posX; this._posX = this._endX; this._endX = tmp;
    }
    if( this._posY > this._endY ){
     tmp = this._posY; this._posY = this._endY; this._endY = tmp;
    }
    switch( this._graph.mode() ){
    case _GRAPH_MODE_RECT:
     this._gWorld.setWindowIndirect( this._posX, this._posY, this._endX, this._endY );
     break;
    case _GRAPH_MODE_PARAM:
    case _GRAPH_MODE_POLAR:
     tmp = (this._endX - this._posX) * this._gWorld._width / this._gWorld._height;
     tmp -= this._endX - this._posX;
     this._posX -= tmp / 2.0;
     this._endX += tmp / 2.0;
     this._gWorld.setWindowIndirect( this._posX, this._posY, this._endX, this._endY );
     break;
    }
    this._getWindow();
    this._rePlotWindow();
    break;
   case 1:
    this._gWorld.endScroll();
    this._getWindow();
    if( this._rePlotWindowFlag ){
     this.clear();
     this.draw();
    }
    break;
   }
  }
 },
 moveTool : function( x, y ){
  if( this._scrollFlag ){
   switch( this._tool ){
   case 0:
    if( (this._toolX != x) || (this._toolY != y) ){
     if( this._drawFlag ){
      this._graph.mark( this._posX, this._posY, this._posY2 );
     }
     this._toolX = x;
     this._toolY = y;
     var ans = new _GraphAns();
     if( this._graph.getAns(
      this._toolX - 0 ,
      this._toolY - 0 ,
      ans
     ) ){
      this._posX = ans._x;
      this._posY = ans._y1;
      this._posY2 = ans._y2;
      this._editX = floatToString( this._posX );
      this._editY1 = floatToString( this._posY );
      if( this._graph.mode() == _GRAPH_MODE_PARAM ){
       this._editY2 = floatToString( this._posY2 );
      }
      onGraphUpdateValue( this );
      this._drawFlag = true;
     } else {
      this._editX = "";
      this._editY1 = "";
      this._editY2 = "";
      onGraphUpdateValue( this );
      this._drawFlag = false;
     }
     if( this._drawFlag ){
      this._graph.mark( this._posX, this._posY, this._posY2 );
     }
    }
    break;
   case 2:
    if( (this._toolX != x) || (this._toolY != y) ){
     this._graph.markRect( this._posX, this._posY, this._endX, this._endY );
     this._toolX = x;
     this._toolY = y;
     this._endX = this._gWorld.wndPosX( this._toolX - 0 );
     this._endY = this._gWorld.wndPosY( this._toolY - 0 );
     switch( this._graph.mode() ){
     case _GRAPH_MODE_RECT:
      break;
     case _GRAPH_MODE_PARAM:
     case _GRAPH_MODE_POLAR:
     if( _ABS( this._endX - this._posX ) < _ABS( this._endY - this._posY ) ){
       if( (this._endX - this._posX) < 0.0 ){
        this._endX = this._posX - _ABS( this._endY - this._posY );
       } else {
        this._endX = this._posX + _ABS( this._endY - this._posY );
       }
      } else if( _ABS( this._endX - this._posX ) > _ABS( this._endY - this._posY ) ){
       if( (this._endY - this._posY) < 0.0 ){
        this._endY = this._posY - _ABS( this._endX - this._posX );
       } else {
        this._endY = this._posY + _ABS( this._endX - this._posX );
       }
      }
      break;
     }
     this._graph.markRect( this._posX, this._posY, this._endX, this._endY );
    }
    break;
   case 1:
    if( (this._toolX != x) || (this._toolY != y) ){
     this._gWorld.scroll( x, y );
     this._toolX = x;
     this._toolY = y;
     this.redraw();
    }
    break;
   }
  }
 },
 zoomIn : function(){
  var offsetX = new _Float();
  var offsetY = new _Float();
  var ratioX = new _Float();
  var ratioY = new _Float();
  var centerX = _DIV( this._gWorld._width , 2 );
  var centerY = _DIV( this._gWorld._height, 2 );
  this._gWorld.getWindow( offsetX, offsetY, ratioX, ratioY );
  offsetX.set( centerX + ((offsetX._val - centerX) * 2.0) );
  offsetY.set( centerY + ((offsetY._val - centerY) * 2.0) );
  ratioX .set( ratioX._val * 2.0 );
  ratioY .set( ratioY._val * 2.0 );
  this._gWorld.setWindow( offsetX._val, offsetY._val, ratioX._val, ratioY._val );
  this._getWindow();
  this._rePlotWindow();
 },
 zoomOut : function(){
  var offsetX = new _Float();
  var offsetY = new _Float();
  var ratioX = new _Float();
  var ratioY = new _Float();
  var centerX = _DIV( this._gWorld._width , 2 );
  var centerY = _DIV( this._gWorld._height, 2 );
  this._gWorld.getWindow( offsetX, offsetY, ratioX, ratioY );
  offsetX.set( centerX + ((offsetX._val - centerX) / 2.0) );
  offsetY.set( centerY + ((offsetY._val - centerY) / 2.0) );
  ratioX .set( ratioX._val / 2.0 );
  ratioY .set( ratioY._val / 2.0 );
  this._gWorld.setWindow( offsetX._val, offsetY._val, ratioX._val, ratioY._val );
  this._getWindow();
  this._rePlotWindow();
 },
 clearTable : function(){
  onGraphClearTable( this );
  this._editX = "";
  this._editY1 = "";
  this._editY2 = "";
  onGraphUpdateValue( this );
 },
 draw : function(){
  var rePlotFlag;
  var savePitch;
  switch ( this._graph.mode() ) {
  case _GRAPH_MODE_RECT:
  case _GRAPH_MODE_POLAR:
   if( this._editExpr1 != this._graph.expr() ){
    this.clearTable();
    this._graph.setExpr( this._editExpr1 );
    rePlotFlag = false;
   } else {
    rePlotFlag = true;
   }
   break;
  case _GRAPH_MODE_PARAM:
   if(
    (this._editExpr1 != this._graph.expr1()) ||
    (this._editExpr2 != this._graph.expr2())
   ){
    this.clearTable();
    this._graph.setExpr1( this._editExpr1 );
    this._graph.setExpr2( this._editExpr2 );
    rePlotFlag = false;
   } else {
    rePlotFlag = true;
   }
   break;
  }
  if( this.indexToColor( this._color[this._graph._curIndex] ) != this._graph.color() ){
   this._graph.setColor( this.indexToColor( this._color[this._graph._curIndex] ) );
  }
try {
  switch( this._graph.mode() ){
  case _GRAPH_MODE_RECT:
   this._graph.setStart( this._gWorld.wndPosX( 0 ) );
   this._graph.setEnd ( this._gWorld.wndPosX( this._gWorld._width ) );
   this._graph.setStep ( 0.0 );
   if( rePlotFlag ){
    onGraphStartRePlot();
    this._graph.rePlot( this._proc, this._param );
    onGraphEndRePlot();
   } else {
    onGraphStartPlot();
    this._graph.plot( this._proc, this._param );
    onGraphEndPlot();
   }
   break;
  case _GRAPH_MODE_PARAM:
   savePitch = this._paramPitch;
   this.getMinMaxPitch();
   this._graph.setStart( this._paramMin );
   this._graph.setEnd ( this._paramMax );
   this._graph.setStep ( this._paramPitch );
   if( rePlotFlag && (this._paramPitch == savePitch) ){
    onGraphStartRePlot();
    this._graph.rePlot( this._proc, this._param );
    onGraphEndRePlot();
   } else {
    onGraphStartPlot();
    this._graph.plot( this._proc, this._param );
    onGraphEndPlot();
   }
   break;
  case _GRAPH_MODE_POLAR:
   savePitch = this._polarPitch;
   this.getMinMaxPitch();
   var tmpValue = newValueArray( 3 );
   tmpValue[0].ass( this._polarMin ); tmpValue[0].angToAng( _ANG_TYPE_DEG, complexAngType() );
   tmpValue[1].ass( this._polarMax ); tmpValue[1].angToAng( _ANG_TYPE_DEG, complexAngType() );
   tmpValue[2].ass( this._polarPitch ); tmpValue[2].angToAng( _ANG_TYPE_DEG, complexAngType() );
   this._graph.setStart( tmpValue[0].toFloat() );
   this._graph.setEnd ( tmpValue[1].toFloat() );
   this._graph.setStep ( tmpValue[2].toFloat() );
   if( rePlotFlag && (this._polarPitch == savePitch) ){
    onGraphStartRePlot();
    this._graph.rePlot( this._proc, this._param );
    onGraphEndRePlot();
   } else {
    onGraphStartPlot();
    this._graph.plot( this._proc, this._param );
    onGraphEndPlot();
   }
   break;
  }
} catch( e ){ catchError( e ); }
 },
 clear : function(){
  this._graph.delAns();
  this.redraw();
 },
 setMode : function( mode ){
  var newMode;
  if( mode != undefined ){
   this._mode = mode;
  }
  switch( this._mode ){
  case 0: newMode = _GRAPH_MODE_RECT ; onGraphSetLogScaleX( this, 0.0 ); onGraphSetLogScaleY( this, 0.0 ); break;
  case 1 : newMode = _GRAPH_MODE_RECT ; onGraphSetLogScaleX( this, 10.0 ); onGraphSetLogScaleY( this, 0.0 ); break;
  case 2 : newMode = _GRAPH_MODE_RECT ; onGraphSetLogScaleX( this, 0.0 ); onGraphSetLogScaleY( this, 10.0 ); break;
  case 3: newMode = _GRAPH_MODE_RECT ; onGraphSetLogScaleX( this, 10.0 ); onGraphSetLogScaleY( this, 10.0 ); break;
  case 4 : newMode = _GRAPH_MODE_PARAM; break;
  case 5 : newMode = _GRAPH_MODE_POLAR; break;
  }
  if( (mode == undefined) || (this._graph.mode() != newMode) ){
   this._editExpr1 = "";
   this._editExpr2 = "";
   onGraphClearExpr( this );
   switch( newMode ){
   case _GRAPH_MODE_RECT:
    this._param._var._label.setLabel( _CHAR( 'x' ), "x", true );
    onGraphSetIndex( this, _CHAR( 'x' ) );
    this._staticExpr1 = "y=";
    this._staticExpr2 = "";
    this._staticX = "x=";
    this._staticY1 = "y=";
    this._staticY2 = "";
    this._tableX = "x";
    this._tableY1 = "y";
    this._tableY2 = "";
    break;
   case _GRAPH_MODE_PARAM:
    this._param._var._label.setLabel( _CHAR( 't' ), "t", true );
    onGraphSetIndex( this, _CHAR( 't' ) );
    this._staticExpr1 = "x=";
    this._staticExpr2 = "y=";
    this._staticX = "t=";
    this._staticY1 = "x=";
    this._staticY2 = "y=";
    this._tableX = "t";
    this._tableY1 = "x";
    this._tableY2 = "y";
    break;
   case _GRAPH_MODE_POLAR:
    this._param._var._label.setLabel( _CHAR( 't' ), "t", true );
    onGraphSetIndex( this, _CHAR( 't' ) );
    this._staticExpr1 = "r=";
    this._staticExpr2 = "";
    this._staticX = "t=";
    this._staticY1 = "r=";
    this._staticY2 = "";
    this._tableX = "t";
    this._tableY1 = "r";
    this._tableY2 = "";
    break;
   }
   onGraphUpdateStatic( this );
   this.clearTable();
   onGraphSetMode( this, newMode );
   this.setMinMaxPitch();
   this._setWindow();
   this.clear();
  } else {
   if( this._rePlotModeFlag ){
    this.clear();
    this.draw();
   } else {
    this.redraw();
   }
  }
 },
 setAngType : function( type ){
  this.getMinMaxPitch();
  this._proc.setAngType( type, false );
  this.setMinMaxPitch();
  if( this._rePlotAngleFlag ){
   this.clear();
   this.draw();
  }
 },
 setCurVar : function( index ){
  this._curVar = index;
 },
 buttonRCL : function(){
  return "@" + String.fromCharCode( this._curVar );
 },
 setTool : function( tool ){
  this._tool = tool;
 },
 setEnvType : function( type ){
  this._envType = type;
 },
 startEnv : function(){
  var tmpOffsetX = new _Float();
  var tmpOffsetY = new _Float();
  var tmpRatioX = new _Float();
  var tmpRatioY = new _Float();
  this._gWorld.getWindow( tmpOffsetX, tmpOffsetY, tmpRatioX, tmpRatioY );
  this._envOffsetX = tmpOffsetX._val;
  this._envOffsetY = tmpOffsetY._val;
  this._envRatioX = tmpRatioX ._val;
  this._envRatioY = tmpRatioY ._val;
  this._editEnvOffsetX = floatToStringPoint( this._envOffsetX );
  this._editEnvOffsetY = floatToStringPoint( this._envOffsetY );
  this._editEnvRatioX = floatToStringPoint( this._envRatioX );
  this._editEnvRatioY = floatToStringPoint( this._envRatioY );
  onGraphUpdateEnvOffset( this );
  this.resetEnvWindow();
 },
 resetEnvOffset : function(){
  var left = parseFloat( this._editEnvLeft );
  var bottom = parseFloat( this._editEnvBottom );
  var right = parseFloat( this._editEnvRight );
  var top = parseFloat( this._editEnvTop );
  if( _ISNAN( left ) || _ISNAN( bottom ) || _ISNAN( right ) || _ISNAN( top ) ){
   return;
  }
  var svOffsetX = new _Float();
  var svOffsetY = new _Float();
  var svRatioX = new _Float();
  var svRatioY = new _Float();
  this._gWorld.getWindow( svOffsetX, svOffsetY, svRatioX, svRatioY );
  this._gWorld.setWindowIndirect( left, bottom, right, top );
  var tmpOffsetX = new _Float();
  var tmpOffsetY = new _Float();
  var tmpRatioX = new _Float();
  var tmpRatioY = new _Float();
  this._gWorld.getWindow( tmpOffsetX, tmpOffsetY, tmpRatioX, tmpRatioY );
  this._envOffsetX = tmpOffsetX._val;
  this._envOffsetY = tmpOffsetY._val;
  this._envRatioX = tmpRatioX ._val;
  this._envRatioY = tmpRatioY ._val;
  this._editEnvOffsetX = floatToStringPoint( this._envOffsetX );
  this._editEnvOffsetY = floatToStringPoint( this._envOffsetY );
  this._editEnvRatioX = floatToStringPoint( this._envRatioX );
  this._editEnvRatioY = floatToStringPoint( this._envRatioY );
  onGraphUpdateEnvOffset( this );
  this._gWorld.setWindow( svOffsetX._val, svOffsetY._val, svRatioX._val, svRatioY._val );
 },
 resetEnvWindow : function(){
  var svOffsetX = new _Float();
  var svOffsetY = new _Float();
  var svRatioX = new _Float();
  var svRatioY = new _Float();
  this._gWorld.getWindow( svOffsetX, svOffsetY, svRatioX, svRatioY );
  switch( this._graph.mode() ){
  case _GRAPH_MODE_RECT:
   this._gWorld.setWindow( this._envOffsetX, this._envOffsetY, this._envRatioX, this._envRatioY );
   break;
  case _GRAPH_MODE_PARAM:
  case _GRAPH_MODE_POLAR:
   this._gWorld.setWindow( this._envOffsetX, this._envOffsetY, this._envRatioX, -this._envRatioX );
   break;
  }
  var left = this._gWorld.wndPosX( 0 );
  var top = this._gWorld.wndPosY( 0 );
  var right = this._gWorld.wndPosX( this._gWorld._width );
  var bottom = this._gWorld.wndPosY( this._gWorld._height );
  this._editEnvLeft = floatToStringPoint( left );
  this._editEnvBottom = floatToStringPoint( bottom );
  this._editEnvRight = floatToStringPoint( right );
  this._editEnvTop = floatToStringPoint( top );
  onGraphUpdateEnvWindow( this );
  this._gWorld.setWindow( svOffsetX._val, svOffsetY._val, svRatioX._val, svRatioY._val );
 },
 resetEnv : function(){
  this._envOffsetX = _DIV( this._gWorld._width , 2 );
  this._envOffsetY = _DIV( this._gWorld._height, 2 );
  this._envRatioX = 20.0;
  this._envRatioY = -20.0;
  this._editEnvOffsetX = floatToStringPoint( this._envOffsetX );
  this._editEnvOffsetY = floatToStringPoint( this._envOffsetY );
  this._editEnvRatioX = floatToStringPoint( this._envRatioX );
  this._editEnvRatioY = floatToStringPoint( this._envRatioY );
  onGraphUpdateEnvOffset( this );
  this.resetEnvWindow();
 },
 endEnv : function(){
  var offsetX = parseFloat( this._editEnvOffsetX );
  var offsetY = parseFloat( this._editEnvOffsetY );
  var ratioX = parseFloat( this._editEnvRatioX );
  var ratioY = parseFloat( this._editEnvRatioY );
  if( _ISNAN( offsetX ) || _ISNAN( offsetY ) || _ISNAN( ratioX ) || _ISNAN( ratioY ) ){
   return;
  }
  this._envOffsetX = offsetX;
  this._envOffsetY = offsetY;
  this._envRatioX = ratioX;
  this._envRatioY = ratioY;
  switch( this._graph.mode() ){
  case _GRAPH_MODE_RECT:
   this._rectOffsetX = this._envOffsetX;
   this._rectOffsetY = this._envOffsetY;
   this._rectRatioX = this._envRatioX;
   this._rectRatioY = this._envRatioY;
   break;
  case _GRAPH_MODE_PARAM:
   this._paramOffsetX = this._envOffsetX;
   this._paramOffsetY = this._envOffsetY;
   this._paramRatioX = this._envRatioX;
   this._paramRatioY = -this._envRatioX;
   break;
  case _GRAPH_MODE_POLAR:
   this._polarOffsetX = this._envOffsetX;
   this._polarOffsetY = this._envOffsetY;
   this._polarRatioX = this._envRatioX;
   this._polarRatioY = -this._envRatioX;
   break;
  }
  this._setWindow();
  this._rePlotWindow();
 }
};
function _addGraphEventListener( target, event, func ){
 if( !!target.addEventListener ){
  target.addEventListener( event, func, false );
 } else if( !!target.attachEvent ){
  target.attachEvent( "on" + event, func );
 } else {
  target["on" + event] = func;
 }
}
function _addGraphEventListenerById( id, event, func ){
 _addGraphEventListener( document.getElementById( id ), event, func );
}
function _removeGraphEventListener( target, event, func ){
 if( !!target.removeEventListener ){
  target.removeEventListener( event, func, false );
 } else if( !!target.detachEvent ){
  target.detachEvent( "on" + event, func );
 } else {
  target["on" + event] = null;
 }
}
var _graph_event_canvas = null;
var _graph_mouse_x;
var _graph_mouse_y;
var _graph_touch_start = false;
var _graph_touch_x = new Array();
var _graph_touch_y = new Array();
var _graph_touch_x0;
var _graph_touch_y0;
function addGraphEvent( canvas ){
 if( _graph_event_canvas != null ){
  removeGraphEvent();
 }
 _graph_event_canvas = canvas;
 if( isPC() ){
  _addGraphEventListener( _graph_event_canvas.element(), "mousedown", _onGraphMouseDown );
  _addGraphEventListener( _graph_event_canvas.element(), "mousemove", _onGraphMouseMove );
  _addGraphEventListener( _graph_event_canvas.element(), "mouseout" , _onGraphMouseOut );
  _addGraphEventListener( _graph_event_canvas.element(), "mouseover", _onGraphMouseOver );
  _addGraphEventListener( _graph_event_canvas.element(), "mouseup" , _onGraphMouseUp );
 } else {
  _addGraphEventListener( document, "touchstart", _onGraphTouchStart );
  _addGraphEventListener( document, "touchmove" , _onGraphTouchMove );
  _addGraphEventListener( document, "touchend" , _onGraphTouchEnd );
 }
}
function removeGraphEvent(){
 if( _graph_event_canvas == null ){
  return;
 }
 if( isPC() ){
  _removeGraphEventListener( _graph_event_canvas.element(), "mousedown", _onGraphMouseDown );
  _removeGraphEventListener( _graph_event_canvas.element(), "mousemove", _onGraphMouseMove );
  _removeGraphEventListener( _graph_event_canvas.element(), "mouseout" , _onGraphMouseOut );
  _removeGraphEventListener( _graph_event_canvas.element(), "mouseover", _onGraphMouseOver );
  _removeGraphEventListener( _graph_event_canvas.element(), "mouseup" , _onGraphMouseUp );
 } else {
  _removeGraphEventListener( document, "touchstart", _onGraphTouchStart );
  _removeGraphEventListener( document, "touchmove" , _onGraphTouchMove );
  _removeGraphEventListener( document, "touchend" , _onGraphTouchEnd );
 }
 _graph_event_canvas = null;
}
function _getGraphMouse( e ){
 if( _graph_event_canvas == null ){
  return false;
 }
 _graph_mouse_x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - _graph_event_canvas.left();
 _graph_mouse_y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop - _graph_event_canvas.top ();
 return true;
}
function _onGraphMouseDown( e ){
 if( _getGraphMouse( e ) ){
  onGraphMouseDown();
 }
}
function _onGraphMouseMove( e ){
 if( _getGraphMouse( e ) ){
  onGraphMouseMove();
 }
}
function _onGraphMouseOut( e ){
 if( _getGraphMouse( e ) ){
  onGraphMouseOut();
 }
}
function _onGraphMouseOver( e ){
 if( _getGraphMouse( e ) ){
  onGraphMouseOver();
 }
}
function _onGraphMouseUp( e ){
 if( _getGraphMouse( e ) ){
  onGraphMouseUp();
 }
}
function graphMouseX(){
 return _graph_mouse_x;
}
function graphMouseY(){
 return _graph_mouse_y;
}
function _getGraphTouch( e ){
 if( _graph_event_canvas == null ){
  return false;
 }
 _graph_touch_x = new Array();
 _graph_touch_y = new Array();
 for( var i = 0; i < e.touches.length; i++ ){
  _graph_touch_x[i] = e.touches[i].pageX - _graph_event_canvas.left();
  _graph_touch_y[i] = e.touches[i].pageY - _graph_event_canvas.top ();
 }
 return true;
}
function _onGraphTouchStart( e ){
 if( _getGraphTouch( e ) ){
  _graph_touch_x0 = _graph_touch_x[0];
  _graph_touch_y0 = _graph_touch_y[0];
  if(
   (_graph_touch_x0 >= 0) && (_graph_touch_x0 < _graph_event_canvas.width ()) &&
   (_graph_touch_y0 >= 0) && (_graph_touch_y0 < _graph_event_canvas.height())
  ){
   _graph_touch_start = true;
   onGraphTouchStart();
   e.preventDefault();
  }
 }
}
function _onGraphTouchMove( e ){
 if( _graph_touch_start ){
  if( _getGraphTouch( e ) ){
   _graph_touch_x0 = _graph_touch_x[0];
   _graph_touch_y0 = _graph_touch_y[0];
   onGraphTouchMove();
   e.preventDefault();
  }
 }
}
function _onGraphTouchEnd( e ){
 if( _graph_touch_start ){
  _graph_touch_start = false;
  if( _getGraphTouch( e ) ){
   onGraphTouchEnd();
   e.preventDefault();
  }
 }
}
function graphTouchNum(){
 return _graph_touch_x.length;
}
function graphTouchX( index ){
 return ((index < _graph_touch_x.length) ? _graph_touch_x[index] : _graph_touch_x0);
}
function graphTouchY( index ){
 return ((index < _graph_touch_y.length) ? _graph_touch_y[index] : _graph_touch_y0);
}
var graphUI;
function NativeRequest(){
 this.e = document.createElement( "iframe" );
 this.e.setAttribute( "width", 0 );
 this.e.setAttribute( "height", 0 );
 this.e.setAttribute( "style", "position:absolute;left:0;top:0" );
 this.e.setAttribute( "scrolling", "no" );
 this.e.setAttribute( "frameborder", "no" );
 this.e.setAttribute( "src", "about:blank" );
 document.body.appendChild( this.e );
 this.s = "";
}
NativeRequest.prototype = {
 setScheme : function( scheme ){
  this.s = scheme;
 },
 send : function( url ){
  if( this.s.length > 0 ){
   this.e.src = this.s + "://" + url;
  } else {
   this.e.src = url;
  }
 }
};
var nativeRequest;
var _preference;
var _enable_write_profile = false;
var _profile_prefix = new String();
function initProfile( useStorage ){
 _preference = new _Preference( useStorage );
}
function setEnableWriteProfile( flag ){
 _enable_write_profile = flag;
}
function setProfilePrefix( prefix ){
 _profile_prefix = prefix;
}
function getProfileString( key, subKey, defString ){
 return _preference.get( _profile_prefix + key + subKey, defString );
}
function getProfileInt( key, subKey, defValue ){
 return parseInt( getProfileString( key, subKey, "" + defValue ) );
}
function getProfileFloat( key, subKey, defValue ){
 return parseFloat( getProfileString( key, subKey, "" + defValue ) );
}
function writeProfileString( key, subKey, string ){
 if( !_enable_write_profile ){
  return;
 }
 _preference.set( _profile_prefix + key + subKey, string );
}
function writeProfileInt( key, subKey, value ){
 writeProfileString( key, subKey, "" + value );
}
function writeProfileFloat( key, subKey, value ){
 writeProfileString( key, subKey, "" + value );
}
function clearProfile( prefix ){
 _preference.clear( prefix );
}
function beginGetProfile( key ){
 _preference.beginRead( _profile_prefix + key );
}
function getProfile(){
 return _preference.read();
}
function endGetProfile(){
 _preference.endRead();
}
function beginWriteProfile(){
 if( !_enable_write_profile ){
  return;
 }
 _preference.beginWrite();
}
function writeProfile( str ){
 if( !_enable_write_profile ){
  return;
 }
 _preference.write( str );
}
function endWriteProfile( key ){
 if( !_enable_write_profile ){
  return;
 }
 _preference.endWrite( _profile_prefix + key );
}
function profileNum(){
 return _preference.num();
}
function getProfileKey( index ){
 return _preference.getKey( index );
}
function doExportProfile( textarea ){
 var i, j;
 var tmp = new Array();
 var num2 = 0;
 var num = profileNum();
 for( i = 0; i < num; i++ ){
  var key = getProfileKey( i );
  if( (key != null) && (key.indexOf( _profile_prefix ) == 0) && (key.indexOf( _profile_prefix + "TMP_" ) != 0) ){
   key = key.slice( _profile_prefix.length );
   if( key.indexOf( "FUNC_" ) == 0 ){
    var tmpValue = new _String();
    tmpValue.set( getProfileString( key, "", "" ) );
    tmpValue.replace( "\\", "¥" );
    tmpValue.replace( "\t", "\\t" );
    tmpValue.replace( "\r", "\\r" );
    tmpValue.replace( "\n", "\\n" );
    tmp[num2] = key + "=" + tmpValue.str();
   } else {
    tmp[num2] = key + "=" + getProfileString( key, "", "" );
   }
   for( j = 0; j < num2; j++ ){
    if( tmp[j] == tmp[num2] ){
     break;
    }
   }
   if( j >= num2 ){
    num2++;
   }
  }
 }
 var text = new String();
 for( i = 0; i < num2; i++ ){
  text += tmp[i] + "\n";
 }
 document.getElementById( textarea ).value = text;
 doButtonUIProfile( true );
}
function splitData( data ){
 var dataLen = data.length;
 while( dataLen > 0 ){
  if( !isCharEnter( data, dataLen - 1 ) ){
   break;
  }
  dataLen--;
 }
 data = data.substr( 0, dataLen );
 var data2 = new _String( data );
 data2.replaceNewLine();
 if( data2.str().indexOf( "\n" ) < 0 ){
  var tmp = new Array();
  tmp[0] = data2.str();
  return tmp;
 }
 var data3 = data2.str().split( "\n" );
 for( var i = 0; i < data3.length; i++ ){
  for( var j = 0; j < data3[i].length; j++ ){
   if( !isCharSpace( data3[i], j ) && (data3[i].charAt( j ) != '\t') ){
    data3[i] = data3[i].slice( j );
    break;
   }
  }
 }
 return data3;
}
function doImportProfile( textarea ){
 var i, j, k, l;
 var offset;
 for( offset = 0; ; offset++ ){
  var tmp = getProfileString( "IMAGE_PATH_", "" + (offset + 1), "" );
  if( tmp.length == 0 ){
   break;
  }
 }
 var text = document.getElementById( textarea ).value;
 var profile = splitData( text );
 for( i = 0; i < profile.length; i++ ){
  j = profile[i].indexOf( "=" );
  if( j > 0 ){
   var key = profile[i].substring( 0, j );
   var value = profile[i].slice( j + 1 );
   var valueLen = value.length;
   while( valueLen > 0 ){
    if( !isCharSpace( value, valueLen - 1 ) && (value.charAt( valueLen - 1 ) != '\t') ){
     break;
    }
    valueLen--;
   }
   value = value.substr( 0, valueLen );
   if( key.indexOf( "FUNC_" ) == 0 ){
    var tmpValue = new _String();
    tmpValue.set( value );
    tmpValue.replace( "\\t", "\t" );
    tmpValue.replace( "\\r", "\r" );
    tmpValue.replace( "\\n", "\n" );
    tmpValue.replace( "¥" , "\\" );
    value = tmpValue.str();
   } else if( key == "IMAGE_" ){
    var value2 = new String();
    for( k = 0; k < value.length; k++ ){
     var tmp = "" + value.charAt( k );
     if( (tmp == "%") && (k <= value.length - 3) ){
      if( (value.charAt( k + 1 ) == '7') && (value.charAt( k + 2 ) == 'B') ){
       for( l = k + 3; l < value.length; l++ ){
        if( value.charAt( l ) == '%' ){
         break;
        }
       }
       if( l - (k + 3) > 0 ){
        var num = "" + (parseInt( value.substring( k + 3, l ) ) + offset);
        tmp = "%7B" + num;
        k += 2 + num.length;
       }
      }
     }
     value2 += tmp;
    }
    var oldValue = getProfileString( key, "", "" );
    if( value2.length == 0 ){
     value2 = oldValue;
    } else if( oldValue.length > 0 ){
     value2 = oldValue + "&" + value2;
    }
    value = value2;
   } else if( key.indexOf( "IMAGE_PATH_" ) == 0 ){
    var num = "" + (parseInt( key.slice( 11 ) ) + offset);
    key = "IMAGE_PATH_" + num;
   } else if( key.indexOf( "IMAGE_" ) == 0 ){
    var num = "" + (parseInt( key.slice( 6 ) ) + offset);
    key = "IMAGE_" + num;
   }
   writeProfileString( key, "", value );
  }
 }
 location.replace( "index.html?menu=option" );
}
function doClearStorage( button ){
 if( canUseStorage() ){
  document.getElementById( button ).disabled = true;
  clearStorage( _profile_prefix + "TMP_" );
  if( electron != null ){
   electron.clearExtFunc();
  }
  location.replace( "index.html?menu=option" );
 }
}
function doClearCookie( button ){
 if( canUseCookie() ){
  document.getElementById( button ).disabled = true;
  clearCookie( _profile_prefix + "TMP_" );
  if( electron != null ){
   electron.clearExtFunc();
  }
  location.replace( "index.html?menu=option" );
 }
}
var _key_state = 0;
var _key_array = new Array();
_key_array[0] = 16;
_key_array[1] = 17;
function setKeyArray( array ){
 var len = array.length;
 _key_array = new Array();
 for( var i = 0; i < len; i++ ){
  _key_array[i] = array[i];
 }
}
function keyBit( key ){
 var len = _key_array.length;
 for( var i = 0; i < len; i++ ){
  if( _key_array[i] == key ){
   return _SHIFTL( 1, i );
  }
 }
 return 0;
}
function keyDown( e ){
 var k = keyBit( e.keyCode );
 if( _AND( _key_state, k ) == 0 ){
  _key_state += k;
 }
 if( onKeyDown( e.keyCode ) ){
  e.preventDefault();
 }
}
function keyUp( e ){
 var k = keyBit( e.keyCode );
 if( _AND( _key_state, k ) != 0 ){
  _key_state -= k;
 }
 if( onKeyUp( e.keyCode ) ){
  e.preventDefault();
 }
}
var keyShiftOnly = false;
function Electron( main ){
 this._main = main;
 try {
  this._extfunc = JSON.parse( this._main.fs.readFileSync( this._main.extFuncCachePath, "utf8" ) );
 } catch( e ){
  this._extfunc = {};
 }
 this._extfunc_update = false;
 this._extfunc_val = "";
 this._extfunc_s = 0;
 this._extfunc_str = "";
}
Electron.prototype = {
 isEnglish : function(){
  return this._main.isEnglish;
 },
 platform : function(){
  return this._main.platform;
 },
 extFuncKeyNum : function(){
  return Object.keys( this._extfunc ).length;
 },
 extFuncKey : function( index ){
  return Object.keys( this._extfunc )[index];
 },
 getExtFunc : function( key, defString ){
  var string = this._extfunc[key];
  return (string == undefined) ? defString : string;
 },
 setExtFunc : function( key, string ){
  this._extfunc[key] = string;
  this._extfunc_update = true;
 },
 clearExtFunc : function(){
  this._extfunc = {};
  this._extfunc_update = true;
  this.applyExtFunc();
 },
 beginReadExtFunc : function( key ){
  this._extfunc_val = this.getExtFunc( key, "" );
  this._extfunc_s = 0;
 },
 readExtFunc : function(){
  if( this._extfunc_s >= this._extfunc_val.length ){
   this._extfunc_str = "";
  } else {
   var e = this._extfunc_val.indexOf( "&", this._extfunc_s );
   if( e < 0 ){
    e = this._extfunc_val.length;
   }
   this._extfunc_str = this._extfunc_val.substring( this._extfunc_s, e );
   this._extfunc_s = e + 1;
  }
  return unescape( this._extfunc_str );
 },
 endReadExtFunc : function(){
  this._extfunc_val = "";
  this._extfunc_str = "";
 },
 beginWriteExtFunc : function(){
  this._extfunc_val = "";
 },
 writeExtFunc : function( str ){
  if( this._extfunc_val.length > 0 ){
   this._extfunc_val += "&";
  }
  this._extfunc_val += escape( str );
 },
 endWriteExtFunc : function( key ){
  this.setExtFunc( key, this._extfunc_val );
  this._extfunc_val = "";
 },
 applyExtFunc : function(){
  if( this._extfunc_update ){
   this._extfunc_update = false;
   this._main.fs.writeFileSync( this._main.extFuncCachePath, JSON.stringify( this._extfunc ) );
  }
 }
};
var electron = null;
var divEdit;
var inputVars;
var buttonMode = 0;
var exprType = 0;
var usageFlag = true;
var englishFlag = false;
var lockGraphResetEnv = false;
var skin;
var skinColor;
var skinLockR, skinLockG, skinLockB;
var skinTrans;
var skinImage;
var fontSpan;
var fontEdit;
function colorBackAlpha(){
 if( skin == 7 ){
  switch( skinTrans ){
  case 0: return 0;
  case 1: return _INT( 255.0 * 0.1 );
  case 2: return _INT( 255.0 * 0.2 );
  case 3: return _INT( 255.0 * 0.3 );
  case 4: return _INT( 255.0 * 0.4 );
  case 5: return _INT( 255.0 * 0.5 );
  }
 }
 return 255;
}
var menu = -1;
var lastTouchEnd = 0;
function isAndroidTablet(){
 return (androidTabletTest || common.isAndroidTablet());
}
function isIPad(){
 return (iPadTest || common.isIPad());
}
function main( editId, logId, conId, tableId, selectImageId, canvasId, inputFileIds, editorId ){
 var i;
 defGWorldFunction();
 defProcFunction();
 con = new _Console( conId );
 con.setMaxLen( conMaxLen );
 try {
  electron = new Electron( require( "electron" ).remote.require( "./electron" ) );
 } catch( e ){
  electron = null;
 }
 common = new Common();
 con.println( "ClipGraph" + consoleBreak() + "Copyright (C) SatisKia" );
 con.setColor( "0000ff" );
 if( dispUserAgent ){
  con.setBold( true );
  con.print( "UserAgent: " );
  con.setBold( false );
  con.println( window.navigator.userAgent );
 }
 if( electron != null ){
  con.setBold( true );
  con.print( "Platform: " );
  con.setBold( false );
  con.println( electron.platform() );
 } else {
  con.setBold( true );
  con.print( "App: " );
  con.setBold( false );
  con.println( common.isApp() ? "true" : "false" );
 }
 con.setColor();
 if( common.isIPhone() || common.isIPad() ){
  document.documentElement.addEventListener( "touchstart", function( e ){
   if( e.touches.length > 1 ){
    e.preventDefault();
   }
  }, true );
  document.documentElement.addEventListener( "touchend", function( e ){
   var now = (new Date()).getTime();
   if( now - lastTouchEnd <= 500 ){
    e.preventDefault();
   }
   lastTouchEnd = now;
  }, true );
  if( common.isApp() ){
   useStorage = false;
  }
 }
 initProfile( useStorage );
 setProfilePrefix( "_CLIPGRAPH_" );
 if( isAndroidTablet() || isIPad() ){
  cssSetPropertyValue( ".div_body" , "width" , "357px" );
  cssSetPropertyValue( ".div_body" , "height", "471px" );
  cssSetPropertyValue( ".div_selectimage" , "height", "387px" );
  cssSetPropertyValue( ".textarea_profile", "height", "415px" );
 }
 skin = getProfileInt( "ENV_", "Skin" , 0 ); if( skin > 7 ) skin = 7;
 skinColor = getProfileInt( "ENV_", "SkinColor", 0 ); if( skinColor >= COLOR.length ) skinColor = 0;
 document.getElementById( "graph_edit_r" ).value = getProfileInt( "ENV_", "SkinColorR", 161 );
 document.getElementById( "graph_edit_g" ).value = getProfileInt( "ENV_", "SkinColorG", 161 );
 document.getElementById( "graph_edit_b" ).value = getProfileInt( "ENV_", "SkinColorB", 161 );
 skinLockR = (getProfileInt( "ENV_", "SkinLockR", 0 ) == 1);
 skinLockG = (getProfileInt( "ENV_", "SkinLockG", 0 ) == 1);
 skinLockB = (getProfileInt( "ENV_", "SkinLockB", 0 ) == 1);
 document.getElementById( "check_color_r" ).checked = skinLockR;
 document.getElementById( "check_color_g" ).checked = skinLockG;
 document.getElementById( "check_color_b" ).checked = skinLockB;
 skinTrans = getProfileInt( "ENV_", "SkinTrans", 0 ); if( skinTrans > 5 ) skin = 0;
 skinImage = getProfileString( "ENV_", "SkinImage", "" );
 document.getElementById( "graph_edit_skin_image" ).value = skinImage;
 document.getElementById( "graph_edit_x" ).value = getProfileString( "ENV_", "SkinImageX", "50" );
 document.getElementById( "graph_edit_y" ).value = getProfileString( "ENV_", "SkinImageY", "50" );
 makeColor( skinColor, "graph_edit_r", "graph_edit_g", "graph_edit_b" );
 updateSkin();
 initSelect( "graph_select_skin" , skin );
 initSelect( "graph_select_skin_color", skinColor );
 initSelect( "graph_select_skin_trans", skinTrans );
 cssSetStyleDisplayById( "graph_select_skin_color", skin == 6 );
 cssSetStyleDisplayById( "graph_select_skin_trans", skin == 7 );
 cssSetStyleDisplayById( "input_skin_color" , (skin == 6) && (skinColor == COLOR.length - 1) );
 cssSetStyleDisplayById( "input_skin_image" , skin == 7 );
 fontSpan = getProfileString( "ENV_", "FontSpan", "Helvetica" );
 fontEdit = getProfileString( "ENV_", "FontEdit", "Courier New" );
 updateFont();
 usageFlag = (getProfileInt( "ENV_", "PrintUsage", 1 ) == 1);
 updateButtonHeight();
 englishFlag = (getProfileInt( "ENV_", "Language", 0 ) == 1);
 updateLanguage();
 divEdit = document.getElementById( editId );
 inputVars = document.getElementsByName( "graph_edit_var" );
 regGWorldDefCharInfo( 0 );
 setCanvasEnv( new _CanvasEnv() );
 canvas = new _Canvas( canvasId );
 su = new _StringUtil();
 canvas.setFont( 10, "Helvetica" );
 su.setFont( 10, "Helvetica" );
 inputFile = new Array();
 for( i = 0; i < inputFileIds.length; i++ ){
  inputFile[i] = new _InputFile( inputFileIds[i] );
 }
 procError = new _ProcError();
 for( i = 0; i < 3; i++ ){
  editExpr[i] = new Array();
  editExpr[i][0] = new EditExpr( 1 );
  editExpr[i][0].setDispLen( 26, 8 );
  editExpr[i][1] = new EditExpr( 2 );
  editExpr[i][1].setDispLen( 26, 8 );
 }
 logExpr = new ListBox( logId );
 logExpr.setLineNum( 12 );
 _addGraphEventListener( logExpr.element(), "click", function( e ){
  if( logExpr.click( e, 0, 20 ) ){
   updateLogExpr();
  }
 });
 for( i = 0; i < 3; i++ ){
  listTable[i] = new ListBox( tableId );
  listTable[i].setLineNum( 19 );
 }
 _addGraphEventListener( listTable[0].element(), "click", function( e ){
  if( listTable[graphIndex()].click( e, 24, 20 ) ){
   updateListTable( graphUI );
  }
 });
 listImage = new ListBox( selectImageId );
 listImage.setLineNum( (isAndroidTablet() || isIPad()) ? 19 : 21 );
 _addGraphEventListener( listImage.element(), "click", function( e ){
  if( listImage.click( e, 0, 20 ) ){
   updateListImage();
   getListImage();
  }
 });
 setDefineValue();
 setProcEnv( new _ProcEnv() );
 topProc = new _Proc( _PROC_DEF_PARENT_MODE, _PROC_DEF_PARENT_MP_PREC, _PROC_DEF_PARENT_MP_ROUND, true, _PROC_DEF_PRINT_ASSERT, _PROC_DEF_PRINT_WARN, _PROC_DEF_GUPDATE_FLAG );
 setProcWarnFlowFlag( false );
 setProcLoopMax( loopMax );
 topParam = new _Param();
 topParam.setMode( _CLIP_MODE_G_COMPLEX );
 topParam.setPrec( 0 );
 topParam._enableCommand = false;
 topParam._enableOpPow = true;
 topParam._enableStat = false;
 setGlobalParam( topParam );
 initProc();
 srand( time() );
 rand();
 for( i = 1; i < 3; i++ ){
  procGraph().addGraph();
 }
 procGraph().selGraph( getProfileInt( "ENV_", "GraphIndex", 0 ) );
 procGWorld().create( canvas.width(), canvas.height(), true );
 graphUI = new GraphUI( topProc, topParam );
 updateLogButton();
 var color;
 color = COLOR_WIN[graphUI.indexToColor( 0 )]; cssSetPropertyValue( ".button_color_00", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 color = COLOR_WIN[graphUI.indexToColor( 1 )]; cssSetPropertyValue( ".button_color_01", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 color = COLOR_WIN[graphUI.indexToColor( 2 )]; cssSetPropertyValue( ".button_color_02", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 color = COLOR_WIN[graphUI.indexToColor( 3 )]; cssSetPropertyValue( ".button_color_03", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 color = COLOR_WIN[graphUI.indexToColor( 4 )]; cssSetPropertyValue( ".button_color_04", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 color = COLOR_WIN[graphUI.indexToColor( 5 )]; cssSetPropertyValue( ".button_color_05", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 color = COLOR_WIN[graphUI.indexToColor( 6 )]; cssSetPropertyValue( ".button_color_06", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 color = COLOR_WIN[graphUI.indexToColor( 7 )]; cssSetPropertyValue( ".button_color_07", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 color = COLOR_WIN[graphUI.indexToColor( 8 )]; cssSetPropertyValue( ".button_color_08", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 color = COLOR_WIN[graphUI.indexToColor( 9 )]; cssSetPropertyValue( ".button_color_09", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 color = COLOR_WIN[graphUI.indexToColor( 10 )]; cssSetPropertyValue( ".button_color_10", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 color = COLOR_WIN[graphUI.indexToColor( 11 )]; cssSetPropertyValue( ".button_color_11", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 color = COLOR_WIN[graphUI.indexToColor( 12 )]; cssSetPropertyValue( ".button_color_12", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 color = COLOR_WIN[graphUI.indexToColor( 13 )]; cssSetPropertyValue( ".button_color_13", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 color = COLOR_WIN[graphUI.indexToColor( 14 )]; cssSetPropertyValue( ".button_color_14", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 color = COLOR_WIN[graphUI.indexToColor( 15 )]; cssSetPropertyValue( ".button_color_15", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
 updateButtonColorBack();
 updateButtonColorScale();
 updateButtonColorUnit();
 updateButtonColorText();
 updateButtonColorGraph();
 getProfileExpr();
 updateEditExpr();
 getProfileLogExpr();
 changeExprVar();
 getProfileVar();
 updateSelectVar();
 getProfileTable();
 updateListTable( graphUI );
 getProfileImage();
 selListImage( skinImage, document.getElementById( "graph_edit_x" ).value, document.getElementById( "graph_edit_y" ).value );
 updateGraphRadioTool();
 updateGraphRadioMode();
 updateGraphRadioAngType();
 updateGraphEditScreen();
 updateGraphRadioEnvType();
 doButtonUIGraph();
 initSelect( "graph_select_index", graphIndex() );
 initSelect( "graph_select_mode", graphUI._mode );
 initSelect( "graph_select_var", 0 );
 document.getElementById( "check_replot_mode" ).checked = graphUI.rePlotModeFlag();
 document.getElementById( "check_replot_angle" ).checked = graphUI.rePlotAngleFlag();
 document.getElementById( "check_replot_window" ).checked = graphUI.rePlotWindowFlag();
 document.getElementById( "check_print_usage" ).checked = usageFlag;
 document.getElementById( "check_calculator" ).checked = topParam._calculator;
 var event = common.isPC() ? "mousedown" : "touchstart";
 var elements;
 _addGraphEventListenerById( "button_zoom_in", event, doGraphZoomIn );
 _addGraphEventListenerById( "button_zoom_out", event, doGraphZoomOut );
 _addGraphEventListenerById( "button_draw", event, doGraphDraw );
 _addGraphEventListenerById( "button_clear", event, doGraphClear );
 _addGraphEventListenerById( "button_cursor_top", event, topEditExpr );
 _addGraphEventListenerById( "button_cursor_end", event, endEditExpr );
 _addGraphEventListenerById( "button_cursor_backward", event, backwardEditExpr );
 _addGraphEventListenerById( "button_cursor_forward", event, forwardEditExpr );
 _addGraphEventListenerById( "button_del", event, delEditExpr );
 _addGraphEventListenerById( "button_del_all", event, delAllEditExpr );
 _addGraphEventListenerById( "button_0", event, doButton0 );
 _addGraphEventListenerById( "button_1", event, doButton1 );
 _addGraphEventListenerById( "button_2", event, doButton2 );
 _addGraphEventListenerById( "button_3", event, doButton3 );
 _addGraphEventListenerById( "button_4", event, doButton4 );
 _addGraphEventListenerById( "button_5", event, doButton5 );
 _addGraphEventListenerById( "button_6", event, doButton6 );
 _addGraphEventListenerById( "button_7", event, doButton7 );
 _addGraphEventListenerById( "button_8", event, doButton8 );
 _addGraphEventListenerById( "button_9", event, doButton9 );
 _addGraphEventListenerById( "button_point", event, doButtonPoint );
 _addGraphEventListenerById( "button_plus", event, doButtonPlus );
 _addGraphEventListenerById( "button_minus", event, doButtonMinus );
 _addGraphEventListenerById( "button_space", event, doButtonSpace );
 _addGraphEventListenerById( "button_eplus", event, doButtonEPlus );
 _addGraphEventListenerById( "button_eminus", event, doButtonEMinus );
 _addGraphEventListenerById( "button_i", event, doButtonI );
 _addGraphEventListenerById( "button_mul", event, doButtonMul );
 _addGraphEventListenerById( "button_div", event, doButtonDiv );
 _addGraphEventListenerById( "button_mod", event, doButtonMod );
 _addGraphEventListenerById( "button_add", event, doButtonAdd );
 _addGraphEventListenerById( "button_sub", event, doButtonSub );
 _addGraphEventListenerById( "button_unary_minus", event, doButtonUnaryMinus );
 _addGraphEventListenerById( "button_deg", event, doButtonDeg );
 _addGraphEventListenerById( "button_grad", event, doButtonGrad );
 _addGraphEventListenerById( "button_rad", event, doButtonRad );
 _addGraphEventListenerById( "button_factorial", event, doButtonFactorial );
 _addGraphEventListenerById( "button_pow", event, doButtonPow );
 elements = document.getElementsByName( "button_shift" );
 for( i = 0; i < elements.length; i++ ){
  _addGraphEventListener( elements[i], "click", doButtonSHIFT );
 }
 _addGraphEventListenerById( "button_enter", "click", doButtonEnter );
 _addGraphEventListenerById( "button_log", "click", doButtonLog );
 _addGraphEventListenerById( "button_log10", "click", doButtonLog10 );
 elements = document.getElementsByName( "button_func" );
 for( i = 0; i < elements.length; i++ ){
  _addGraphEventListener( elements[i], "click", doButtonFunc );
 }
 _addGraphEventListenerById( "button_var", event, doButtonVar );
 _addGraphEventListenerById( "button_rcl", event, doButtonRCL );
 _addGraphEventListenerById( "button_top", event, doButtonTop );
 _addGraphEventListenerById( "button_end", event, doButtonEnd );
 _addGraphEventListenerById( "button_sto", event, doButtonSTO );
 _addGraphEventListenerById( "button_lang", "click", doButtonLang );
 _addGraphEventListenerById( "button_log_up" , event, upLogExpr );
 _addGraphEventListenerById( "button_log_down", event, downLogExpr );
 _addGraphEventListenerById( "button_log_del" , event, delLogExpr );
 _addGraphEventListenerById( "button_table_up" , event, upListTable );
 _addGraphEventListenerById( "button_table_down", event, downListTable );
 _addGraphEventListenerById( "button_table_del" , event, delListTable );
 _addGraphEventListenerById( "button_edit_min_up" , event, doButtonEditMinUp );
 _addGraphEventListenerById( "button_edit_min_down" , event, doButtonEditMinDown );
 _addGraphEventListenerById( "button_edit_max_up" , event, doButtonEditMaxUp );
 _addGraphEventListenerById( "button_edit_max_down" , event, doButtonEditMaxDown );
 _addGraphEventListenerById( "button_edit_pitch_up" , event, doButtonEditPitchUp );
 _addGraphEventListenerById( "button_edit_pitch_down" , event, doButtonEditPitchDown );
 _addGraphEventListenerById( "button_edit_offset_x_up" , event, doButtonEditOffsetXUp );
 _addGraphEventListenerById( "button_edit_offset_x_down", event, doButtonEditOffsetXDown );
 _addGraphEventListenerById( "button_edit_offset_y_up" , event, doButtonEditOffsetYUp );
 _addGraphEventListenerById( "button_edit_offset_y_down", event, doButtonEditOffsetYDown );
 _addGraphEventListenerById( "button_edit_ratio_x_up" , event, doButtonEditRatioXUp );
 _addGraphEventListenerById( "button_edit_ratio_x_down" , event, doButtonEditRatioXDown );
 _addGraphEventListenerById( "button_edit_ratio_y_up" , event, doButtonEditRatioYUp );
 _addGraphEventListenerById( "button_edit_ratio_y_down" , event, doButtonEditRatioYDown );
 _addGraphEventListenerById( "button_edit_left_up" , event, doButtonEditLeftUp );
 _addGraphEventListenerById( "button_edit_left_down" , event, doButtonEditLeftDown );
 _addGraphEventListenerById( "button_edit_bottom_up" , event, doButtonEditBottomUp );
 _addGraphEventListenerById( "button_edit_bottom_down" , event, doButtonEditBottomDown );
 _addGraphEventListenerById( "button_edit_right_up" , event, doButtonEditRightUp );
 _addGraphEventListenerById( "button_edit_right_down" , event, doButtonEditRightDown );
 _addGraphEventListenerById( "button_edit_top_up" , event, doButtonEditTopUp );
 _addGraphEventListenerById( "button_edit_top_down" , event, doButtonEditTopDown );
 _addGraphEventListenerById( "button_edit_unit_x_up" , event, doButtonEditUnitXUp );
 _addGraphEventListenerById( "button_edit_unit_x_down" , event, doButtonEditUnitXDown );
 _addGraphEventListenerById( "button_edit_unit_y_up" , event, doButtonEditUnitYUp );
 _addGraphEventListenerById( "button_edit_unit_y_down" , event, doButtonEditUnitYDown );
 _addGraphEventListenerById( "button_edit_text_x_up" , event, doButtonEditTextXUp );
 _addGraphEventListenerById( "button_edit_text_x_down" , event, doButtonEditTextXDown );
 _addGraphEventListenerById( "button_edit_text_y_up" , event, doButtonEditTextYUp );
 _addGraphEventListenerById( "button_edit_text_y_down" , event, doButtonEditTextYDown );
 _addGraphEventListenerById( "button_edit_r_up" , event, doButtonEditRUp );
 _addGraphEventListenerById( "button_edit_r_down" , event, doButtonEditRDown );
 _addGraphEventListenerById( "button_edit_g_up" , event, doButtonEditGUp );
 _addGraphEventListenerById( "button_edit_g_down" , event, doButtonEditGDown );
 _addGraphEventListenerById( "button_edit_b_up" , event, doButtonEditBUp );
 _addGraphEventListenerById( "button_edit_b_down" , event, doButtonEditBDown );
 _addGraphEventListenerById( "button_edit_x_up" , event, doButtonEditXUp );
 _addGraphEventListenerById( "button_edit_x_down" , event, doButtonEditXDown );
 _addGraphEventListenerById( "button_edit_y_up" , event, doButtonEditYUp );
 _addGraphEventListenerById( "button_edit_y_down" , event, doButtonEditYDown );
 _addGraphEventListenerById( "button_selectimage_up" , event, upListImage );
 _addGraphEventListenerById( "button_selectimage_down", event, downListImage );
 _addGraphEventListenerById( "button_selectimage_del" , event, delListImage );
 _addGraphEventListenerById( "button_edit_tab_up" , event, doButtonEditTabUp );
 _addGraphEventListenerById( "button_edit_tab_down", event, doButtonEditTabDown );
 if( common.isPC() ){
  cssSetStyleDisplayById( "graph_ui_var_2" , true );
  cssSetStyleDisplayById( "graph_ui_var_change", false );
 }
 if( !common.isApp() ){
  if( useStorage && canUseStorage() ){
   cssSetStyleDisplayById( "button_storage_clear", true );
  } else if( canUseCookie() ){
   cssSetStyleDisplayById( "button_cookie_clear", true );
  }
 }
 if( common.isApp() ){
  cssSetStyleDisplayById( "button_get_content", true );
 }
 if( getUrlParameter( "menu" ) == "option" ){
  doButtonUIOption();
 }
 if( dispCache ){
  if( canUseStorage() ){
   var num = storageNum();
   con.setColor( "0000ff" );
   con.setBold( true );
   con.print( "Storage: " );
   con.setBold( false );
   con.println( "" + num );
   con.setColor();
   for( i = 0; i < num; i++ ){
    var key = getStorageKey( i );
    con.print( "<b>[" + key + "]</b> " );
    con.println( common.escape( getStorage( key, "" ) ) );
   }
  }
  if( canUseCookie() ){
   var num = cookieNum();
   con.setColor( "0000ff" );
   con.setBold( true );
   con.print( "Cookie: " );
   con.setBold( false );
   con.println( "" + num );
   con.setColor();
   for( i = 0; i < num; i++ ){
    var key = getCookieKey( i );
    con.print( "<b>[" + key + "]</b> " );
    con.println( common.escape( getCookie( key, "" ) ) );
   }
  }
 }
 loadExtFuncFile();
 for( i = 0; i < extFuncFile.length; i++ ){
  var name = extFuncName( extFuncFile[i] );
  if( name.length > 0 ){
   regExtFuncButton( name );
  }
 }
 loadExtFuncFile2();
 for( i = 0; i < extFuncFile2.length; i++ ){
  var name = extFuncName( extFuncFile2[i] );
  if( name.length > 0 ){
   regExtFuncButton( name );
  }
 }
 editor = new _Editor( editorId );
 var tabWidth = getProfileInt( "EDITOR_", "Tab", 4 );
 if( tabWidth < 0 ){
  tabWidth = 0;
 }
 document.getElementById( "tab_width" ).value = "" + tabWidth;
 cssSetPropertyValue( ".textarea_func", "tab-size", "" + tabWidth );
 var smart = (getProfileInt( "EDITOR_", "Smart", 1 ) == 1);
 document.getElementById( "check_smart" ).checked = smart;
 setEditorSmartFlag( smart );
 selFunc = getProfileInt( "EDITOR_", "SelFunc", 0 );
 initSelect( "graph_select_func", selFunc );
 curFunc = document.getElementById( "graph_select_func" ).options[selFunc].value;
 loadFunc();
 updateSelectFunc();
 setEnableWriteProfile( true );
 if( resetCalculator ){
  changeExpr();
  writeProfileInt( "ENV_", "Calculator", topParam._calculator ? 1 : 0 );
 }
 started = true;
 if( !common.isPC() ){
  nativeRequest = new NativeRequest();
  nativeRequest.setScheme( "native" );
  nativeRequest.send( "start_load_extfunc/" + extFuncFile[loadNum] );
 }
 _addGraphEventListener( document, "keydown", keyDown );
 _addGraphEventListener( document, "keyup", keyUp );
 if( electron != null ){
  setEnglish( electron.isEnglish() );
 }
 if( androidTabletTest || iPadTest || (bodyHeight != defHeight( false )) ){
  setHeight( bodyHeight );
 }
}
function setDeviceWidth( width ){
 if( isAndroidTablet() ){
  document.querySelector( "meta[name='viewport']" ).setAttribute( "content", "target-densitydpi=device-dpi, width=357, user-scalable=no" );
 }
 if( isIPad() ){
  var scale = "" + (width / 357.0);
  scale = scale.substring( 0, 5 );
  document.querySelector( "meta[name='viewport']" ).setAttribute( "content", "target-densitydpi=device-dpi, width=357, initial-scale=" + scale + ", maximum-scale=" + scale + ", user-scalable=no" );
 }
}
function defHeight( mainFlag ){
 var height = (isAndroidTablet() || isIPad()) ? 471 : 510;
 if( mainFlag && !usageFlag ){
  height -= 51;
 }
 return height;
}
function updateButtonHeight(){
 if( bodyHeight >= defHeight( true ) ){
  var height35 = 35 + _DIV( bodyHeight - defHeight( true ), 7 );
  cssSetPropertyValue( ".height35", "height", "" + height35 + "px" );
  document.getElementById( "td_calculator" ).setAttribute( "height", "" + height35 );
 }
}
function setHeight( height ){
 bodyHeight = height;
 started = false;
 con.setColor( "0000ff" );
 con.setBold( true );
 con.print( "Height: " );
 con.setBold( false );
 con.println( "" + bodyHeight );
 con.setColor();
 started = true;
 if( bodyHeight > defHeight( false ) ){
  cssSetPropertyValue( ".div_body", "height", "" + bodyHeight + "px" );
  var canvasHeight = 280 + (bodyHeight - defHeight( false ));
  cssSetPropertyValue( ".div_gworld", "height", "" + canvasHeight + "px" );
  canvas.element().setAttribute( "height", "" + canvasHeight );
  procGWorld().create( canvas.width(), canvas.height(), false );
  graphUI.redraw();
 }
 updateButtonHeight();
 var editorHeight = 0;
 if( isAndroidTablet() ){
  editorHeight = bodyHeight - 227;
 } else if( !androidTabletTest && common.isAndroidMobile() ){
  editorHeight = bodyHeight - 255 - 39;
 } else if( isIPad() ){
  editorHeight = bodyHeight - 145;
 } else if( !iPadTest && common.isIPhone() ){
  editorHeight = bodyHeight - 261;
 }
 if( editorHeight > 0 ){
  cssSetPropertyValue( ".textarea_func", "height", "" + editorHeight + "px" );
 }
}
var cursorText;
var cursorBack;
function updateSkin(){
 var element = document.getElementById( "graph_body" );
 element.classList.remove( "bg_gold" );
 element.classList.remove( "bg_silver" );
 element.classList.remove( "bg_iron" );
 element.classList.remove( "bg_image" );
 switch( skin ){
 case 0:
  document.getElementById( "button_enter" ).innerHTML = "<img src='draw.png' width='20' height='20'>";
  cssSetPropertyValue( ".div_body", "background-color", GREEN_BG );
  cssSetButton( ".button_common", "linear,left top,left bottom", GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_cursor", "linear,left top,left bottom", GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu" , "linear,left top,left bottom", GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu2" , "linear,left top,left bottom", GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_shift" , "linear,left top,left bottom", GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_topend", "linear,left top,left bottom", GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_del" , "linear,left top,left bottom", GREEN_RED.get( 16 ), GREEN_RED.get( -16 ), GREEN_TEXT, "#404040", false );
  cssSetButton( ".button_rcl" , "linear,left top,left bottom", GREEN_BLUE.get( 16 ), GREEN_BLUE.get( -16 ), GREEN_TEXT, "#404040", false );
  cssSetButton( ".button_var" , "linear,left top,left bottom", GREEN_BLUE.get( 16 ), GREEN_BLUE.get( -16 ), GREEN_TEXT, "#404040", false );
  cssSetButton( ".button_enter" , "linear,left top,left bottom", GREEN_EMERALD.get( 16 ), GREEN_EMERALD.get( -16 ), GREEN_TEXT, "#404040", false );
  cssSetButton( ".button_func" , "linear,left top,left bottom", GREEN_LIGHT.get( 16 ), GREEN_LIGHT.get( -16 ), GREEN_TEXT, "#404040", false );
  cssSetButton( ".button_number", "linear,left top,left bottom", GREEN_DARK.get( 16 ), GREEN_DARK.get( -16 ), GREEN_TEXT, "#202020", false );
  cssSetButton( ".button_op" , "linear,left top,left bottom", GREEN_LIGHT.get( 16 ), GREEN_LIGHT.get( -16 ), GREEN_TEXT, "#404040", false );
  cssSetButton( ".button_symbol", "linear,left top,left bottom", GREEN_LIGHT.get( 16 ), GREEN_LIGHT.get( -16 ), GREEN_TEXT, "#404040", false );
  cssSetSelect( ".select_common", "linear,left top,left bottom", GREEN_SELECT.get( 16 ), GREEN_SELECT.get( -16 ), "#000000", "", true );
  cssSetSelect( ".select_var" , "linear,left top,left bottom", GREEN_SELECT.get( 16 ), GREEN_SELECT.get( -16 ), "#000000", "", true );
  cssSetSelect( ".select_func" , "linear,left top,left bottom", GREEN_SELECT.get( 16 ), GREEN_SELECT.get( -16 ), "#000000", "", true );
  cssSetPropertyValue( ".span" , "color", GREEN_SPAN );
  cssSetPropertyValue( ".span_expr", "color", GREEN_SPAN );
  cssSetPropertyValue( ".div_usage", "color", GREEN_SPAN );
  cssSetPropertyValue( ".span" , "text-shadow", "0 0" );
  cssSetPropertyValue( ".span_expr", "text-shadow", "0 0" );
  cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );
  cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", GREEN_CHECKED );
  cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", GREEN_CHECKED );
  cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + GREEN_CHECKED );
  cssSetPropertyValue( ".div_edit" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".input_expr" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_log" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_table" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_console" , "background-color", "#C0C0C0" );
  cursorText = "#FFFFFF";
  cursorBack = GREEN_CHECKED;
  break;
 case 1:
  document.getElementById( "button_enter" ).innerHTML = "<img src='draw.png' width='20' height='20'>";
  cssSetPropertyValue( ".div_body", "background-color", GRAY_BG );
  cssSetButton( ".button_common", "linear,left top,left bottom", GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_cursor", "linear,left top,left bottom", GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu" , "linear,left top,left bottom", GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu2" , "linear,left top,left bottom", GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_shift" , "linear,left top,left bottom", GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_topend", "linear,left top,right bottom", GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );
  cssSetButton( ".button_del" , "linear,left top,left bottom", GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );
  cssSetButton( ".button_rcl" , "linear,left top,right bottom", GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );
  cssSetButton( ".button_var" , "linear,left top,right bottom", GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );
  cssSetButton( ".button_enter" , "linear,left top,right bottom", GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );
  cssSetButton( ".button_func" , "linear,left top,right bottom", GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );
  cssSetButton( ".button_number", "linear,left top,right bottom", GRAY_LIGHT_1, GRAY_LIGHT_2, GRAY_TEXT, "#404040", false );
  cssSetButton( ".button_op" , "linear,left top,right bottom", GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );
  cssSetButton( ".button_symbol", "linear,left top,right bottom", GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );
  cssSetSelect( ".select_common", "linear,left top,left bottom", GRAY_SELECT.get( 32 ), GRAY_SELECT.get( -32 ), "#000000", "", true );
  cssSetSelect( ".select_var" , "linear,left top,left bottom", GRAY_SELECT.get( 32 ), GRAY_SELECT.get( -32 ), "#000000", "", true );
  cssSetSelect( ".select_func" , "linear,left top,left bottom", GRAY_SELECT.get( 32 ), GRAY_SELECT.get( -32 ), "#000000", "", true );
  cssSetPropertyValue( ".span" , "color", GRAY_SPAN );
  cssSetPropertyValue( ".span_expr", "color", GRAY_SPAN );
  cssSetPropertyValue( ".div_usage", "color", GRAY_SPAN );
  cssSetPropertyValue( ".span" , "text-shadow", "0 0" );
  cssSetPropertyValue( ".span_expr", "text-shadow", "0 0" );
  cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );
  cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", GRAY_CHECKED );
  cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", GRAY_CHECKED );
  cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + GRAY_CHECKED );
  cssSetPropertyValue( ".div_edit" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".input_expr" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_log" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_table" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_console" , "background-color", "#C0C0C0" );
  cursorText = "#FFFFFF";
  cursorBack = GRAY_CHECKED;
  break;
 case 2:
  document.getElementById( "button_enter" ).innerHTML = "<img src='draw.png' width='20' height='20'>";
  cssSetPropertyValue( ".div_body", "background-color", PURPLE_BG );
  cssSetButton( ".button_common", "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_cursor", "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu" , "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu2" , "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_shift" , "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_topend", "linear,left top,left bottom", PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
  cssSetButton( ".button_del" , "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_rcl" , "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_var" , "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_enter" , "linear,left top,left bottom", PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
  cssSetButton( ".button_func" , "linear,left top,left bottom", PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
  cssSetButton( ".button_number", "linear,left top,left bottom", PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
  cssSetButton( ".button_op" , "linear,left top,left bottom", PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
  cssSetButton( ".button_symbol", "linear,left top,left bottom", PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
  cssSetSelect( ".select_common", "linear,left top,left bottom", PURPLE_SELECT.get( 32 ), PURPLE_SELECT.get( -32 ), "#000000", "", true );
  cssSetSelect( ".select_var" , "linear,left top,left bottom", PURPLE_SELECT.get( 32 ), PURPLE_SELECT.get( -32 ), "#000000", "", true );
  cssSetSelect( ".select_func" , "linear,left top,left bottom", PURPLE_SELECT.get( 32 ), PURPLE_SELECT.get( -32 ), "#000000", "", true );
  cssSetPropertyValue( ".span" , "color", PURPLE_SPAN );
  cssSetPropertyValue( ".span_expr", "color", PURPLE_SPAN );
  cssSetPropertyValue( ".div_usage", "color", PURPLE_SPAN );
  cssSetPropertyValue( ".span" , "text-shadow", "0 0" );
  cssSetPropertyValue( ".span_expr", "text-shadow", "0 0" );
  cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );
  cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", PURPLE_CHECKED );
  cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", PURPLE_CHECKED );
  cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + PURPLE_CHECKED );
  cssSetPropertyValue( ".div_edit" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".input_expr" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_log" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_table" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_console" , "background-color", "#C0C0C0" );
  cursorText = "#FFFFFF";
  cursorBack = PURPLE_CHECKED;
  break;
 case 3:
 case 4:
 case 5:
  document.getElementById( "button_enter" ).innerHTML = "<img src='draw_r.png' width='20' height='20'>";
  switch( skin ){
  case 3:
   document.getElementById( "graph_body" ).classList.add( "bg_gold" );
   cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", GOLD_CHECKED );
   cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", GOLD_CHECKED );
   cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + GOLD_CHECKED );
   cursorText = "#FFFFFF";
   cursorBack = GOLD_CHECKED;
   break;
  case 4:
   document.getElementById( "graph_body" ).classList.add( "bg_silver" );
   cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", SILVER_CHECKED );
   cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", SILVER_CHECKED );
   cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + SILVER_CHECKED );
   cursorText = "#FFFFFF";
   cursorBack = SILVER_CHECKED;
   break;
  case 5:
   document.getElementById( "graph_body" ).classList.add( "bg_iron" );
   cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", IRON_CHECKED );
   cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", IRON_CHECKED );
   cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + IRON_CHECKED );
   cursorText = "#FFFFFF";
   cursorBack = IRON_CHECKED;
   break;
  }
  cssSetButton( ".button_common", "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_cursor", "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu2" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_shift" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_topend", "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_del" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_rcl" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_var" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_enter" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_func" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_number", "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_op" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_symbol", "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetSelect( ".select_common", "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "", true );
  cssSetSelect( ".select_var" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "", true );
  cssSetSelect( ".select_func" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "", true );
  cssSetPropertyValue( ".span" , "color", "#000000" );
  cssSetPropertyValue( ".span_expr", "color", "#000000" );
  cssSetPropertyValue( ".div_usage", "color", "#000000" );
  cssSetPropertyValue( ".span" , "text-shadow", "0 0" );
  cssSetPropertyValue( ".span_expr", "text-shadow", "0 0" );
  cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );
  cssSetPropertyValue( ".div_edit" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".input_expr" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_log" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_table" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_console" , "background-color", "#C0C0C0" );
  break;
 case 6:
  document.getElementById( "button_enter" ).innerHTML = "<img src='draw.png' width='20' height='20'>";
  cssSetPropertyValue( ".div_body", "background-color", COLOR_BG );
  cssSetButton( ".button_common", "linear,left top,left bottom", COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_cursor", "linear,left top,left bottom", COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu" , "linear,left top,left bottom", COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu2" , "linear,left top,left bottom", COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_shift" , "linear,left top,left bottom", COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_topend", "linear,left top,left bottom", COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_del" , "linear,left top,left bottom", COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_rcl" , "linear,left top,left bottom", COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_var" , "linear,left top,left bottom", COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_enter" , "linear,left top,left bottom", COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_func" , "linear,left top,left bottom", COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_number", "linear,left top,left bottom", COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_op" , "linear,left top,left bottom", COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_symbol", "linear,left top,left bottom", COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetSelect( ".select_common", "linear,left top,left bottom", COLOR_SELECT.get( 32 ), COLOR_SELECT.get( -32 ), "#000000", "", true );
  cssSetSelect( ".select_var" , "linear,left top,left bottom", COLOR_SELECT.get( 32 ), COLOR_SELECT.get( -32 ), "#000000", "", true );
  cssSetSelect( ".select_func" , "linear,left top,left bottom", COLOR_SELECT.get( 32 ), COLOR_SELECT.get( -32 ), "#000000", "", true );
  cssSetPropertyValue( ".span" , "color", "#000000" );
  cssSetPropertyValue( ".span_expr", "color", "#000000" );
  cssSetPropertyValue( ".div_usage", "color", "#000000" );
  cssSetPropertyValue( ".span" , "text-shadow", "0 0" );
  cssSetPropertyValue( ".span_expr", "text-shadow", "0 0" );
  cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );
  cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", COLOR_CHECKED );
  cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", COLOR_CHECKED );
  cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + COLOR_CHECKED );
  cssSetPropertyValue( ".div_edit" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".input_expr" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_log" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_table" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_console" , "background-color", "#C0C0C0" );
  cursorText = "#FFFFFF";
  cursorBack = COLOR_CHECKED;
  break;
 case 7:
  document.getElementById( "button_enter" ).innerHTML = "<img src='draw_r.png' width='20' height='20'>";
  cssSetPropertyValue( ".bg_image", "background-image", "url(\"" + skinImage + "\")" );
  cssSetPropertyValue( ".bg_image", "background-position", document.getElementById( "graph_edit_x" ).value + "% " + document.getElementById( "graph_edit_y" ).value + "%" );
  document.getElementById( "graph_body" ).classList.add( "bg_image" );
  cssSetPropertyValue( ".div_body", "background-color", COLOR_BG );
  var color = "rgba(255,255,255,0.0)";
  switch( skinTrans ){
  case 0: break;
  case 1: color = "rgba(255,255,255,0.1)"; break;
  case 2: color = "rgba(255,255,255,0.2)"; break;
  case 3: color = "rgba(255,255,255,0.3)"; break;
  case 4: color = "rgba(255,255,255,0.4)"; break;
  case 5: color = "rgba(255,255,255,0.5)"; break;
  }
  cssSetButton( ".button_common", "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_cursor", "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu" , "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu2" , "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_shift" , "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_topend", "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_del" , "linear,left top,left bottom", color, color, "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_rcl" , "linear,left top,left bottom", color, color, "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_var" , "linear,left top,left bottom", color, color, "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_enter" , "linear,left top,left bottom", color, color, "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_func" , "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_number", "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_op" , "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_symbol", "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetSelect( ".select_common", "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetSelect( ".select_var" , "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetSelect( ".select_func" , "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetPropertyValue( ".span" , "color", "#000000" );
  cssSetPropertyValue( ".span_expr", "color", "#000000" );
  cssSetPropertyValue( ".div_usage", "color", "#000000" );
  cssSetPropertyValue( ".span" , "text-shadow", "1px 1px #E0E0E0" );
  cssSetPropertyValue( ".span_expr", "text-shadow", "1px 1px #E0E0E0" );
  cssSetPropertyValue( ".div_usage", "text-shadow", "1px 1px #E0E0E0" );
  cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", IMAGE_CHECKED );
  cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", IMAGE_CHECKED );
  cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + IMAGE_CHECKED );
  cssSetPropertyValue( ".div_edit" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".input_expr" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_log" , "background-color", "rgba(255,255,255,0.0)" );
  cssSetPropertyValue( ".div_table" , "background-color", "rgba(255,255,255,0.0)" );
  cssSetPropertyValue( ".div_selectimage", "background-color", "rgba(255,255,255,0.0)" );
  cssSetPropertyValue( ".div_console" , "background-color", "rgba(255,255,255,0.0)" );
  cursorText = "#FFFFFF";
  cursorBack = IMAGE_CHECKED;
  break;
 }
}
function updateSkinColor(){
 makeColor( skinColor, "graph_edit_r", "graph_edit_g", "graph_edit_b" );
 updateSkin();
 updateEditExpr();
 updateLogExpr();
 updateListTable( graphUI );
 updateListImage();
}
function doChangeSkin( select ){
 skin = select.selectedIndex;
 updateSkin();
 updateEditExpr();
 updateLogExpr();
 updateListTable( graphUI );
 updateListImage();
 graphUI.clear();
 writeProfileInt( "ENV_", "Skin", skin );
 cssSetStyleDisplayById( "graph_select_skin_color", skin == 6 );
 cssSetStyleDisplayById( "graph_select_skin_trans", skin == 7 );
 cssSetStyleDisplayById( "input_skin_color" , (skin == 6) && (skinColor == COLOR.length - 1) );
 cssSetStyleDisplayById( "input_skin_image" , skin == 7 );
}
function doChangeSkinColor( select ){
 skinColor = select.selectedIndex;
 updateSkinColor();
 writeProfileInt( "ENV_", "SkinColor", skinColor );
 cssSetStyleDisplayById( "input_skin_color", (skin == 6) && (skinColor == COLOR.length - 1) );
}
function doChangeSkinTrans( select ){
 skinTrans = select.selectedIndex;
 updateSkin();
 graphUI.clear();
 writeProfileInt( "ENV_", "SkinTrans", skinTrans );
}
function doGraphEditSkinImage(){
 skinImage = document.getElementById( "graph_edit_skin_image" ).value;
 if( (skinImage.indexOf( "://" ) < 0) && (skinImage.indexOf( "data:" ) != 0) ){
  skinImage = "http://" + skinImage;
  document.getElementById( "graph_edit_skin_image" ).value = skinImage;
 }
 updateSkin();
 writeProfileString( "ENV_", "SkinImage", skinImage );
 addListImage();
}
function onChangeEditR(){
 updateSkinColor();
 writeProfileInt( "ENV_", "SkinColorR", COLOR[COLOR.length - 1][0] );
}
function onChangeEditG(){
 updateSkinColor();
 writeProfileInt( "ENV_", "SkinColorG", COLOR[COLOR.length - 1][1] );
}
function onChangeEditB(){
 updateSkinColor();
 writeProfileInt( "ENV_", "SkinColorB", COLOR[COLOR.length - 1][2] );
}
function doButtonEditRUp( e ){
 if( doButtonUpInt( "graph_edit_r", 1, 255 ) ){
  onChangeEditR();
 }
}
function doButtonEditRDown( e ){
 if( doButtonDownInt( "graph_edit_r", 1, 0 ) ){
  onChangeEditR();
 }
}
function doButtonEditGUp( e ){
 if( doButtonUpInt( "graph_edit_g", 1, 255 ) ){
  onChangeEditG();
 }
}
function doButtonEditGDown( e ){
 if( doButtonDownInt( "graph_edit_g", 1, 0 ) ){
  onChangeEditG();
 }
}
function doButtonEditBUp( e ){
 if( doButtonUpInt( "graph_edit_b", 1, 255 ) ){
  onChangeEditB();
 }
}
function doButtonEditBDown( e ){
 if( doButtonDownInt( "graph_edit_b", 1, 0 ) ){
  onChangeEditB();
 }
}
function doCheckColorR(){
 skinLockR = document.getElementById( "check_color_r" ).checked;
 updateSkinColor();
 writeProfileInt( "ENV_", "SkinLockR", skinLockR ? 1 : 0 );
}
function doCheckColorG(){
 skinLockG = document.getElementById( "check_color_g" ).checked;
 updateSkinColor();
 writeProfileInt( "ENV_", "SkinLockG", skinLockG ? 1 : 0 );
}
function doCheckColorB(){
 skinLockB = document.getElementById( "check_color_b" ).checked;
 updateSkinColor();
 writeProfileInt( "ENV_", "SkinLockB", skinLockB ? 1 : 0 );
}
function onChangeEditX(){
 updateSkin();
 writeProfileString( "ENV_", "SkinImageX", document.getElementById( "graph_edit_x" ).value );
 addListImage();
}
function onChangeEditY(){
 updateSkin();
 writeProfileString( "ENV_", "SkinImageY", document.getElementById( "graph_edit_y" ).value );
 addListImage();
}
function doButtonEditXUp( e ){
 if( doButtonUpInt( "graph_edit_x", 5, 100 ) ){
  onChangeEditX();
 }
}
function doButtonEditXDown( e ){
 if( doButtonDownInt( "graph_edit_x", 5, 0 ) ){
  onChangeEditX();
 }
}
function doButtonEditYUp( e ){
 if( doButtonUpInt( "graph_edit_y", 5, 100 ) ){
  onChangeEditY();
 }
}
function doButtonEditYDown( e ){
 if( doButtonDownInt( "graph_edit_y", 5, 0 ) ){
  onChangeEditY();
 }
}
function updateFont(){
 cssSetPropertyValue( "button" , "font-family", fontSpan );
 cssSetPropertyValue( "select" , "font-family", fontSpan );
 cssSetPropertyValue( ".span" , "font-family", fontSpan );
 cssSetPropertyValue( ".span_ellipsis" , "font-family", fontSpan );
 cssSetPropertyValue( ".div_usage" , "font-family", fontSpan );
 cssSetPropertyValue( ".input_file" , "font-family", fontSpan );
 cssSetPropertyValue( ".span_expr" , "font-family", fontEdit );
 cssSetPropertyValue( ".input" , "font-family", fontEdit );
 cssSetPropertyValue( ".select_var_font" , "font-family", fontEdit );
 cssSetPropertyValue( ".select_func_font", "font-family", fontEdit );
 cssSetPropertyValue( ".div_edit" , "font-family", fontEdit );
 cssSetPropertyValue( ".div_log" , "font-family", fontEdit );
 cssSetPropertyValue( ".div_console" , "font-family", fontEdit );
 cssSetPropertyValue( ".div_table" , "font-family", fontEdit );
 cssSetPropertyValue( ".div_selectimage" , "font-family", fontEdit );
 cssSetPropertyValue( ".textarea_profile", "font-family", fontEdit );
}
function graphIndex(){
 return procGraph()._curIndex;
}
function updateEditExpr(){
 var forward = new _String();
 var after = new _String();
 editExpr[graphIndex()][exprType].get( forward, after, true );
 if( editExpr[graphIndex()][exprType].isSelAll() ){
  divEdit.innerHTML = "<span style='color:" + cursorText + "; background-color:" + cursorBack + "'>" + forward.escape().str() + after.escape().str() + "</span>";
 } else if( after.str().length == 0 ){
  divEdit.innerHTML = forward.escape().str() + "<span style='color:" + cursorText + "; background-color:" + cursorBack + "'>&nbsp;</span>";
 } else if( after.str().length == 1 ){
  divEdit.innerHTML = forward.escape().str() + "<span style='color:" + cursorText + "; background-color:" + cursorBack + "'>" + after.escape().str() + "</span>";
 } else {
  var tmp = after.str();
  var str1 = new _String( tmp.substring( 0, 1 ) );
  var str2 = new _String( tmp.slice( 1 ) );
  divEdit.innerHTML = forward.escape().str() + "<span style='color:" + cursorText + "; background-color:" + cursorBack + "'>" + str1.escape().str() + "</span>" + str2.escape().str();
 }
}
function insEditExpr( token ){
 if( usageFlag ){
  printUsage( token, topProc, topParam, englishFlag, "graph_usage" );
 }
 editExpr[graphIndex()][exprType].ins( token );
 writeProfileExpr();
 updateEditExpr();
}
function topEditExpr( e ){
 editExpr[graphIndex()][exprType].top();
 updateEditExpr();
}
function endEditExpr( e ){
 editExpr[graphIndex()][exprType].end();
 updateEditExpr();
}
function backwardEditExpr( e ){
 editExpr[graphIndex()][exprType].backward();
 updateEditExpr();
}
function forwardEditExpr( e ){
 editExpr[graphIndex()][exprType].forward();
 updateEditExpr();
}
function delEditExpr( e ){
 editExpr[graphIndex()][exprType].del();
 writeProfileExpr();
 updateEditExpr();
}
function delAllEditExpr( e ){
 editExpr[graphIndex()][exprType].delAll();
 writeProfileExpr();
 updateEditExpr();
 document.getElementById( "graph_usage" ).innerHTML = "";
}
function doButton0( e ){ insEditExpr( "0" ); }
function doButton1( e ){ insEditExpr( "1" ); }
function doButton2( e ){ insEditExpr( "2" ); }
function doButton3( e ){ insEditExpr( "3" ); }
function doButton4( e ){ insEditExpr( "4" ); }
function doButton5( e ){ insEditExpr( "5" ); }
function doButton6( e ){ insEditExpr( "6" ); }
function doButton7( e ){ insEditExpr( "7" ); }
function doButton8( e ){ insEditExpr( "8" ); }
function doButton9( e ){ insEditExpr( "9" ); }
function doButtonPoint( e ){ insEditExpr( "." ); }
function doButtonPlus( e ){ insEditExpr( "\\+" ); }
function doButtonMinus( e ){ insEditExpr( "\\-" ); }
function doButtonSpace( e ){ insEditExpr( " " ); }
function doButtonEPlus( e ){ insEditExpr( "e+" ); }
function doButtonEMinus( e ){ insEditExpr( "e-" ); }
function doButtonI( e ){ insEditExpr( "i" ); }
function doButtonMul( e ){ insEditExpr( "*" ); }
function doButtonDiv( e ){ insEditExpr( "/" ); }
function doButtonMod( e ){ insEditExpr( "%" ); }
function doButtonAdd( e ){ insEditExpr( "+" ); }
function doButtonSub( e ){ insEditExpr( "-" ); }
function doButtonUnaryMinus( e ){ insEditExpr( "[-]" ); }
function doButtonDeg( e ){ insEditExpr( "d" ); }
function doButtonGrad( e ){ insEditExpr( "g" ); }
function doButtonRad( e ){ insEditExpr( "r" ); }
function doButtonFactorial( e ){ insEditExpr( "!" ); }
function doButtonPow( e ){ insEditExpr( "^" ); }
function doButtonEnter( e ){
 doButtonUIGraph();
 doGraphDraw( e );
}
function doButtonLog( e ){
 insEditExpr( topParam._calculator ? "ln " : "log " );
 setButtonMode( 0 );
}
function doButtonLog10( e ){
 insEditExpr( topParam._calculator ? "log " : "log10 " );
 setButtonMode( 0 );
}
function doButtonFunc( e ){
 insEditExpr( e.target.innerHTML + " " );
 setButtonMode( 0 );
}
function doButtonExtFunc( e ){
 insEditExpr( "!" + e.target.innerHTML + " " );
 topProc.usage( e.target.innerHTML, topParam, true );
 setButtonMode( 0 );
}
function doButtonVar( e ){
 switch( graphUI._mode ){
 case 4:
 case 5:
  insEditExpr( "t" );
  break;
 default:
  insEditExpr( "x" );
  break;
 }
}
function doButtonRCL( e ){
 insEditExpr( graphUI.buttonRCL() );
}
function doButtonTop( e ){ insEditExpr( "(" ); }
function doButtonEnd( e ){ insEditExpr( ")" ); }
function updateLogExpr(){
 var html = new String();
 var tmpEdit = new EditExpr( -1 );
 var forward = new _String();
 var after = new _String();
 var tmp;
 var j = 0;
 html += "<table width='100%' border='0' cellpadding='0' cellspacing='0'>";
 for( var i = logExpr.scroll(); i < logExpr.num(); i++ ){
  tmpEdit.importLog( logExpr.obj( i ) );
  tmpEdit.get( forward, after );
  if( i == logExpr.index() ){
   html += "<tr><td bgcolor='" + cursorBack + "'>";
  } else {
   html += "<tr><td>";
  }
  tmp = forward.str() + after.str();
  if( tmp.length > 29 ){
   if( i == logExpr.index() ){
    tmp = common.escape( tmp.substring( 0, 27 ) ) + "<span class='span_ellipsis' style='color:" + cursorText + "'>...</span>";
   } else {
    tmp = common.escape( tmp.substring( 0, 27 ) ) + "<span class='span_ellipsis'>...</span>";
   }
  } else {
   tmp = common.escape( tmp );
  }
  if( i == logExpr.index() ){
   html += "<span style='color:" + cursorText + "'>" + tmp + "</span>";
  } else {
   html += tmp;
  }
  html += "</td></tr>";
  j++;
  if( j >= logExpr.lineNum() ){
   break;
  }
 }
 html += "</table>";
 logExpr.element().innerHTML = html;
}
function addLogExpr(){
 for( var i = 1; i >= 0; i-- ){
  var expr = new _String();
  editExpr[graphIndex()][i].exportLog( expr );
  if( expr.str().length > 0 ){
   for( var j = logExpr.num() - 1; j >= 0; j-- ){
    if( logExpr.obj( j ) == expr.str() ){
     logExpr.del( j );
    }
   }
   logExpr.ins( 0, expr.str() );
  }
 }
 updateLogExpr();
 writeProfileLogExpr();
}
function importLogExpr(){
 var expr = logExpr.obj( logExpr.index() );
 if( expr != null ){
  editExpr[graphIndex()][exprType].importLog( expr );
  writeProfileExpr();
  updateEditExpr();
  doButtonUIMain();
  setButtonMode( 0 );
 }
}
function upLogExpr( e ){
 logExpr.up();
 updateLogExpr();
}
function downLogExpr( e ){
 logExpr.down();
 updateLogExpr();
}
function delLogExpr( e ){
 logExpr.del( logExpr.index() );
 updateLogExpr();
 writeProfileLogExpr();
}
function delAllLogExpr(){
 logExpr.delAll();
 updateLogExpr();
 writeProfileLogExpr();
}
function updateSelectVar(){
 var select = document.getElementById( "graph_select_var" );
 var index;
 for( var i = 0; i < 26; i++ ){
  index = 65 + i;
  if( topParam.isZero( index ) ){
   select.options[i].innerHTML = "@" + String.fromCharCode( index );
  } else {
   var real = new _String();
   var imag = new _String();
   procToken().valueToString( topParam, topParam.val( index ), real, imag );
   select.options[i].innerHTML = "@" + String.fromCharCode( index ) + "&nbsp;=&nbsp;" + real.str() + imag.str();
  }
 }
}
function getInputVarsValue( index ){
 var val = parseFloat( inputVars[index - 65].value );
 if( _ISNAN( val ) ){
  val = 0.0;
 }
 return val;
}
function doGraphEditVar( index ){
 topParam.setVal( index, getInputVarsValue( index ), true );
 updateSelectVar();
 writeProfileVar( index );
}
function selListImage( url, x, y ){
 if( url.length > 0 ){
  var i;
  for( i = 0; i < listImage.num(); i++ ){
   if( listImage.obj( i )._url == url ){
    listImage.setIndex( i );
    break;
   }
  }
  if( i == listImage.num() ){
   listImage.add( new ListImageItem( url, x, y ) );
   writeProfileImage();
  }
 }
 updateListImage();
}
function addListImage(){
 var url = skinImage;
 if( url.length > 0 ){
  var i;
  for( i = 0; i < listImage.num(); i++ ){
   if( listImage.obj( i )._url == url ){
    listImage.obj( i )._x = document.getElementById( "graph_edit_x" ).value;
    listImage.obj( i )._y = document.getElementById( "graph_edit_y" ).value;
    listImage.setIndex( i );
    break;
   }
  }
  if( i == listImage.num() ){
   var position = "50";
   document.getElementById( "graph_edit_x" ).value = position;
   document.getElementById( "graph_edit_y" ).value = position;
   updateSkin();
   writeProfileString( "ENV_", "SkinImageX", position );
   writeProfileString( "ENV_", "SkinImageY", position );
   listImage.add( new ListImageItem( url, position, position ) );
  }
  updateListImage();
  writeProfileImage();
 }
}
function getListImage(){
 var item = listImage.obj( listImage.index() );
 if( item != null ){
  skinImage = item._url;
  document.getElementById( "graph_edit_skin_image" ).value = skinImage;
  document.getElementById( "graph_edit_x" ).value = item._x;
  document.getElementById( "graph_edit_y" ).value = item._y;
  updateSkin();
  writeProfileString( "ENV_", "SkinImage" , skinImage );
  writeProfileString( "ENV_", "SkinImageX", item._x );
  writeProfileString( "ENV_", "SkinImageY", item._y );
 }
}
function updateListImage(){
 var html = new String();
 var tmp;
 var j = 0;
 html += "<table width='100%' border='0' cellpadding='0' cellspacing='0'>";
 for( var i = listImage.scroll(); i < listImage.num(); i++ ){
  if( i == listImage.index() ){
   html += "<tr><td bgcolor='" + cursorBack + "'>";
  } else {
   html += "<tr><td>";
  }
  tmp = listImage.obj( i )._url;
  if( tmp.length > 29 ){
   if( i == listImage.index() ){
    tmp = "<span class='span_ellipsis' style='color:" + cursorText + "'>...</span>" + tmp.slice( tmp.length - 27 );
   } else {
    tmp = "<span class='span_ellipsis'>...</span>" + tmp.slice( tmp.length - 27 );
   }
  }
  if( i == listImage.index() ){
   html += "<span style='color:" + cursorText + "'>" + tmp + "</span>";
  } else {
   html += tmp;
  }
  html += "</td></tr>";
  j++;
  if( j >= listImage.lineNum() ){
   break;
  }
 }
 html += "</table>";
 listImage.element().innerHTML = html;
}
function upListImage( e ){
 listImage.up();
 updateListImage();
 getListImage();
}
function downListImage( e ){
 listImage.down();
 updateListImage();
 getListImage();
}
function delListImage( e ){
 listImage.del( listImage.index() );
 updateListImage();
 writeProfileImage();
 getListImage();
}
function doCheckReplotMode(){
 graphUI.setRePlotModeFlag( document.getElementById( "check_replot_mode" ).checked );
 writeProfileInt( "ENV_", "RePlotMode", graphUI.rePlotModeFlag() ? 1 : 0 )
}
function doCheckReplotAngle(){
 graphUI.setRePlotAngleFlag( document.getElementById( "check_replot_angle" ).checked );
 writeProfileInt( "ENV_", "RePlotAngle", graphUI.rePlotAngleFlag() ? 1 : 0 )
}
function doCheckReplotWindow(){
 graphUI.setRePlotWindowFlag( document.getElementById( "check_replot_window" ).checked );
 writeProfileInt( "ENV_", "RePlotWindow", graphUI.rePlotWindowFlag() ? 1 : 0 )
}
function doCheckPrintUsage(){
 usageFlag = document.getElementById( "check_print_usage" ).checked;
 updateButtonHeight();
 writeProfileInt( "ENV_", "PrintUsage", usageFlag ? 1 : 0 );
}
function canUseCookie(){
 return navigator.cookieEnabled;
}
var _cookie_expires = "Tue, 01 Jan 2030 00:00:00 GMT";
function setExpiresDate( date ){
 _cookie_expires = (new Date( currentTimeMillis() + date * 86400000 )).toGMTString();
}
function _getCookieArray(){
 return document.cookie.split( ";" );
}
function _getCookieParam( cookie ){
 var param = cookie.split( "=" );
 param[0] = param[0].replace( new RegExp( "^\\s+" ), "" );
 return param;
}
function cookieNum(){
 if( document.cookie.length == 0 ){
  return 0;
 }
 return _getCookieArray().length;
}
function getCookieKey( index ){
 if( document.cookie.length == 0 ){
  return "";
 }
 var cookie = _getCookieArray();
 if( index >= cookie.length ){
  return "";
 }
 var param = _getCookieParam( cookie[index] );
 return param[0];
}
function getCookie( key, defValue ){
 var cookie = _getCookieArray();
 for( var i = 0; i < cookie.length; i++ ){
  var param = _getCookieParam( cookie[i] );
  if( param[0] == key ){
   return unescape( param[1] );
  }
 }
 return defValue;
}
function setCookie( key, value ){
 if( value == null ){
  value = "";
 }
 var expires = _cookie_expires;
 if( value.length == 0 ){
  var date = new Date();
  date.setTime( 0 );
  expires = date.toGMTString();
 }
 document.cookie = key + "=" + escape( value ) + "; expires=" + expires;
}
function clearCookie( prefix ){
 var cookie = _getCookieArray();
 for( var i = cookie.length - 1; i >= 0; i-- ){
  var param = _getCookieParam( cookie[i] );
  if( (prefix == undefined) || (param[0].indexOf( prefix ) == 0) ){
   setCookie( param[0], "" );
  }
 }
}
var _cookie_val;
var _cookie_s;
var _cookie_str;
function beginCookieRead( key ){
 _cookie_val = getCookie( key, "" );
 _cookie_s = 0;
}
function cookieRead(){
 if( _cookie_s >= _cookie_val.length ){
  _cookie_str = "";
 } else {
  var e = _cookie_val.indexOf( "&", _cookie_s );
  if( e < 0 ){
   e = _cookie_val.length;
  }
  _cookie_str = _cookie_val.substring( _cookie_s, e );
  _cookie_s = e + 1;
 }
 return unescape( _cookie_str );
}
function endCookieRead(){
 _cookie_val = "";
 _cookie_str = "";
}
function beginCookieWrite(){
 _cookie_val = "";
}
function cookieWrite( str ){
 if( _cookie_val.length > 0 ){
  _cookie_val += "&";
 }
 _cookie_val += escape( str );
}
function endCookieWrite( key ){
 setCookie( key, _cookie_val );
 _cookie_val = "";
}
function canUseStorage(){
 try {
  return window.localStorage != null;
 } catch( e ){}
 return false;
}
function storageNum(){
 return window.localStorage.length;
}
function getStorageKey( index ){
 if( index >= storageNum() ){
  return "";
 }
 return window.localStorage.key( index );
}
function getStorage( key, defValue ){
 var value = window.localStorage.getItem( key );
 return (value == null) ? defValue : value;
}
function setStorage( key, value ){
 if( (value != null) && (value.length > 0) ){
  window.localStorage.setItem( key, value );
 } else {
  window.localStorage.removeItem( key );
 }
}
function clearStorage( prefix ){
 if( prefix == undefined ){
  window.localStorage.clear();
 } else {
  var num = storageNum();
  var key;
  for( var i = num - 1; i >= 0; i-- ){
   key = getStorageKey( i );
   if( (prefix == undefined) || (key.indexOf( prefix ) == 0) ){
    setStorage( key, null );
   }
  }
 }
}
var _storage_val;
var _storage_s;
var _storage_str;
function beginStorageRead( key ){
 _storage_val = getStorage( key, "" );
 _storage_s = 0;
}
function storageRead(){
 if( _storage_s >= _storage_val.length ){
  _storage_str = "";
 } else {
  var e = _storage_val.indexOf( "&", _storage_s );
  if( e < 0 ){
   e = _storage_val.length;
  }
  _storage_str = _storage_val.substring( _storage_s, e );
  _storage_s = e + 1;
 }
 return unescape( _storage_str );
}
function endStorageRead(){
 _storage_val = "";
 _storage_str = "";
}
function beginStorageWrite(){
 _storage_val = "";
}
function storageWrite( str ){
 if( _storage_val.length > 0 ){
  _storage_val += "&";
 }
 _storage_val += escape( str );
}
function endStorageWrite( key ){
 setStorage( key, _storage_val );
 _storage_val = "";
}
function _Preference( useStorage ){
 this.s = (useStorage && canUseStorage());
 this.c = canUseCookie();
}
_Preference.prototype = {
 num : function(){
  if( this.s ){
   return storageNum();
  } else if( this.c ){
   return cookieNum();
  }
  return 0;
 },
 getKey : function( index ){
  if( this.s ){
   return getStorageKey( index );
  } else if( this.c ){
   return getCookieKey( index );
  }
  return null;
 },
 get : function( key, defValue ){
  if( this.s ){
   return getStorage( key, defValue );
  } else if( this.c ){
   return getCookie( key, defValue );
  }
  return defValue;
 },
 set : function( key, value ){
  if( this.s ){
   setStorage( key, value );
  } else if( this.c ){
   setCookie( key, value );
  }
 },
 clear : function( prefix ){
  if( this.s ){
   clearStorage( prefix );
  } else if( this.c ){
   clearCookie( prefix );
  }
 },
 beginRead : function( key ){
  if( this.s ){
   beginStorageRead( key );
  } else if( this.c ){
   beginCookieRead( key );
  }
 },
 read : function(){
  if( this.s ){
   return storageRead();
  } else if( this.c ){
   return cookieRead();
  }
  return "";
 },
 endRead : function(){
  if( this.s ){
   endStorageRead();
  } else if( this.c ){
   endCookieRead();
  }
 },
 beginWrite : function(){
  if( this.s ){
   beginStorageWrite();
  } else if( this.c ){
   beginCookieWrite();
  }
 },
 write : function( str ){
  if( this.s ){
   storageWrite( str );
  } else if( this.c ){
   cookieWrite( str );
  }
 },
 endWrite : function( key ){
  if( this.s ){
   endStorageWrite( key );
  } else if( this.c ){
   endCookieWrite( key );
  }
 }
};
function _HttpRequestHeader( header, value ){
 this._header = header;
 this._value = value;
}
_HttpRequestHeader.prototype = {
 set : function( request ){
  _httpSetRequestHeader( request, this._header, this._value );
 }
};
var _http_header;
function httpInitHeader(){
 _http_header = new Array();
}
function httpAddHeader( header, value ){
 _http_header[_http_header.length] = new _HttpRequestHeader( header, value );
}
function httpHeader(){
 return _http_header;
}
function _httpOpen( method, url ){
 var request = null;
 if( !!XMLHttpRequest ){
  request = new XMLHttpRequest();
 } else if( !!ActiveXObject ){
  try {
   request = new ActiveXObject( "Msxml2.XMLHTTP.6.0" );
  } catch( e ){
   try {
    request = new ActiveXObject( "Msxml2.XMLHTTP.3.0" );
   } catch( e ){
    try {
     request = new ActiveXObject( "Msxml2.XMLHTTP" );
    } catch( e ){
     try {
      request = new ActiveXObject( "Microsoft.XMLHTTP" );
     } catch( e ){}
    }
   }
  }
 }
 if( request != null ){
  request.open( method, url, true );
  request.onreadystatechange = function(){
   if( request.readyState == 4 ){
    if( request.status == 200 ){
     onHttpResponse( request, request.responseText );
    } else {
     onHttpError( request, request.status );
    }
   }
  };
 }
 return request;
}
function _httpSetRequestHeader( request, header, value ){
 request.setRequestHeader( header, value );
 onHttpSetRequestHeader( header, value );
}
function httpGet( url, header ){
 var request = _httpOpen( "GET", url );
 if( request != null ){
  _httpSetRequestHeader( request, "If-Modified-Since", "Thu, 01 Jun 1970 00:00:00 GMT" );
  if( header != undefined ){
   for( var i = 0; i < header.length; i++ ){
    header[i].set( request );
   }
  }
  request.send( null );
 }
 return request;
}
function httpPost( url, data, type, header ){
 var request = _httpOpen( "POST", url );
 if( request != null ){
  _httpSetRequestHeader( request, "If-Modified-Since", "Thu, 01 Jun 1970 00:00:00 GMT" );
  _httpSetRequestHeader( request, "Content-Type", type );
  if( header != undefined ){
   for( var i = 0; i < header.length; i++ ){
    header[i].set( request );
   }
  }
  request.send( data );
 }
 return request;
}
var loadNum = 0;
var loading = false;
function doLoadExtFuncFile(){
 if( !loading ){
  loading = true;
  loadExtFuncFile();
 }
}
function loadExtFuncFile(){
 if( loadNum >= extFuncFile.length ){
  if( electron != null ){
   electron.applyExtFunc();
  }
  cssSetStyleDisplayById( "graph_button_loadextfunc", false );
  if( common.isPC() ){
   cssSetStyleDisplayById( "graph_input_loadextfunc" , true );
   cssSetStyleDisplayById( "graph_input_loadextfunc2", true );
   cssSetStyleDisplayById( "graph_input_loadextfunc3", true );
  }
  return;
 }
 var data;
 if( electron != null ){
  data = electron.getExtFunc( extFuncFile[loadNum], "" );
 } else {
  data = getProfileString( "TMP_", extFuncFile[loadNum], "" );
 }
 if( data.length > 0 ){
  onHttpResponse( null, data );
 } else {
  if( loading ){
   var file = extFuncFile[loadNum];
   httpGet( file );
  }
 }
}
function onHttpSetRequestHeader( header, value ){
}
function onHttpResponse( request, data ){
 extFuncData[loadNum] = splitData( data );
 data = "";
 for( var i = 0; i < extFuncData[loadNum].length; i++ ){
  if( i != 0 ) data += "\n";
  data += extFuncData[loadNum][i];
 }
 if( request != null ){
  if( electron != null ){
   electron.setExtFunc( extFuncFile[loadNum], data );
  } else {
   writeProfileString( "TMP_", extFuncFile[loadNum], data );
  }
 }
 loadNum++;
 loadExtFuncFile();
}
function onHttpError( request, status ){
 loading = false;
}
function loadExtFuncFile2(){
 var i;
 if( electron != null ){
  electron.beginReadExtFunc( "load" );
  for( i = 0; ; i++ ){
   file = electron.readExtFunc();
   if( file.length == 0 ){
    break;
   }
   extFuncFile2[i] = file;
  }
  electron.endReadExtFunc();
 } else {
  beginGetProfile( "TMP_LOADCEF_" );
  for( i = 0; ; i++ ){
   file = getProfile();
   if( file.length == 0 ){
    break;
   }
   extFuncFile2[i] = file;
  }
  endGetProfile();
 }
 for( i = 0; i < extFuncFile2.length; i++ ){
  var data;
  if( electron != null ){
   data = electron.getExtFunc( extFuncFile2[i], "" );
  } else {
   data = getProfileString( "TMP_", extFuncFile2[i], "" );
  }
  if( data.length > 0 ){
   extFuncData2[i] = splitData( data );
  }
 }
}
function onInputFileLoad( func, data ){
 var i;
 topProc.clearFuncCache( func );
 var name = "/" + func + ".cef";
 var index = extFuncFile2.length;
 for( i = 0; i < extFuncFile2.length; i++ ){
  if( extFuncFile2[i] == name ){
   index = i;
   break;
  }
 }
 extFuncFile2[index] = name;
 extFuncData2[index] = splitData( data );
 regExtFuncButton( extFuncName( extFuncFile2[index] ) );
 data = "";
 for( i = 0; i < extFuncData2[index].length; i++ ){
  if( i != 0 ) data += "\n";
  data += extFuncData2[index][i];
 }
 if( electron != null ){
  electron.beginWriteExtFunc();
  for( i = 0; i < extFuncFile2.length; i++ ){
   electron.writeExtFunc( extFuncFile2[i] );
  }
  electron.endWriteExtFunc( "load" );
  electron.setExtFunc( extFuncFile2[index], data );
 } else {
  beginWriteProfile();
  for( i = 0; i < extFuncFile2.length; i++ ){
   writeProfile( extFuncFile2[i] );
  }
  endWriteProfile( "TMP_LOADCEF_" );
  writeProfileString( "TMP_", extFuncFile2[index], data );
 }
}
function onInputFileLoadEnd( num ){
 if( electron != null ){
  electron.applyExtFunc();
 }
}
function extFuncName( str ){
 var end = str.lastIndexOf( ".cef" );
 if( end >= 0 ){
  var top = str.lastIndexOf( "/" );
  if( top >= 0 ){
   top++;
  } else {
   top = 0;
  }
  return str.substring( top, end );
 }
 return "";
}
function getExtFuncDataDirect( func ){
 if( (func.charAt( 0 ) == "!") && (func.length == 2) ){
  return splitData( getFunc( func.charAt( 1 ) ) );
 }
 return null;
}
function getExtFuncDataNameSpace( func ){
 for( var i = 0; i < extFuncFile.length; i++ ){
  if( extFuncName( extFuncFile[i] ) == func ){
   if( i < extFuncData.length ){
    return extFuncData[i];
   }
  }
 }
 for( var i = 0; i < extFuncFile2.length; i++ ){
  if( extFuncName( extFuncFile2[i] ) == func ){
   if( i < extFuncData2.length ){
    return extFuncData2[i];
   }
  }
 }
 return null;
}
function regExtFuncButton( name ){
 var i;
 if( name.indexOf( ".inc" ) >= 0 ){
  return;
 }
 var elements = document.getElementsByName( "button_extfunc" );
 for( i = 0; i < elements.length; i++ ){
  if( elements[i].innerHTML == name ){
   return;
  }
 }
 for( i = 0; i < elements.length; i++ ){
  if( elements[i].disabled ){
   elements[i].innerHTML = name;
   elements[i].disabled = false;
   _addGraphEventListener( elements[i], "click", doButtonExtFunc );
   break;
  }
 }
}
function setExtFuncData( index, data ){
 if( loadNum >= extFuncFile.length ){
  return;
 }
 cssSetStyleDisplayById( "graph_button_loadextfunc", false );
 extFuncData[loadNum] = splitData( data );
 loadNum++;
 nativeRequest.send( "load_extfunc/" + extFuncFile[loadNum] );
}
function mainProc( parentProc, parentParam, func, funcParam, childProc, childParam ){
 var ret;
try {
 ret = childProc.mainLoop( func, childParam, funcParam, parentParam );
} catch( e ){ catchError( e ); }
 return ret;
}
function assertProc( num, func ){
 con.newLine();
 if( (func != null) && (func.length > 0) ){
  if( englishFlag ) con.print( func + ": " );
  else con.print( func + ":" );
 }
 if( num > 0 ){
  if( englishFlag ) con.print( "Line " + num + ": " );
  else con.print( "" + num + "行:" );
 }
 if( englishFlag ) con.println( "Error " + intToString( _CLIP_ERR_ASSERT, 16, 4 ) + ":" + consoleBreak() + "Failed to assert." );
 else con.println( "エラー(" + intToString( _CLIP_ERR_ASSERT, 16, 4 ) + "):" + consoleBreak() + "アサートに失敗しました" );
 return retAssertProc;
}
function getErrorString( err, num, func, token ){
 var string = new String();
 var error = getProcErrorDefString( err, token, topParam._calculator, englishFlag );
 if( error.length > 0 ){
  if( (func != null) && (func.length > 0) ){
   if( englishFlag ) string += func + ": ";
   else string += func + ":";
  }
  if( num > 0 ){
   if( englishFlag ) string += "Line " + num + ": ";
   else string += "" + num + "行:";
  }
  if( englishFlag ) string += (((err & _CLIP_PROC_WARN) != 0) ? "Warning" : "Error") + " " + intToString( err, 16, 4 ) + ":" + consoleBreak() + error;
  else string += (((err & _CLIP_PROC_WARN) != 0) ? "警告" : "エラー") + "(" + intToString( err, 16, 4 ) + "):" + consoleBreak() + error;
 }
 return string;
}
function errorProc( err, num, func, token ){
 if( silentErr ){
  procError.add( err, num, func, token );
 } else {
  var string = getErrorString( err, num, func, token );
  if( string.length > 0 ){
   con.newLine();
   con.println( string );
  }
 }
}
function printWarn( warn, num, func ){
 con.newLine();
 if( (func != null) && (func.length > 0) ){
  if( englishFlag ) con.print( func + ": " );
  else con.print( func + ":" );
 }
 if( num > 0 ){
  if( englishFlag ) con.print( "Line " + num + ": " );
  else con.print( "" + num + "行:" );
 }
 if( englishFlag ) con.println( "Warning:" + consoleBreak() + warn );
 else con.println( "警告:" + consoleBreak() + warn );
}
function printError( error, num, func ){
 con.newLine();
 if( (func != null) && (func.length > 0) ){
  if( englishFlag ) con.print( func + ": " );
  else con.print( func + ":" );
 }
 if( num > 0 ){
  if( englishFlag ) con.print( "Line " + num + ": " );
  else con.print( "" + num + "行:" );
 }
 if( englishFlag ) con.println( "Error:" + consoleBreak() + error );
 else con.println( "エラー:" + consoleBreak() + error );
}
function doFuncGColor( rgb ){
 return doFuncGColorBGR( rgb, COLOR_WIN );
}
function doFuncGColor24( index ){
 return _RGB2BGR( COLOR_WIN[index] );
}
function doFuncEval( parentProc, childProc, childParam, string, value ){
 var ret;
try {
 ret = parentProc.doFuncEval( childProc, childParam, string, value );
} catch( e ){ catchError( e ); }
 return ret;
}
function doCommandClear(){
 con.clear();
}
function doCommandPrint( topPrint, flag ){
 var cur = topPrint;
 while( cur != null ){
  if( cur._string != null ){
   var tmp = new _String( cur._string );
   tmp.escape().replaceNewLine( consoleBreak() );
   con.print( tmp.str() );
  }
  cur = cur._next;
 }
 if( flag ){
  con.println();
 }
}
function doCommandScan( topScan, proc, param ){
 var defString = new String();
 var newString = new String();
 var cur = topScan;
 while( cur != null ){
  defString = cur.getDefString( proc, param );
  newString = prompt( cur.title(), defString );
  if( (newString == null) || (newString.length == 0) ){
   newString = defString;
  }
  cur.setNewValue( newString, proc, param );
  cur = cur._next;
 }
}
function gWorldClear( gWorld, color ){
 canvasClear();
 canvasSetColor( COLOR_WIN[color] );
 canvasFill( 0, 0, gWorld._width, gWorld._height );
 canvasSetColor( COLOR_WIN[gWorld._color] );
}
function gWorldSetColor( gWorld, color ){
 canvasSetColor( COLOR_WIN[color] );
}
function gWorldPutColor( gWorld, x, y, color ){
 if( topProc._gUpdateFlag ){
  canvasSetColor( COLOR_WIN[color] );
  canvasPut( x, y );
  canvasSetColor( COLOR_WIN[gWorld._color] );
 }
}
function gWorldPut( gWorld, x, y ){
 if( topProc._gUpdateFlag ){
  canvasPut( x, y );
 }
}
function gWorldFill( gWorld, x, y, w, h ){
 if( topProc._gUpdateFlag ){
  canvasFill( x, y, w, h );
 }
}
function gWorldLine( gWorld, x1, y1, x2, y2 ){
 if( topProc._gUpdateFlag ){
  canvasLine( x1, y1, x2, y2 );
 }
}
function gWorldTextColor( gWorld, text, x, y, color, right ){
 if( topProc._gUpdateFlag ){
  if( right ){
   x -= su.stringWidth( text );
  }
  canvasSetColor( COLOR_WIN[color] );
  canvasDrawString( text, x, y );
  canvasSetColor( COLOR_WIN[gWorld._color] );
 }
}
function doCommandGColor( index, rgb ){
 COLOR_WIN[index] = _RGB2BGR( rgb );
}
function doCommandGUpdate( gWorld ){
 canvasClear();
 var image = gWorld._image;
 var offset = gWorld._offset;
 var width = gWorld._width;
 var height = gWorld._height;
 var x, y;
 for( y = 0; y < height; y++ ){
  for( x = 0; x < width; x++ ){
   canvasSetColor( COLOR_WIN[image[y * offset + x]] );
   canvasPut( x, y );
  }
 }
 canvasSetColor( COLOR_WIN[gWorld._color] );
}
function doCommandPlot( parentProc, parentParam, graph, start, end, step ){
 var childProc = new _Proc( parentParam._mode, parentParam._mpPrec, parentParam._mpRound, false, parentProc._printAssert, parentProc._printWarn, false );
 var childParam = new _Param( parentProc._curLine._num, parentParam, true );
 childParam._enableCommand = false;
 childParam._enableOpPow = true;
 childParam._enableStat = false;
try {
 initProcLoopCount();
 parentProc.doCommandPlot( childProc, childParam, graph, start, end, step );
} catch( e ){ catchError( e ); }
 childParam.end();
 childProc.end();
}
function doCommandRePlot( parentProc, parentParam, graph, start, end, step ){
 var childProc = new _Proc( parentParam._mode, parentParam._mpPrec, parentParam._mpRound, false, parentProc._printAssert, parentProc._printWarn, false );
 var childParam = new _Param( parentProc._curLine._num, parentParam, true );
 childParam._enableCommand = false;
 childParam._enableOpPow = true;
 childParam._enableStat = false;
try {
 initProcLoopCount();
 parentProc.doCommandRePlot( childProc, childParam, graph, start, end, step );
} catch( e ){ catchError( e ); }
 childParam.end();
 childProc.end();
}
function doCommandUsage( topUsage ){
 common.setFont( 16, "Helvetica" );
 var usage = new String();
 var cur = topUsage;
 while( cur != null ){
  if( cur._string != null ){
   usage += common.escape( common.truncate( cur._string, 316, "" ) ) + "<br>";
  }
  cur = cur._next;
 }
 document.getElementById( "graph_usage" ).innerHTML = usage;
}
function onStartPlot(){
 silentErr = true;
}
function onEndPlot(){
 silentErr = false;
 var err = new _Integer();
 var num = new _Integer();
 var func = new _String();
 var token = new _String();
 for( var i = 0; i < procError.num(); i++ ){
  procError.get( i, err, num, func, token );
  errorProc( err._val, num._val, func.str(), token.str() );
 }
 procError.delAll();
}
function onStartRePlot(){
 onStartPlot();
}
function onEndRePlot(){
 onEndPlot();
}
function dummy(){}
function updateGraphRadioAngType(){
 var type = new _Integer();
 var updateFlag = new _Boolean();
 topProc.getAngType( type, updateFlag );
 document.getElementById( "graph_radio_deg" ).checked = (type._val == _ANG_TYPE_DEG );
 document.getElementById( "graph_radio_rad" ).checked = (type._val == _ANG_TYPE_RAD );
 document.getElementById( "graph_radio_grad" ).checked = (type._val == _ANG_TYPE_GRAD);
}
function doGraphDeg(){
 graphUI.setAngType( _ANG_TYPE_DEG );
 updateGraphRadioAngType();
 writeProfileAngle();
}
function doGraphRad(){
 graphUI.setAngType( _ANG_TYPE_RAD );
 updateGraphRadioAngType();
 writeProfileAngle();
}
function doGraphGrad(){
 graphUI.setAngType( _ANG_TYPE_GRAD );
 updateGraphRadioAngType();
 writeProfileAngle();
}
function doChangeVar( select ){
 graphUI.setCurVar( select.options[select.selectedIndex].value );
}
function doGraphZoomIn( e ){
 graphUI.zoomIn();
 writeProfileWindow();
}
function doGraphZoomOut( e ){
 graphUI.zoomOut();
 writeProfileWindow();
}
function doGraphDraw( e ){
 document.getElementById( "graph_usage" ).innerHTML = "";
 addLogExpr();
 graphUI._editExpr1 = document.getElementById( "graph_edit_expr1" ).value;
 graphUI._editExpr2 = document.getElementById( "graph_edit_expr2" ).value;
 graphUI._editMin = "" + document.getElementById( "graph_edit_min" ).value;
 graphUI._editMax = "" + document.getElementById( "graph_edit_max" ).value;
 graphUI._editPitch = "" + document.getElementById( "graph_edit_pitch" ).value;
 for( var i = 65; i <= 90; i++ ){
  topParam.setVal( i, getInputVarsValue( i ), true );
 }
 con.newLine();
 graphUI.draw();
 writeProfileFloat( "ENV_", "ParamMin" , graphUI._paramMin );
 writeProfileFloat( "ENV_", "ParamMax" , graphUI._paramMax );
 writeProfileFloat( "ENV_", "ParamPitch", graphUI._paramPitch );
 writeProfileFloat( "ENV_", "PolarMin" , graphUI._polarMin );
 writeProfileFloat( "ENV_", "PolarMax" , graphUI._polarMax );
 writeProfileFloat( "ENV_", "PolarPitch", graphUI._polarPitch );
}
function doGraphClear( e ){
 graphUI.clear();
}
function updateInputExpr1(){
 var forward = new _String();
 var after = new _String();
 editExpr[graphIndex()][0].get( forward, after, false );
 document.getElementById( "graph_edit_expr1" ).value = forward.str() + after.str();
}
function updateInputExpr2(){
 var forward = new _String();
 var after = new _String();
 editExpr[graphIndex()][1].get( forward, after, false );
 document.getElementById( "graph_edit_expr2" ).value = forward.str() + after.str();
}
function doEditExpr1(){
 updateInputExpr2();
 exprType = 0;
 cssSetStyleDisplayById( "graph_ui_expr1", false );
 cssSetStyleDisplayById( "graph_ui_expr" , true );
 cssSetStyleDisplayById( "graph_ui_expr2", true );
 doGraphStartEdit();
}
function doEditExpr2(){
 updateInputExpr1();
 exprType = 1;
 cssSetStyleDisplayById( "graph_ui_expr2", false );
 cssSetStyleDisplayById( "graph_ui_expr1", true );
 cssSetStyleDisplayById( "graph_ui_expr" , true );
 doGraphStartEdit();
}
function updateGraphRadioTool(){
 document.getElementById( "graph_radio_trace" ).checked = (graphUI._tool == 0);
 document.getElementById( "graph_radio_hand" ).checked = (graphUI._tool == 1 );
 document.getElementById( "graph_radio_zoom" ).checked = (graphUI._tool == 2 );
}
function doGraphTrace(){
 graphUI.setTool( 0 );
 updateGraphRadioTool();
 writeProfileInt( "ENV_", "Tool", graphUI._tool )
}
function doGraphHand(){
 graphUI.setTool( 1 );
 updateGraphRadioTool();
 writeProfileInt( "ENV_", "Tool", graphUI._tool )
}
function doGraphZoom(){
 graphUI.setTool( 2 );
 updateGraphRadioTool();
 writeProfileInt( "ENV_", "Tool", graphUI._tool )
}
function updateButtonColorBack(){
 document.getElementById( "color_back_00" ).disabled = (graphUI._colorBack == 0);
 document.getElementById( "color_back_01" ).disabled = (graphUI._colorBack == 1);
 document.getElementById( "color_back_02" ).disabled = (graphUI._colorBack == 2);
 document.getElementById( "color_back_03" ).disabled = (graphUI._colorBack == 3);
 document.getElementById( "color_back_04" ).disabled = (graphUI._colorBack == 4);
 document.getElementById( "color_back_05" ).disabled = (graphUI._colorBack == 5);
 document.getElementById( "color_back_06" ).disabled = (graphUI._colorBack == 6);
 document.getElementById( "color_back_07" ).disabled = (graphUI._colorBack == 7);
 document.getElementById( "color_back_08" ).disabled = (graphUI._colorBack == 8);
 document.getElementById( "color_back_09" ).disabled = (graphUI._colorBack == 9);
 document.getElementById( "color_back_10" ).disabled = (graphUI._colorBack == 10);
 document.getElementById( "color_back_11" ).disabled = (graphUI._colorBack == 11);
 document.getElementById( "color_back_12" ).disabled = (graphUI._colorBack == 12);
 document.getElementById( "color_back_13" ).disabled = (graphUI._colorBack == 13);
 document.getElementById( "color_back_14" ).disabled = (graphUI._colorBack == 14);
 document.getElementById( "color_back_15" ).disabled = (graphUI._colorBack == 15);
}
function updateButtonColorScale(){
 document.getElementById( "color_scale_00" ).disabled = (graphUI._colorScale == 0);
 document.getElementById( "color_scale_01" ).disabled = (graphUI._colorScale == 1);
 document.getElementById( "color_scale_02" ).disabled = (graphUI._colorScale == 2);
 document.getElementById( "color_scale_03" ).disabled = (graphUI._colorScale == 3);
 document.getElementById( "color_scale_04" ).disabled = (graphUI._colorScale == 4);
 document.getElementById( "color_scale_05" ).disabled = (graphUI._colorScale == 5);
 document.getElementById( "color_scale_06" ).disabled = (graphUI._colorScale == 6);
 document.getElementById( "color_scale_07" ).disabled = (graphUI._colorScale == 7);
 document.getElementById( "color_scale_08" ).disabled = (graphUI._colorScale == 8);
 document.getElementById( "color_scale_09" ).disabled = (graphUI._colorScale == 9);
 document.getElementById( "color_scale_10" ).disabled = (graphUI._colorScale == 10);
 document.getElementById( "color_scale_11" ).disabled = (graphUI._colorScale == 11);
 document.getElementById( "color_scale_12" ).disabled = (graphUI._colorScale == 12);
 document.getElementById( "color_scale_13" ).disabled = (graphUI._colorScale == 13);
 document.getElementById( "color_scale_14" ).disabled = (graphUI._colorScale == 14);
 document.getElementById( "color_scale_15" ).disabled = (graphUI._colorScale == 15);
}
function updateButtonColorUnit(){
 document.getElementById( "color_unit_00" ).disabled = (graphUI._colorUnit == 0);
 document.getElementById( "color_unit_01" ).disabled = (graphUI._colorUnit == 1);
 document.getElementById( "color_unit_02" ).disabled = (graphUI._colorUnit == 2);
 document.getElementById( "color_unit_03" ).disabled = (graphUI._colorUnit == 3);
 document.getElementById( "color_unit_04" ).disabled = (graphUI._colorUnit == 4);
 document.getElementById( "color_unit_05" ).disabled = (graphUI._colorUnit == 5);
 document.getElementById( "color_unit_06" ).disabled = (graphUI._colorUnit == 6);
 document.getElementById( "color_unit_07" ).disabled = (graphUI._colorUnit == 7);
 document.getElementById( "color_unit_08" ).disabled = (graphUI._colorUnit == 8);
 document.getElementById( "color_unit_09" ).disabled = (graphUI._colorUnit == 9);
 document.getElementById( "color_unit_10" ).disabled = (graphUI._colorUnit == 10);
 document.getElementById( "color_unit_11" ).disabled = (graphUI._colorUnit == 11);
 document.getElementById( "color_unit_12" ).disabled = (graphUI._colorUnit == 12);
 document.getElementById( "color_unit_13" ).disabled = (graphUI._colorUnit == 13);
 document.getElementById( "color_unit_14" ).disabled = (graphUI._colorUnit == 14);
 document.getElementById( "color_unit_15" ).disabled = (graphUI._colorUnit == 15);
}
function updateButtonColorText(){
 document.getElementById( "color_text_00" ).disabled = (graphUI._colorText == 0);
 document.getElementById( "color_text_01" ).disabled = (graphUI._colorText == 1);
 document.getElementById( "color_text_02" ).disabled = (graphUI._colorText == 2);
 document.getElementById( "color_text_03" ).disabled = (graphUI._colorText == 3);
 document.getElementById( "color_text_04" ).disabled = (graphUI._colorText == 4);
 document.getElementById( "color_text_05" ).disabled = (graphUI._colorText == 5);
 document.getElementById( "color_text_06" ).disabled = (graphUI._colorText == 6);
 document.getElementById( "color_text_07" ).disabled = (graphUI._colorText == 7);
 document.getElementById( "color_text_08" ).disabled = (graphUI._colorText == 8);
 document.getElementById( "color_text_09" ).disabled = (graphUI._colorText == 9);
 document.getElementById( "color_text_10" ).disabled = (graphUI._colorText == 10);
 document.getElementById( "color_text_11" ).disabled = (graphUI._colorText == 11);
 document.getElementById( "color_text_12" ).disabled = (graphUI._colorText == 12);
 document.getElementById( "color_text_13" ).disabled = (graphUI._colorText == 13);
 document.getElementById( "color_text_14" ).disabled = (graphUI._colorText == 14);
 document.getElementById( "color_text_15" ).disabled = (graphUI._colorText == 15);
}
function updateButtonColorGraph(){
 document.getElementById( "color_graph_00" ).disabled = (graphUI._color[graphIndex()] == 0);
 document.getElementById( "color_graph_01" ).disabled = (graphUI._color[graphIndex()] == 1);
 document.getElementById( "color_graph_02" ).disabled = (graphUI._color[graphIndex()] == 2);
 document.getElementById( "color_graph_03" ).disabled = (graphUI._color[graphIndex()] == 3);
 document.getElementById( "color_graph_04" ).disabled = (graphUI._color[graphIndex()] == 4);
 document.getElementById( "color_graph_05" ).disabled = (graphUI._color[graphIndex()] == 5);
 document.getElementById( "color_graph_06" ).disabled = (graphUI._color[graphIndex()] == 6);
 document.getElementById( "color_graph_07" ).disabled = (graphUI._color[graphIndex()] == 7);
 document.getElementById( "color_graph_08" ).disabled = (graphUI._color[graphIndex()] == 8);
 document.getElementById( "color_graph_09" ).disabled = (graphUI._color[graphIndex()] == 9);
 document.getElementById( "color_graph_10" ).disabled = (graphUI._color[graphIndex()] == 10);
 document.getElementById( "color_graph_11" ).disabled = (graphUI._color[graphIndex()] == 11);
 document.getElementById( "color_graph_12" ).disabled = (graphUI._color[graphIndex()] == 12);
 document.getElementById( "color_graph_13" ).disabled = (graphUI._color[graphIndex()] == 13);
 document.getElementById( "color_graph_14" ).disabled = (graphUI._color[graphIndex()] == 14);
 document.getElementById( "color_graph_15" ).disabled = (graphUI._color[graphIndex()] == 15);
 for( var i = 0; i < 3; i++ ){
  document.getElementById( "color_graph" + (i + 1) + "_00" ).disabled = (graphUI._color[i] == 0);
  document.getElementById( "color_graph" + (i + 1) + "_01" ).disabled = (graphUI._color[i] == 1);
  document.getElementById( "color_graph" + (i + 1) + "_02" ).disabled = (graphUI._color[i] == 2);
  document.getElementById( "color_graph" + (i + 1) + "_03" ).disabled = (graphUI._color[i] == 3);
  document.getElementById( "color_graph" + (i + 1) + "_04" ).disabled = (graphUI._color[i] == 4);
  document.getElementById( "color_graph" + (i + 1) + "_05" ).disabled = (graphUI._color[i] == 5);
  document.getElementById( "color_graph" + (i + 1) + "_06" ).disabled = (graphUI._color[i] == 6);
  document.getElementById( "color_graph" + (i + 1) + "_07" ).disabled = (graphUI._color[i] == 7);
  document.getElementById( "color_graph" + (i + 1) + "_08" ).disabled = (graphUI._color[i] == 8);
  document.getElementById( "color_graph" + (i + 1) + "_09" ).disabled = (graphUI._color[i] == 9);
  document.getElementById( "color_graph" + (i + 1) + "_10" ).disabled = (graphUI._color[i] == 10);
  document.getElementById( "color_graph" + (i + 1) + "_11" ).disabled = (graphUI._color[i] == 11);
  document.getElementById( "color_graph" + (i + 1) + "_12" ).disabled = (graphUI._color[i] == 12);
  document.getElementById( "color_graph" + (i + 1) + "_13" ).disabled = (graphUI._color[i] == 13);
  document.getElementById( "color_graph" + (i + 1) + "_14" ).disabled = (graphUI._color[i] == 14);
  document.getElementById( "color_graph" + (i + 1) + "_15" ).disabled = (graphUI._color[i] == 15);
 }
}
function doButtonColorBack( color ){
 graphUI._colorBack = color;
 updateButtonColorBack();
 colorBack = COLOR_WIN[graphUI.indexToColor( graphUI._colorBack )];
 graphUI.clear();
 writeProfileInt( "ENV_", "BackColor", graphUI._colorBack );
}
function doButtonColorScale( color ){
 graphUI._colorScale = color;
 updateButtonColorScale();
 graphUI.clear();
 writeProfileInt( "ENV_", "ScaleColor", graphUI._colorScale );
}
function doButtonColorUnit( color ){
 graphUI._colorUnit = color;
 updateButtonColorUnit();
 graphUI.clear();
 writeProfileInt( "ENV_", "UnitColor", graphUI._colorUnit );
}
function doButtonColorText( color ){
 graphUI._colorText = color;
 updateButtonColorText();
 graphUI.clear();
 writeProfileInt( "ENV_", "TextColor", graphUI._colorText );
}
function doButtonColorGraph( color ){
 graphUI._color[graphIndex()] = color;
 updateButtonColorGraph();
 if( graphIndex() == 0 ){
  writeProfileInt( "ENV_", "GraphColor", graphUI._color[0] );
 } else {
  writeProfileInt( "ENV_", "GraphColor" + (graphIndex() + 1), graphUI._color[graphIndex()] );
 }
}
function doButtonColorGraph1( color ){
 graphUI._color[0] = color;
 updateButtonColorGraph();
 writeProfileInt( "ENV_", "GraphColor", graphUI._color[0] );
}
function doButtonColorGraph2( color ){
 graphUI._color[1] = color;
 updateButtonColorGraph();
 writeProfileInt( "ENV_", "GraphColor2", graphUI._color[1] );
}
function doButtonColorGraph3( color ){
 graphUI._color[2] = color;
 updateButtonColorGraph();
 writeProfileInt( "ENV_", "GraphColor3", graphUI._color[2] );
}
function changeExprVar(){
 var i, j;
 var token;
 var tmpEdit = new EditExpr( -1 );
 for( i = 0; i < logExpr.num(); i++ ){
  tmpEdit.importLog( logExpr.obj( i ) );
  for( j = 0; j < tmpEdit.num(); j++ ){
   token = tmpEdit.token( j );
   switch( graphUI._mode ){
   case 4:
   case 5:
    if( token == "x" ){
     tmpEdit.set( j, "t" );
    }
    break;
   default:
    if( token == "t" ){
     tmpEdit.set( j, "x" );
    }
    break;
   }
  }
  var expr = new _String();
  tmpEdit.exportLog( expr );
  logExpr.set( i, expr.str() );
 }
 updateLogExpr();
 writeProfileLogExpr();
}
function updateGraphRadioMode(){
 doEditExpr1();
 if( graphUI._mode == 4 ){
  document.getElementById( "graph_edit_expr2" ).disabled = false;
 } else {
  document.getElementById( "graph_edit_expr2" ).disabled = true;
 }
}
function doGraphLinear(){
 graphUI.setMode( 0 );
 updateGraphRadioMode();
 writeProfileInt( "ENV_", "Mode", graphUI._mode )
}
function doGraphLogX(){
 graphUI.setMode( 1 );
 updateGraphRadioMode();
 writeProfileInt( "ENV_", "Mode", graphUI._mode )
}
function doGraphLogY(){
 graphUI.setMode( 2 );
 updateGraphRadioMode();
 writeProfileInt( "ENV_", "Mode", graphUI._mode )
}
function doGraphLogXY(){
 graphUI.setMode( 3 );
 updateGraphRadioMode();
 writeProfileInt( "ENV_", "Mode", graphUI._mode )
}
function doGraphParam(){
 graphUI.setMode( 4 );
 updateGraphRadioMode();
 writeProfileInt( "ENV_", "Mode", graphUI._mode )
}
function doGraphPolar(){
 graphUI.setMode( 5 );
 updateGraphRadioMode();
 writeProfileInt( "ENV_", "Mode", graphUI._mode )
}
function doChangeMode( select ){
 switch( select.selectedIndex ){
 case 0: doGraphLinear(); break;
 case 1: doGraphLogX (); break;
 case 2: doGraphLogY (); break;
 case 3: doGraphLogXY (); break;
 case 4: doGraphParam (); break;
 case 5: doGraphPolar (); break;
 }
 changeExprVar();
}
function doChangeIndex( select ){
 procGraph().selGraph( select.selectedIndex );
 updateButtonColorGraph();
 updateEditExpr();
 updateListTable( graphUI );
 document.getElementById( "graph_edit_trace_x" ).value = "";
 document.getElementById( "graph_edit_trace_y1" ).value = "";
 document.getElementById( "graph_edit_trace_y2" ).value = "";
 updateInputExpr1();
 updateInputExpr2();
 graphUI._editExpr1 = document.getElementById( "graph_edit_expr1" ).value;
 graphUI._editExpr2 = document.getElementById( "graph_edit_expr2" ).value;
 writeProfileInt( "ENV_", "GraphIndex", graphIndex() );
}
function updateGraphEditScreen(){
 document.getElementById( "graph_edit_unit_x" ).value = "" + graphUI._unitX + ((graphUI._unitX == _INT( graphUI._unitX )) ? ".0" : "");
 document.getElementById( "graph_edit_unit_y" ).value = "" + graphUI._unitY + ((graphUI._unitY == _INT( graphUI._unitY )) ? ".0" : "");
 document.getElementById( "graph_edit_text_x" ).value = "" + graphUI._textX;
 document.getElementById( "graph_edit_text_y" ).value = "" + graphUI._textY;
}
function doGraphEditScreen(){
 var unitX = parseFloat( document.getElementById( "graph_edit_unit_x" ).value );
 var unitY = parseFloat( document.getElementById( "graph_edit_unit_y" ).value );
 var textX = parseInt ( document.getElementById( "graph_edit_text_x" ).value );
 var textY = parseInt ( document.getElementById( "graph_edit_text_y" ).value );
 if( !_ISNAN( unitX ) && !_ISNAN( unitY ) && !_ISNAN( textX ) && !_ISNAN( textY ) ){
  graphUI._unitX = unitX;
  graphUI._unitY = unitY;
  graphUI._textX = textX;
  graphUI._textY = textY;
  writeProfileFloat( "ENV_", "UnitX", graphUI._unitX );
  writeProfileFloat( "ENV_", "UnitY", graphUI._unitY );
  writeProfileInt ( "ENV_", "TextX", graphUI._textX );
  writeProfileInt ( "ENV_", "TextY", graphUI._textY );
  graphUI.redraw();
 }
}
function doGraphStartEdit(){
 updateEditExpr();
 document.getElementById( "graph_static_expr" ).innerHTML = (exprType == 0) ? graphUI._staticExpr1 : graphUI._staticExpr2;
}
function doGraphStartEnv(){
 updateGraphRadioEnvType();
 graphUI.startEnv();
}
function doGraphResetEnv(){
 graphUI.resetEnv();
}
function doGraphEndEnv( submit ){
 if( submit ){
  var type = graphUI._envType;
  switch( graphUI._mode ){
  case 4:
  case 5:
   type = 0;
   break;
  }
  switch( type ){
  case 0:
   lockGraphResetEnv = true;
   doGraphEditOffsetX();
   doGraphEditOffsetY();
   doGraphEditRatioX ();
   doGraphEditRatioY ();
   lockGraphResetEnv = false;
   graphUI.resetEnvWindow();
   break;
  case 1:
   lockGraphResetEnv = true;
   doGraphEditLeft ();
   doGraphEditBottom();
   doGraphEditRight ();
   doGraphEditTop ();
   lockGraphResetEnv = false;
   graphUI.resetEnvOffset();
   break;
  }
  graphUI.endEnv();
  writeProfileWindow();
 }
 doButtonUIGraph();
}
function updateGraphRadioEnvType(){
 var type = graphUI._envType;
 switch( graphUI._mode ){
 case 4:
 case 5:
  type = 0;
  break;
 }
 cssSetStyleDisplayById( "button_edit_offset_x_up" , type == 0 );
 cssSetStyleDisplayById( "button_edit_offset_x_down", type == 0 );
 cssSetStyleDisplayById( "button_edit_offset_y_up" , type == 0 );
 cssSetStyleDisplayById( "button_edit_offset_y_down", type == 0 );
 cssSetStyleDisplayById( "button_edit_ratio_x_up" , type == 0 );
 cssSetStyleDisplayById( "button_edit_ratio_x_down" , type == 0 );
 cssSetStyleDisplayById( "button_edit_ratio_y_up" , type == 0 );
 cssSetStyleDisplayById( "button_edit_ratio_y_down" , type == 0 );
 cssSetStyleDisplayById( "button_edit_left_up" , type == 1 );
 cssSetStyleDisplayById( "button_edit_left_down" , type == 1 );
 cssSetStyleDisplayById( "button_edit_bottom_up" , type == 1 );
 cssSetStyleDisplayById( "button_edit_bottom_down" , type == 1 );
 cssSetStyleDisplayById( "button_edit_right_up" , type == 1 );
 cssSetStyleDisplayById( "button_edit_right_down" , type == 1 );
 cssSetStyleDisplayById( "button_edit_top_up" , type == 1 );
 cssSetStyleDisplayById( "button_edit_top_down" , type == 1 );
 switch( graphUI._mode ){
 case 4:
 case 5:
  document.getElementById( "graph_radio_window" ).disabled = true;
  document.getElementById( "graph_edit_ratio_y" ).disabled = true;
  cssSetStyleDisplayById( "graph_static_ratio_x", false );
  cssSetStyleDisplayById( "graph_static_ratio" , true );
  cssSetStyleDisplayById( "graph_edit_ratio_y" , false );
  cssSetStyleDisplayById( "graph_static_ratio_y", false );
  cssSetStyleDisplayById( "button_edit_ratio_y_up" , false );
  cssSetStyleDisplayById( "button_edit_ratio_y_down", false );
  break;
 default:
  document.getElementById( "graph_radio_window" ).disabled = false;
  document.getElementById( "graph_edit_ratio_y" ).disabled = (type == 1);
  cssSetStyleDisplayById( "graph_static_ratio" , false );
  cssSetStyleDisplayById( "graph_static_ratio_x", true );
  cssSetStyleDisplayById( "graph_edit_ratio_y" , true );
  cssSetStyleDisplayById( "graph_static_ratio_y", true );
  break;
 }
 document.getElementById( "graph_radio_offset" ).checked = (type == 0);
 document.getElementById( "graph_radio_window" ).checked = (type == 1);
 document.getElementById( "graph_edit_offset_x" ).disabled = (type == 1);
 document.getElementById( "graph_edit_offset_y" ).disabled = (type == 1);
 document.getElementById( "graph_edit_ratio_x" ).disabled = (type == 1);
 document.getElementById( "graph_edit_left" ).disabled = (type == 0);
 document.getElementById( "graph_edit_bottom" ).disabled = (type == 0);
 document.getElementById( "graph_edit_right" ).disabled = (type == 0);
 document.getElementById( "graph_edit_top" ).disabled = (type == 0);
}
function doGraphEnvOffset(){
 lockGraphResetEnv = true;
 doGraphEditLeft ();
 doGraphEditBottom();
 doGraphEditRight ();
 doGraphEditTop ();
 lockGraphResetEnv = false;
 graphUI.resetEnvOffset();
 graphUI.setEnvType( 0 );
 updateGraphRadioEnvType();
}
function doGraphEnvWindow(){
 lockGraphResetEnv = true;
 doGraphEditOffsetX();
 doGraphEditOffsetY();
 doGraphEditRatioX ();
 doGraphEditRatioY ();
 lockGraphResetEnv = false;
 graphUI.resetEnvWindow();
 graphUI.setEnvType( 1 );
 updateGraphRadioEnvType();
}
function doGraphEditOffsetX(){
 graphUI._editEnvOffsetX = "" + document.getElementById( "graph_edit_offset_x" ).value;
 var offsetX = parseFloat( graphUI._editEnvOffsetX );
 if( _ISNAN( offsetX ) ){
  return;
 }
 graphUI._envOffsetX = offsetX;
 if( !lockGraphResetEnv ){
  graphUI.resetEnvWindow();
 }
}
function doGraphEditOffsetY(){
 graphUI._editEnvOffsetY = "" + document.getElementById( "graph_edit_offset_y" ).value;
 var offsetY = parseFloat( graphUI._editEnvOffsetY );
 if( _ISNAN( offsetY ) ){
  return;
 }
 graphUI._envOffsetY = offsetY;
 if( !lockGraphResetEnv ){
  graphUI.resetEnvWindow();
 }
}
function doGraphEditRatioX(){
 graphUI._editEnvRatioX = "" + document.getElementById( "graph_edit_ratio_x" ).value;
 var ratioX = parseFloat( graphUI._editEnvRatioX );
 if( _ISNAN( ratioX ) ){
  return;
 }
 graphUI._envRatioX = ratioX;
 if( !lockGraphResetEnv ){
  graphUI.resetEnvWindow();
 }
}
function doGraphEditRatioY(){
 graphUI._editEnvRatioY = "" + document.getElementById( "graph_edit_ratio_y" ).value;
 var ratioY = parseFloat( graphUI._editEnvRatioY );
 if( _ISNAN( ratioY ) ){
  return;
 }
 graphUI._envRatioY = ratioY;
 if( !lockGraphResetEnv ){
  graphUI.resetEnvWindow();
 }
}
function doGraphEditLeft(){
 graphUI._editEnvLeft = "" + document.getElementById( "graph_edit_left" ).value;
 if( !lockGraphResetEnv ){
  graphUI.resetEnvOffset();
 }
}
function doGraphEditBottom(){
 graphUI._editEnvBottom = "" + document.getElementById( "graph_edit_bottom" ).value;
 if( !lockGraphResetEnv ){
  graphUI.resetEnvOffset();
 }
}
function doGraphEditRight(){
 graphUI._editEnvRight = "" + document.getElementById( "graph_edit_right" ).value;
 if( !lockGraphResetEnv ){
  graphUI.resetEnvOffset();
 }
}
function doGraphEditTop(){
 graphUI._editEnvTop = "" + document.getElementById( "graph_edit_top" ).value;
 if( !lockGraphResetEnv ){
  graphUI.resetEnvOffset();
 }
}
function onGraphSetMode( _this, mode ){
 var saveIndex = graphIndex();
 for( var i = 0; i < 3; i++ ){
  _this._graph.selGraph( i );
  _this._graph.setMode( mode );
 }
 _this._graph.selGraph( saveIndex );
}
function onGraphSetIndex( _this, index ){
 var saveIndex = graphIndex();
 for( var i = 0; i < 3; i++ ){
  _this._graph.selGraph( i );
  _this._graph.setIndex( index );
 }
 _this._graph.selGraph( saveIndex );
}
function onGraphSetLogScaleX( _this, base ){
 var saveIndex = graphIndex();
 for( var i = 0; i < 3; i++ ){
  _this._graph.selGraph( i );
  _this._graph.setLogScaleX( base );
 }
 _this._graph.selGraph( saveIndex );
}
function onGraphSetLogScaleY( _this, base ){
 var saveIndex = graphIndex();
 for( var i = 0; i < 3; i++ ){
  _this._graph.selGraph( i );
  _this._graph.setLogScaleY( base );
 }
 _this._graph.selGraph( saveIndex );
}
function onGraphClearExpr( _this ){
 for( var i = 0; i < 3; i++ ){
  editExpr[i][0].delAll();
  editExpr[i][1].delAll();
 }
 writeProfileExpr();
 updateEditExpr();
 document.getElementById( "graph_edit_expr1" ).value = "";
 document.getElementById( "graph_edit_expr2" ).value = "";
}
function onGraphClearTable( _this ){
 for( var i = 0; i < 3; i++ ){
  listTable[i].delAll();
 }
 updateListTable( _this );
 writeProfileTable();
}
function onGraphUpdateStatic( _this ){
 document.getElementById( "graph_static_expr1" ).innerHTML = _this._staticExpr1;
 document.getElementById( "graph_static_expr2" ).innerHTML = _this._staticExpr2;
 document.getElementById( "graph_static_x" ).innerHTML = _this._staticX;
 document.getElementById( "graph_static_y1" ).innerHTML = _this._staticY1;
 document.getElementById( "graph_static_y2" ).innerHTML = _this._staticY2;
}
function onGraphUpdateValue( _this ){
 document.getElementById( "graph_edit_trace_x" ).value = _this._editX;
 document.getElementById( "graph_edit_trace_y1" ).value = _this._editY1;
 document.getElementById( "graph_edit_trace_y2" ).value = _this._editY2;
}
function onGraphUpdatePitch( _this ){
 document.getElementById( "graph_edit_min" ).value = _this._editMin;
 document.getElementById( "graph_edit_max" ).value = _this._editMax;
 document.getElementById( "graph_edit_pitch" ).value = _this._editPitch;
}
function onGraphUpdateEnvOffset( _this ){
 document.getElementById( "graph_edit_offset_x" ).value = _this._editEnvOffsetX;
 document.getElementById( "graph_edit_offset_y" ).value = _this._editEnvOffsetY;
 document.getElementById( "graph_edit_ratio_x" ).value = _this._editEnvRatioX;
 document.getElementById( "graph_edit_ratio_y" ).value = _this._editEnvRatioY;
}
function onGraphUpdateEnvWindow( _this ){
 document.getElementById( "graph_edit_left" ).value = _this._editEnvLeft;
 document.getElementById( "graph_edit_bottom" ).value = _this._editEnvBottom;
 document.getElementById( "graph_edit_right" ).value = _this._editEnvRight;
 document.getElementById( "graph_edit_top" ).value = _this._editEnvTop;
}
function onGraphStartPlot(){
 onStartPlot();
}
function onGraphEndPlot(){
 onEndPlot();
}
function onGraphStartRePlot(){
 onStartRePlot();
}
function onGraphEndRePlot(){
 onEndRePlot();
}
function isPC(){
 return common.isPC();
}
function onGraphMouseDown(){
 graphUI.startTool( graphMouseX(), graphMouseY() );
}
function onGraphMouseMove(){
 graphUI.moveTool( graphMouseX(), graphMouseY() );
}
function onGraphMouseOut(){
 onGraphMouseUp();
}
function onGraphMouseOver(){
}
function onGraphMouseUp(){
 graphUI.endTool();
 switch( graphUI._tool ){
 case 0:
  break;
 case 2:
 case 1:
  writeProfileWindow();
  break;
 }
}
function onGraphTouchStart(){
 graphUI.startTool( graphTouchX( 0 ), graphTouchY( 0 ) );
}
function onGraphTouchMove(){
 graphUI.moveTool( graphTouchX( 0 ), graphTouchY( 0 ) );
}
function onGraphTouchEnd(){
 graphUI.endTool();
 switch( graphUI._tool ){
 case 0:
  break;
 case 2:
 case 1:
  writeProfileWindow();
  break;
 }
}
function setMenu( newMenu ){
 if( menu == 5 ){
  for( var i = 65; i <= 90; i++ ){
   doGraphEditVar( i );
  }
 }
 switch( menu ){
 case 0:
  document.getElementById( "button_ui_graph" ).innerHTML = "<img src='icon1.png' width='20' height='20'>";
  document.getElementById( "button_ui_graph2" ).innerHTML = "<img src='icon1.png' width='20' height='20'>";
  break;
 case 2:
  document.getElementById( "button_ui_main" ).innerHTML = "<img src='icon6.png' width='20' height='20'>";
  document.getElementById( "button_ui_main2" ).innerHTML = "<img src='icon6.png' width='20' height='20'>";
  break;
 case 3:
  document.getElementById( "button_ui_func" ).innerHTML = "<img src='icon7.png' width='20' height='20'>";
  document.getElementById( "button_ui_func2" ).innerHTML = "<img src='icon7.png' width='20' height='20'>";
  break;
 case 4:
  document.getElementById( "button_ui_log" ).innerHTML = "<img src='icon3.png' width='20' height='20'>";
  document.getElementById( "button_ui_log2" ).innerHTML = "<img src='icon3.png' width='20' height='20'>";
  break;
 case 5:
  document.getElementById( "button_ui_var" ).innerHTML = "<img src='icon4.png' width='20' height='20'>";
  document.getElementById( "button_ui_var2" ).innerHTML = "<img src='icon4.png' width='20' height='20'>";
  break;
 case 6:
  document.getElementById( "button_ui_table" ).innerHTML = "<img src='icon2.png' width='20' height='20'>";
  document.getElementById( "button_ui_table2" ).innerHTML = "<img src='icon2.png' width='20' height='20'>";
  break;
 case 7:
  document.getElementById( "button_ui_option" ).innerHTML = "<img src='icon5.png' width='20' height='20'>";
  document.getElementById( "button_ui_option2" ).innerHTML = "<img src='icon5.png' width='20' height='20'>";
  break;
 }
 menu = newMenu;
 switch( menu ){
 case 0:
  document.getElementById( "button_ui_graph" ).innerHTML = "<img src='icon1.png' width='25' height='25'>";
  document.getElementById( "button_ui_graph2" ).innerHTML = "<img src='icon1.png' width='25' height='25'>";
  break;
 case 2:
  document.getElementById( "button_ui_main" ).innerHTML = "<img src='icon6.png' width='25' height='25'>";
  document.getElementById( "button_ui_main2" ).innerHTML = "<img src='icon6.png' width='25' height='25'>";
  break;
 case 3:
  document.getElementById( "button_ui_func" ).innerHTML = "<img src='icon7.png' width='25' height='25'>";
  document.getElementById( "button_ui_func2" ).innerHTML = "<img src='icon7.png' width='25' height='25'>";
  break;
 case 4:
  document.getElementById( "button_ui_log" ).innerHTML = "<img src='icon3.png' width='25' height='25'>";
  document.getElementById( "button_ui_log2" ).innerHTML = "<img src='icon3.png' width='25' height='25'>";
  break;
 case 5:
  document.getElementById( "button_ui_var" ).innerHTML = "<img src='icon4.png' width='25' height='25'>";
  document.getElementById( "button_ui_var2" ).innerHTML = "<img src='icon4.png' width='25' height='25'>";
  break;
 case 6:
  document.getElementById( "button_ui_table" ).innerHTML = "<img src='icon2.png' width='25' height='25'>";
  document.getElementById( "button_ui_table2" ).innerHTML = "<img src='icon2.png' width='25' height='25'>";
  break;
 case 7:
  document.getElementById( "button_ui_option" ).innerHTML = "<img src='icon5.png' width='25' height='25'>";
  document.getElementById( "button_ui_option2" ).innerHTML = "<img src='icon5.png' width='25' height='25'>";
  break;
 }
}
function doButtonUIMain(){
 if( menu == 2 ){
  return;
 }
 setMenu( 2 );
 removeGraphEvent();
 document.getElementById( "button_ui_main" ).disabled = true;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_var" ).disabled = false;
 document.getElementById( "button_ui_graph" ).disabled = false;
 document.getElementById( "button_ui_table" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = true;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_var2" ).disabled = false;
 document.getElementById( "button_ui_graph2" ).disabled = false;
 document.getElementById( "button_ui_table2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "graph_ui_menu" , (isAndroidTablet() || isIPad()) ? false : true );
 cssSetStyleDisplayById( "graph_ui_menu2" , (isAndroidTablet() || isIPad()) ? true : false );
 cssSetStyleDisplayById( "graph_ui_main" , true );
 cssSetStyleDisplayById( "graph_ui_edit" , true );
 cssSetStyleDisplayById( "graph_ui_button_1" , false );
 cssSetStyleDisplayById( "graph_ui_button_2" , false );
 cssSetStyleDisplayById( "graph_ui_button_3" , false );
 cssSetStyleDisplayById( "graph_ui_button_4" , false );
 cssSetStyleDisplayById( "graph_ui_button_5" , false );
 cssSetStyleDisplayById( "graph_ui_button_6" , false );
 cssSetStyleDisplayById( "graph_ui_usage" , usageFlag ? true : false );
 cssSetStyleDisplayById( "graph_ui_func" , false );
 cssSetStyleDisplayById( "graph_ui_log" , false );
 cssSetStyleDisplayById( "graph_ui_var" , false );
 cssSetStyleDisplayById( "graph_ui_graph" , false );
 cssSetStyleDisplayById( "graph_ui_window" , false );
 cssSetStyleDisplayById( "graph_ui_table" , false );
 cssSetStyleDisplayById( "graph_ui_option" , false );
 cssSetStyleDisplayById( "graph_ui_color" , false );
 cssSetStyleDisplayById( "graph_ui_selectimage", false );
 cssSetStyleDisplayById( "graph_ui_profile" , false );
 cssSetStyleDisplayById( "graph_ui_table2" , false );
 cssUnlockStyleDisplay();
 updateInputExpr1();
 updateInputExpr2();
 cssSetStyleDisplayById( "graph_ui_button_" + (buttonMode + 1), true );
 doGraphStartEdit();
}
function setButtonMode( mode ){
 cssSetStyleDisplayById( "graph_ui_button_1", false );
 cssSetStyleDisplayById( "graph_ui_button_2", false );
 cssSetStyleDisplayById( "graph_ui_button_3", false );
 cssSetStyleDisplayById( "graph_ui_button_4", false );
 cssSetStyleDisplayById( "graph_ui_button_5", false );
 cssSetStyleDisplayById( "graph_ui_button_6", false );
 if( mode == undefined ){
  buttonMode++;
  if( buttonMode == 4 ){
   if( document.getElementById( "last_button_extfunc" ).disabled ){
    buttonMode = 0;
   }
  } else if( buttonMode == 5 ){
   if( document.getElementById( "last_button_extfunc2" ).disabled ){
    buttonMode = 0;
   }
  } else if( buttonMode >= 6 ){
   buttonMode = 0;
  }
 } else {
  buttonMode = mode;
 }
 cssSetStyleDisplayById( "graph_ui_button_" + (buttonMode + 1), true );
}
function doButtonSHIFT( e ){
 setButtonMode();
}
function doButtonUIFunc(){
 if( menu == 3 ){
  return;
 }
 setMenu( 3 );
 removeGraphEvent();
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = true;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_var" ).disabled = false;
 document.getElementById( "button_ui_graph" ).disabled = false;
 document.getElementById( "button_ui_table" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = true;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_var2" ).disabled = false;
 document.getElementById( "button_ui_graph2" ).disabled = false;
 document.getElementById( "button_ui_table2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "graph_ui_menu" , (isAndroidTablet() || isIPad()) ? false : true );
 cssSetStyleDisplayById( "graph_ui_menu2" , (isAndroidTablet() || isIPad()) ? true : false );
 cssSetStyleDisplayById( "graph_ui_main" , false );
 cssSetStyleDisplayById( "graph_ui_edit" , false );
 cssSetStyleDisplayById( "graph_ui_button_1" , false );
 cssSetStyleDisplayById( "graph_ui_button_2" , false );
 cssSetStyleDisplayById( "graph_ui_button_3" , false );
 cssSetStyleDisplayById( "graph_ui_button_4" , false );
 cssSetStyleDisplayById( "graph_ui_button_5" , false );
 cssSetStyleDisplayById( "graph_ui_button_6" , false );
 cssSetStyleDisplayById( "graph_ui_usage" , false );
 cssSetStyleDisplayById( "graph_ui_func" , true );
 cssSetStyleDisplayById( "graph_ui_log" , false );
 cssSetStyleDisplayById( "graph_ui_var" , false );
 cssSetStyleDisplayById( "graph_ui_graph" , false );
 cssSetStyleDisplayById( "graph_ui_window" , false );
 cssSetStyleDisplayById( "graph_ui_table" , false );
 cssSetStyleDisplayById( "graph_ui_option" , false );
 cssSetStyleDisplayById( "graph_ui_color" , false );
 cssSetStyleDisplayById( "graph_ui_selectimage", false );
 cssSetStyleDisplayById( "graph_ui_profile" , false );
 cssSetStyleDisplayById( "graph_ui_table2" , false );
 cssUnlockStyleDisplay();
}
function doButtonUILog(){
 if( menu == 4 ){
  return;
 }
 setMenu( 4 );
 removeGraphEvent();
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = true;
 document.getElementById( "button_ui_var" ).disabled = false;
 document.getElementById( "button_ui_graph" ).disabled = false;
 document.getElementById( "button_ui_table" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = true;
 document.getElementById( "button_ui_var2" ).disabled = false;
 document.getElementById( "button_ui_graph2" ).disabled = false;
 document.getElementById( "button_ui_table2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "graph_ui_menu" , (isAndroidTablet() || isIPad()) ? false : true );
 cssSetStyleDisplayById( "graph_ui_menu2" , (isAndroidTablet() || isIPad()) ? true : false );
 cssSetStyleDisplayById( "graph_ui_main" , false );
 cssSetStyleDisplayById( "graph_ui_edit" , false );
 cssSetStyleDisplayById( "graph_ui_button_1" , false );
 cssSetStyleDisplayById( "graph_ui_button_2" , false );
 cssSetStyleDisplayById( "graph_ui_button_3" , false );
 cssSetStyleDisplayById( "graph_ui_button_4" , false );
 cssSetStyleDisplayById( "graph_ui_button_5" , false );
 cssSetStyleDisplayById( "graph_ui_button_6" , false );
 cssSetStyleDisplayById( "graph_ui_usage" , false );
 cssSetStyleDisplayById( "graph_ui_func" , false );
 cssSetStyleDisplayById( "graph_ui_log" , true );
 cssSetStyleDisplayById( "graph_ui_var" , false );
 cssSetStyleDisplayById( "graph_ui_graph" , false );
 cssSetStyleDisplayById( "graph_ui_window" , false );
 cssSetStyleDisplayById( "graph_ui_table" , false );
 cssSetStyleDisplayById( "graph_ui_option" , false );
 cssSetStyleDisplayById( "graph_ui_color" , false );
 cssSetStyleDisplayById( "graph_ui_selectimage", false );
 cssSetStyleDisplayById( "graph_ui_profile" , false );
 cssSetStyleDisplayById( "graph_ui_table2" , false );
 cssUnlockStyleDisplay();
 con.scrollBottom();
}
function doButtonUIVar(){
 if( menu == 5 ){
  return;
 }
 setMenu( 5 );
 removeGraphEvent();
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_var" ).disabled = true;
 document.getElementById( "button_ui_graph" ).disabled = false;
 document.getElementById( "button_ui_table" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_var2" ).disabled = true;
 document.getElementById( "button_ui_graph2" ).disabled = false;
 document.getElementById( "button_ui_table2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "graph_ui_menu" , (isAndroidTablet() || isIPad()) ? false : true );
 cssSetStyleDisplayById( "graph_ui_menu2" , (isAndroidTablet() || isIPad()) ? true : false );
 cssSetStyleDisplayById( "graph_ui_main" , false );
 cssSetStyleDisplayById( "graph_ui_edit" , false );
 cssSetStyleDisplayById( "graph_ui_button_1" , false );
 cssSetStyleDisplayById( "graph_ui_button_2" , false );
 cssSetStyleDisplayById( "graph_ui_button_3" , false );
 cssSetStyleDisplayById( "graph_ui_button_4" , false );
 cssSetStyleDisplayById( "graph_ui_button_5" , false );
 cssSetStyleDisplayById( "graph_ui_button_6" , false );
 cssSetStyleDisplayById( "graph_ui_usage" , false );
 cssSetStyleDisplayById( "graph_ui_func" , false );
 cssSetStyleDisplayById( "graph_ui_log" , false );
 cssSetStyleDisplayById( "graph_ui_var" , true );
 cssSetStyleDisplayById( "graph_ui_graph" , false );
 cssSetStyleDisplayById( "graph_ui_window" , false );
 cssSetStyleDisplayById( "graph_ui_table" , false );
 cssSetStyleDisplayById( "graph_ui_option" , false );
 cssSetStyleDisplayById( "graph_ui_color" , false );
 cssSetStyleDisplayById( "graph_ui_selectimage", false );
 cssSetStyleDisplayById( "graph_ui_profile" , false );
 cssSetStyleDisplayById( "graph_ui_table2" , false );
 cssUnlockStyleDisplay();
}
function doButtonUIGraph(){
 if( menu == 0 ){
  return;
 }
 setMenu( 0 );
 addGraphEvent( canvas );
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_var" ).disabled = false;
 document.getElementById( "button_ui_graph" ).disabled = true;
 document.getElementById( "button_ui_table" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_var2" ).disabled = false;
 document.getElementById( "button_ui_graph2" ).disabled = true;
 document.getElementById( "button_ui_table2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "graph_ui_menu" , (isAndroidTablet() || isIPad()) ? false : true );
 cssSetStyleDisplayById( "graph_ui_menu2" , (isAndroidTablet() || isIPad()) ? true : false );
 cssSetStyleDisplayById( "graph_ui_main" , false );
 cssSetStyleDisplayById( "graph_ui_edit" , false );
 cssSetStyleDisplayById( "graph_ui_button_1" , false );
 cssSetStyleDisplayById( "graph_ui_button_2" , false );
 cssSetStyleDisplayById( "graph_ui_button_3" , false );
 cssSetStyleDisplayById( "graph_ui_button_4" , false );
 cssSetStyleDisplayById( "graph_ui_button_5" , false );
 cssSetStyleDisplayById( "graph_ui_button_6" , false );
 cssSetStyleDisplayById( "graph_ui_usage" , false );
 cssSetStyleDisplayById( "graph_ui_func" , false );
 cssSetStyleDisplayById( "graph_ui_log" , false );
 cssSetStyleDisplayById( "graph_ui_var" , false );
 cssSetStyleDisplayById( "graph_ui_graph" , true );
 cssSetStyleDisplayById( "graph_ui_window" , false );
 cssSetStyleDisplayById( "graph_ui_table" , false );
 cssSetStyleDisplayById( "graph_ui_option" , false );
 cssSetStyleDisplayById( "graph_ui_color" , false );
 cssSetStyleDisplayById( "graph_ui_selectimage", false );
 cssSetStyleDisplayById( "graph_ui_profile" , false );
 cssSetStyleDisplayById( "graph_ui_table2" , false );
 cssUnlockStyleDisplay();
 updateInputExpr1();
 updateInputExpr2();
}
function doButtonUIWindow(){
 setMenu( 1 );
 removeGraphEvent();
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_var" ).disabled = false;
 document.getElementById( "button_ui_graph" ).disabled = false;
 document.getElementById( "button_ui_table" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_var2" ).disabled = false;
 document.getElementById( "button_ui_graph2" ).disabled = false;
 document.getElementById( "button_ui_table2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "graph_ui_menu" , false );
 cssSetStyleDisplayById( "graph_ui_menu2" , false );
 cssSetStyleDisplayById( "graph_ui_main" , false );
 cssSetStyleDisplayById( "graph_ui_edit" , false );
 cssSetStyleDisplayById( "graph_ui_button_1" , false );
 cssSetStyleDisplayById( "graph_ui_button_2" , false );
 cssSetStyleDisplayById( "graph_ui_button_3" , false );
 cssSetStyleDisplayById( "graph_ui_button_4" , false );
 cssSetStyleDisplayById( "graph_ui_button_5" , false );
 cssSetStyleDisplayById( "graph_ui_button_6" , false );
 cssSetStyleDisplayById( "graph_ui_usage" , false );
 cssSetStyleDisplayById( "graph_ui_func" , false );
 cssSetStyleDisplayById( "graph_ui_log" , false );
 cssSetStyleDisplayById( "graph_ui_var" , false );
 cssSetStyleDisplayById( "graph_ui_graph" , false );
 cssSetStyleDisplayById( "graph_ui_window" , true );
 cssSetStyleDisplayById( "graph_ui_table" , false );
 cssSetStyleDisplayById( "graph_ui_option" , false );
 cssSetStyleDisplayById( "graph_ui_color" , false );
 cssSetStyleDisplayById( "graph_ui_selectimage", false );
 cssSetStyleDisplayById( "graph_ui_profile" , false );
 cssSetStyleDisplayById( "graph_ui_table2" , false );
 cssUnlockStyleDisplay();
 doGraphStartEnv();
}
function doButtonUITable(){
 if( menu == 6 ){
  return;
 }
 setMenu( 6 );
 removeGraphEvent();
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_var" ).disabled = false;
 document.getElementById( "button_ui_graph" ).disabled = false;
 document.getElementById( "button_ui_table" ).disabled = true;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_var2" ).disabled = false;
 document.getElementById( "button_ui_graph2" ).disabled = false;
 document.getElementById( "button_ui_table2" ).disabled = true;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "graph_ui_menu" , (isAndroidTablet() || isIPad()) ? false : true );
 cssSetStyleDisplayById( "graph_ui_menu2" , (isAndroidTablet() || isIPad()) ? true : false );
 cssSetStyleDisplayById( "graph_ui_main" , false );
 cssSetStyleDisplayById( "graph_ui_edit" , false );
 cssSetStyleDisplayById( "graph_ui_button_1" , false );
 cssSetStyleDisplayById( "graph_ui_button_2" , false );
 cssSetStyleDisplayById( "graph_ui_button_3" , false );
 cssSetStyleDisplayById( "graph_ui_button_4" , false );
 cssSetStyleDisplayById( "graph_ui_button_5" , false );
 cssSetStyleDisplayById( "graph_ui_button_6" , false );
 cssSetStyleDisplayById( "graph_ui_usage" , false );
 cssSetStyleDisplayById( "graph_ui_func" , false );
 cssSetStyleDisplayById( "graph_ui_log" , false );
 cssSetStyleDisplayById( "graph_ui_var" , false );
 cssSetStyleDisplayById( "graph_ui_graph" , false );
 cssSetStyleDisplayById( "graph_ui_window" , false );
 cssSetStyleDisplayById( "graph_ui_table" , true );
 cssSetStyleDisplayById( "graph_ui_option" , false );
 cssSetStyleDisplayById( "graph_ui_color" , false );
 cssSetStyleDisplayById( "graph_ui_selectimage", false );
 cssSetStyleDisplayById( "graph_ui_profile" , false );
 cssSetStyleDisplayById( "graph_ui_table2" , false );
 cssUnlockStyleDisplay();
}
function doButtonUIOption(){
 if( menu == 7 ){
  return;
 }
 setMenu( 7 );
 removeGraphEvent();
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_var" ).disabled = false;
 document.getElementById( "button_ui_graph" ).disabled = false;
 document.getElementById( "button_ui_table" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = true;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_var2" ).disabled = false;
 document.getElementById( "button_ui_graph2" ).disabled = false;
 document.getElementById( "button_ui_table2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = true;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "graph_ui_menu" , (isAndroidTablet() || isIPad()) ? false : true );
 cssSetStyleDisplayById( "graph_ui_menu2" , (isAndroidTablet() || isIPad()) ? true : false );
 cssSetStyleDisplayById( "graph_ui_main" , false );
 cssSetStyleDisplayById( "graph_ui_edit" , false );
 cssSetStyleDisplayById( "graph_ui_button_1" , false );
 cssSetStyleDisplayById( "graph_ui_button_2" , false );
 cssSetStyleDisplayById( "graph_ui_button_3" , false );
 cssSetStyleDisplayById( "graph_ui_button_4" , false );
 cssSetStyleDisplayById( "graph_ui_button_5" , false );
 cssSetStyleDisplayById( "graph_ui_button_6" , false );
 cssSetStyleDisplayById( "graph_ui_usage" , false );
 cssSetStyleDisplayById( "graph_ui_func" , false );
 cssSetStyleDisplayById( "graph_ui_log" , false );
 cssSetStyleDisplayById( "graph_ui_var" , false );
 cssSetStyleDisplayById( "graph_ui_graph" , false );
 cssSetStyleDisplayById( "graph_ui_window" , false );
 cssSetStyleDisplayById( "graph_ui_table" , false );
 cssSetStyleDisplayById( "graph_ui_option" , true );
 cssSetStyleDisplayById( "graph_ui_color" , false );
 cssSetStyleDisplayById( "graph_ui_selectimage", false );
 cssSetStyleDisplayById( "graph_ui_profile" , false );
 cssSetStyleDisplayById( "graph_ui_table2" , false );
 cssUnlockStyleDisplay();
 updateGraphEditScreen();
}
function doButtonUIColor(){
 setMenu( 8 );
 removeGraphEvent();
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_var" ).disabled = false;
 document.getElementById( "button_ui_graph" ).disabled = false;
 document.getElementById( "button_ui_table" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_var2" ).disabled = false;
 document.getElementById( "button_ui_graph2" ).disabled = false;
 document.getElementById( "button_ui_table2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "graph_ui_menu" , false );
 cssSetStyleDisplayById( "graph_ui_menu2" , false );
 cssSetStyleDisplayById( "graph_ui_main" , false );
 cssSetStyleDisplayById( "graph_ui_edit" , false );
 cssSetStyleDisplayById( "graph_ui_button_1" , false );
 cssSetStyleDisplayById( "graph_ui_button_2" , false );
 cssSetStyleDisplayById( "graph_ui_button_3" , false );
 cssSetStyleDisplayById( "graph_ui_button_4" , false );
 cssSetStyleDisplayById( "graph_ui_button_5" , false );
 cssSetStyleDisplayById( "graph_ui_button_6" , false );
 cssSetStyleDisplayById( "graph_ui_usage" , false );
 cssSetStyleDisplayById( "graph_ui_func" , false );
 cssSetStyleDisplayById( "graph_ui_log" , false );
 cssSetStyleDisplayById( "graph_ui_var" , false );
 cssSetStyleDisplayById( "graph_ui_graph" , false );
 cssSetStyleDisplayById( "graph_ui_window" , false );
 cssSetStyleDisplayById( "graph_ui_table" , false );
 cssSetStyleDisplayById( "graph_ui_option" , false );
 cssSetStyleDisplayById( "graph_ui_color" , true );
 cssSetStyleDisplayById( "graph_ui_selectimage", false );
 cssSetStyleDisplayById( "graph_ui_profile" , false );
 cssSetStyleDisplayById( "graph_ui_table2" , false );
 cssUnlockStyleDisplay();
}
function doButtonUISelectImage(){
 setMenu( 9 );
 removeGraphEvent();
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_var" ).disabled = false;
 document.getElementById( "button_ui_graph" ).disabled = false;
 document.getElementById( "button_ui_table" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_var2" ).disabled = false;
 document.getElementById( "button_ui_graph2" ).disabled = false;
 document.getElementById( "button_ui_table2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "graph_ui_menu" , false );
 cssSetStyleDisplayById( "graph_ui_menu2" , false );
 cssSetStyleDisplayById( "graph_ui_main" , false );
 cssSetStyleDisplayById( "graph_ui_edit" , false );
 cssSetStyleDisplayById( "graph_ui_button_1" , false );
 cssSetStyleDisplayById( "graph_ui_button_2" , false );
 cssSetStyleDisplayById( "graph_ui_button_3" , false );
 cssSetStyleDisplayById( "graph_ui_button_4" , false );
 cssSetStyleDisplayById( "graph_ui_button_5" , false );
 cssSetStyleDisplayById( "graph_ui_button_6" , false );
 cssSetStyleDisplayById( "graph_ui_usage" , false );
 cssSetStyleDisplayById( "graph_ui_func" , false );
 cssSetStyleDisplayById( "graph_ui_log" , false );
 cssSetStyleDisplayById( "graph_ui_var" , false );
 cssSetStyleDisplayById( "graph_ui_graph" , false );
 cssSetStyleDisplayById( "graph_ui_window" , false );
 cssSetStyleDisplayById( "graph_ui_table" , false );
 cssSetStyleDisplayById( "graph_ui_option" , false );
 cssSetStyleDisplayById( "graph_ui_color" , false );
 cssSetStyleDisplayById( "graph_ui_selectimage", true );
 cssSetStyleDisplayById( "graph_ui_profile" , false );
 cssSetStyleDisplayById( "graph_ui_table2" , false );
 cssUnlockStyleDisplay();
}
function doButtonUIProfile( readOnly ){
 setMenu( 10 );
 removeGraphEvent();
 cssSetStyleDisplayById( "button_profile_import2", readOnly ? false : true );
 document.getElementById( "profile" ).readOnly = readOnly;
 if( !readOnly ){
  document.getElementById( "profile" ).value = "";
 }
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_var" ).disabled = false;
 document.getElementById( "button_ui_graph" ).disabled = false;
 document.getElementById( "button_ui_table" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_var2" ).disabled = false;
 document.getElementById( "button_ui_graph2" ).disabled = false;
 document.getElementById( "button_ui_table2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "graph_ui_menu" , false );
 cssSetStyleDisplayById( "graph_ui_menu2" , false );
 cssSetStyleDisplayById( "graph_ui_main" , false );
 cssSetStyleDisplayById( "graph_ui_edit" , false );
 cssSetStyleDisplayById( "graph_ui_button_1" , false );
 cssSetStyleDisplayById( "graph_ui_button_2" , false );
 cssSetStyleDisplayById( "graph_ui_button_3" , false );
 cssSetStyleDisplayById( "graph_ui_button_4" , false );
 cssSetStyleDisplayById( "graph_ui_button_5" , false );
 cssSetStyleDisplayById( "graph_ui_button_6" , false );
 cssSetStyleDisplayById( "graph_ui_usage" , false );
 cssSetStyleDisplayById( "graph_ui_func" , false );
 cssSetStyleDisplayById( "graph_ui_log" , false );
 cssSetStyleDisplayById( "graph_ui_var" , false );
 cssSetStyleDisplayById( "graph_ui_graph" , false );
 cssSetStyleDisplayById( "graph_ui_window" , false );
 cssSetStyleDisplayById( "graph_ui_table" , false );
 cssSetStyleDisplayById( "graph_ui_option" , false );
 cssSetStyleDisplayById( "graph_ui_color" , false );
 cssSetStyleDisplayById( "graph_ui_selectimage", false );
 cssSetStyleDisplayById( "graph_ui_profile" , true );
 cssSetStyleDisplayById( "graph_ui_table2" , false );
 cssUnlockStyleDisplay();
}
function doButtonUITable2(){
 setMenu( 11 );
 removeGraphEvent();
 document.getElementById( "table" ).readOnly = true;
 var text = new String();
 text += graphUI._tableX;
 if( graphUI._editExpr1.length > 0 ){
  text += "," + graphUI._editExpr1;
 } else {
  text += "," + graphUI._tableY1;
 }
 if( graphUI._editExpr2.length > 0 ){
  text += "," + graphUI._editExpr2;
 } else if( graphUI._tableY2.length > 0 ){
  text += "," + graphUI._tableY2;
 }
 text += "\n";
 for( var i = 0; i < listTable[graphIndex()].num(); i++ ){
  text += listTable[graphIndex()].obj( i )._x;
  text += "," + listTable[graphIndex()].obj( i )._y1;
  if( graphUI._tableY2.length > 0 ){
   text += "," + listTable[graphIndex()].obj( i )._y2;
  }
  text += "\n";
 }
 document.getElementById( "table" ).value = text;
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_var" ).disabled = false;
 document.getElementById( "button_ui_graph" ).disabled = false;
 document.getElementById( "button_ui_table" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_var2" ).disabled = false;
 document.getElementById( "button_ui_graph2" ).disabled = false;
 document.getElementById( "button_ui_table2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "graph_ui_menu" , false );
 cssSetStyleDisplayById( "graph_ui_menu2" , false );
 cssSetStyleDisplayById( "graph_ui_main" , false );
 cssSetStyleDisplayById( "graph_ui_edit" , false );
 cssSetStyleDisplayById( "graph_ui_button_1" , false );
 cssSetStyleDisplayById( "graph_ui_button_2" , false );
 cssSetStyleDisplayById( "graph_ui_button_3" , false );
 cssSetStyleDisplayById( "graph_ui_button_4" , false );
 cssSetStyleDisplayById( "graph_ui_button_5" , false );
 cssSetStyleDisplayById( "graph_ui_button_6" , false );
 cssSetStyleDisplayById( "graph_ui_usage" , false );
 cssSetStyleDisplayById( "graph_ui_func" , false );
 cssSetStyleDisplayById( "graph_ui_log" , false );
 cssSetStyleDisplayById( "graph_ui_var" , false );
 cssSetStyleDisplayById( "graph_ui_graph" , false );
 cssSetStyleDisplayById( "graph_ui_window" , false );
 cssSetStyleDisplayById( "graph_ui_table" , false );
 cssSetStyleDisplayById( "graph_ui_option" , false );
 cssSetStyleDisplayById( "graph_ui_color" , false );
 cssSetStyleDisplayById( "graph_ui_selectimage", false );
 cssSetStyleDisplayById( "graph_ui_profile" , false );
 cssSetStyleDisplayById( "graph_ui_table2" , true );
 cssUnlockStyleDisplay();
}
function clearConsole(){
 con.clear();
}
function updateListTable( _this ){
 var html = new String();
 var tmp;
 var j = 0;
 html += "<table width='450' border='0' cellpadding='0' cellspacing='0'>";
 html += "<tr><td width='140' height='24' bgcolor='#E0E0E0'>";
 html += _this._tableX;
 html += "</td><td width='140' height='24' bgcolor='#E0E0E0'>";
 html += _this._tableY1;
 html += "</td><td width='140' height='24' bgcolor='#E0E0E0'>";
 html += _this._tableY2;
 html += "</td></tr>";
 for( var i = listTable[graphIndex()].scroll(); i < listTable[graphIndex()].num(); i++ ){
  html += "<tr>";
  for( var k = 0; k < 3; k++ ){
   if( i == listTable[graphIndex()].index() ){
    html += "<td width='140' bgcolor='" + cursorBack + "'>";
   } else {
    html += "<td width='140'>";
   }
   switch( k ){
   case 0:
    tmp = listTable[graphIndex()].obj( i )._x;
    break;
   case 1:
    tmp = listTable[graphIndex()].obj( i )._y1;
    break;
   case 2:
    tmp = listTable[graphIndex()].obj( i )._y2;
    break;
   }
   if( tmp.length > 13 ){
    if( i == listTable[graphIndex()].index() ){
     tmp = tmp.substring( 0, 11 ) + "<span class='span_ellipsis' style='color:" + cursorText + "'>...</span>";
    } else {
     tmp = tmp.substring( 0, 11 ) + "<span class='span_ellipsis'>...</span>";
    }
   }
   if( i == listTable[graphIndex()].index() ){
    html += "<span style='color:" + cursorText + "'>" + tmp + "</span>";
   } else {
    html += tmp;
   }
   html += "</td>";
  }
  html += "</tr>";
  j++;
  if( j >= listTable[graphIndex()].lineNum() ){
   break;
  }
 }
 html += "</table>";
 listTable[graphIndex()].element().innerHTML = html;
}
function addListTable(){
 var x = "" + document.getElementById( "graph_edit_trace_x" ).value;
 var y1 = "" + document.getElementById( "graph_edit_trace_y1" ).value;
 var y2 = "" + document.getElementById( "graph_edit_trace_y2" ).value;
 if( x.length > 0 ){
  var i, j = 0;
  for( i = 0; i < listTable[graphIndex()].num(); i++ ){
   if( listTable[graphIndex()].obj( i )._x == x ){
    break;
   }
   if( parseFloat( listTable[graphIndex()].obj( i )._x ) < parseFloat( x ) ){
    j = i + 1;
   }
  }
  if( i == listTable[graphIndex()].num() ){
   listTable[graphIndex()].ins( j, new ListTableItem( x, y1, y2 ) );
   updateListTable( graphUI );
   writeProfileTable();
  }
 }
}
function doGraphEditTraceX(){
 document.getElementById( "graph_edit_trace_y1" ).value = "";
 document.getElementById( "graph_edit_trace_y2" ).value = "";
 graphUI._editX = "" + document.getElementById( "graph_edit_trace_x" ).value;
 if( graphUI._editX.length > 0 ){
  var x = parseFloat( graphUI._editX );
  var y1 = new _Float();
  var y2 = new _Float();
  if( procGraph().get( topProc, topParam, x, y1, y2 ) ){
   graphUI.setValue( x, y1._val, y2._val );
   addListTable();
  }
 }
}
function doButtonSTO( e ){
 doGraphEditTraceX();
}
function updateLanguage(){
 document.title = englishFlag ? "ClipGraph" : "関数グラフ";
 var select;
 select = document.getElementById( "graph_select_index" );
 select.options[0].innerHTML = englishFlag ? "Graph 1" : "ｸﾞﾗﾌ1";
 select.options[1].innerHTML = englishFlag ? "Graph 2" : "ｸﾞﾗﾌ2";
 select.options[2].innerHTML = englishFlag ? "Graph 3" : "ｸﾞﾗﾌ3";
 select = document.getElementById( "graph_select_mode" );
 select.options[0].innerHTML = englishFlag ? "Linear" : "線形座標";
 select.options[1].innerHTML = englishFlag ? "X logarithm" : "X軸対数";
 select.options[2].innerHTML = englishFlag ? "Y logarithm" : "Y軸対数";
 select.options[3].innerHTML = englishFlag ? "Logarithmic" : "対数座標";
 select.options[4].innerHTML = englishFlag ? "Parametric" : "媒介変数";
 select.options[5].innerHTML = englishFlag ? "Polar" : "極座標";
 document.getElementById( "graph_static_calculator" ).innerHTML = englishFlag ? "Calculator mode" : "電卓モード";
 document.getElementById( "button_loadextfunc" ).innerHTML = englishFlag ? "Load external function" : "外部関数読み込み";
 document.getElementById( "button_log_del" ).innerHTML = englishFlag ? "Del" : "消";
 document.getElementById( "button_log_delall" ).innerHTML = englishFlag ? "Clear" : "クリアする";
 document.getElementById( "button_console_clear" ).innerHTML = englishFlag ? "Clear" : "クリアする";
 document.getElementById( "button_env_cancel" ).innerHTML = englishFlag ? "Cancel" : "ｷｬﾝｾﾙ";
 document.getElementById( "button_env_reset" ).innerHTML = englishFlag ? "&nbsp;&nbsp;Reset&nbsp;&nbsp;" : "初期化する";
 document.getElementById( "graph_static_env_offset" ).innerHTML = englishFlag ? "Offset specification (pixels)" : "オフセット指定(pixels)";
 document.getElementById( "graph_static_env_offset_x" ).innerHTML = englishFlag ? "Offset X:" : "X方向ｵﾌｾｯﾄ:";
 document.getElementById( "graph_static_env_offset_y" ).innerHTML = englishFlag ? "Offset Y:" : "Y方向ｵﾌｾｯﾄ:";
 document.getElementById( "graph_static_ratio_x" ).innerHTML = englishFlag ? "Unit X:" : "X方向の単位:";
 document.getElementById( "graph_static_ratio" ).innerHTML = englishFlag ? "Unit:" : "単位:";
 document.getElementById( "graph_static_ratio_y" ).innerHTML = englishFlag ? "Unit Y:" : "Y方向の単位:";
 document.getElementById( "graph_static_env_window" ).innerHTML = englishFlag ? "Window specification" : "ウィンドウ指定";
 document.getElementById( "graph_static_env_attention" ).innerHTML = englishFlag ? "* If you specify in the window, some errors will occur." : "※ウィンドウで指定した場合、若干の誤差が生じます。";
 document.getElementById( "button_table_del" ).innerHTML = englishFlag ? "Del" : "消";
 document.getElementById( "button_table_export" ).innerHTML = englishFlag ? "Export" : "ｴｸｽﾎﾟｰﾄ";
 document.getElementById( "graph_static_option1" ).innerHTML = englishFlag ? "Skin:" : "スキン:";
 select = document.getElementById( "graph_select_skin" );
 select.options[0].innerHTML = englishFlag ? "Green" : "グリーン";
 select.options[1].innerHTML = englishFlag ? "Gray" : "グレー";
 select.options[2].innerHTML = englishFlag ? "Purple" : "パープル";
 select.options[3].innerHTML = englishFlag ? "Metal (gold)" : "メタル(金)";
 select.options[4].innerHTML = englishFlag ? "Metal (silver)" : "メタル(銀)";
 select.options[5].innerHTML = englishFlag ? "Metal (iron)" : "メタル(鉄)";
 select.options[6].innerHTML = englishFlag ? "Color" : "カラー";
 select.options[7].innerHTML = englishFlag ? "Image" : "画像";
 select = document.getElementById( "graph_select_skin_color" );
 select.options[0].innerHTML = englishFlag ? "Gray" : "グレー";
 select.options[1].innerHTML = englishFlag ? "Brown" : "ブラウン";
 select.options[2].innerHTML = englishFlag ? "Red" : "レッド";
 select.options[3].innerHTML = englishFlag ? "Pink" : "ピンク";
 select.options[4].innerHTML = englishFlag ? "Orange" : "オレンジ";
 select.options[5].innerHTML = englishFlag ? "Cream" : "クリーム";
 select.options[6].innerHTML = englishFlag ? "Green" : "グリーン";
 select.options[7].innerHTML = englishFlag ? "Sky blue" : "スカイブルー";
 select.options[8].innerHTML = englishFlag ? "Blue" : "ブルー";
 select.options[9].innerHTML = englishFlag ? "Purple" : "パープル";
 select.options[10].innerHTML = englishFlag ? "Custom" : "カスタム";
 select = document.getElementById( "graph_select_skin_trans" );
 select.options[0].innerHTML = englishFlag ? "100% through" : "100%透過";
 select.options[1].innerHTML = englishFlag ? "90% through" : "90%透過";
 select.options[2].innerHTML = englishFlag ? "80% through" : "80%透過";
 select.options[3].innerHTML = englishFlag ? "70% through" : "70%透過";
 select.options[4].innerHTML = englishFlag ? "60% through" : "60%透過";
 select.options[5].innerHTML = englishFlag ? "50% through" : "50%透過";
 document.getElementById( "graph_static_option2" ).innerHTML = englishFlag ? "Lock" : "固定";
 document.getElementById( "graph_static_option3" ).innerHTML = englishFlag ? "Lock" : "固定";
 document.getElementById( "graph_static_option4" ).innerHTML = englishFlag ? "Lock" : "固定";
 document.getElementById( "graph_static_option5" ).innerHTML = englishFlag ? "Pos X:" : "X方向:";
 document.getElementById( "graph_static_option6" ).innerHTML = englishFlag ? "Pos Y:" : "Y方向:";
 document.getElementById( "graph_static_option7" ).innerHTML = englishFlag ? "Scale line" : "目盛り線";
 document.getElementById( "graph_static_option8" ).innerHTML = englishFlag ? "Unit X:" : "X方向:";
 document.getElementById( "graph_static_option9" ).innerHTML = englishFlag ? "Unit Y:" : "Y方向:";
 document.getElementById( "graph_static_option10" ).innerHTML = englishFlag ? "Scale text" : "目盛り文字";
 document.getElementById( "graph_static_option11" ).innerHTML = englishFlag ? "X:" : "X方向:";
 document.getElementById( "graph_static_option12" ).innerHTML = englishFlag ? "Every" : "毎";
 document.getElementById( "graph_static_option13" ).innerHTML = englishFlag ? "Y:" : "Y方向:";
 document.getElementById( "graph_static_option14" ).innerHTML = englishFlag ? "Every" : "毎";
 document.getElementById( "button_color" ).innerHTML = englishFlag ? "More" : "詳細";
 document.getElementById( "graph_static_option15" ).innerHTML = englishFlag ? "Graph re-generation:" : "グラフ再生成:";
 document.getElementById( "graph_static_option16" ).innerHTML = englishFlag ? "When changing the coordinate system" : "座標系の変更時";
 document.getElementById( "graph_static_option17" ).innerHTML = englishFlag ? "When the unit change of angle" : "角度の単位変更時";
 document.getElementById( "graph_static_option18" ).innerHTML = englishFlag ? "When changing the window coordinates (including hand tool)" : "ｳｨﾝﾄﾞｳ座標の変更時(手のひらﾂｰﾙ含む)";
 document.getElementById( "graph_static_option19" ).innerHTML = englishFlag ? "Usage is indicated when pressing button" : "ボタン押下時に使用法を表示";
 document.getElementById( "button_storage_clear" ).innerHTML = englishFlag ? "Clear<br>storage" : "ストレージ<br>クリア";
 document.getElementById( "button_cookie_clear" ).innerHTML = englishFlag ? "Clear<br>cookie" : "Cookie<br>クリア";
 document.getElementById( "button_profile_export" ).innerHTML = englishFlag ? "Export<br>profile" : "環境設定<br>ｴｸｽﾎﾟｰﾄ";
 document.getElementById( "button_profile_import" ).innerHTML = englishFlag ? "Import<br>profile" : "環境設定<br>ｲﾝﾎﾟｰﾄ";
 document.getElementById( "button_return" ).innerHTML = englishFlag ? "Return" : "戻る";
 document.getElementById( "graph_static_color_back" ).innerHTML = englishFlag ? "Back:" : "背景:";
 document.getElementById( "graph_static_color_scale" ).innerHTML = englishFlag ? "Scale:" : "X/Y軸:";
 document.getElementById( "graph_static_color_unit" ).innerHTML = englishFlag ? "Unit:" : "目盛り線:";
 document.getElementById( "graph_static_color_text" ).innerHTML = englishFlag ? "Text:" : "文字:";
 document.getElementById( "graph_static_color_graph1" ).innerHTML = englishFlag ? "Graph 1:" : "グラフ1:";
 document.getElementById( "graph_static_color_graph2" ).innerHTML = englishFlag ? "Graph 2:" : "グラフ2:";
 document.getElementById( "graph_static_color_graph3" ).innerHTML = englishFlag ? "Graph 3:" : "グラフ3:";
 document.getElementById( "button_return2" ).innerHTML = englishFlag ? "Return" : "戻る";
 document.getElementById( "button_get_content" ).innerHTML = englishFlag ? "Album..." : "アルバム...";
 document.getElementById( "button_selectimage_del" ).innerHTML = englishFlag ? "Del" : "消";
 document.getElementById( "button_return3" ).innerHTML = englishFlag ? "Return" : "戻る";
 document.getElementById( "button_profile_import2" ).innerHTML = englishFlag ? "Import" : "ｲﾝﾎﾟｰﾄする";
 document.getElementById( "button_return4" ).innerHTML = englishFlag ? "Return" : "戻る";
 document.getElementById( "button_savefunc" ).innerHTML = englishFlag ? "Save" : "保存する";
 document.getElementById( "graph_static_tab" ).innerHTML = englishFlag ? "Tab width:" : "Tab幅:";
 document.getElementById( "graph_static_smart" ).innerHTML = englishFlag ? "Smart" : "スマート";
 if( englishFlag ){
  cssSetStyleDisplayById( "lang_japanese" , false );
  cssSetStyleDisplayById( "lang_japanese2", false );
  cssSetStyleDisplayById( "lang_japanese3", false );
  cssSetStyleDisplayById( "lang_english" , true );
  cssSetStyleDisplayById( "lang_english2" , true );
  cssSetStyleDisplayById( "lang_english3" , true );
 } else {
  cssSetStyleDisplayById( "lang_english" , false );
  cssSetStyleDisplayById( "lang_english2" , false );
  cssSetStyleDisplayById( "lang_english3" , false );
  cssSetStyleDisplayById( "lang_japanese" , true );
  cssSetStyleDisplayById( "lang_japanese2", true );
  cssSetStyleDisplayById( "lang_japanese3", true );
 }
 document.getElementById( "button_lang" ).innerHTML = englishFlag ? "to JP" : "to EN";
}
function setEnglish( isEnglish ){
 cssSetStyleDisplayById( "button_lang", false );
 englishFlag = isEnglish;
 updateLanguage();
}
function doButtonLang( e ){
 englishFlag = englishFlag ? false : true;
 writeProfileInt( "ENV_", "Language", englishFlag ? 1 : 0 );
 updateLanguage();
 document.getElementById( "graph_usage" ).innerHTML = "";
}
function doButtonMark(){
 var item = listTable[graphIndex()].obj( listTable[graphIndex()].index() );
 if( item != null ){
  document.getElementById( "graph_edit_trace_x" ).value = "" + item._x;
  document.getElementById( "graph_edit_trace_y1" ).value = "" + item._y1;
  document.getElementById( "graph_edit_trace_y2" ).value = "" + item._y2;
  graphUI.setValue( parseFloat( item._x ), parseFloat( item._y1 ), parseFloat( item._y2 ) );
  doButtonUIGraph();
 }
}
function upListTable( e ){
 listTable[graphIndex()].up();
 updateListTable( graphUI );
}
function downListTable( e ){
 listTable[graphIndex()].down();
 updateListTable( graphUI );
}
function delListTable( e ){
 listTable[graphIndex()].del( listTable[graphIndex()].index() );
 updateListTable( graphUI );
 writeProfileTable();
}
function delAllListTable(){
 listTable[graphIndex()].delAll();
 updateListTable( graphUI );
 writeProfileTable();
}
function doButtonEditMinUp( e ){
 doButtonUpFloat( "graph_edit_min", 1.0 );
}
function doButtonEditMinDown( e ){
 doButtonDownFloat( "graph_edit_min", 1.0 );
}
function doButtonEditMaxUp( e ){
 doButtonUpFloat( "graph_edit_max", 1.0 );
}
function doButtonEditMaxDown( e ){
 doButtonDownFloat( "graph_edit_max", 1.0 );
}
function doButtonEditPitchUp( e ){
 doButtonUpFloat( "graph_edit_pitch", 1.0 );
}
function doButtonEditPitchDown( e ){
 doButtonDownFloat( "graph_edit_pitch", 1.0 );
}
function doButtonEditOffsetXUp( e ){
 if( doButtonUpFloat( "graph_edit_offset_x", 1.0 ) ){
  doGraphEditOffsetX();
 }
}
function doButtonEditOffsetXDown( e ){
 if( doButtonDownFloat( "graph_edit_offset_x", 1.0 ) ){
  doGraphEditOffsetX();
 }
}
function doButtonEditOffsetYUp( e ){
 if( doButtonUpFloat( "graph_edit_offset_y", 1.0 ) ){
  doGraphEditOffsetY();
 }
}
function doButtonEditOffsetYDown( e ){
 if( doButtonDownFloat( "graph_edit_offset_y", 1.0 ) ){
  doGraphEditOffsetY();
 }
}
function doButtonEditRatioXUp( e ){
 if( doButtonUpFloat( "graph_edit_ratio_x", 1.0 ) ){
  doGraphEditRatioX();
 }
}
function doButtonEditRatioXDown( e ){
 if( doButtonDownFloat( "graph_edit_ratio_x", 1.0 ) ){
  doGraphEditRatioX();
 }
}
function doButtonEditRatioYUp( e ){
 if( doButtonUpFloat( "graph_edit_ratio_y", 1.0 ) ){
  doGraphEditRatioY();
 }
}
function doButtonEditRatioYDown( e ){
 if( doButtonDownFloat( "graph_edit_ratio_y", 1.0 ) ){
  doGraphEditRatioY();
 }
}
function doButtonEditLeftUp( e ){
 if( doButtonUpFloat( "graph_edit_left", 1.0 ) ){
  doGraphEditLeft();
 }
}
function doButtonEditLeftDown( e ){
 if( doButtonDownFloat( "graph_edit_left", 1.0 ) ){
  doGraphEditLeft();
 }
}
function doButtonEditBottomUp( e ){
 if( doButtonUpFloat( "graph_edit_bottom", 1.0 ) ){
  doGraphEditBottom();
 }
}
function doButtonEditBottomDown( e ){
 if( doButtonDownFloat( "graph_edit_bottom", 1.0 ) ){
  doGraphEditBottom();
 }
}
function doButtonEditRightUp( e ){
 if( doButtonUpFloat( "graph_edit_right", 1.0 ) ){
  doGraphEditRight();
 }
}
function doButtonEditRightDown( e ){
 if( doButtonDownFloat( "graph_edit_right", 1.0 ) ){
  doGraphEditRight();
 }
}
function doButtonEditTopUp( e ){
 if( doButtonUpFloat( "graph_edit_top", 1.0 ) ){
  doGraphEditTop();
 }
}
function doButtonEditTopDown( e ){
 if( doButtonDownFloat( "graph_edit_top", 1.0 ) ){
  doGraphEditTop();
 }
}
function doButtonEditUnitXUp( e ){
 if( doButtonUpFloat( "graph_edit_unit_x", 1.0 ) ){
  doGraphEditScreen();
 }
}
function doButtonEditUnitXDown( e ){
 if( doButtonDownFloat( "graph_edit_unit_x", 1.0, 0.0 ) ){
  doGraphEditScreen();
 }
}
function doButtonEditUnitYUp( e ){
 if( doButtonUpFloat( "graph_edit_unit_y", 1.0 ) ){
  doGraphEditScreen();
 }
}
function doButtonEditUnitYDown( e ){
 if( doButtonDownFloat( "graph_edit_unit_y", 1.0, 0.0 ) ){
  doGraphEditScreen();
 }
}
function doButtonEditTextXUp( e ){
 if( doButtonUpInt( "graph_edit_text_x", 1 ) ){
  doGraphEditScreen();
 }
}
function doButtonEditTextXDown( e ){
 if( doButtonDownInt( "graph_edit_text_x", 1, 1 ) ){
  doGraphEditScreen();
 }
}
function doButtonEditTextYUp( e ){
 if( doButtonUpInt( "graph_edit_text_y", 1 ) ){
  doGraphEditScreen();
 }
}
function doButtonEditTextYDown( e ){
 if( doButtonDownInt( "graph_edit_text_y", 1, 1 ) ){
  doGraphEditScreen();
 }
}
function updateLogButton(){
 document.getElementById( "button_log" ).innerHTML = topParam._calculator ? "ln" : "log";
 document.getElementById( "button_log10" ).innerHTML = topParam._calculator ? "log" : "log10";
}
function changeExpr(){
 var i, j;
 var token;
 for( j = 0; j < 2; j++ ){
  for( i = 0; i < editExpr[graphIndex()][j].num(); i++ ){
   token = editExpr[graphIndex()][j].token( i );
   if( topParam._calculator ){
    if( token == "log " ) editExpr[graphIndex()][j].set( i, "ln " );
    if( token == "log10 " ) editExpr[graphIndex()][j].set( i, "log " );
   } else {
    if( token == "log " ) editExpr[graphIndex()][j].set( i, "log10 " );
    if( token == "ln " ) editExpr[graphIndex()][j].set( i, "log " );
   }
  }
 }
 writeProfileExpr();
 updateEditExpr();
 updateInputExpr1();
 updateInputExpr2();
 var tmpEdit = new EditExpr( -1 );
 for( i = 0; i < logExpr.num(); i++ ){
  tmpEdit.importLog( logExpr.obj( i ) );
  for( j = 0; j < tmpEdit.num(); j++ ){
   token = tmpEdit.token( j );
   if( topParam._calculator ){
    if( token == "log " ) tmpEdit.set( j, "ln " );
    if( token == "log10 " ) tmpEdit.set( j, "log " );
   } else {
    if( token == "log " ) tmpEdit.set( j, "log10 " );
    if( token == "ln " ) tmpEdit.set( j, "log " );
   }
  }
  var expr = new _String();
  tmpEdit.exportLog( expr );
  logExpr.set( i, expr.str() );
 }
 updateLogExpr();
 writeProfileLogExpr();
}
function doCheckCalculator(){
 topParam._calculator = document.getElementById( "check_calculator" ).checked;
 updateLogButton();
 changeExpr();
 writeProfileInt( "ENV_", "Calculator", topParam._calculator ? 1 : 0 );
}
function onGraphInitEnv( _this ){
 _this._mode = getProfileInt( "ENV_", "Mode", 0 );
 _this._rePlotModeFlag = (getProfileInt( "ENV_", "RePlotMode" , 1 ) == 1);
 _this._rePlotAngleFlag = (getProfileInt( "ENV_", "RePlotAngle" , 1 ) == 1);
 _this._rePlotWindowFlag = (getProfileInt( "ENV_", "RePlotWindow", 1 ) == 1);
 _this._tool = getProfileInt( "ENV_", "Tool", 0 );
 var defOffsetX = _DIV( _this._gWorld._width , 2 );
 var defOffsetY = _DIV( _this._gWorld._height, 2 );
 _this._rectOffsetX = getProfileFloat( "ENV_", "RectOffsetX" , defOffsetX );
 _this._rectOffsetY = getProfileFloat( "ENV_", "RectOffsetY" , defOffsetY );
 _this._rectRatioX = getProfileFloat( "ENV_", "RectRatioX" , 20.0 );
 _this._rectRatioY = getProfileFloat( "ENV_", "RectRatioY" , -20.0 );
 _this._paramOffsetX = getProfileFloat( "ENV_", "ParamOffsetX", defOffsetX );
 _this._paramOffsetY = getProfileFloat( "ENV_", "ParamOffsetY", defOffsetY );
 _this._paramRatioX = getProfileFloat( "ENV_", "ParamRatioX" , 20.0 );
 _this._paramRatioY = getProfileFloat( "ENV_", "ParamRatioY" , -20.0 );
 _this._paramMin = getProfileFloat( "ENV_", "ParamMin" , 0.0 );
 _this._paramMax = getProfileFloat( "ENV_", "ParamMax" , 360.0 );
 _this._paramPitch = getProfileFloat( "ENV_", "ParamPitch" , 1.0 );
 _this._polarOffsetX = getProfileFloat( "ENV_", "PolarOffsetX", defOffsetX );
 _this._polarOffsetY = getProfileFloat( "ENV_", "PolarOffsetY", defOffsetY );
 _this._polarRatioX = getProfileFloat( "ENV_", "PolarRatioX" , 20.0 );
 _this._polarRatioY = getProfileFloat( "ENV_", "PolarRatioY" , -20.0 );
 _this._polarMin = getProfileFloat( "ENV_", "PolarMin" , 0.0 );
 _this._polarMax = getProfileFloat( "ENV_", "PolarMax" , 360.0 );
 _this._polarPitch = getProfileFloat( "ENV_", "PolarPitch" , 1.0 );
 _this._unitX = getProfileFloat( "ENV_", "UnitX", 1.0 );
 _this._unitY = getProfileFloat( "ENV_", "UnitY", 1.0 );
 _this._textX = getProfileInt ( "ENV_", "TextX", 1 );
 _this._textY = getProfileInt ( "ENV_", "TextY", 1 );
 _this._colorBack = getProfileInt( "ENV_", "BackColor" , 11 );
 _this._colorScale = getProfileInt( "ENV_", "ScaleColor", 12 );
 _this._colorUnit = getProfileInt( "ENV_", "UnitColor" , 14 );
 _this._colorText = getProfileInt( "ENV_", "TextColor" , 15 );
 _this._color[0] = getProfileInt( "ENV_", "GraphColor", 4 );
 for( var i = 1; i < 3; i++ ){
  _this._color[i] = getProfileInt( "ENV_", "GraphColor" + (i + 1), 4 );
 }
 _this._proc.setAngType( getProfileInt( "ENV_", "Angle", _ANG_TYPE_RAD ), false );
 var calculatorMode = getProfileInt( "ENV_", "Calculator", -1 );
 if( calculatorMode < 0 ){
  calculatorMode = 1;
  resetCalculator = true;
 }
 _this._param._calculator = (calculatorMode == 1);
 colorBack = COLOR_WIN[_this.indexToColor( _this._colorBack )];
}
function getProfileVar(){
 for( var i = 65; i <= 90; i++ ){
  var val = parseFloat( getProfileString( "VAR_", String.fromCharCode( i ), "0.0" ) );
  if( val != 0.0 ){
   topParam.setVal( i, val, true );
   inputVars[i - 65].value = "" + val;
  }
 }
}
function writeProfileVar( index ){
 var val = topParam.val( index ).toFloat();
 writeProfileString( "VAR_", String.fromCharCode( index ), "" + val );
}
function getProfileExpr(){
 editExpr[0][0].importLog( getProfileString( "EXPR_", "1", "" ) );
 editExpr[0][1].importLog( getProfileString( "EXPR_", "2", "" ) );
 for( var i = 1; i < 3; i++ ){
  editExpr[i][0].importLog( getProfileString( "EXPR" + (i + 1) + "_", "1", "" ) );
  editExpr[i][1].importLog( getProfileString( "EXPR" + (i + 1) + "_", "2", "" ) );
 }
 var forward = new _String();
 var after = new _String();
 editExpr[graphIndex()][0].get( forward, after, false );
 graphUI._graph.setExpr1( forward.str() + after.str() );
 editExpr[graphIndex()][1].get( forward, after, false );
 graphUI._graph.setExpr2( forward.str() + after.str() );
}
function writeProfileExpr(){
 var expr = new _String();
 editExpr[0][0].exportLog( expr );
 writeProfileString( "EXPR_", "1", expr.str() );
 editExpr[0][1].exportLog( expr );
 writeProfileString( "EXPR_", "2", expr.str() );
 for( var i = 1; i < 3; i++ ){
  editExpr[i][0].exportLog( expr );
  writeProfileString( "EXPR" + (i + 1) + "_", "1", expr.str() );
  editExpr[i][1].exportLog( expr );
  writeProfileString( "EXPR" + (i + 1) + "_", "2", expr.str() );
 }
}
function onEditExprUpdateSelAll( id, flag ){
}
function getProfileLogExpr(){
 var expr = new String();
 beginGetProfile( "LOG_" + "Expr" );
 while( true ){
  expr = getProfile();
  if( expr.length == 0 ){
   break;
  }
  logExpr.add( expr );
 }
 endGetProfile();
 logExpr.setIndex( 0 );
}
function writeProfileLogExpr(){
 var expr = new String();
 beginWriteProfile();
 for( var i = 0; i < logExpr.num(); i++ ){
  expr = logExpr.obj( i );
  writeProfile( expr );
 }
 endWriteProfile( "LOG_" + "Expr" );
}
function getProfileTable(){
 var x, y1, y2;
 beginGetProfile( "TABLE_" );
 while( true ){
  x = getProfile();
  y1 = getProfile();
  y2 = getProfile();
  if( x.length == 0 ){
   break;
  }
  listTable[0].add( new ListTableItem( x, y1, y2 ) );
 }
 endGetProfile();
 for( var i = 1; i < 3; i++ ){
  beginGetProfile( "TABLE" + (i + 1) + "_" );
  while( true ){
   x = getProfile();
   y1 = getProfile();
   y2 = getProfile();
   if( x.length == 0 ){
    break;
   }
   listTable[i].add( new ListTableItem( x, y1, y2 ) );
  }
  endGetProfile();
 }
}
function writeProfileTable(){
 var i;
 beginWriteProfile();
 for( i = 0; i < listTable[0].num(); i++ ){
  writeProfile( listTable[0].obj( i )._x );
  writeProfile( listTable[0].obj( i )._y1 );
  writeProfile( listTable[0].obj( i )._y2 );
 }
 endWriteProfile( "TABLE_" );
 for( var j = 1; j < 3; j++ ){
  beginWriteProfile();
  for( i = 0; i < listTable[j].num(); i++ ){
   writeProfile( listTable[j].obj( i )._x );
   writeProfile( listTable[j].obj( i )._y1 );
   writeProfile( listTable[j].obj( i )._y2 );
  }
  endWriteProfile( "TABLE" + (j + 1) + "_" );
 }
}
function writeProfileAngle(){
 var type = new _Integer();
 var updateFlag = new _Boolean();
 topProc.getAngType( type, updateFlag );
 writeProfileInt( "ENV_", "Angle", type._val );
}
function writeProfileWindow(){
 writeProfileFloat( "ENV_", "RectOffsetX" , graphUI._rectOffsetX );
 writeProfileFloat( "ENV_", "RectOffsetY" , graphUI._rectOffsetY );
 writeProfileFloat( "ENV_", "RectRatioX" , graphUI._rectRatioX );
 writeProfileFloat( "ENV_", "RectRatioY" , graphUI._rectRatioY );
 writeProfileFloat( "ENV_", "ParamOffsetX", graphUI._paramOffsetX );
 writeProfileFloat( "ENV_", "ParamOffsetY", graphUI._paramOffsetY );
 writeProfileFloat( "ENV_", "ParamRatioX" , graphUI._paramRatioX );
 writeProfileFloat( "ENV_", "ParamRatioY" , graphUI._paramRatioY );
 writeProfileFloat( "ENV_", "PolarOffsetX", graphUI._polarOffsetX );
 writeProfileFloat( "ENV_", "PolarOffsetY", graphUI._polarOffsetY );
 writeProfileFloat( "ENV_", "PolarRatioX" , graphUI._polarRatioX );
 writeProfileFloat( "ENV_", "PolarRatioY" , graphUI._polarRatioY );
}
function addListImageFromProfile( url, x, y ){
 var i;
 for( i = 0; i < listImage.num(); i++ ){
  if( listImage.obj( i )._url == url ){
   break;
  }
 }
 if( i == listImage.num() ){
  listImage.add( new ListImageItem( url, x, y ) );
 }
}
function getProfileImage(){
 var i;
 var url, x, y;
 var prefix = new Array();
 for( i = 0; ; i++ ){
  var tmp = getProfileString( "IMAGE_PATH_", "" + (i + 1), "" );
  if( tmp.length == 0 ){
   break;
  }
  prefix[i] = new String();
  prefix[i] = tmp;
  beginGetProfile( "IMAGE_" + (i + 1) );
  while( true ){
   url = getProfile();
   x = getProfile();
   y = getProfile();
   if( url.length == 0 ){
    break;
   }
   addListImageFromProfile( tmp + url, x, y );
  }
  endGetProfile();
 }
 beginGetProfile( "IMAGE_" );
 while( true ){
  url = getProfile();
  x = getProfile();
  y = getProfile();
  if( url.length == 0 ){
   break;
  }
  if( url.charAt( 0 ) == '{' ){
   var tmp = url.indexOf( "}" );
   if( tmp >= 2 ){
    i = parseInt( url.substring( 1, tmp ) ) - 1;
    if( i < prefix.length ){
     url = prefix[i] + url.slice( tmp + 1 );
    }
   }
  }
  addListImageFromProfile( url, x, y );
 }
 endGetProfile();
}
function writeProfileImage(){
 var i, j;
 var prefix = new Array();
 var image = new Array();
 clearProfile( "_CLIPGRAPH_" + "IMAGE_" );
 beginWriteProfile();
 for( i = 0; i < listImage.num(); i++ ){
  var url = listImage.obj( i )._url;
  var tmp = url.lastIndexOf( "/" );
  if( tmp >= 0 ){
   var url1 = url.substring( 0, tmp + 1 );
   var url2 = url.slice( tmp + 1 );
   for( j = 0; j < prefix.length; j++ ){
    if( prefix[j] == url1 ){
     break;
    }
   }
   if( j >= prefix.length ){
    prefix[j] = new String();
    prefix[j] = url1;
    image[j] = new String();
    image[j] = escape( url2 );
   } else {
    image[j] += "&" + escape( url2 );
   }
   image[j] += "&" + listImage.obj( i )._x;
   image[j] += "&" + listImage.obj( i )._y;
  } else {
   writeProfile( url );
   writeProfile( listImage.obj( i )._x );
   writeProfile( listImage.obj( i )._y );
  }
 }
 endWriteProfile( "IMAGE_" );
 for( i = 0; i < prefix.length; i++ ){
  writeProfileString( "IMAGE_PATH_", "" + (i + 1), prefix[i] );
  writeProfileString( "IMAGE_" , "" + (i + 1), image [i] );
 }
}
var needSaveFunc = false;
function onEditorUpdateText( len ){
 needSaveFunc = true;
 cssSetStyleDisplayById( "graph_button_savefunc", true );
}
function getFunc( chr ){
 return getProfileString( "FUNC_", "" + chr, "" );
}
function setFunc( chr, text ){
 writeProfileString( "FUNC_", "" + chr, text );
 topProc.clearFuncCache( "!" + chr );
}
function loadFunc(){
 editor.setText( getFunc( String.fromCharCode( curFunc ) ) );
}
function saveFunc(){
 if( needSaveFunc ){
  setFunc( String.fromCharCode( curFunc ), "" + editor.text() );
  updateSelectFunc1( document.getElementById( "graph_select_func" ), curFunc - 97 );
  needSaveFunc = false;
  cssSetStyleDisplayById( "graph_button_savefunc", false );
 }
}
function doChangeFunc( select ){
 saveFunc();
 selFunc = select.selectedIndex;
 curFunc = select.options[selFunc].value;
 loadFunc();
 writeProfileInt( "EDITOR_", "SelFunc", selFunc );
}
function callFunc(){
 saveFunc();
 insEditExpr( "!!" + String.fromCharCode( curFunc ) + " " );
 doButtonUIMain();
 setButtonMode( 0 );
}
function onChangeTabWidth(){
 var tabWidth = parseInt( document.getElementById( "tab_width" ).value );
 if( tabWidth < 0 ){
  tabWidth = 0;
  document.getElementById( "tab_width" ).value = "" + tabWidth;
 }
 cssSetPropertyValue( ".textarea_func", "tab-size", "" + tabWidth );
 writeProfileInt( "EDITOR_", "Tab", tabWidth );
}
function doButtonEditTabUp( e ){
 if( doButtonUpInt( "tab_width", 1, 8 ) ){
  onChangeTabWidth();
 }
}
function doButtonEditTabDown( e ){
 if( doButtonDownInt( "tab_width", 1, 1 ) ){
  onChangeTabWidth();
 }
}
function doCheckSmart(){
 setEditorSmartFlag( document.getElementById( "check_smart" ).checked );
 writeProfileInt( "EDITOR_", "Smart", editorSmartFlag() ? 1 : 0 );
}
function updateSelectFunc1( select, i ){
 var index = 97 + i;
 var data = getFunc( String.fromCharCode( index ) );
 if( data.length == 0 ){
  select.options[i].innerHTML = "" + String.fromCharCode( index );
 } else {
  select.options[i].innerHTML = "" + String.fromCharCode( index ) + "&nbsp;&nbsp;" + splitData( data )[0];
 }
}
function updateSelectFunc(){
 var select = document.getElementById( "graph_select_func" );
 for( var i = 0; i < 26; i++ ){
  updateSelectFunc1( select, i );
 }
}
function changeVar1(){
 cssSetStyleDisplayById( "graph_ui_var_2", false );
 cssSetStyleDisplayById( "graph_ui_var_3", false );
 cssSetStyleDisplayById( "graph_ui_var_1", true );
 document.getElementById( "button_ui_var_1" ).disabled = true;
 document.getElementById( "button_ui_var_2" ).disabled = false;
}
function changeVar2(){
 cssSetStyleDisplayById( "graph_ui_var_1", false );
 cssSetStyleDisplayById( "graph_ui_var_2", true );
 cssSetStyleDisplayById( "graph_ui_var_3", true );
 document.getElementById( "button_ui_var_1" ).disabled = false;
 document.getElementById( "button_ui_var_2" ).disabled = true;
}
function getContent(){
 if( nativeRequest ){
  nativeRequest.send( "get_content" );
 }
}
function onContentBase64( data ){
 skinImage = data;
 document.getElementById( "graph_edit_skin_image" ).value = skinImage;
 updateSkin();
 writeProfileString( "ENV_", "SkinImage", skinImage );
 addListImage();
}
function onKeyDown( key ){
 if( menu != 2 ){
  return false;
 }
 if(
  (document.activeElement == document.getElementById( "graph_edit_min" )) ||
  (document.activeElement == document.getElementById( "graph_edit_max" )) ||
  (document.activeElement == document.getElementById( "graph_edit_pitch" ))
 ){
  return false;
 }
 if( key == 16 ){
  keyShiftOnly = true;
 } else {
  keyShiftOnly = false;
 }
 switch( key ){
 case 9:
  if( (exprType == 0) && (graphUI._mode == 4) ){
   doEditExpr2();
  } else {
   doEditExpr1();
  }
  return true;
 case 38 : topEditExpr(); return true;
 case 40 : endEditExpr(); return true;
 case 37 : backwardEditExpr(); return true;
 case 39: forwardEditExpr(); return true;
 case 8: delEditExpr(); return true;
 case 46 : delEditExpr(); return true;
 case 48 : doButton0(); return true;
 case 96: doButton0(); return true;
 case 49:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButton1();
  } else {
   doButtonFactorial();
  }
  return true;
 case 97: doButton1(); return true;
 case 50 : doButton2(); return true;
 case 98: doButton2(); return true;
 case 51 : doButton3(); return true;
 case 99: doButton3(); return true;
 case 52 : doButton4(); return true;
 case 100: doButton4(); return true;
 case 53:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButton5();
  } else {
   doButtonMod();
  }
  return true;
 case 101: doButton5(); return true;
 case 54 : doButton6(); return true;
 case 102: doButton6(); return true;
 case 55 : doButton7(); return true;
 case 103: doButton7(); return true;
 case 56:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButton8();
  } else {
   doButtonTop();
  }
  return true;
 case 104: doButton8(); return true;
 case 57:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButton9();
  } else {
   doButtonEnd();
  }
  return true;
 case 105: doButton9(); return true;
 case 110: doButtonPoint(); return true;
 case 190: doButtonPoint(); return true;
 case 68: doButtonDeg(); return true;
 case 69:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButtonEPlus();
  } else {
   doButtonEMinus();
  }
  return true;
 case 71: doButtonGrad(); return true;
 case 73: doButtonI(); return true;
 case 82: doButtonRad(); return true;
 case 187:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButtonPlus();
  } else {
   doButtonAdd();
  }
  return true;
 case 189:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButtonSub();
  } else {
   doButtonMinus();
  }
  return true;
 case 107:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButtonAdd();
  } else {
   doButtonPlus();
  }
  return true;
 case 109:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButtonSub();
  } else {
   doButtonMinus();
  }
  return true;
 case 106: doButtonMul(); return true;
 case 186: doButtonMul(); return true;
 case 111: doButtonDiv(); return true;
 case 191: doButtonDiv(); return true;
 case 222:
  doButtonPow();
  return true;
 case 88: doButtonVar(); return true;
 case 84: doButtonVar(); return true;
 case 32: doButtonSpace(); return true;
 case 13: doButtonEnter(); return true;
 }
 return false;
}
function onKeyUp( key ){
 if( (key == 16) && keyShiftOnly ){
  doButtonSHIFT();
  return true;
 }
 return false;
}
