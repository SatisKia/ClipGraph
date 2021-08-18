//window.androidTabletTest;
//window.iPadTest;
//window.bodyHeight;

//window.dispUserAgent;	// 起動時にユーザーエージェントを表示するかどうか
//window.dispCache;		// 起動時にキャッシュ内容を表示するかどうか
//window.conMaxLen;		// コンソールの最大文字数
//window.retAssertProc;	// アサートに失敗した時に処理を停止するかどうか
//window.loopMax;		// ループ回数上限
//window.useStorage;	// ストレージを使用するかどうか

#ifndef DEBUG
window.onerror = clip_onerror;
#endif // DEBUG

#define PROFILE_PREFIX	"_CLIPGRAPH_"

// 外部関数
var extFuncData  = new Array();
var extFuncFile2 = new Array();
var extFuncData2 = new Array();

#define _TRY	try {
#define _CATCH	} catch( e ){ catchError( e ); }

#ifndef USE_CLIP_LIB

#include "_Global.h"

#include "math\_Complex.js"
#include "math\_Fract.js"
#include "math\_Math.js"
#include "math\_MathEnv.js"
#include "math\_Matrix.js"
#include "math\_Time.js"
#include "math\_Value.js"

#include "mp\_MultiPrec.js"
#include "mp\_abs.js"
#include "mp\_add.js"
#include "mp\_cmp.js"
#include "mp\_div.js"
#include "mp\_fadd.js"
#include "mp\_fcmp.js"
#include "mp\_fdigit.js"
#include "mp\_fdiv.js"
#include "mp\_fdiv2.js"
#include "mp\_fmul.js"
#include "mp\_fnum2str.js"
#include "mp\_fround.js"
#include "mp\_fsqrt.js"
#include "mp\_fsqrt2.js"
#include "mp\_fsqrt3.js"
#include "mp\_fstr2num.js"
#include "mp\_fsub.js"
#include "mp\_ftrunc.js"
#include "mp\_mul.js"
#include "mp\_neg.js"
#include "mp\_num2str.js"
#include "mp\_set.js"
#include "mp\_sqrt.js"
#include "mp\_str2num.js"
#include "mp\_sub.js"

#include "param\_Boolean.js"
#include "param\_Float.js"
#include "param\_Integer.js"
#include "param\_String.js"
#include "param\_Void.js"

#include "system\_Tm.js"

#include "_Array.js"
#include "_Func.js"
#include "_Global.js"
#include "_Graph.js"
#include "_GWorld.js"
#include "_Label.js"
#include "_Line.js"
#include "_Loop.js"
#include "_Param.js"
#include "_Proc.js"
#include "_Token.js"
#include "_Variable.js"

#endif // USE_CLIP_LIB

#include "_ColorWin.js"
#include "_DefCharInfo.js"

var resetCalculator = false;
var started = false;

// コンソール
#include "_Console.js"
var con;
function onConsoleUpdate( id ){
	if( started ){
		document.getElementById( "button_ui_log"  ).innerHTML = "<b><span style='color:#FF0000'>！</span></b>";
		document.getElementById( "button_ui_log2" ).innerHTML = "<b><span style='color:#FF0000'>！</span></b>";
	}
}

// エラー
#include "_Error.js"
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

// キャンバス
#include "_Canvas.js"
#include "_StringUtil.js"
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
	colorR =  bgrColor & 0x0000FF;
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

// ファイル選択
#include "_InputFile.js"
var inputFile;

// 計算エラー情報管理
#include "_ProcError.js"
var procError;
var silentErr = false;

#define _GRAPH_NUM 3

#include "EditExpr.js"
var editExpr = new Array( _GRAPH_NUM );

#include "ListBox.js"
var logExpr;
var listTable = new Array( _GRAPH_NUM );
function ListTableItem( x, y1, y2 ){
	this._x  = x;
	this._y1 = y1;
	this._y2 = y2;
}
var listImage;
function ListImageItem( url, x, y ){
	this._url = url;
	this._x   = x;
	this._y   = y;
}

// エディタ
#include "_Editor.js"
var editor;
var selFunc;
var curFunc;

var topProc;
var topParam;

#include "Common.js"
var common;

#include "GraphUI.js"
var graphUI;

#include "_NativeRequest.js"
var nativeRequest;

#include "Profile.js"

// キー関連
#include "KeyEvent.js"
var keyShiftOnly = false;

#include "Electron.js"
var electron = null;

var divEdit;

var inputVars;

var buttonMode = 0;
var exprType   = 0;
var usageFlag  = true;

#define LANG_JAPANESE	0
#define LANG_ENGLISH	1
var englishFlag = false;

var lockGraphResetEnv = false;

#define SKIN_COLOR	6
#define SKIN_IMAGE	7
#define SKIN_MAX	7
var skin;
var skinColor;
var skinLockR, skinLockG, skinLockB;
var skinTrans;
var skinImage;
var fontSpan;
var fontEdit;
function colorBackAlpha(){
	if( skin == SKIN_IMAGE ){
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

#define _UI_GRAPH_MENU_GRAPH		0
#define _UI_GRAPH_MENU_WINDOW		1
#define _UI_GRAPH_MENU_MAIN			2
#define _UI_GRAPH_MENU_FUNC			3
#define _UI_GRAPH_MENU_LOG			4
#define _UI_GRAPH_MENU_VAR			5
#define _UI_GRAPH_MENU_TABLE		6
#define _UI_GRAPH_MENU_OPTION		7
#define _UI_GRAPH_MENU_COLOR		8
#define _UI_GRAPH_MENU_SELECTIMAGE	9
#define _UI_GRAPH_MENU_PROFILE		10
#define _UI_GRAPH_MENU_TABLE2		11
var menu = -1;

// iOS10でダブルタップを防ぐ
var lastTouchEnd = 0;

function isAndroidTablet(){
	return (androidTabletTest || common.isAndroidTablet());
}
function isIPad(){
	return (iPadTest || common.isIPad());
}

function printAppVersion( version ){
	var saveStarted = started;
	started = false;
	con.println( "ClipGraph" + version + consoleBreak() + "Copyright (C) SatisKia" );
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
	started = saveStarted;
}

function main( editId, logId, conId, tableId, selectImageId, canvasId, inputFileIds, editorId ){
	var i;

	defGWorldFunction();
	defProcFunction();

	// コンソール
	con = new _Console( conId );
	con.setMaxLen( conMaxLen );

	try {
		electron = new Electron( require( "electron" ).remote.require( "./electron" ) );

		window.onbeforeunload = function(){
			electron.writeProfile( exportProfile() );
		};
	} catch( e ){
		electron = null;
	}

	common = new Common();

	if( common.isIPhone() || common.isIPad() ){
		// iOS10で複数指で拡大縮小が出来てしまうのを防ぐ
		document.documentElement.addEventListener( "touchstart", function( e ){
			if( e.touches.length > 1 ){
				e.preventDefault();
			}
		}, true );

		// iOS10でダブルタップを防ぐ
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
	setProfilePrefix( PROFILE_PREFIX );

	if( electron != null ){
		var text = electron.readProfile();
		if( text.length > 0 ){
			setEnableWriteProfile( true );
			importProfile( text );
			setEnableWriteProfile( false );
		}
	}

	if( isAndroidTablet() || isIPad() ){
		cssSetPropertyValue( ".div_body"        , "width" , "357px" );
		cssSetPropertyValue( ".div_body"        , "height", "471px" );
		cssSetPropertyValue( ".div_selectimage" , "height", "387px" );
		cssSetPropertyValue( ".textarea_profile", "height", "415px" );
	}

	skin      = getProfileInt( "ENV_", "Skin"     , 0 ); if( skin > SKIN_MAX ) skin = SKIN_MAX;
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
	initSelect( "graph_select_skin"      , skin      );
	initSelect( "graph_select_skin_color", skinColor );
	initSelect( "graph_select_skin_trans", skinTrans );
	cssSetStyleDisplayById( "graph_select_skin_color", skin == SKIN_COLOR );
	cssSetStyleDisplayById( "graph_select_skin_trans", skin == SKIN_IMAGE );
	cssSetStyleDisplayById( "input_skin_color"       , (skin == SKIN_COLOR) && (skinColor == COLOR.length - 1) );
	cssSetStyleDisplayById( "input_skin_image"       , skin == SKIN_IMAGE );

	fontSpan = getProfileString( "ENV_", "FontSpan", "Helvetica"   );
	fontEdit = getProfileString( "ENV_", "FontEdit", "Courier New" );
	updateFont();

	usageFlag = (getProfileInt( "ENV_", "PrintUsage", 1 ) == 1);
	updateButtonHeight();

	englishFlag = (getProfileInt( "ENV_", "Language", LANG_JAPANESE ) == LANG_ENGLISH);
	updateLanguage();

	divEdit = document.getElementById( editId );

	inputVars = document.getElementsByName( "graph_edit_var" );

	// 文字情報を登録する
	regGWorldDefCharInfo( 0 );

	// キャンバス
	setCanvasEnv( new _CanvasEnv() );
	canvas = new _Canvas( canvasId );
	su = new _StringUtil();
	canvas.setFont( 10, "Helvetica" );
	su.setFont( 10, "Helvetica" );
//	canvasClear();

	// ファイル選択コントロール
	inputFile = new Array();
	for( i = 0; i < inputFileIds.length; i++ ){
		inputFile[i] = new _InputFile( inputFileIds[i][0], inputFileIds[i][1] );
	}

	// 計算エラー情報管理クラス
	procError = new _ProcError();

	for( i = 0; i < _GRAPH_NUM; i++ ){
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
	for( i = 0; i < _GRAPH_NUM; i++ ){
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

	// 定義定数の値
	setDefineValue();

	// 計算処理メイン・クラスを生成する
	setProcEnv( new _ProcEnv() );
	topProc = new _Proc( _PROC_DEF_PARENT_MODE, _PROC_DEF_PARENT_MP_PREC, _PROC_DEF_PARENT_MP_ROUND, true, _PROC_DEF_PRINT_ASSERT, _PROC_DEF_PRINT_WARN, _PROC_DEF_GUPDATE_FLAG );
	setProcWarnFlowFlag( false );
	setProcLoopMax( loopMax );

	// 計算パラメータ・クラスを生成する
	topParam = new _Param();
	topParam.setMode( _CLIP_MODE_G_COMPLEX );
	topParam.setPrec( 0 );
	topParam._enableCommand = false;
	topParam._enableOpPow = true;
	topParam._enableStat = false;
	setGlobalParam( topParam );

	initProc();	// setProcEnvより後に実行

	// 乱数を初期化する
	srand( time() );
	rand();

	for( i = 1; i < _GRAPH_NUM; i++ ){
		procGraph().addGraph();
	}
	procGraph().selGraph( getProfileInt( "ENV_", "GraphIndex", 0 ) );

	procGWorld().create( canvas.width(), canvas.height(), true );

	graphUI = new GraphUI( topProc, topParam );

	updateLogButton();

	var color;
	color = COLOR_WIN[graphUI.indexToColor(  0 )]; cssSetPropertyValue( ".button_color_00", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
	color = COLOR_WIN[graphUI.indexToColor(  1 )]; cssSetPropertyValue( ".button_color_01", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
	color = COLOR_WIN[graphUI.indexToColor(  2 )]; cssSetPropertyValue( ".button_color_02", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
	color = COLOR_WIN[graphUI.indexToColor(  3 )]; cssSetPropertyValue( ".button_color_03", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
	color = COLOR_WIN[graphUI.indexToColor(  4 )]; cssSetPropertyValue( ".button_color_04", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
	color = COLOR_WIN[graphUI.indexToColor(  5 )]; cssSetPropertyValue( ".button_color_05", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
	color = COLOR_WIN[graphUI.indexToColor(  6 )]; cssSetPropertyValue( ".button_color_06", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
	color = COLOR_WIN[graphUI.indexToColor(  7 )]; cssSetPropertyValue( ".button_color_07", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
	color = COLOR_WIN[graphUI.indexToColor(  8 )]; cssSetPropertyValue( ".button_color_08", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
	color = COLOR_WIN[graphUI.indexToColor(  9 )]; cssSetPropertyValue( ".button_color_09", "background-color", _RGB( color & 0x0000FF, (color & 0x00FF00) >> 8, (color & 0xFF0000) >> 16 ) );
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

	document.getElementById( "check_replot_mode"   ).checked = graphUI.rePlotModeFlag();
	document.getElementById( "check_replot_angle"  ).checked = graphUI.rePlotAngleFlag();
	document.getElementById( "check_replot_window" ).checked = graphUI.rePlotWindowFlag();
	document.getElementById( "check_print_usage"   ).checked = usageFlag;
	document.getElementById( "check_calculator"    ).checked = topParam._calculator;

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

	_addGraphEventListenerById( "button_log_up"  , event, upLogExpr );
	_addGraphEventListenerById( "button_log_down", event, downLogExpr );
	_addGraphEventListenerById( "button_log_del" , event, delLogExpr );

	_addGraphEventListenerById( "button_table_up"  , event, upListTable );
	_addGraphEventListenerById( "button_table_down", event, downListTable );
	_addGraphEventListenerById( "button_table_del" , event, delListTable );

	_addGraphEventListenerById( "button_edit_min_up"       , event, doButtonEditMinUp );
	_addGraphEventListenerById( "button_edit_min_down"     , event, doButtonEditMinDown );
	_addGraphEventListenerById( "button_edit_max_up"       , event, doButtonEditMaxUp );
	_addGraphEventListenerById( "button_edit_max_down"     , event, doButtonEditMaxDown );
	_addGraphEventListenerById( "button_edit_pitch_up"     , event, doButtonEditPitchUp );
	_addGraphEventListenerById( "button_edit_pitch_down"   , event, doButtonEditPitchDown );
	_addGraphEventListenerById( "button_edit_offset_x_up"  , event, doButtonEditOffsetXUp );
	_addGraphEventListenerById( "button_edit_offset_x_down", event, doButtonEditOffsetXDown );
	_addGraphEventListenerById( "button_edit_offset_y_up"  , event, doButtonEditOffsetYUp );
	_addGraphEventListenerById( "button_edit_offset_y_down", event, doButtonEditOffsetYDown );
	_addGraphEventListenerById( "button_edit_ratio_x_up"   , event, doButtonEditRatioXUp );
	_addGraphEventListenerById( "button_edit_ratio_x_down" , event, doButtonEditRatioXDown );
	_addGraphEventListenerById( "button_edit_ratio_y_up"   , event, doButtonEditRatioYUp );
	_addGraphEventListenerById( "button_edit_ratio_y_down" , event, doButtonEditRatioYDown );
	_addGraphEventListenerById( "button_edit_left_up"      , event, doButtonEditLeftUp );
	_addGraphEventListenerById( "button_edit_left_down"    , event, doButtonEditLeftDown );
	_addGraphEventListenerById( "button_edit_bottom_up"    , event, doButtonEditBottomUp );
	_addGraphEventListenerById( "button_edit_bottom_down"  , event, doButtonEditBottomDown );
	_addGraphEventListenerById( "button_edit_right_up"     , event, doButtonEditRightUp );
	_addGraphEventListenerById( "button_edit_right_down"   , event, doButtonEditRightDown );
	_addGraphEventListenerById( "button_edit_top_up"       , event, doButtonEditTopUp );
	_addGraphEventListenerById( "button_edit_top_down"     , event, doButtonEditTopDown );
	_addGraphEventListenerById( "button_edit_unit_x_up"    , event, doButtonEditUnitXUp );
	_addGraphEventListenerById( "button_edit_unit_x_down"  , event, doButtonEditUnitXDown );
	_addGraphEventListenerById( "button_edit_unit_y_up"    , event, doButtonEditUnitYUp );
	_addGraphEventListenerById( "button_edit_unit_y_down"  , event, doButtonEditUnitYDown );
	_addGraphEventListenerById( "button_edit_text_x_up"    , event, doButtonEditTextXUp );
	_addGraphEventListenerById( "button_edit_text_x_down"  , event, doButtonEditTextXDown );
	_addGraphEventListenerById( "button_edit_text_y_up"    , event, doButtonEditTextYUp );
	_addGraphEventListenerById( "button_edit_text_y_down"  , event, doButtonEditTextYDown );
	_addGraphEventListenerById( "button_edit_r_up"         , event, doButtonEditRUp );
	_addGraphEventListenerById( "button_edit_r_down"       , event, doButtonEditRDown );
	_addGraphEventListenerById( "button_edit_g_up"         , event, doButtonEditGUp );
	_addGraphEventListenerById( "button_edit_g_down"       , event, doButtonEditGDown );
	_addGraphEventListenerById( "button_edit_b_up"         , event, doButtonEditBUp );
	_addGraphEventListenerById( "button_edit_b_down"       , event, doButtonEditBDown );
	_addGraphEventListenerById( "button_edit_x_up"         , event, doButtonEditXUp );
	_addGraphEventListenerById( "button_edit_x_down"       , event, doButtonEditXDown );
	_addGraphEventListenerById( "button_edit_y_up"         , event, doButtonEditYUp );
	_addGraphEventListenerById( "button_edit_y_down"       , event, doButtonEditYDown );

	_addGraphEventListenerById( "button_selectimage_up"  , event, upListImage );
	_addGraphEventListenerById( "button_selectimage_down", event, downListImage );
	_addGraphEventListenerById( "button_selectimage_del" , event, delListImage );

	_addGraphEventListenerById( "button_edit_tab_up"  , event, doButtonEditTabUp );
	_addGraphEventListenerById( "button_edit_tab_down", event, doButtonEditTabDown );

	if( common.isPC() ){
		cssSetStyleDisplayById( "graph_ui_var_2"     , true  );
		cssSetStyleDisplayById( "graph_ui_var_change", false );
	}

	if( !common.isApp() ){
		if( useStorage && canUseStorage() ){
			cssSetStyleDisplayById( "button_storage_clear", true );
		} else if( canUseCookie() ){
			cssSetStyleDisplayById( "button_cookie_clear", true );
		}
	}
	if( !common.isPC() ){
		cssSetStyleDisplayById( "button_profile_export", true );
		cssSetStyleDisplayById( "button_profile_import", true );
	}

	if( common.isApp() ){
		cssSetStyleDisplayById( "button_getcontent", true );
	}
	if( common.isPC() ){
		cssSetStyleDisplayById( "graph_input_loadimage", true );
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
			regExtFuncButton( name.toLowerCase() );
		}
	}

	loadExtFuncFile2();
	for( i = 0; i < extFuncFile2.length; i++ ){
		var name = extFuncName( extFuncFile2[i] );
		if( name.length > 0 ){
			regExtFuncButton( name.toLowerCase() );
		}
	}

	// エディタ
	editor = new _Editor( editorId );

	// エディタのタブ幅
	var tabWidth = getProfileInt( "EDITOR_", "Tab", 4 );
	if( tabWidth < 0 ){
		tabWidth = 0;
	}
	document.getElementById( "tab_width" ).value = "" + tabWidth;
	cssSetPropertyValue( ".textarea_func", "tab-size", "" + tabWidth );

	// スマート
	var smart = (getProfileInt( "EDITOR_", "Smart", 1 ) == 1);
	document.getElementById( "check_smart" ).checked = smart;
	setEditorSmartFlag( smart );

	// エディタの現在の関数
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
		nativeRequest.send( "started" );
	} else {
		var version = "";
		if( electron != null ){
			version = " " + electron.version();
		}
		printAppVersion( version );
	}

	// 外部関数読み込み開始
	if( nativeRequest ){
		nativeRequest.send( "start_load_extfunc/" + extFuncFile[loadNum] );
	}

	// キー関連
	_addGraphEventListener( document, "keydown", keyDown );
	_addGraphEventListener( document, "keyup", keyUp );

	if( electron != null ){
		setEnglish( electron.isEnglish() );
	}

	if( androidTabletTest || iPadTest || (bodyHeight != defHeight( false )) ){
		setHeight( bodyHeight );
	}
}

// Androidタブレット、iPad用
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
	var height = (isAndroidTablet() || isIPad()) ? 471 : 506;
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

	var saveStarted = started;
	started = false;
	con.setColor( "0000ff" );
	con.setBold( true );
	con.print( "Height: " );
	con.setBold( false );
	con.println( "" + bodyHeight );
	con.setColor();
	started = saveStarted;

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
		editorHeight = bodyHeight - 227;		// IMEのサイズ：357x227
	} else if( !androidTabletTest && common.isAndroidMobile() ){
		editorHeight = bodyHeight - 255 - 39;	// IMEのサイズ：322x255
	} else if( isIPad() ){
		editorHeight = bodyHeight - 145;		// IMEのサイズ：357x145
	} else if( !iPadTest && common.isIPhone() ){
		editorHeight = bodyHeight - 261;		// IMEのサイズ：322x261
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

		cssSetButton( ".button_common", GRADIENT_T_B, GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_cursor", GRADIENT_T_B, GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu"  , GRADIENT_T_B, GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu2" , GRADIENT_T_B, GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_shift" , GRADIENT_T_B, GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_topend", GRADIENT_T_B, GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_del"   , GRADIENT_T_B, GREEN_RED.get( 16 ), GREEN_RED.get( -16 ), GREEN_TEXT, "#404040", false );
		cssSetButton( ".button_rcl"   , GRADIENT_T_B, GREEN_BLUE.get( 16 ), GREEN_BLUE.get( -16 ), GREEN_TEXT, "#404040", false );

		cssSetButton( ".button_var"   , GRADIENT_T_B, GREEN_BLUE.get( 16 ), GREEN_BLUE.get( -16 ), GREEN_TEXT, "#404040", false );

		cssSetButton( ".button_enter" , GRADIENT_T_B, GREEN_EMERALD.get( 16 ), GREEN_EMERALD.get( -16 ), GREEN_TEXT, "#404040", false );

		cssSetButton( ".button_func"  , GRADIENT_T_B, GREEN_LIGHT.get( 16 ), GREEN_LIGHT.get( -16 ), GREEN_TEXT, "#404040", false );

		cssSetButton( ".button_number", GRADIENT_T_B, GREEN_DARK.get( 16 ), GREEN_DARK.get( -16 ), GREEN_TEXT, "#202020", false );
		cssSetButton( ".button_op"    , GRADIENT_T_B, GREEN_LIGHT.get( 16 ), GREEN_LIGHT.get( -16 ), GREEN_TEXT, "#404040", false );
		cssSetButton( ".button_symbol", GRADIENT_T_B, GREEN_LIGHT.get( 16 ), GREEN_LIGHT.get( -16 ), GREEN_TEXT, "#404040", false );

		cssSetSelect( ".select_common", GRADIENT_T_B, GREEN_SELECT.get( 16 ), GREEN_SELECT.get( -16 ), "#000000", "", true );
		cssSetSelect( ".select_var"   , GRADIENT_T_B, GREEN_SELECT.get( 16 ), GREEN_SELECT.get( -16 ), "#000000", "", true );
		cssSetSelect( ".select_func"  , GRADIENT_T_B, GREEN_SELECT.get( 16 ), GREEN_SELECT.get( -16 ), "#000000", "", true );

		cssSetPropertyValue( ".span"     , "color", GREEN_SPAN );
		cssSetPropertyValue( ".span_expr", "color", GREEN_SPAN );
		cssSetPropertyValue( ".div_usage", "color", GREEN_SPAN );

		cssSetPropertyValue( ".span"     , "text-shadow", "0 0" );
		cssSetPropertyValue( ".span_expr", "text-shadow", "0 0" );
		cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );

		cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", GREEN_CHECKED );
		cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", GREEN_CHECKED );

		cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + GREEN_CHECKED );

		cssSetPropertyValue( ".div_edit"       , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".input_expr"     , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_log"        , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_table"      , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_console"    , "background-color", "#C0C0C0" );

		cursorText = "#FFFFFF";
		cursorBack = GREEN_CHECKED;

		break;
	case 1:
		document.getElementById( "button_enter" ).innerHTML = "<img src='draw.png' width='20' height='20'>";

		cssSetPropertyValue( ".div_body", "background-color", GRAY_BG );

		cssSetButton( ".button_common", GRADIENT_T_B, GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_cursor", GRADIENT_T_B, GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu"  , GRADIENT_T_B, GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu2" , GRADIENT_T_B, GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_shift" , GRADIENT_T_B, GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_topend", GRADIENT_LT_RB, GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );

		cssSetButton( ".button_del"   , GRADIENT_T_B, GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );
		cssSetButton( ".button_rcl"   , GRADIENT_LT_RB, GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );

		cssSetButton( ".button_var"   , GRADIENT_LT_RB, GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );

		cssSetButton( ".button_enter" , GRADIENT_LT_RB, GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );

		cssSetButton( ".button_func"  , GRADIENT_LT_RB, GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );

		cssSetButton( ".button_number", GRADIENT_LT_RB, GRAY_LIGHT_1, GRAY_LIGHT_2, GRAY_TEXT, "#404040", false );
		cssSetButton( ".button_op"    , GRADIENT_LT_RB, GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );
		cssSetButton( ".button_symbol", GRADIENT_LT_RB, GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );

		cssSetSelect( ".select_common", GRADIENT_T_B, GRAY_SELECT.get( 32 ), GRAY_SELECT.get( -32 ), "#000000", "", true );
		cssSetSelect( ".select_var"   , GRADIENT_T_B, GRAY_SELECT.get( 32 ), GRAY_SELECT.get( -32 ), "#000000", "", true );
		cssSetSelect( ".select_func"  , GRADIENT_T_B, GRAY_SELECT.get( 32 ), GRAY_SELECT.get( -32 ), "#000000", "", true );

		cssSetPropertyValue( ".span"     , "color", GRAY_SPAN );
		cssSetPropertyValue( ".span_expr", "color", GRAY_SPAN );
		cssSetPropertyValue( ".div_usage", "color", GRAY_SPAN );

		cssSetPropertyValue( ".span"     , "text-shadow", "0 0" );
		cssSetPropertyValue( ".span_expr", "text-shadow", "0 0" );
		cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );

		cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", GRAY_CHECKED );
		cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", GRAY_CHECKED );

		cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + GRAY_CHECKED );

		cssSetPropertyValue( ".div_edit"       , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".input_expr"     , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_log"        , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_table"      , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_console"    , "background-color", "#C0C0C0" );

		cursorText = "#FFFFFF";
		cursorBack = GRAY_CHECKED;

		break;
	case 2:
		document.getElementById( "button_enter" ).innerHTML = "<img src='draw.png' width='20' height='20'>";

		cssSetPropertyValue( ".div_body", "background-color", PURPLE_BG );

		cssSetButton( ".button_common", GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_cursor", GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu"  , GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu2" , GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_shift" , GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );

		cssSetButton( ".button_topend", GRADIENT_T_B, PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );

		cssSetButton( ".button_del"   , GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_rcl"   , GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );

		cssSetButton( ".button_var"   , GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );

		cssSetButton( ".button_enter" , GRADIENT_T_B, PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );

		cssSetButton( ".button_func"  , GRADIENT_T_B, PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );

		cssSetButton( ".button_number", GRADIENT_T_B, PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
		cssSetButton( ".button_op"    , GRADIENT_T_B, PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
		cssSetButton( ".button_symbol", GRADIENT_T_B, PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );

		cssSetSelect( ".select_common", GRADIENT_T_B, PURPLE_SELECT.get( 32 ), PURPLE_SELECT.get( -32 ), "#000000", "", true );
		cssSetSelect( ".select_var"   , GRADIENT_T_B, PURPLE_SELECT.get( 32 ), PURPLE_SELECT.get( -32 ), "#000000", "", true );
		cssSetSelect( ".select_func"  , GRADIENT_T_B, PURPLE_SELECT.get( 32 ), PURPLE_SELECT.get( -32 ), "#000000", "", true );

		cssSetPropertyValue( ".span"     , "color", PURPLE_SPAN );
		cssSetPropertyValue( ".span_expr", "color", PURPLE_SPAN );
		cssSetPropertyValue( ".div_usage", "color", PURPLE_SPAN );

		cssSetPropertyValue( ".span"     , "text-shadow", "0 0" );
		cssSetPropertyValue( ".span_expr", "text-shadow", "0 0" );
		cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );

		cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", PURPLE_CHECKED );
		cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", PURPLE_CHECKED );

		cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + PURPLE_CHECKED );

		cssSetPropertyValue( ".div_edit"       , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".input_expr"     , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_log"        , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_table"      , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_console"    , "background-color", "#C0C0C0" );

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
			cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", GOLD_CHECKED );

			cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + GOLD_CHECKED );

			cursorText = "#FFFFFF";
			cursorBack = GOLD_CHECKED;

			break;
		case 4:
			document.getElementById( "graph_body" ).classList.add( "bg_silver" );

			cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", SILVER_CHECKED );
			cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", SILVER_CHECKED );

			cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + SILVER_CHECKED );

			cursorText = "#FFFFFF";
			cursorBack = SILVER_CHECKED;

			break;
		case 5:
			document.getElementById( "graph_body" ).classList.add( "bg_iron" );

			cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", IRON_CHECKED );
			cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", IRON_CHECKED );

			cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + IRON_CHECKED );

			cursorText = "#FFFFFF";
			cursorBack = IRON_CHECKED;

			break;
		}

		cssSetButton( ".button_common", GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
		cssSetButton( ".button_cursor", GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu"  , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu2" , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
		cssSetButton( ".button_shift" , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );

		cssSetButton( ".button_topend", GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );

		cssSetButton( ".button_del"   , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );
		cssSetButton( ".button_rcl"   , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );

		cssSetButton( ".button_var"   , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );

		cssSetButton( ".button_enter" , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );

		cssSetButton( ".button_func"  , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );

		cssSetButton( ".button_number", GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
		cssSetButton( ".button_op"    , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
		cssSetButton( ".button_symbol", GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );

		cssSetSelect( ".select_common", GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "", true );
		cssSetSelect( ".select_var"   , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "", true );
		cssSetSelect( ".select_func"  , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "", true );

		cssSetPropertyValue( ".span"     , "color", "#000000" );
		cssSetPropertyValue( ".span_expr", "color", "#000000" );
		cssSetPropertyValue( ".div_usage", "color", "#000000" );

		cssSetPropertyValue( ".span"     , "text-shadow", "0 0" );
		cssSetPropertyValue( ".span_expr", "text-shadow", "0 0" );
		cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );

		cssSetPropertyValue( ".div_edit"       , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".input_expr"     , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_log"        , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_table"      , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_console"    , "background-color", "#C0C0C0" );

		break;
	case 6:
		document.getElementById( "button_enter" ).innerHTML = "<img src='draw.png' width='20' height='20'>";

		cssSetPropertyValue( ".div_body", "background-color", COLOR_BG );

		cssSetButton( ".button_common", GRADIENT_T_B, COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_cursor", GRADIENT_T_B, COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu"  , GRADIENT_T_B, COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu2" , GRADIENT_T_B, COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_shift" , GRADIENT_T_B, COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_topend", GRADIENT_T_B, COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_del"   , GRADIENT_T_B, COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_rcl"   , GRADIENT_T_B, COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_var"   , GRADIENT_T_B, COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_enter" , GRADIENT_T_B, COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_func"  , GRADIENT_T_B, COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_number", GRADIENT_T_B, COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_op"    , GRADIENT_T_B, COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_symbol", GRADIENT_T_B, COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );

		cssSetSelect( ".select_common", GRADIENT_T_B, COLOR_SELECT.get( 32 ), COLOR_SELECT.get( -32 ), "#000000", "", true );
		cssSetSelect( ".select_var"   , GRADIENT_T_B, COLOR_SELECT.get( 32 ), COLOR_SELECT.get( -32 ), "#000000", "", true );
		cssSetSelect( ".select_func"  , GRADIENT_T_B, COLOR_SELECT.get( 32 ), COLOR_SELECT.get( -32 ), "#000000", "", true );

		cssSetPropertyValue( ".span"     , "color", "#000000" );
		cssSetPropertyValue( ".span_expr", "color", "#000000" );
		cssSetPropertyValue( ".div_usage", "color", "#000000" );

		cssSetPropertyValue( ".span"     , "text-shadow", "0 0" );
		cssSetPropertyValue( ".span_expr", "text-shadow", "0 0" );
		cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );

		cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", COLOR_CHECKED );
		cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", COLOR_CHECKED );

		cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + COLOR_CHECKED );

		cssSetPropertyValue( ".div_edit"       , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".input_expr"     , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_log"        , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_table"      , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_console"    , "background-color", "#C0C0C0" );

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

		cssSetButton( ".button_common", GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_cursor", GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu"  , GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu2" , GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_shift" , GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );

		cssSetButton( ".button_topend", GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );

		cssSetButton( ".button_del"   , GRADIENT_T_B, color, color, "#FF0000", "#A0A0A0", false );
		cssSetButton( ".button_rcl"   , GRADIENT_T_B, color, color, "#FF0000", "#A0A0A0", false );

		cssSetButton( ".button_var"   , GRADIENT_T_B, color, color, "#FF0000", "#A0A0A0", false );

		cssSetButton( ".button_enter" , GRADIENT_T_B, color, color, "#FF0000", "#A0A0A0", false );

		cssSetButton( ".button_func"  , GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );

		cssSetButton( ".button_number", GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_op"    , GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_symbol", GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );

		cssSetSelect( ".select_common", GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetSelect( ".select_var"   , GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetSelect( ".select_func"  , GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );

		cssSetPropertyValue( ".span"     , "color", "#000000" );
		cssSetPropertyValue( ".span_expr", "color", "#000000" );
		cssSetPropertyValue( ".div_usage", "color", "#000000" );

		cssSetPropertyValue( ".span"     , "text-shadow", "1px 1px #E0E0E0" );
		cssSetPropertyValue( ".span_expr", "text-shadow", "1px 1px #E0E0E0" );
		cssSetPropertyValue( ".div_usage", "text-shadow", "1px 1px #E0E0E0" );

		cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", IMAGE_CHECKED );
		cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", IMAGE_CHECKED );

		cssSetPropertyValue( ".button_color:disabled", "border", "3px solid " + IMAGE_CHECKED );

		cssSetPropertyValue( ".div_edit"       , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".input_expr"     , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_log"        , "background-color", "rgba(255,255,255,0.0)" );
		cssSetPropertyValue( ".div_table"      , "background-color", "rgba(255,255,255,0.0)" );
		cssSetPropertyValue( ".div_selectimage", "background-color", "rgba(255,255,255,0.0)" );
		cssSetPropertyValue( ".div_console"    , "background-color", "rgba(255,255,255,0.0)" );

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

	cssSetStyleDisplayById( "graph_select_skin_color", skin == SKIN_COLOR );
	cssSetStyleDisplayById( "graph_select_skin_trans", skin == SKIN_IMAGE );
	cssSetStyleDisplayById( "input_skin_color"       , (skin == SKIN_COLOR) && (skinColor == COLOR.length - 1) );
	cssSetStyleDisplayById( "input_skin_image"       , skin == SKIN_IMAGE );
}
function doChangeSkinColor( select ){
	skinColor = select.selectedIndex;
	updateSkinColor();

	writeProfileInt( "ENV_", "SkinColor", skinColor );

	cssSetStyleDisplayById( "input_skin_color", (skin == SKIN_COLOR) && (skinColor == COLOR.length - 1) );
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
	cssSetPropertyValue( "button"           , "font-family", fontSpan );
	cssSetPropertyValue( "select"           , "font-family", fontSpan );
	cssSetPropertyValue( ".span"            , "font-family", fontSpan );
	cssSetPropertyValue( ".span_ellipsis"   , "font-family", fontSpan );
	cssSetPropertyValue( ".div_usage"       , "font-family", fontSpan );
	cssSetPropertyValue( ".input_file"      , "font-family", fontSpan );

	cssSetPropertyValue( ".span_expr"       , "font-family", fontEdit );
	cssSetPropertyValue( ".input"           , "font-family", fontEdit );
	cssSetPropertyValue( ".select_var_font" , "font-family", fontEdit );
	cssSetPropertyValue( ".select_func_font", "font-family", fontEdit );
	cssSetPropertyValue( ".div_edit"        , "font-family", fontEdit );
	cssSetPropertyValue( ".div_log"         , "font-family", fontEdit );
	cssSetPropertyValue( ".div_console"     , "font-family", fontEdit );
	cssSetPropertyValue( ".div_table"       , "font-family", fontEdit );
	cssSetPropertyValue( ".div_selectimage" , "font-family", fontEdit );
	cssSetPropertyValue( ".textarea_profile", "font-family", fontEdit );
}

function graphIndex(){
	return procGraph()._curIndex;
}

function updateEditExpr(){
	var forward = new _String();
	var after   = new _String();
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
	if( token.length == 1 ){
		var chr = token.charCodeAt( 0 );
		if( (chr >= _CHAR_CODE_LA) && (chr <= _CHAR_CODE_LZ) ){
			if( (editExpr[graphIndex()][exprType].lastChar() == '@') || editExpr[graphIndex()][exprType].lastCharUpper() ){
				token = token.toUpperCase();
			}
		} else if( (chr >= _CHAR_CODE_UA) && (chr <= _CHAR_CODE_UZ) ){
			if( editExpr[graphIndex()][exprType].lastCharLower() ){
				token = token.toLowerCase();
			}
		}
	}

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

	topProc.usage( e.target.innerHTML, topParam, true/*キャッシュON*/ );

	setButtonMode( 0 );
}

function doButtonVar( e ){
	switch( graphUI._mode ){
	case _UI_GRAPH_MODE_PARAM:
	case _UI_GRAPH_MODE_POLAR:
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
	var html    = new String();
	var tmpEdit = new EditExpr( -1 );
	var forward = new _String();
	var after   = new _String();
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
		document.getElementById( "graph_edit_x"          ).value = item._x;
		document.getElementById( "graph_edit_y"          ).value = item._y;

		updateSkin();

		writeProfileString( "ENV_", "SkinImage" , skinImage );
		writeProfileString( "ENV_", "SkinImageX", item._x   );
		writeProfileString( "ENV_", "SkinImageY", item._y   );
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

#include "_Cookie.js"
#include "_Storage.js"
#include "_Preference.js"
#include "_HttpRequest.js"
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

	func = func.toLowerCase();

	// 外部関数キャッシュのクリア
	topProc.clearFuncCache( func );

	// 計算式をチェック
	var saveIndex = graphIndex();
	for( var i = 0; i < _GRAPH_NUM; i++ ){
		procGraph().selGraph( i );

		procGraph().checkExpr( func );
	}
	procGraph().selGraph( saveIndex );

	var name = "/" + func + ".cef";

	var index = extFuncFile2.length;
	for( i = 0; i < extFuncFile2.length; i++ ){
		if( extFuncFile2[i].toLowerCase() == name ){
			name = extFuncFile2[i];
			index = i;
			break;
		}
	}
	extFuncFile2[index] = name;
	extFuncData2[index] = splitData( data );

	regExtFuncButton( extFuncName( extFuncFile2[index] ).toLowerCase() );

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
		if( extFuncName( extFuncFile[i] ).toLowerCase() == func.toLowerCase() ){
			if( i < extFuncData.length ){
				return extFuncData[i];
			}
		}
	}
	for( var i = 0; i < extFuncFile2.length; i++ ){
		if( extFuncName( extFuncFile2[i] ).toLowerCase() == func.toLowerCase() ){
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
_TRY
	ret = childProc.mainLoop( func, childParam, funcParam, parentParam );
_CATCH
	return ret;
}
function assertProc( num, func ){
	con.newLine();
	if( (func != null) && (func.length > 0) ){
		if( englishFlag ) con.print( func + ": " );
		else              con.print( func + ":" );
	}
	if( num > 0 ){
		if( englishFlag ) con.print( "Line " + num + ": " );
		else              con.print( "" + num + "行:" );
	}
	if( englishFlag ) con.println( "Error " + intToString( _CLIP_ERR_ASSERT, 16, 4 ) + ":" + consoleBreak() + "Failed to assert." );
	else              con.println( "エラー(" + intToString( _CLIP_ERR_ASSERT, 16, 4 ) + "):" + consoleBreak() + "アサートに失敗しました" );
	return retAssertProc;
}
function getErrorString( err, num, func, token ){
	var string = new String();
	var error  = getProcErrorDefString( err, token, topParam._calculator, englishFlag );
	if( error.length > 0 ){
		if( (func != null) && (func.length > 0) ){
			if( englishFlag ) string += func + ": ";
			else              string += func + ":";
		}
		if( num > 0 ){
			if( englishFlag ) string += "Line " + num + ": ";
			else              string += "" + num + "行:";
		}
		if( englishFlag ) string += (((err & _CLIP_PROC_WARN) != 0) ? "Warning" : "Error") + " " + intToString( err, 16, 4 ) + ":" + consoleBreak() + error;
		else              string += (((err & _CLIP_PROC_WARN) != 0) ? "警告" : "エラー") + "(" + intToString( err, 16, 4 ) + "):" + consoleBreak() + error;
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
		else              con.print( func + ":" );
	}
	if( num > 0 ){
		if( englishFlag ) con.print( "Line " + num + ": " );
		else              con.print( "" + num + "行:" );
	}
	if( englishFlag ) con.println( "Warning:" + consoleBreak() + warn );
	else              con.println( "警告:" + consoleBreak() + warn );
}
function printError( error, num, func ){
	con.newLine();
	if( (func != null) && (func.length > 0) ){
		if( englishFlag ) con.print( func + ": " );
		else              con.print( func + ":" );
	}
	if( num > 0 ){
		if( englishFlag ) con.print( "Line " + num + ": " );
		else              con.print( "" + num + "行:" );
	}
	if( englishFlag ) con.println( "Error:" + consoleBreak() + error );
	else              con.println( "エラー:" + consoleBreak() + error );
}

function doFuncGColor( rgb ){
	return doFuncGColorBGR( rgb, COLOR_WIN );
}
function doFuncGColor24( index ){
	return _RGB2BGR( COLOR_WIN[index] );
}
function doFuncEval( parentProc, childProc, childParam, string, value ){
	var ret;
_TRY
	ret = parentProc.doFuncEval( childProc, childParam, string, value );
_CATCH
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

	var image  = gWorld._image;
	var offset = gWorld._offset;
	var width  = gWorld._width;
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
function doCommandPlot( parentProc, childProc, childParam, graph, start, end, step ){
	childParam._enableOpPow = true;
_TRY
	initProcLoopCount();
	parentProc.doCommandPlot( childProc, childParam, graph, start, end, step );
_CATCH
}
function doCommandRePlot( parentProc, childProc, childParam, graph, start, end, step ){
	childParam._enableOpPow = true;
_TRY
	initProcLoopCount();
	parentProc.doCommandRePlot( childProc, childParam, graph, start, end, step );
_CATCH
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

	var err   = new _Integer();
	var num   = new _Integer();
	var func  = new _String();
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
	var type       = new _Integer();
	var updateFlag = new _Boolean();
	topProc.getAngType( type, updateFlag );
	document.getElementById( "graph_radio_deg"  ).checked = (type._val == _ANG_TYPE_DEG );
	document.getElementById( "graph_radio_rad"  ).checked = (type._val == _ANG_TYPE_RAD );
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

	// ログを記録する
	addLogExpr();

	graphUI._editExpr1 = document.getElementById( "graph_edit_expr1" ).value;
	graphUI._editExpr2 = document.getElementById( "graph_edit_expr2" ).value;

	graphUI._editMin   = "" + document.getElementById( "graph_edit_min"   ).value;
	graphUI._editMax   = "" + document.getElementById( "graph_edit_max"   ).value;
	graphUI._editPitch = "" + document.getElementById( "graph_edit_pitch" ).value;

	for( var i = 65; i <= 90; i++ ){
		topParam.setVal( i, getInputVarsValue( i ), true );
	}

	con.newLine();
	graphUI.draw();

	writeProfileFloat( "ENV_", "ParamMin"  , graphUI._paramMin   );
	writeProfileFloat( "ENV_", "ParamMax"  , graphUI._paramMax   );
	writeProfileFloat( "ENV_", "ParamPitch", graphUI._paramPitch );
	writeProfileFloat( "ENV_", "PolarMin"  , graphUI._polarMin   );
	writeProfileFloat( "ENV_", "PolarMax"  , graphUI._polarMax   );
	writeProfileFloat( "ENV_", "PolarPitch", graphUI._polarPitch );
}
function doGraphClear( e ){
	graphUI.clear();
}

function updateInputExpr1(){
	var forward = new _String();
	var after   = new _String();
	editExpr[graphIndex()][0].get( forward, after, false );
	document.getElementById( "graph_edit_expr1" ).value = forward.str() + after.str();
}
function updateInputExpr2(){
	var forward = new _String();
	var after   = new _String();
	editExpr[graphIndex()][1].get( forward, after, false );
	document.getElementById( "graph_edit_expr2" ).value = forward.str() + after.str();
}
function doEditExpr1(){
	updateInputExpr2();

	exprType = 0;
	cssSetStyleDisplayById( "graph_ui_expr1", false );
	cssSetStyleDisplayById( "graph_ui_expr" , true  );
	cssSetStyleDisplayById( "graph_ui_expr2", true  );
	doGraphStartEdit();
}
function doEditExpr2(){
	updateInputExpr1();

	exprType = 1;
	cssSetStyleDisplayById( "graph_ui_expr2", false );
	cssSetStyleDisplayById( "graph_ui_expr1", true  );
	cssSetStyleDisplayById( "graph_ui_expr" , true  );
	doGraphStartEdit();
}

function updateGraphRadioTool(){
	document.getElementById( "graph_radio_trace" ).checked = (graphUI._tool == _UI_GRAPH_TOOL_TRACE);
	document.getElementById( "graph_radio_hand"  ).checked = (graphUI._tool == _UI_GRAPH_TOOL_HAND );
	document.getElementById( "graph_radio_zoom"  ).checked = (graphUI._tool == _UI_GRAPH_TOOL_ZOOM );
}
function doGraphTrace(){
	graphUI.setTool( _UI_GRAPH_TOOL_TRACE );
	updateGraphRadioTool();

	writeProfileInt( "ENV_", "Tool", graphUI._tool )
}
function doGraphHand(){
	graphUI.setTool( _UI_GRAPH_TOOL_HAND );
	updateGraphRadioTool();

	writeProfileInt( "ENV_", "Tool", graphUI._tool )
}
function doGraphZoom(){
	graphUI.setTool( _UI_GRAPH_TOOL_ZOOM );
	updateGraphRadioTool();

	writeProfileInt( "ENV_", "Tool", graphUI._tool )
}

function updateButtonColorBack(){
	document.getElementById( "color_back_00" ).disabled = (graphUI._colorBack ==  0);
	document.getElementById( "color_back_01" ).disabled = (graphUI._colorBack ==  1);
	document.getElementById( "color_back_02" ).disabled = (graphUI._colorBack ==  2);
	document.getElementById( "color_back_03" ).disabled = (graphUI._colorBack ==  3);
	document.getElementById( "color_back_04" ).disabled = (graphUI._colorBack ==  4);
	document.getElementById( "color_back_05" ).disabled = (graphUI._colorBack ==  5);
	document.getElementById( "color_back_06" ).disabled = (graphUI._colorBack ==  6);
	document.getElementById( "color_back_07" ).disabled = (graphUI._colorBack ==  7);
	document.getElementById( "color_back_08" ).disabled = (graphUI._colorBack ==  8);
	document.getElementById( "color_back_09" ).disabled = (graphUI._colorBack ==  9);
	document.getElementById( "color_back_10" ).disabled = (graphUI._colorBack == 10);
	document.getElementById( "color_back_11" ).disabled = (graphUI._colorBack == 11);
	document.getElementById( "color_back_12" ).disabled = (graphUI._colorBack == 12);
	document.getElementById( "color_back_13" ).disabled = (graphUI._colorBack == 13);
	document.getElementById( "color_back_14" ).disabled = (graphUI._colorBack == 14);
	document.getElementById( "color_back_15" ).disabled = (graphUI._colorBack == 15);
}
function updateButtonColorScale(){
	document.getElementById( "color_scale_00" ).disabled = (graphUI._colorScale ==  0);
	document.getElementById( "color_scale_01" ).disabled = (graphUI._colorScale ==  1);
	document.getElementById( "color_scale_02" ).disabled = (graphUI._colorScale ==  2);
	document.getElementById( "color_scale_03" ).disabled = (graphUI._colorScale ==  3);
	document.getElementById( "color_scale_04" ).disabled = (graphUI._colorScale ==  4);
	document.getElementById( "color_scale_05" ).disabled = (graphUI._colorScale ==  5);
	document.getElementById( "color_scale_06" ).disabled = (graphUI._colorScale ==  6);
	document.getElementById( "color_scale_07" ).disabled = (graphUI._colorScale ==  7);
	document.getElementById( "color_scale_08" ).disabled = (graphUI._colorScale ==  8);
	document.getElementById( "color_scale_09" ).disabled = (graphUI._colorScale ==  9);
	document.getElementById( "color_scale_10" ).disabled = (graphUI._colorScale == 10);
	document.getElementById( "color_scale_11" ).disabled = (graphUI._colorScale == 11);
	document.getElementById( "color_scale_12" ).disabled = (graphUI._colorScale == 12);
	document.getElementById( "color_scale_13" ).disabled = (graphUI._colorScale == 13);
	document.getElementById( "color_scale_14" ).disabled = (graphUI._colorScale == 14);
	document.getElementById( "color_scale_15" ).disabled = (graphUI._colorScale == 15);
}
function updateButtonColorUnit(){
	document.getElementById( "color_unit_00" ).disabled = (graphUI._colorUnit ==  0);
	document.getElementById( "color_unit_01" ).disabled = (graphUI._colorUnit ==  1);
	document.getElementById( "color_unit_02" ).disabled = (graphUI._colorUnit ==  2);
	document.getElementById( "color_unit_03" ).disabled = (graphUI._colorUnit ==  3);
	document.getElementById( "color_unit_04" ).disabled = (graphUI._colorUnit ==  4);
	document.getElementById( "color_unit_05" ).disabled = (graphUI._colorUnit ==  5);
	document.getElementById( "color_unit_06" ).disabled = (graphUI._colorUnit ==  6);
	document.getElementById( "color_unit_07" ).disabled = (graphUI._colorUnit ==  7);
	document.getElementById( "color_unit_08" ).disabled = (graphUI._colorUnit ==  8);
	document.getElementById( "color_unit_09" ).disabled = (graphUI._colorUnit ==  9);
	document.getElementById( "color_unit_10" ).disabled = (graphUI._colorUnit == 10);
	document.getElementById( "color_unit_11" ).disabled = (graphUI._colorUnit == 11);
	document.getElementById( "color_unit_12" ).disabled = (graphUI._colorUnit == 12);
	document.getElementById( "color_unit_13" ).disabled = (graphUI._colorUnit == 13);
	document.getElementById( "color_unit_14" ).disabled = (graphUI._colorUnit == 14);
	document.getElementById( "color_unit_15" ).disabled = (graphUI._colorUnit == 15);
}
function updateButtonColorText(){
	document.getElementById( "color_text_00" ).disabled = (graphUI._colorText ==  0);
	document.getElementById( "color_text_01" ).disabled = (graphUI._colorText ==  1);
	document.getElementById( "color_text_02" ).disabled = (graphUI._colorText ==  2);
	document.getElementById( "color_text_03" ).disabled = (graphUI._colorText ==  3);
	document.getElementById( "color_text_04" ).disabled = (graphUI._colorText ==  4);
	document.getElementById( "color_text_05" ).disabled = (graphUI._colorText ==  5);
	document.getElementById( "color_text_06" ).disabled = (graphUI._colorText ==  6);
	document.getElementById( "color_text_07" ).disabled = (graphUI._colorText ==  7);
	document.getElementById( "color_text_08" ).disabled = (graphUI._colorText ==  8);
	document.getElementById( "color_text_09" ).disabled = (graphUI._colorText ==  9);
	document.getElementById( "color_text_10" ).disabled = (graphUI._colorText == 10);
	document.getElementById( "color_text_11" ).disabled = (graphUI._colorText == 11);
	document.getElementById( "color_text_12" ).disabled = (graphUI._colorText == 12);
	document.getElementById( "color_text_13" ).disabled = (graphUI._colorText == 13);
	document.getElementById( "color_text_14" ).disabled = (graphUI._colorText == 14);
	document.getElementById( "color_text_15" ).disabled = (graphUI._colorText == 15);
}
function updateButtonColorGraph(){
	document.getElementById( "color_graph_00" ).disabled = (graphUI._color[graphIndex()] ==  0);
	document.getElementById( "color_graph_01" ).disabled = (graphUI._color[graphIndex()] ==  1);
	document.getElementById( "color_graph_02" ).disabled = (graphUI._color[graphIndex()] ==  2);
	document.getElementById( "color_graph_03" ).disabled = (graphUI._color[graphIndex()] ==  3);
	document.getElementById( "color_graph_04" ).disabled = (graphUI._color[graphIndex()] ==  4);
	document.getElementById( "color_graph_05" ).disabled = (graphUI._color[graphIndex()] ==  5);
	document.getElementById( "color_graph_06" ).disabled = (graphUI._color[graphIndex()] ==  6);
	document.getElementById( "color_graph_07" ).disabled = (graphUI._color[graphIndex()] ==  7);
	document.getElementById( "color_graph_08" ).disabled = (graphUI._color[graphIndex()] ==  8);
	document.getElementById( "color_graph_09" ).disabled = (graphUI._color[graphIndex()] ==  9);
	document.getElementById( "color_graph_10" ).disabled = (graphUI._color[graphIndex()] == 10);
	document.getElementById( "color_graph_11" ).disabled = (graphUI._color[graphIndex()] == 11);
	document.getElementById( "color_graph_12" ).disabled = (graphUI._color[graphIndex()] == 12);
	document.getElementById( "color_graph_13" ).disabled = (graphUI._color[graphIndex()] == 13);
	document.getElementById( "color_graph_14" ).disabled = (graphUI._color[graphIndex()] == 14);
	document.getElementById( "color_graph_15" ).disabled = (graphUI._color[graphIndex()] == 15);

	for( var i = 0; i < _GRAPH_NUM; i++ ){
		document.getElementById( "color_graph" + (i + 1) + "_00" ).disabled = (graphUI._color[i] ==  0);
		document.getElementById( "color_graph" + (i + 1) + "_01" ).disabled = (graphUI._color[i] ==  1);
		document.getElementById( "color_graph" + (i + 1) + "_02" ).disabled = (graphUI._color[i] ==  2);
		document.getElementById( "color_graph" + (i + 1) + "_03" ).disabled = (graphUI._color[i] ==  3);
		document.getElementById( "color_graph" + (i + 1) + "_04" ).disabled = (graphUI._color[i] ==  4);
		document.getElementById( "color_graph" + (i + 1) + "_05" ).disabled = (graphUI._color[i] ==  5);
		document.getElementById( "color_graph" + (i + 1) + "_06" ).disabled = (graphUI._color[i] ==  6);
		document.getElementById( "color_graph" + (i + 1) + "_07" ).disabled = (graphUI._color[i] ==  7);
		document.getElementById( "color_graph" + (i + 1) + "_08" ).disabled = (graphUI._color[i] ==  8);
		document.getElementById( "color_graph" + (i + 1) + "_09" ).disabled = (graphUI._color[i] ==  9);
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
			case _UI_GRAPH_MODE_PARAM:
			case _UI_GRAPH_MODE_POLAR:
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

	if( graphUI._mode == _UI_GRAPH_MODE_PARAM ){
		document.getElementById( "graph_edit_expr2" ).disabled = false;
	} else {
		document.getElementById( "graph_edit_expr2" ).disabled = true;
	}
}
function doGraphLinear(){
	graphUI.setMode( _UI_GRAPH_MODE_LINEAR );
	updateGraphRadioMode();

	writeProfileInt( "ENV_", "Mode", graphUI._mode )
}
function doGraphLogX(){
	graphUI.setMode( _UI_GRAPH_MODE_LOG_X );
	updateGraphRadioMode();

	writeProfileInt( "ENV_", "Mode", graphUI._mode )
}
function doGraphLogY(){
	graphUI.setMode( _UI_GRAPH_MODE_LOG_Y );
	updateGraphRadioMode();

	writeProfileInt( "ENV_", "Mode", graphUI._mode )
}
function doGraphLogXY(){
	graphUI.setMode( _UI_GRAPH_MODE_LOG_XY );
	updateGraphRadioMode();

	writeProfileInt( "ENV_", "Mode", graphUI._mode )
}
function doGraphParam(){
	graphUI.setMode( _UI_GRAPH_MODE_PARAM );
	updateGraphRadioMode();

	writeProfileInt( "ENV_", "Mode", graphUI._mode )
}
function doGraphPolar(){
	graphUI.setMode( _UI_GRAPH_MODE_POLAR );
	updateGraphRadioMode();

	writeProfileInt( "ENV_", "Mode", graphUI._mode )
}
function doChangeMode( select ){
	switch( select.selectedIndex ){
	case 0: doGraphLinear(); break;
	case 1: doGraphLogX  (); break;
	case 2: doGraphLogY  (); break;
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

	document.getElementById( "graph_edit_trace_x"  ).value = "";
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
	var textX = parseInt  ( document.getElementById( "graph_edit_text_x" ).value );
	var textY = parseInt  ( document.getElementById( "graph_edit_text_y" ).value );
	if( !_ISNAN( unitX ) && !_ISNAN( unitY ) && !_ISNAN( textX ) && !_ISNAN( textY ) ){
		graphUI._unitX = unitX;
		graphUI._unitY = unitY;
		graphUI._textX = textX;
		graphUI._textY = textY;

		writeProfileFloat( "ENV_", "UnitX", graphUI._unitX );
		writeProfileFloat( "ENV_", "UnitY", graphUI._unitY );
		writeProfileInt  ( "ENV_", "TextX", graphUI._textX );
		writeProfileInt  ( "ENV_", "TextY", graphUI._textY );

		// グラフィックを再表示する
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
		case _UI_GRAPH_MODE_PARAM:
		case _UI_GRAPH_MODE_POLAR:
			type = _UI_GRAPH_ENV_OFFSET;
			break;
		}

		switch( type ){
		case _UI_GRAPH_ENV_OFFSET:
			lockGraphResetEnv = true;
			doGraphEditOffsetX();
			doGraphEditOffsetY();
			doGraphEditRatioX ();
			doGraphEditRatioY ();
			lockGraphResetEnv = false;
			graphUI.resetEnvWindow();
			break;
		case _UI_GRAPH_ENV_WINDOW:
			lockGraphResetEnv = true;
			doGraphEditLeft  ();
			doGraphEditBottom();
			doGraphEditRight ();
			doGraphEditTop   ();
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
	case _UI_GRAPH_MODE_PARAM:
	case _UI_GRAPH_MODE_POLAR:
		// 媒介変数・極座標の時は、ウィンドウ設定はオフセット指定のみ
		type = _UI_GRAPH_ENV_OFFSET;
		break;
	}

	cssSetStyleDisplayById( "button_edit_offset_x_up"  , type == _UI_GRAPH_ENV_OFFSET );
	cssSetStyleDisplayById( "button_edit_offset_x_down", type == _UI_GRAPH_ENV_OFFSET );
	cssSetStyleDisplayById( "button_edit_offset_y_up"  , type == _UI_GRAPH_ENV_OFFSET );
	cssSetStyleDisplayById( "button_edit_offset_y_down", type == _UI_GRAPH_ENV_OFFSET );
	cssSetStyleDisplayById( "button_edit_ratio_x_up"   , type == _UI_GRAPH_ENV_OFFSET );
	cssSetStyleDisplayById( "button_edit_ratio_x_down" , type == _UI_GRAPH_ENV_OFFSET );
	cssSetStyleDisplayById( "button_edit_ratio_y_up"   , type == _UI_GRAPH_ENV_OFFSET );
	cssSetStyleDisplayById( "button_edit_ratio_y_down" , type == _UI_GRAPH_ENV_OFFSET );

	cssSetStyleDisplayById( "button_edit_left_up"      , type == _UI_GRAPH_ENV_WINDOW );
	cssSetStyleDisplayById( "button_edit_left_down"    , type == _UI_GRAPH_ENV_WINDOW );
	cssSetStyleDisplayById( "button_edit_bottom_up"    , type == _UI_GRAPH_ENV_WINDOW );
	cssSetStyleDisplayById( "button_edit_bottom_down"  , type == _UI_GRAPH_ENV_WINDOW );
	cssSetStyleDisplayById( "button_edit_right_up"     , type == _UI_GRAPH_ENV_WINDOW );
	cssSetStyleDisplayById( "button_edit_right_down"   , type == _UI_GRAPH_ENV_WINDOW );
	cssSetStyleDisplayById( "button_edit_top_up"       , type == _UI_GRAPH_ENV_WINDOW );
	cssSetStyleDisplayById( "button_edit_top_down"     , type == _UI_GRAPH_ENV_WINDOW );

	switch( graphUI._mode ){
	case _UI_GRAPH_MODE_PARAM:
	case _UI_GRAPH_MODE_POLAR:
		document.getElementById( "graph_radio_window" ).disabled = true;
		document.getElementById( "graph_edit_ratio_y" ).disabled = true;

		cssSetStyleDisplayById( "graph_static_ratio_x", false );
		cssSetStyleDisplayById( "graph_static_ratio"  , true );

		cssSetStyleDisplayById( "graph_edit_ratio_y"  , false );
		cssSetStyleDisplayById( "graph_static_ratio_y", false );

		cssSetStyleDisplayById( "button_edit_ratio_y_up"  , false );
		cssSetStyleDisplayById( "button_edit_ratio_y_down", false );

		break;
	default:
		document.getElementById( "graph_radio_window" ).disabled = false;
		document.getElementById( "graph_edit_ratio_y" ).disabled = (type == _UI_GRAPH_ENV_WINDOW);

		cssSetStyleDisplayById( "graph_static_ratio"  , false );
		cssSetStyleDisplayById( "graph_static_ratio_x", true );

		cssSetStyleDisplayById( "graph_edit_ratio_y"  , true );
		cssSetStyleDisplayById( "graph_static_ratio_y", true );

		break;
	}

	document.getElementById( "graph_radio_offset" ).checked = (type == _UI_GRAPH_ENV_OFFSET);
	document.getElementById( "graph_radio_window" ).checked = (type == _UI_GRAPH_ENV_WINDOW);

	document.getElementById( "graph_edit_offset_x" ).disabled = (type == _UI_GRAPH_ENV_WINDOW);
	document.getElementById( "graph_edit_offset_y" ).disabled = (type == _UI_GRAPH_ENV_WINDOW);
	document.getElementById( "graph_edit_ratio_x"  ).disabled = (type == _UI_GRAPH_ENV_WINDOW);

	document.getElementById( "graph_edit_left"   ).disabled = (type == _UI_GRAPH_ENV_OFFSET);
	document.getElementById( "graph_edit_bottom" ).disabled = (type == _UI_GRAPH_ENV_OFFSET);
	document.getElementById( "graph_edit_right"  ).disabled = (type == _UI_GRAPH_ENV_OFFSET);
	document.getElementById( "graph_edit_top"    ).disabled = (type == _UI_GRAPH_ENV_OFFSET);
}
function doGraphEnvOffset(){
	lockGraphResetEnv = true;
	doGraphEditLeft  ();
	doGraphEditBottom();
	doGraphEditRight ();
	doGraphEditTop   ();
	lockGraphResetEnv = false;
	graphUI.resetEnvOffset();

	graphUI.setEnvType( _UI_GRAPH_ENV_OFFSET );
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

	graphUI.setEnvType( _UI_GRAPH_ENV_WINDOW );
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
	for( var i = 0; i < _GRAPH_NUM; i++ ){
		_this._graph.selGraph( i );

		_this._graph.setMode( mode );
	}
	_this._graph.selGraph( saveIndex );
}
function onGraphSetIndex( _this, index ){
	var saveIndex = graphIndex();
	for( var i = 0; i < _GRAPH_NUM; i++ ){
		_this._graph.selGraph( i );

		_this._graph.setIndex( index );
	}
	_this._graph.selGraph( saveIndex );
}
function onGraphSetLogScaleX( _this, base ){
	var saveIndex = graphIndex();
	for( var i = 0; i < _GRAPH_NUM; i++ ){
		_this._graph.selGraph( i );

		_this._graph.setLogScaleX( base );
	}
	_this._graph.selGraph( saveIndex );
}
function onGraphSetLogScaleY( _this, base ){
	var saveIndex = graphIndex();
	for( var i = 0; i < _GRAPH_NUM; i++ ){
		_this._graph.selGraph( i );

		_this._graph.setLogScaleY( base );
	}
	_this._graph.selGraph( saveIndex );
}
function onGraphClearExpr( _this ){
	for( var i = 0; i < _GRAPH_NUM; i++ ){
		editExpr[i][0].delAll();
		editExpr[i][1].delAll();
	}
	writeProfileExpr();
	updateEditExpr();

	document.getElementById( "graph_edit_expr1" ).value = "";
	document.getElementById( "graph_edit_expr2" ).value = "";
}
function onGraphClearTable( _this ){
	for( var i = 0; i < _GRAPH_NUM; i++ ){
		listTable[i].delAll();
	}
	updateListTable( _this );

	writeProfileTable();
}
function onGraphUpdateStatic( _this ){
	document.getElementById( "graph_static_expr1" ).innerHTML = _this._staticExpr1;
	document.getElementById( "graph_static_expr2" ).innerHTML = _this._staticExpr2;

	document.getElementById( "graph_static_x"  ).innerHTML = _this._staticX;
	document.getElementById( "graph_static_y1" ).innerHTML = _this._staticY1;
	document.getElementById( "graph_static_y2" ).innerHTML = _this._staticY2;
}
function onGraphUpdateValue( _this ){
	document.getElementById( "graph_edit_trace_x"  ).value = _this._editX;
	document.getElementById( "graph_edit_trace_y1" ).value = _this._editY1;
	document.getElementById( "graph_edit_trace_y2" ).value = _this._editY2;
}
function onGraphUpdatePitch( _this ){
	document.getElementById( "graph_edit_min"   ).value = _this._editMin;
	document.getElementById( "graph_edit_max"   ).value = _this._editMax;
	document.getElementById( "graph_edit_pitch" ).value = _this._editPitch;
}
function onGraphUpdateEnvOffset( _this ){
	document.getElementById( "graph_edit_offset_x" ).value = _this._editEnvOffsetX;
	document.getElementById( "graph_edit_offset_y" ).value = _this._editEnvOffsetY;
	document.getElementById( "graph_edit_ratio_x"  ).value = _this._editEnvRatioX;
	document.getElementById( "graph_edit_ratio_y"  ).value = _this._editEnvRatioY;
}
function onGraphUpdateEnvWindow( _this ){
	document.getElementById( "graph_edit_left"   ).value = _this._editEnvLeft;
	document.getElementById( "graph_edit_bottom" ).value = _this._editEnvBottom;
	document.getElementById( "graph_edit_right"  ).value = _this._editEnvRight;
	document.getElementById( "graph_edit_top"    ).value = _this._editEnvTop;
}

function onGraphStartPlot(){
//	con.println( "GRAPH PLOT" );
	onStartPlot();
}
function onGraphEndPlot(){
	onEndPlot();
}
function onGraphStartRePlot(){
//	con.println( "GRAPH REPLOT" );
	onStartRePlot();
}
function onGraphEndRePlot(){
	onEndRePlot();
}

function isPC(){
	return common.isPC();
}
function onGraphMouseDown(){
//	con.clear();
//	con.println( "mouse down " + graphMouseX() + " " + graphMouseY() );
	graphUI.startTool( graphMouseX(), graphMouseY() );
}
function onGraphMouseMove(){
//	if( graphUI._scrollFlag ){
//		con.println( "mouse move " + graphMouseX() + " " + graphMouseY() );
//	}
	graphUI.moveTool( graphMouseX(), graphMouseY() );
}
function onGraphMouseOut(){
	onGraphMouseUp();
}
function onGraphMouseOver(){
}
function onGraphMouseUp(){
//	if( graphUI._scrollFlag ){
//		con.clear();
//		con.println( "mouse up " + graphMouseX() + " " + graphMouseY() );
//	}
	graphUI.endTool();

	switch( graphUI._tool ){
	case _UI_GRAPH_TOOL_TRACE:
		break;
	case _UI_GRAPH_TOOL_ZOOM:
	case _UI_GRAPH_TOOL_HAND:
		writeProfileWindow();
		break;
	}
}
function onGraphTouchStart(){
//	con.clear();
//	con.println( "touch start " + graphTouchX( 0 ) + " " + graphTouchY( 0 ) );
	graphUI.startTool( graphTouchX( 0 ), graphTouchY( 0 ) );
}
function onGraphTouchMove(){
//	if( graphUI._scrollFlag ){
//		con.println( "touch move " + graphTouchX( 0 ) + " " + graphTouchY( 0 ) );
//	}
	graphUI.moveTool( graphTouchX( 0 ), graphTouchY( 0 ) );
}
function onGraphTouchEnd(){
//	if( graphUI._scrollFlag ){
//		con.clear();
//		con.println( "touch end " + graphTouchX( 0 ) + " " + graphTouchY( 0 ) );
//	}
	graphUI.endTool();

	switch( graphUI._tool ){
	case _UI_GRAPH_TOOL_TRACE:
		break;
	case _UI_GRAPH_TOOL_ZOOM:
	case _UI_GRAPH_TOOL_HAND:
		writeProfileWindow();
		break;
	}
}

function setMenu( newMenu ){
	if( menu == _UI_GRAPH_MENU_VAR ){
		for( var i = 65; i <= 90; i++ ){
			doGraphEditVar( i );
		}
	}

	switch( menu ){
	case _UI_GRAPH_MENU_GRAPH:
		document.getElementById( "button_ui_graph"  ).innerHTML = "<img src='icon1.png' width='20' height='20'>";
		document.getElementById( "button_ui_graph2" ).innerHTML = "<img src='icon1.png' width='20' height='20'>";
		break;
	case _UI_GRAPH_MENU_MAIN:
		document.getElementById( "button_ui_main"  ).innerHTML = "<img src='icon6.png' width='20' height='20'>";
		document.getElementById( "button_ui_main2" ).innerHTML = "<img src='icon6.png' width='20' height='20'>";
		break;
	case _UI_GRAPH_MENU_FUNC:
		document.getElementById( "button_ui_func"  ).innerHTML = "<img src='icon7.png' width='20' height='20'>";
		document.getElementById( "button_ui_func2" ).innerHTML = "<img src='icon7.png' width='20' height='20'>";
		break;
	case _UI_GRAPH_MENU_LOG:
		document.getElementById( "button_ui_log"  ).innerHTML = "<img src='icon3.png' width='20' height='20'>";
		document.getElementById( "button_ui_log2" ).innerHTML = "<img src='icon3.png' width='20' height='20'>";
		break;
	case _UI_GRAPH_MENU_VAR:
		document.getElementById( "button_ui_var"  ).innerHTML = "<img src='icon4.png' width='20' height='20'>";
		document.getElementById( "button_ui_var2" ).innerHTML = "<img src='icon4.png' width='20' height='20'>";
		break;
	case _UI_GRAPH_MENU_TABLE:
		document.getElementById( "button_ui_table"  ).innerHTML = "<img src='icon2.png' width='20' height='20'>";
		document.getElementById( "button_ui_table2" ).innerHTML = "<img src='icon2.png' width='20' height='20'>";
		break;
	case _UI_GRAPH_MENU_OPTION:
		document.getElementById( "button_ui_option"  ).innerHTML = "<img src='icon5.png' width='20' height='20'>";
		document.getElementById( "button_ui_option2" ).innerHTML = "<img src='icon5.png' width='20' height='20'>";
		break;
	}
	menu = newMenu;
	switch( menu ){
	case _UI_GRAPH_MENU_GRAPH:
		document.getElementById( "button_ui_graph"  ).innerHTML = "<img src='icon1.png' width='25' height='25'>";
		document.getElementById( "button_ui_graph2" ).innerHTML = "<img src='icon1.png' width='25' height='25'>";
		break;
	case _UI_GRAPH_MENU_MAIN:
		document.getElementById( "button_ui_main"  ).innerHTML = "<img src='icon6.png' width='25' height='25'>";
		document.getElementById( "button_ui_main2" ).innerHTML = "<img src='icon6.png' width='25' height='25'>";
		break;
	case _UI_GRAPH_MENU_FUNC:
		document.getElementById( "button_ui_func"  ).innerHTML = "<img src='icon7.png' width='25' height='25'>";
		document.getElementById( "button_ui_func2" ).innerHTML = "<img src='icon7.png' width='25' height='25'>";
		break;
	case _UI_GRAPH_MENU_LOG:
		document.getElementById( "button_ui_log"  ).innerHTML = "<img src='icon3.png' width='25' height='25'>";
		document.getElementById( "button_ui_log2" ).innerHTML = "<img src='icon3.png' width='25' height='25'>";
		break;
	case _UI_GRAPH_MENU_VAR:
		document.getElementById( "button_ui_var"  ).innerHTML = "<img src='icon4.png' width='25' height='25'>";
		document.getElementById( "button_ui_var2" ).innerHTML = "<img src='icon4.png' width='25' height='25'>";
		break;
	case _UI_GRAPH_MENU_TABLE:
		document.getElementById( "button_ui_table"  ).innerHTML = "<img src='icon2.png' width='25' height='25'>";
		document.getElementById( "button_ui_table2" ).innerHTML = "<img src='icon2.png' width='25' height='25'>";
		break;
	case _UI_GRAPH_MENU_OPTION:
		document.getElementById( "button_ui_option"  ).innerHTML = "<img src='icon5.png' width='25' height='25'>";
		document.getElementById( "button_ui_option2" ).innerHTML = "<img src='icon5.png' width='25' height='25'>";
		break;
	}
}
function doButtonUIMain(){
	if( menu == _UI_GRAPH_MENU_MAIN ){
		return;
	}
	setMenu( _UI_GRAPH_MENU_MAIN );

	removeGraphEvent();

	document.getElementById( "button_ui_main"   ).disabled = true;
	document.getElementById( "button_ui_func"   ).disabled = false;
	document.getElementById( "button_ui_log"    ).disabled = false;
	document.getElementById( "button_ui_var"    ).disabled = false;
	document.getElementById( "button_ui_graph"  ).disabled = false;
	document.getElementById( "button_ui_table"  ).disabled = false;
	document.getElementById( "button_ui_option" ).disabled = false;

	document.getElementById( "button_ui_main2"   ).disabled = true;
	document.getElementById( "button_ui_func2"   ).disabled = false;
	document.getElementById( "button_ui_log2"    ).disabled = false;
	document.getElementById( "button_ui_var2"    ).disabled = false;
	document.getElementById( "button_ui_graph2"  ).disabled = false;
	document.getElementById( "button_ui_table2"  ).disabled = false;
	document.getElementById( "button_ui_option2" ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "graph_ui_menu"       , (isAndroidTablet() || isIPad()) ? false : true );
	cssSetStyleDisplayById( "graph_ui_menu2"      , (isAndroidTablet() || isIPad()) ? true : false );
	cssSetStyleDisplayById( "graph_ui_main"       , true );
	cssSetStyleDisplayById( "graph_ui_edit"       , true );
	cssSetStyleDisplayById( "graph_ui_button_1"   , false );
	cssSetStyleDisplayById( "graph_ui_button_2"   , false );
	cssSetStyleDisplayById( "graph_ui_button_3"   , false );
	cssSetStyleDisplayById( "graph_ui_button_4"   , false );
	cssSetStyleDisplayById( "graph_ui_button_5"   , false );
	cssSetStyleDisplayById( "graph_ui_button_6"   , false );
	cssSetStyleDisplayById( "graph_ui_usage"      , usageFlag ? true : false );
	cssSetStyleDisplayById( "graph_ui_func"       , false );
	cssSetStyleDisplayById( "graph_ui_log"        , false );
	cssSetStyleDisplayById( "graph_ui_var"        , false );
	cssSetStyleDisplayById( "graph_ui_graph"      , false );
	cssSetStyleDisplayById( "graph_ui_window"     , false );
	cssSetStyleDisplayById( "graph_ui_table"      , false );
	cssSetStyleDisplayById( "graph_ui_option"     , false );
	cssSetStyleDisplayById( "graph_ui_color"      , false );
	cssSetStyleDisplayById( "graph_ui_selectimage", false );
	cssSetStyleDisplayById( "graph_ui_profile"    , false );
	cssSetStyleDisplayById( "graph_ui_table2"     , false );
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
	if( menu == _UI_GRAPH_MENU_FUNC ){
		return;
	}
	setMenu( _UI_GRAPH_MENU_FUNC );

	removeGraphEvent();

	document.getElementById( "button_ui_main"   ).disabled = false;
	document.getElementById( "button_ui_func"   ).disabled = true;
	document.getElementById( "button_ui_log"    ).disabled = false;
	document.getElementById( "button_ui_var"    ).disabled = false;
	document.getElementById( "button_ui_graph"  ).disabled = false;
	document.getElementById( "button_ui_table"  ).disabled = false;
	document.getElementById( "button_ui_option" ).disabled = false;

	document.getElementById( "button_ui_main2"   ).disabled = false;
	document.getElementById( "button_ui_func2"   ).disabled = true;
	document.getElementById( "button_ui_log2"    ).disabled = false;
	document.getElementById( "button_ui_var2"    ).disabled = false;
	document.getElementById( "button_ui_graph2"  ).disabled = false;
	document.getElementById( "button_ui_table2"  ).disabled = false;
	document.getElementById( "button_ui_option2" ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "graph_ui_menu"       , (isAndroidTablet() || isIPad()) ? false : true );
	cssSetStyleDisplayById( "graph_ui_menu2"      , (isAndroidTablet() || isIPad()) ? true : false );
	cssSetStyleDisplayById( "graph_ui_main"       , false );
	cssSetStyleDisplayById( "graph_ui_edit"       , false );
	cssSetStyleDisplayById( "graph_ui_button_1"   , false );
	cssSetStyleDisplayById( "graph_ui_button_2"   , false );
	cssSetStyleDisplayById( "graph_ui_button_3"   , false );
	cssSetStyleDisplayById( "graph_ui_button_4"   , false );
	cssSetStyleDisplayById( "graph_ui_button_5"   , false );
	cssSetStyleDisplayById( "graph_ui_button_6"   , false );
	cssSetStyleDisplayById( "graph_ui_usage"      , false );
	cssSetStyleDisplayById( "graph_ui_func"       , true );
	cssSetStyleDisplayById( "graph_ui_log"        , false );
	cssSetStyleDisplayById( "graph_ui_var"        , false );
	cssSetStyleDisplayById( "graph_ui_graph"      , false );
	cssSetStyleDisplayById( "graph_ui_window"     , false );
	cssSetStyleDisplayById( "graph_ui_table"      , false );
	cssSetStyleDisplayById( "graph_ui_option"     , false );
	cssSetStyleDisplayById( "graph_ui_color"      , false );
	cssSetStyleDisplayById( "graph_ui_selectimage", false );
	cssSetStyleDisplayById( "graph_ui_profile"    , false );
	cssSetStyleDisplayById( "graph_ui_table2"     , false );
	cssUnlockStyleDisplay();
}
function doButtonUILog(){
	if( menu == _UI_GRAPH_MENU_LOG ){
		return;
	}
	setMenu( _UI_GRAPH_MENU_LOG );

	removeGraphEvent();

	document.getElementById( "button_ui_main"   ).disabled = false;
	document.getElementById( "button_ui_func"   ).disabled = false;
	document.getElementById( "button_ui_log"    ).disabled = true;
	document.getElementById( "button_ui_var"    ).disabled = false;
	document.getElementById( "button_ui_graph"  ).disabled = false;
	document.getElementById( "button_ui_table"  ).disabled = false;
	document.getElementById( "button_ui_option" ).disabled = false;

	document.getElementById( "button_ui_main2"   ).disabled = false;
	document.getElementById( "button_ui_func2"   ).disabled = false;
	document.getElementById( "button_ui_log2"    ).disabled = true;
	document.getElementById( "button_ui_var2"    ).disabled = false;
	document.getElementById( "button_ui_graph2"  ).disabled = false;
	document.getElementById( "button_ui_table2"  ).disabled = false;
	document.getElementById( "button_ui_option2" ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "graph_ui_menu"       , (isAndroidTablet() || isIPad()) ? false : true );
	cssSetStyleDisplayById( "graph_ui_menu2"      , (isAndroidTablet() || isIPad()) ? true : false );
	cssSetStyleDisplayById( "graph_ui_main"       , false );
	cssSetStyleDisplayById( "graph_ui_edit"       , false );
	cssSetStyleDisplayById( "graph_ui_button_1"   , false );
	cssSetStyleDisplayById( "graph_ui_button_2"   , false );
	cssSetStyleDisplayById( "graph_ui_button_3"   , false );
	cssSetStyleDisplayById( "graph_ui_button_4"   , false );
	cssSetStyleDisplayById( "graph_ui_button_5"   , false );
	cssSetStyleDisplayById( "graph_ui_button_6"   , false );
	cssSetStyleDisplayById( "graph_ui_usage"      , false );
	cssSetStyleDisplayById( "graph_ui_func"       , false );
	cssSetStyleDisplayById( "graph_ui_log"        , true );
	cssSetStyleDisplayById( "graph_ui_var"        , false );
	cssSetStyleDisplayById( "graph_ui_graph"      , false );
	cssSetStyleDisplayById( "graph_ui_window"     , false );
	cssSetStyleDisplayById( "graph_ui_table"      , false );
	cssSetStyleDisplayById( "graph_ui_option"     , false );
	cssSetStyleDisplayById( "graph_ui_color"      , false );
	cssSetStyleDisplayById( "graph_ui_selectimage", false );
	cssSetStyleDisplayById( "graph_ui_profile"    , false );
	cssSetStyleDisplayById( "graph_ui_table2"     , false );
	cssUnlockStyleDisplay();

	// 一番下までスクロール
	con.scrollBottom();
}
function doButtonUIVar(){
	if( menu == _UI_GRAPH_MENU_VAR ){
		return;
	}
	setMenu( _UI_GRAPH_MENU_VAR );

	removeGraphEvent();

	document.getElementById( "button_ui_main"   ).disabled = false;
	document.getElementById( "button_ui_func"   ).disabled = false;
	document.getElementById( "button_ui_log"    ).disabled = false;
	document.getElementById( "button_ui_var"    ).disabled = true;
	document.getElementById( "button_ui_graph"  ).disabled = false;
	document.getElementById( "button_ui_table"  ).disabled = false;
	document.getElementById( "button_ui_option" ).disabled = false;

	document.getElementById( "button_ui_main2"   ).disabled = false;
	document.getElementById( "button_ui_func2"   ).disabled = false;
	document.getElementById( "button_ui_log2"    ).disabled = false;
	document.getElementById( "button_ui_var2"    ).disabled = true;
	document.getElementById( "button_ui_graph2"  ).disabled = false;
	document.getElementById( "button_ui_table2"  ).disabled = false;
	document.getElementById( "button_ui_option2" ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "graph_ui_menu"       , (isAndroidTablet() || isIPad()) ? false : true );
	cssSetStyleDisplayById( "graph_ui_menu2"      , (isAndroidTablet() || isIPad()) ? true : false );
	cssSetStyleDisplayById( "graph_ui_main"       , false );
	cssSetStyleDisplayById( "graph_ui_edit"       , false );
	cssSetStyleDisplayById( "graph_ui_button_1"   , false );
	cssSetStyleDisplayById( "graph_ui_button_2"   , false );
	cssSetStyleDisplayById( "graph_ui_button_3"   , false );
	cssSetStyleDisplayById( "graph_ui_button_4"   , false );
	cssSetStyleDisplayById( "graph_ui_button_5"   , false );
	cssSetStyleDisplayById( "graph_ui_button_6"   , false );
	cssSetStyleDisplayById( "graph_ui_usage"      , false );
	cssSetStyleDisplayById( "graph_ui_func"       , false );
	cssSetStyleDisplayById( "graph_ui_log"        , false );
	cssSetStyleDisplayById( "graph_ui_var"        , true );
	cssSetStyleDisplayById( "graph_ui_graph"      , false );
	cssSetStyleDisplayById( "graph_ui_window"     , false );
	cssSetStyleDisplayById( "graph_ui_table"      , false );
	cssSetStyleDisplayById( "graph_ui_option"     , false );
	cssSetStyleDisplayById( "graph_ui_color"      , false );
	cssSetStyleDisplayById( "graph_ui_selectimage", false );
	cssSetStyleDisplayById( "graph_ui_profile"    , false );
	cssSetStyleDisplayById( "graph_ui_table2"     , false );
	cssUnlockStyleDisplay();
}
function doButtonUIGraph(){
	if( menu == _UI_GRAPH_MENU_GRAPH ){
		return;
	}
	setMenu( _UI_GRAPH_MENU_GRAPH );

	addGraphEvent( canvas );

	document.getElementById( "button_ui_main"   ).disabled = false;
	document.getElementById( "button_ui_func"   ).disabled = false;
	document.getElementById( "button_ui_log"    ).disabled = false;
	document.getElementById( "button_ui_var"    ).disabled = false;
	document.getElementById( "button_ui_graph"  ).disabled = true;
	document.getElementById( "button_ui_table"  ).disabled = false;
	document.getElementById( "button_ui_option" ).disabled = false;

	document.getElementById( "button_ui_main2"   ).disabled = false;
	document.getElementById( "button_ui_func2"   ).disabled = false;
	document.getElementById( "button_ui_log2"    ).disabled = false;
	document.getElementById( "button_ui_var2"    ).disabled = false;
	document.getElementById( "button_ui_graph2"  ).disabled = true;
	document.getElementById( "button_ui_table2"  ).disabled = false;
	document.getElementById( "button_ui_option2" ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "graph_ui_menu"       , (isAndroidTablet() || isIPad()) ? false : true );
	cssSetStyleDisplayById( "graph_ui_menu2"      , (isAndroidTablet() || isIPad()) ? true : false );
	cssSetStyleDisplayById( "graph_ui_main"       , false );
	cssSetStyleDisplayById( "graph_ui_edit"       , false );
	cssSetStyleDisplayById( "graph_ui_button_1"   , false );
	cssSetStyleDisplayById( "graph_ui_button_2"   , false );
	cssSetStyleDisplayById( "graph_ui_button_3"   , false );
	cssSetStyleDisplayById( "graph_ui_button_4"   , false );
	cssSetStyleDisplayById( "graph_ui_button_5"   , false );
	cssSetStyleDisplayById( "graph_ui_button_6"   , false );
	cssSetStyleDisplayById( "graph_ui_usage"      , false );
	cssSetStyleDisplayById( "graph_ui_func"       , false );
	cssSetStyleDisplayById( "graph_ui_log"        , false );
	cssSetStyleDisplayById( "graph_ui_var"        , false );
	cssSetStyleDisplayById( "graph_ui_graph"      , true );
	cssSetStyleDisplayById( "graph_ui_window"     , false );
	cssSetStyleDisplayById( "graph_ui_table"      , false );
	cssSetStyleDisplayById( "graph_ui_option"     , false );
	cssSetStyleDisplayById( "graph_ui_color"      , false );
	cssSetStyleDisplayById( "graph_ui_selectimage", false );
	cssSetStyleDisplayById( "graph_ui_profile"    , false );
	cssSetStyleDisplayById( "graph_ui_table2"     , false );
	cssUnlockStyleDisplay();

	updateInputExpr1();
	updateInputExpr2();
}
function doButtonUIWindow(){
	setMenu( _UI_GRAPH_MENU_WINDOW );

	removeGraphEvent();

	document.getElementById( "button_ui_main"   ).disabled = false;
	document.getElementById( "button_ui_func"   ).disabled = false;
	document.getElementById( "button_ui_log"    ).disabled = false;
	document.getElementById( "button_ui_var"    ).disabled = false;
	document.getElementById( "button_ui_graph"  ).disabled = false;
	document.getElementById( "button_ui_table"  ).disabled = false;
	document.getElementById( "button_ui_option" ).disabled = false;

	document.getElementById( "button_ui_main2"   ).disabled = false;
	document.getElementById( "button_ui_func2"   ).disabled = false;
	document.getElementById( "button_ui_log2"    ).disabled = false;
	document.getElementById( "button_ui_var2"    ).disabled = false;
	document.getElementById( "button_ui_graph2"  ).disabled = false;
	document.getElementById( "button_ui_table2"  ).disabled = false;
	document.getElementById( "button_ui_option2" ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "graph_ui_menu"       , false );
	cssSetStyleDisplayById( "graph_ui_menu2"      , false );
	cssSetStyleDisplayById( "graph_ui_main"       , false );
	cssSetStyleDisplayById( "graph_ui_edit"       , false );
	cssSetStyleDisplayById( "graph_ui_button_1"   , false );
	cssSetStyleDisplayById( "graph_ui_button_2"   , false );
	cssSetStyleDisplayById( "graph_ui_button_3"   , false );
	cssSetStyleDisplayById( "graph_ui_button_4"   , false );
	cssSetStyleDisplayById( "graph_ui_button_5"   , false );
	cssSetStyleDisplayById( "graph_ui_button_6"   , false );
	cssSetStyleDisplayById( "graph_ui_usage"      , false );
	cssSetStyleDisplayById( "graph_ui_func"       , false );
	cssSetStyleDisplayById( "graph_ui_log"        , false );
	cssSetStyleDisplayById( "graph_ui_var"        , false );
	cssSetStyleDisplayById( "graph_ui_graph"      , false );
	cssSetStyleDisplayById( "graph_ui_window"     , true );
	cssSetStyleDisplayById( "graph_ui_table"      , false );
	cssSetStyleDisplayById( "graph_ui_option"     , false );
	cssSetStyleDisplayById( "graph_ui_color"      , false );
	cssSetStyleDisplayById( "graph_ui_selectimage", false );
	cssSetStyleDisplayById( "graph_ui_profile"    , false );
	cssSetStyleDisplayById( "graph_ui_table2"     , false );
	cssUnlockStyleDisplay();

	doGraphStartEnv();
}
function doButtonUITable(){
	if( menu == _UI_GRAPH_MENU_TABLE ){
		return;
	}
	setMenu( _UI_GRAPH_MENU_TABLE );

	removeGraphEvent();

	document.getElementById( "button_ui_main"   ).disabled = false;
	document.getElementById( "button_ui_func"   ).disabled = false;
	document.getElementById( "button_ui_log"    ).disabled = false;
	document.getElementById( "button_ui_var"    ).disabled = false;
	document.getElementById( "button_ui_graph"  ).disabled = false;
	document.getElementById( "button_ui_table"  ).disabled = true;
	document.getElementById( "button_ui_option" ).disabled = false;

	document.getElementById( "button_ui_main2"   ).disabled = false;
	document.getElementById( "button_ui_func2"   ).disabled = false;
	document.getElementById( "button_ui_log2"    ).disabled = false;
	document.getElementById( "button_ui_var2"    ).disabled = false;
	document.getElementById( "button_ui_graph2"  ).disabled = false;
	document.getElementById( "button_ui_table2"  ).disabled = true;
	document.getElementById( "button_ui_option2" ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "graph_ui_menu"       , (isAndroidTablet() || isIPad()) ? false : true );
	cssSetStyleDisplayById( "graph_ui_menu2"      , (isAndroidTablet() || isIPad()) ? true : false );
	cssSetStyleDisplayById( "graph_ui_main"       , false );
	cssSetStyleDisplayById( "graph_ui_edit"       , false );
	cssSetStyleDisplayById( "graph_ui_button_1"   , false );
	cssSetStyleDisplayById( "graph_ui_button_2"   , false );
	cssSetStyleDisplayById( "graph_ui_button_3"   , false );
	cssSetStyleDisplayById( "graph_ui_button_4"   , false );
	cssSetStyleDisplayById( "graph_ui_button_5"   , false );
	cssSetStyleDisplayById( "graph_ui_button_6"   , false );
	cssSetStyleDisplayById( "graph_ui_usage"      , false );
	cssSetStyleDisplayById( "graph_ui_func"       , false );
	cssSetStyleDisplayById( "graph_ui_log"        , false );
	cssSetStyleDisplayById( "graph_ui_var"        , false );
	cssSetStyleDisplayById( "graph_ui_graph"      , false );
	cssSetStyleDisplayById( "graph_ui_window"     , false );
	cssSetStyleDisplayById( "graph_ui_table"      , true );
	cssSetStyleDisplayById( "graph_ui_option"     , false );
	cssSetStyleDisplayById( "graph_ui_color"      , false );
	cssSetStyleDisplayById( "graph_ui_selectimage", false );
	cssSetStyleDisplayById( "graph_ui_profile"    , false );
	cssSetStyleDisplayById( "graph_ui_table2"     , false );
	cssUnlockStyleDisplay();
}
function doButtonUIOption(){
	if( menu == _UI_GRAPH_MENU_OPTION ){
		return;
	}
	setMenu( _UI_GRAPH_MENU_OPTION );

	removeGraphEvent();

	document.getElementById( "button_ui_main"   ).disabled = false;
	document.getElementById( "button_ui_func"   ).disabled = false;
	document.getElementById( "button_ui_log"    ).disabled = false;
	document.getElementById( "button_ui_var"    ).disabled = false;
	document.getElementById( "button_ui_graph"  ).disabled = false;
	document.getElementById( "button_ui_table"  ).disabled = false;
	document.getElementById( "button_ui_option" ).disabled = true;

	document.getElementById( "button_ui_main2"   ).disabled = false;
	document.getElementById( "button_ui_func2"   ).disabled = false;
	document.getElementById( "button_ui_log2"    ).disabled = false;
	document.getElementById( "button_ui_var2"    ).disabled = false;
	document.getElementById( "button_ui_graph2"  ).disabled = false;
	document.getElementById( "button_ui_table2"  ).disabled = false;
	document.getElementById( "button_ui_option2" ).disabled = true;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "graph_ui_menu"       , (isAndroidTablet() || isIPad()) ? false : true );
	cssSetStyleDisplayById( "graph_ui_menu2"      , (isAndroidTablet() || isIPad()) ? true : false );
	cssSetStyleDisplayById( "graph_ui_main"       , false );
	cssSetStyleDisplayById( "graph_ui_edit"       , false );
	cssSetStyleDisplayById( "graph_ui_button_1"   , false );
	cssSetStyleDisplayById( "graph_ui_button_2"   , false );
	cssSetStyleDisplayById( "graph_ui_button_3"   , false );
	cssSetStyleDisplayById( "graph_ui_button_4"   , false );
	cssSetStyleDisplayById( "graph_ui_button_5"   , false );
	cssSetStyleDisplayById( "graph_ui_button_6"   , false );
	cssSetStyleDisplayById( "graph_ui_usage"      , false );
	cssSetStyleDisplayById( "graph_ui_func"       , false );
	cssSetStyleDisplayById( "graph_ui_log"        , false );
	cssSetStyleDisplayById( "graph_ui_var"        , false );
	cssSetStyleDisplayById( "graph_ui_graph"      , false );
	cssSetStyleDisplayById( "graph_ui_window"     , false );
	cssSetStyleDisplayById( "graph_ui_table"      , false );
	cssSetStyleDisplayById( "graph_ui_option"     , true );
	cssSetStyleDisplayById( "graph_ui_color"      , false );
	cssSetStyleDisplayById( "graph_ui_selectimage", false );
	cssSetStyleDisplayById( "graph_ui_profile"    , false );
	cssSetStyleDisplayById( "graph_ui_table2"     , false );
	cssUnlockStyleDisplay();

	updateGraphEditScreen();
}
function doButtonUIColor(){
	setMenu( _UI_GRAPH_MENU_COLOR );

	removeGraphEvent();

	document.getElementById( "button_ui_main"   ).disabled = false;
	document.getElementById( "button_ui_func"   ).disabled = false;
	document.getElementById( "button_ui_log"    ).disabled = false;
	document.getElementById( "button_ui_var"    ).disabled = false;
	document.getElementById( "button_ui_graph"  ).disabled = false;
	document.getElementById( "button_ui_table"  ).disabled = false;
	document.getElementById( "button_ui_option" ).disabled = false;

	document.getElementById( "button_ui_main2"   ).disabled = false;
	document.getElementById( "button_ui_func2"   ).disabled = false;
	document.getElementById( "button_ui_log2"    ).disabled = false;
	document.getElementById( "button_ui_var2"    ).disabled = false;
	document.getElementById( "button_ui_graph2"  ).disabled = false;
	document.getElementById( "button_ui_table2"  ).disabled = false;
	document.getElementById( "button_ui_option2" ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "graph_ui_menu"       , false );
	cssSetStyleDisplayById( "graph_ui_menu2"      , false );
	cssSetStyleDisplayById( "graph_ui_main"       , false );
	cssSetStyleDisplayById( "graph_ui_edit"       , false );
	cssSetStyleDisplayById( "graph_ui_button_1"   , false );
	cssSetStyleDisplayById( "graph_ui_button_2"   , false );
	cssSetStyleDisplayById( "graph_ui_button_3"   , false );
	cssSetStyleDisplayById( "graph_ui_button_4"   , false );
	cssSetStyleDisplayById( "graph_ui_button_5"   , false );
	cssSetStyleDisplayById( "graph_ui_button_6"   , false );
	cssSetStyleDisplayById( "graph_ui_usage"      , false );
	cssSetStyleDisplayById( "graph_ui_func"       , false );
	cssSetStyleDisplayById( "graph_ui_log"        , false );
	cssSetStyleDisplayById( "graph_ui_var"        , false );
	cssSetStyleDisplayById( "graph_ui_graph"      , false );
	cssSetStyleDisplayById( "graph_ui_window"     , false );
	cssSetStyleDisplayById( "graph_ui_table"      , false );
	cssSetStyleDisplayById( "graph_ui_option"     , false );
	cssSetStyleDisplayById( "graph_ui_color"      , true );
	cssSetStyleDisplayById( "graph_ui_selectimage", false );
	cssSetStyleDisplayById( "graph_ui_profile"    , false );
	cssSetStyleDisplayById( "graph_ui_table2"     , false );
	cssUnlockStyleDisplay();
}
function doButtonUISelectImage(){
	setMenu( _UI_GRAPH_MENU_SELECTIMAGE );

	removeGraphEvent();

	document.getElementById( "button_ui_main"   ).disabled = false;
	document.getElementById( "button_ui_func"   ).disabled = false;
	document.getElementById( "button_ui_log"    ).disabled = false;
	document.getElementById( "button_ui_var"    ).disabled = false;
	document.getElementById( "button_ui_graph"  ).disabled = false;
	document.getElementById( "button_ui_table"  ).disabled = false;
	document.getElementById( "button_ui_option" ).disabled = false;

	document.getElementById( "button_ui_main2"   ).disabled = false;
	document.getElementById( "button_ui_func2"   ).disabled = false;
	document.getElementById( "button_ui_log2"    ).disabled = false;
	document.getElementById( "button_ui_var2"    ).disabled = false;
	document.getElementById( "button_ui_graph2"  ).disabled = false;
	document.getElementById( "button_ui_table2"  ).disabled = false;
	document.getElementById( "button_ui_option2" ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "graph_ui_menu"       , false );
	cssSetStyleDisplayById( "graph_ui_menu2"      , false );
	cssSetStyleDisplayById( "graph_ui_main"       , false );
	cssSetStyleDisplayById( "graph_ui_edit"       , false );
	cssSetStyleDisplayById( "graph_ui_button_1"   , false );
	cssSetStyleDisplayById( "graph_ui_button_2"   , false );
	cssSetStyleDisplayById( "graph_ui_button_3"   , false );
	cssSetStyleDisplayById( "graph_ui_button_4"   , false );
	cssSetStyleDisplayById( "graph_ui_button_5"   , false );
	cssSetStyleDisplayById( "graph_ui_button_6"   , false );
	cssSetStyleDisplayById( "graph_ui_usage"      , false );
	cssSetStyleDisplayById( "graph_ui_func"       , false );
	cssSetStyleDisplayById( "graph_ui_log"        , false );
	cssSetStyleDisplayById( "graph_ui_var"        , false );
	cssSetStyleDisplayById( "graph_ui_graph"      , false );
	cssSetStyleDisplayById( "graph_ui_window"     , false );
	cssSetStyleDisplayById( "graph_ui_table"      , false );
	cssSetStyleDisplayById( "graph_ui_option"     , false );
	cssSetStyleDisplayById( "graph_ui_color"      , false );
	cssSetStyleDisplayById( "graph_ui_selectimage", true );
	cssSetStyleDisplayById( "graph_ui_profile"    , false );
	cssSetStyleDisplayById( "graph_ui_table2"     , false );
	cssUnlockStyleDisplay();
}
function doButtonUIProfile( readOnly ){
	setMenu( _UI_GRAPH_MENU_PROFILE );

	removeGraphEvent();

	cssSetStyleDisplayById( "button_profile_import2", readOnly ? false : true );
	document.getElementById( "profile" ).readOnly = readOnly;
	if( !readOnly ){
		if( electron != null ){
			document.getElementById( "profile" ).value = electron.readProfile();
		} else {
			document.getElementById( "profile" ).value = "";
		}
	}

	document.getElementById( "button_ui_main"   ).disabled = false;
	document.getElementById( "button_ui_func"   ).disabled = false;
	document.getElementById( "button_ui_log"    ).disabled = false;
	document.getElementById( "button_ui_var"    ).disabled = false;
	document.getElementById( "button_ui_graph"  ).disabled = false;
	document.getElementById( "button_ui_table"  ).disabled = false;
	document.getElementById( "button_ui_option" ).disabled = false;

	document.getElementById( "button_ui_main2"   ).disabled = false;
	document.getElementById( "button_ui_func2"   ).disabled = false;
	document.getElementById( "button_ui_log2"    ).disabled = false;
	document.getElementById( "button_ui_var2"    ).disabled = false;
	document.getElementById( "button_ui_graph2"  ).disabled = false;
	document.getElementById( "button_ui_table2"  ).disabled = false;
	document.getElementById( "button_ui_option2" ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "graph_ui_menu"       , false );
	cssSetStyleDisplayById( "graph_ui_menu2"      , false );
	cssSetStyleDisplayById( "graph_ui_main"       , false );
	cssSetStyleDisplayById( "graph_ui_edit"       , false );
	cssSetStyleDisplayById( "graph_ui_button_1"   , false );
	cssSetStyleDisplayById( "graph_ui_button_2"   , false );
	cssSetStyleDisplayById( "graph_ui_button_3"   , false );
	cssSetStyleDisplayById( "graph_ui_button_4"   , false );
	cssSetStyleDisplayById( "graph_ui_button_5"   , false );
	cssSetStyleDisplayById( "graph_ui_button_6"   , false );
	cssSetStyleDisplayById( "graph_ui_usage"      , false );
	cssSetStyleDisplayById( "graph_ui_func"       , false );
	cssSetStyleDisplayById( "graph_ui_log"        , false );
	cssSetStyleDisplayById( "graph_ui_var"        , false );
	cssSetStyleDisplayById( "graph_ui_graph"      , false );
	cssSetStyleDisplayById( "graph_ui_window"     , false );
	cssSetStyleDisplayById( "graph_ui_table"      , false );
	cssSetStyleDisplayById( "graph_ui_option"     , false );
	cssSetStyleDisplayById( "graph_ui_color"      , false );
	cssSetStyleDisplayById( "graph_ui_selectimage", false );
	cssSetStyleDisplayById( "graph_ui_profile"    , true );
	cssSetStyleDisplayById( "graph_ui_table2"     , false );
	cssUnlockStyleDisplay();
}
function doButtonUITable2(){
	setMenu( _UI_GRAPH_MENU_TABLE2 );

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

	document.getElementById( "button_ui_main"   ).disabled = false;
	document.getElementById( "button_ui_func"   ).disabled = false;
	document.getElementById( "button_ui_log"    ).disabled = false;
	document.getElementById( "button_ui_var"    ).disabled = false;
	document.getElementById( "button_ui_graph"  ).disabled = false;
	document.getElementById( "button_ui_table"  ).disabled = false;
	document.getElementById( "button_ui_option" ).disabled = false;

	document.getElementById( "button_ui_main2"   ).disabled = false;
	document.getElementById( "button_ui_func2"   ).disabled = false;
	document.getElementById( "button_ui_log2"    ).disabled = false;
	document.getElementById( "button_ui_var2"    ).disabled = false;
	document.getElementById( "button_ui_graph2"  ).disabled = false;
	document.getElementById( "button_ui_table2"  ).disabled = false;
	document.getElementById( "button_ui_option2" ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "graph_ui_menu"       , false );
	cssSetStyleDisplayById( "graph_ui_menu2"      , false );
	cssSetStyleDisplayById( "graph_ui_main"       , false );
	cssSetStyleDisplayById( "graph_ui_edit"       , false );
	cssSetStyleDisplayById( "graph_ui_button_1"   , false );
	cssSetStyleDisplayById( "graph_ui_button_2"   , false );
	cssSetStyleDisplayById( "graph_ui_button_3"   , false );
	cssSetStyleDisplayById( "graph_ui_button_4"   , false );
	cssSetStyleDisplayById( "graph_ui_button_5"   , false );
	cssSetStyleDisplayById( "graph_ui_button_6"   , false );
	cssSetStyleDisplayById( "graph_ui_usage"      , false );
	cssSetStyleDisplayById( "graph_ui_func"       , false );
	cssSetStyleDisplayById( "graph_ui_log"        , false );
	cssSetStyleDisplayById( "graph_ui_var"        , false );
	cssSetStyleDisplayById( "graph_ui_graph"      , false );
	cssSetStyleDisplayById( "graph_ui_window"     , false );
	cssSetStyleDisplayById( "graph_ui_table"      , false );
	cssSetStyleDisplayById( "graph_ui_option"     , false );
	cssSetStyleDisplayById( "graph_ui_color"      , false );
	cssSetStyleDisplayById( "graph_ui_selectimage", false );
	cssSetStyleDisplayById( "graph_ui_profile"    , false );
	cssSetStyleDisplayById( "graph_ui_table2"     , true );
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
	var x  = "" + document.getElementById( "graph_edit_trace_x"  ).value;
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
		var x  = parseFloat( graphUI._editX );
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
	document.getElementById( "button_getcontent" ).innerHTML = englishFlag ? "Album..." : "アルバム...";
	document.getElementById( "button_loadimage" ).innerHTML = englishFlag ? "Image file..." : "画像ファイル...";
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
		cssSetStyleDisplayById( "lang_english"  , true  );
		cssSetStyleDisplayById( "lang_english2" , true  );
		cssSetStyleDisplayById( "lang_english3" , true  );
	} else {
		cssSetStyleDisplayById( "lang_english"  , false );
		cssSetStyleDisplayById( "lang_english2" , false );
		cssSetStyleDisplayById( "lang_english3" , false );
		cssSetStyleDisplayById( "lang_japanese" , true  );
		cssSetStyleDisplayById( "lang_japanese2", true  );
		cssSetStyleDisplayById( "lang_japanese3", true  );
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
	writeProfileInt( "ENV_", "Language", englishFlag ? LANG_ENGLISH : LANG_JAPANESE );

	updateLanguage();

	document.getElementById( "graph_usage" ).innerHTML = "";
}

function doButtonMark(){
	var item = listTable[graphIndex()].obj( listTable[graphIndex()].index() );
	if( item != null ){
		document.getElementById( "graph_edit_trace_x"  ).value = "" + item._x;
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
	document.getElementById( "button_log"   ).innerHTML = topParam._calculator ? "ln"  : "log";
	document.getElementById( "button_log10" ).innerHTML = topParam._calculator ? "log" : "log10";
}
function changeExpr(){
	var i, j;
	var token;

	for( j = 0; j < 2; j++ ){
		for( i = 0; i < editExpr[graphIndex()][j].num(); i++ ){
			token = editExpr[graphIndex()][j].token( i );
			if( topParam._calculator ){
				if( token == "log "   ) editExpr[graphIndex()][j].set( i, "ln "  );
				if( token == "log10 " ) editExpr[graphIndex()][j].set( i, "log " );
			} else {
				if( token == "log " ) editExpr[graphIndex()][j].set( i, "log10 " );
				if( token == "ln "  ) editExpr[graphIndex()][j].set( i, "log "   );
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
				if( token == "log "   ) tmpEdit.set( j, "ln "  );
				if( token == "log10 " ) tmpEdit.set( j, "log " );
			} else {
				if( token == "log " ) tmpEdit.set( j, "log10 " );
				if( token == "ln "  ) tmpEdit.set( j, "log "   );
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
	_this._mode = getProfileInt( "ENV_", "Mode", _UI_GRAPH_MODE_LINEAR );
	_this._rePlotModeFlag   = (getProfileInt( "ENV_", "RePlotMode"  , 1 ) == 1);
	_this._rePlotAngleFlag  = (getProfileInt( "ENV_", "RePlotAngle" , 1 ) == 1);
	_this._rePlotWindowFlag = (getProfileInt( "ENV_", "RePlotWindow", 1 ) == 1);
	_this._tool = getProfileInt( "ENV_", "Tool", _UI_GRAPH_TOOL_TRACE );
	var defOffsetX = _DIV( _this._gWorld._width , 2 );
	var defOffsetY = _DIV( _this._gWorld._height, 2 );
	_this._rectOffsetX  = getProfileFloat( "ENV_", "RectOffsetX" , defOffsetX );
	_this._rectOffsetY  = getProfileFloat( "ENV_", "RectOffsetY" , defOffsetY );
	_this._rectRatioX   = getProfileFloat( "ENV_", "RectRatioX"  , 20.0       );
	_this._rectRatioY   = getProfileFloat( "ENV_", "RectRatioY"  , -20.0      );
	_this._paramOffsetX = getProfileFloat( "ENV_", "ParamOffsetX", defOffsetX );
	_this._paramOffsetY = getProfileFloat( "ENV_", "ParamOffsetY", defOffsetY );
	_this._paramRatioX  = getProfileFloat( "ENV_", "ParamRatioX" , 20.0       );
	_this._paramRatioY  = getProfileFloat( "ENV_", "ParamRatioY" , -20.0      );
	_this._paramMin     = getProfileFloat( "ENV_", "ParamMin"    , 0.0        );
	_this._paramMax     = getProfileFloat( "ENV_", "ParamMax"    , 360.0      );
	_this._paramPitch   = getProfileFloat( "ENV_", "ParamPitch"  , 1.0        );
	_this._polarOffsetX = getProfileFloat( "ENV_", "PolarOffsetX", defOffsetX );
	_this._polarOffsetY = getProfileFloat( "ENV_", "PolarOffsetY", defOffsetY );
	_this._polarRatioX  = getProfileFloat( "ENV_", "PolarRatioX" , 20.0       );
	_this._polarRatioY  = getProfileFloat( "ENV_", "PolarRatioY" , -20.0      );
	_this._polarMin     = getProfileFloat( "ENV_", "PolarMin"    , 0.0        );
	_this._polarMax     = getProfileFloat( "ENV_", "PolarMax"    , 360.0      );
	_this._polarPitch   = getProfileFloat( "ENV_", "PolarPitch"  , 1.0        );
	_this._unitX = getProfileFloat( "ENV_", "UnitX", 1.0 );
	_this._unitY = getProfileFloat( "ENV_", "UnitY", 1.0 );
	_this._textX = getProfileInt  ( "ENV_", "TextX", 1   );
	_this._textY = getProfileInt  ( "ENV_", "TextY", 1   );
	_this._colorBack  = getProfileInt( "ENV_", "BackColor" , 11 );
	_this._colorScale = getProfileInt( "ENV_", "ScaleColor", 12 );
	_this._colorUnit  = getProfileInt( "ENV_", "UnitColor" , 14 );
	_this._colorText  = getProfileInt( "ENV_", "TextColor" , 15 );
	_this._color[0]   = getProfileInt( "ENV_", "GraphColor",  4 );
	for( var i = 1; i < _GRAPH_NUM; i++ ){
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
	// 計算式
	editExpr[0][0].importLog( getProfileString( "EXPR_", "1", "" ) );
	editExpr[0][1].importLog( getProfileString( "EXPR_", "2", "" ) );
	for( var i = 1; i < _GRAPH_NUM; i++ ){
		editExpr[i][0].importLog( getProfileString( "EXPR" + (i + 1) + "_", "1", "" ) );
		editExpr[i][1].importLog( getProfileString( "EXPR" + (i + 1) + "_", "2", "" ) );
	}

	var forward = new _String();
	var after   = new _String();
	editExpr[graphIndex()][0].get( forward, after, false );
	graphUI._graph.setExpr1( forward.str() + after.str() );
	editExpr[graphIndex()][1].get( forward, after, false );
	graphUI._graph.setExpr2( forward.str() + after.str() );
}
function writeProfileExpr(){
	// 計算式
	var expr = new _String();
	editExpr[0][0].exportLog( expr );
	writeProfileString( "EXPR_", "1", expr.str() );
	editExpr[0][1].exportLog( expr );
	writeProfileString( "EXPR_", "2", expr.str() );
	for( var i = 1; i < _GRAPH_NUM; i++ ){
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
	// 数表
	var x, y1, y2;
	beginGetProfile( "TABLE_" );
	while( true ){
		x  = getProfile();
		y1 = getProfile();
		y2 = getProfile();
		if( x.length == 0 ){
			break;
		}
		listTable[0].add( new ListTableItem( x, y1, y2 ) );
	}
	endGetProfile();
	for( var i = 1; i < _GRAPH_NUM; i++ ){
		beginGetProfile( "TABLE" + (i + 1) + "_" );
		while( true ){
			x  = getProfile();
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
	// 数表
	var i;
	beginWriteProfile();
	for( i = 0; i < listTable[0].num(); i++ ){
		writeProfile( listTable[0].obj( i )._x  );
		writeProfile( listTable[0].obj( i )._y1 );
		writeProfile( listTable[0].obj( i )._y2 );
	}
	endWriteProfile( "TABLE_" );
	for( var j = 1; j < _GRAPH_NUM; j++ ){
		beginWriteProfile();
		for( i = 0; i < listTable[j].num(); i++ ){
			writeProfile( listTable[j].obj( i )._x  );
			writeProfile( listTable[j].obj( i )._y1 );
			writeProfile( listTable[j].obj( i )._y2 );
		}
		endWriteProfile( "TABLE" + (j + 1) + "_" );
	}
}

function writeProfileAngle(){
	var type       = new _Integer();
	var updateFlag = new _Boolean();
	topProc.getAngType( type, updateFlag );
	writeProfileInt( "ENV_", "Angle", type._val );
}

function writeProfileWindow(){
	writeProfileFloat( "ENV_", "RectOffsetX" , graphUI._rectOffsetX  );
	writeProfileFloat( "ENV_", "RectOffsetY" , graphUI._rectOffsetY  );
	writeProfileFloat( "ENV_", "RectRatioX"  , graphUI._rectRatioX   );
	writeProfileFloat( "ENV_", "RectRatioY"  , graphUI._rectRatioY   );
	writeProfileFloat( "ENV_", "ParamOffsetX", graphUI._paramOffsetX );
	writeProfileFloat( "ENV_", "ParamOffsetY", graphUI._paramOffsetY );
	writeProfileFloat( "ENV_", "ParamRatioX" , graphUI._paramRatioX  );
	writeProfileFloat( "ENV_", "ParamRatioY" , graphUI._paramRatioY  );
	writeProfileFloat( "ENV_", "PolarOffsetX", graphUI._polarOffsetX );
	writeProfileFloat( "ENV_", "PolarOffsetY", graphUI._polarOffsetY );
	writeProfileFloat( "ENV_", "PolarRatioX" , graphUI._polarRatioX  );
	writeProfileFloat( "ENV_", "PolarRatioY" , graphUI._polarRatioY  );
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
			x   = getProfile();
			y   = getProfile();
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
		x   = getProfile();
		y   = getProfile();
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

	clearProfile( PROFILE_PREFIX + "IMAGE_" );

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
		writeProfileString( "IMAGE_"     , "" + (i + 1), image [i] );
	}
}

// エディタ関連
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

	// 外部関数キャッシュのクリア
	topProc.clearFuncCache( "!" + chr );

	// 計算式をチェック
	var saveIndex = graphIndex();
	for( var i = 0; i < _GRAPH_NUM; i++ ){
		procGraph().selGraph( i );

		procGraph().checkExpr( "!" + chr );
	}
	procGraph().selGraph( saveIndex );
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
	cssSetStyleDisplayById( "graph_ui_var_1", true  );

	document.getElementById( "button_ui_var_1" ).disabled = true;
	document.getElementById( "button_ui_var_2" ).disabled = false;
}
function changeVar2(){
	cssSetStyleDisplayById( "graph_ui_var_1", false );
	cssSetStyleDisplayById( "graph_ui_var_2", true  );
	cssSetStyleDisplayById( "graph_ui_var_3", true  );

	document.getElementById( "button_ui_var_1" ).disabled = false;
	document.getElementById( "button_ui_var_2" ).disabled = true;
}

function getContent(){
	if( nativeRequest ){
		nativeRequest.send( "get_content" );
	}
}
function onContentBase64( data ){
	var canvas = document.createElement( "canvas" );
	var context = canvas.getContext( "2d" );
	var image = new Image();
	image.onload = function(){
		var dstHeight = common.isPC() ? defHeight( false ) : bodyHeight;
		var dstWidth  = this.width * dstHeight / this.height;
		if( dstWidth < 322 ){
			dstWidth  = 322;
			dstHeight = this.height * 322 / this.width;
		}
		canvas.width  = dstWidth;
		canvas.height = dstHeight;
		context.drawImage( this, 0, 0, this.width, this.height, 0, 0, dstWidth, dstHeight );

		var quality = 1.0;
		do {
			skinImage = canvas.toDataURL( "image/jpeg", quality );
			quality -= 0.1;
		} while( skinImage.length <= 102400 );

		document.getElementById( "graph_edit_skin_image" ).value = skinImage;
		updateSkin();

		writeProfileString( "ENV_", "SkinImage", skinImage );

		addListImage();
	};
	image.src = data;
}

function onInputFileLoadImage( name, image ){
	onContentBase64( image.src );
}

// キー関連
function onKeyDown( key ){
	if( menu != _UI_GRAPH_MENU_MAIN ){
		return false;
	}

	if(
		(document.activeElement == document.getElementById( "graph_edit_min"   )) ||
		(document.activeElement == document.getElementById( "graph_edit_max"   )) ||
		(document.activeElement == document.getElementById( "graph_edit_pitch" ))
	){
		return false;
	}

	if( key == _KEY_SHIFT ){
		keyShiftOnly = true;
	} else {
		keyShiftOnly = false;
	}

	switch( key ){
	case _KEY_TAB:
		if( (exprType == 0) && (graphUI._mode == _UI_GRAPH_MODE_PARAM) ){
			doEditExpr2();
		} else {
			doEditExpr1();
		}
		return true;

	case _KEY_UP   : topEditExpr(); return true;
	case _KEY_DOWN : endEditExpr(); return true;
	case _KEY_LEFT : backwardEditExpr(); return true;
	case _KEY_RIGHT: forwardEditExpr(); return true;

	case _KEY_BACKSPACE: delEditExpr(); return true;
	case _KEY_DELETE   : delEditExpr(); return true;

	case _KEY_0    : doButton0(); return true;
	case _KEY_NUM_0: doButton0(); return true;
	case _KEY_1:
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButton1();
		} else {
			doButtonFactorial();
		}
		return true;
	case _KEY_NUM_1: doButton1(); return true;
	case _KEY_2    : doButton2(); return true;
	case _KEY_NUM_2: doButton2(); return true;
	case _KEY_3    : doButton3(); return true;
	case _KEY_NUM_3: doButton3(); return true;
	case _KEY_4    : doButton4(); return true;
	case _KEY_NUM_4: doButton4(); return true;
	case _KEY_5:
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButton5();
		} else {
			doButtonMod();
		}
		return true;
	case _KEY_NUM_5: doButton5(); return true;
	case _KEY_6    : doButton6(); return true;
	case _KEY_NUM_6: doButton6(); return true;
	case _KEY_7    : doButton7(); return true;
	case _KEY_NUM_7: doButton7(); return true;
	case _KEY_8:
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButton8();
		} else {
			doButtonTop();
		}
		return true;
	case _KEY_NUM_8: doButton8(); return true;
	case _KEY_9:
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButton9();
		} else {
			doButtonEnd();
		}
		return true;
	case _KEY_NUM_9: doButton9(); return true;

	case _KEY_A: insEditExpr( "a" ); return true;
	case _KEY_B: insEditExpr( "b" ); return true;
	case _KEY_C: insEditExpr( "c" ); return true;
	case _KEY_D: insEditExpr( "d" ); return true;
	case _KEY_E:
		if( editExpr[graphIndex()][exprType].lastChar() == '@' ){
			insEditExpr( "E" );
		} else if( editExpr[graphIndex()][exprType].lastCharNumber() ){
			if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
				doButtonEPlus();
			} else {
				doButtonEMinus();
			}
		} else {
			insEditExpr( "e" );
		}
		return true;
	case _KEY_F: insEditExpr( "f" ); return true;
	case _KEY_G: insEditExpr( "g" ); return true;
	case _KEY_H: insEditExpr( "h" ); return true;
	case _KEY_I: insEditExpr( "i" ); return true;
	case _KEY_J: insEditExpr( "j" ); return true;
	case _KEY_K: insEditExpr( "k" ); return true;
	case _KEY_L: insEditExpr( "l" ); return true;
	case _KEY_M: insEditExpr( "m" ); return true;
	case _KEY_N: insEditExpr( "n" ); return true;
	case _KEY_O: insEditExpr( "o" ); return true;
	case _KEY_P: insEditExpr( "p" ); return true;
	case _KEY_Q: insEditExpr( "q" ); return true;
	case _KEY_R: insEditExpr( "r" ); return true;
	case _KEY_S: insEditExpr( "s" ); return true;
	case _KEY_T: insEditExpr( "t" ); return true;
	case _KEY_U: insEditExpr( "u" ); return true;
	case _KEY_V: insEditExpr( "v" ); return true;
	case _KEY_W: insEditExpr( "w" ); return true;
	case _KEY_X: insEditExpr( "x" ); return true;
	case _KEY_Y: insEditExpr( "y" ); return true;
	case _KEY_Z: insEditExpr( "z" ); return true;

	case _KEY_NUM_POINT: doButtonPoint(); return true;
	case 190: doButtonPoint(); return true;	// .>キー
	case 187:	// ;+キー
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButtonPlus();
		} else {
			doButtonAdd();
		}
		return true;
	case 189:	// -=キー
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButtonSub();
		} else {
			doButtonMinus();
		}
		return true;
	case _KEY_NUM_ADD:
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButtonAdd();
		} else {
			doButtonPlus();
		}
		return true;
	case _KEY_NUM_SUB:
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButtonSub();
		} else {
			doButtonMinus();
		}
		return true;
	case _KEY_NUM_MUL: doButtonMul(); return true;
	case 186: doButtonMul(); return true;	// :*キー
	case _KEY_NUM_DIV: doButtonDiv(); return true;
	case 191: doButtonDiv(); return true;	// /?キー
	case 222:	// ^~キー
		doButtonPow();
		return true;
	case 192:	// @`キー
		insEditExpr( "@" );
		return true;
	case _KEY_SPACE: doButtonSpace(); return true;
	case _KEY_ENTER: doButtonEnter(); return true;
	}

	return false;
}
function onKeyUp( key ){
	if( (key == _KEY_SHIFT) && keyShiftOnly ){
		doButtonSHIFT();
		return true;
	}

	return false;
}
