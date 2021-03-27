const mainWidth    = 322;
const mainHeight   = 506;
const mainTitleEN  = "ClipGraph";
const mainTitleJP  = "関数グラフ";
const mainIcon     = "favicon.ico";
const mainTrayIcon = "trayicon.png";
const mainPage     = "index.html";

const { app, BrowserWindow, Menu, nativeImage, Tray, shell } = require( "electron" );
const fs = require( "fs" );
const path = require( "path" );

const boundsInfoPath   = path.join( app.getPath( "userData" ), "bounds-info.json" );
const extFuncCachePath = path.join( app.getPath( "userData" ), "extfunc-cache.json" );

let mainWindow = null;
let trayIcon;
let contextMenu;

const createWindow = () => {
	// ロケールの取得
	exports.isEnglish = (app.getLocale() != "ja");

	// ウィンドウ位置の復元
	let bounds;
	try {
		bounds = JSON.parse( fs.readFileSync( boundsInfoPath, "utf8" ) );
	} catch( e ){
		bounds = { "x": 100, "y": 100 };
	}

	// メイン・ウィンドウ
	mainWindow = new BrowserWindow( {
		"width": mainWidth,
		"height": mainHeight,
		"useContentSize": true,
		"x": bounds.x,
		"y": bounds.y,
		"resizable": false,
		"movable": true,
		"minimizable": true,
		"maximizable": false,
		"closable": true,
		"skipTaskbar": true,
		"title": (exports.isEnglish ? mainTitleEN : mainTitleJP),
		"icon": mainIcon,
		"frame": true
	} );
	mainWindow.on( "close", () => {
		// ウィンドウ位置の保存
		fs.writeFileSync( boundsInfoPath, JSON.stringify( mainWindow.getBounds() ) );
	} );
	mainWindow.on( "closed", () => {
		mainWindow = null;
	} );

	// メイン・コンテンツ
	mainWindow.loadURL( "file://" + __dirname + "/" + mainPage );

	// トレイアイコン
	trayIcon = new Tray( nativeImage.createFromPath( __dirname + "/" + mainTrayIcon ) );
	trayIcon.on( "click", () => {
		mainWindow.focus();
	} );

	// トレイアイコンにメニューを設定
	contextMenu = Menu.buildFromTemplate( [
		{ "label": (exports.isEnglish ? "Show" : "表示"), "click": () => { mainWindow.focus(); } },
		{ "label": (exports.isEnglish ? "Quit" : "終了"), "click": () => { mainWindow.close(); } }
	] );
	trayIcon.setContextMenu( contextMenu );

	// トレイアイコンにツールチップを設定
	trayIcon.setToolTip( exports.isEnglish ? mainTitleEN : mainTitleJP );

	// ヘルプをデフォルトブラウザで開くように設定
	mainWindow.webContents.on( 'new-window', (event, url) => {
		event.preventDefault();
		shell.openExternal( url );
	} );
};

app.on( "ready", createWindow );

app.on( "window-all-closed", () => {
	if( process.platform != "darwin" ){
		app.quit();
	}
} );

app.on( "activate", () => {
	if( mainWindow == null ){
		createWindow();
	}
} );

exports.extFuncCachePath = extFuncCachePath;
exports.fs = fs;
exports.isEnglish = false;
exports.platform = process.platform;
