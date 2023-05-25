const mainWidth    = 322;
const mainHeight   = 506;
const mainTitleEN  = "ClipGraph";
const mainTitleJP  = "関数グラフ";
const mainIcon     = "favicon.ico";
const mainTrayIcon = "trayicon.png";
const mainPage     = "index.html";

const { app, BrowserWindow, globalShortcut, Menu, nativeImage, shell, Tray } = require( "electron" );
const fs = require( "fs" );
const path = require( "path" );

const boundsInfoPath   = path.join( app.getPath( "userData" ), "bounds-info.json" );
const extFuncCachePath = path.join( app.getPath( "userData" ), "extfunc-cache.json" );
const profilePath      = path.join( app.getPath( "home" ), "ClipGraph.env" );

const singleLockFilePath   = path.join( app.getPath( "userData" ), "single_lock" );
const requestFocusFilePath = path.join( app.getPath( "userData" ), "request_focus" );

let mainWindow = null;
let trayIcon;
let contextMenu;

let _globalShortcut = "Ctrl+Alt+G";
let _globalShortcutRegistered = false;

const createWindow = () => {
	// バージョンの取得
	exports.version = app.getVersion();

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

	// グローバルショートカットを登録
	globalShortcut.register( _globalShortcut, () => {
		_globalShortcutRegistered = true;
		focusMainWindow();
	} );

	mainWindow.on( "close", () => {
		// ウィンドウ位置の保存
		fs.writeFileSync( boundsInfoPath, JSON.stringify( mainWindow.getBounds() ) );
	} );
	mainWindow.on( "closed", () => {
		// グローバルショートカットを登録解除
		if( _globalShortcutRegistered ){
			globalShortcut.unregister( _globalShortcut );
		}

		// 多重起動防止解除
		singleUnlock();

		mainWindow = null;
	} );

	// デベロッパーツール
//	mainWindow.webContents.openDevTools({ mode: 'detach' });

	// メイン・コンテンツ
	mainWindow.loadURL( "file://" + __dirname + "/" + mainPage );

	// トレイアイコン
	trayIcon = new Tray( nativeImage.createFromPath( __dirname + "/" + mainTrayIcon ) );
	trayIcon.on( "click", () => {
		focusMainWindow();
	} );

	// トレイアイコンにメニューを設定
	contextMenu = Menu.buildFromTemplate( [
		{ "label": (exports.isEnglish ? "Show" : "表示"), "click": () => { focusMainWindow(); } },
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

// アプリを手前に持ってくる
const focusMainWindow = () => {
	if( mainWindow != null ){
		let saveFlag = mainWindow.isAlwaysOnTop();
		mainWindow.setAlwaysOnTop( true );
		mainWindow.setAlwaysOnTop( saveFlag );
	}
};

// 多重起動防止
const requestFocus = () => {
	try {
		let file = fs.openSync(requestFocusFilePath, 'r');
		fs.close(file);
		try {
			fs.unlinkSync(requestFocusFilePath);
		} catch (e) {
		}
		return true;
	} catch (e) {
		// 手前表示要求ファイルが存在しない場合、ここに来る
	}
	return false;
};
const singleLock = () => {
	if( !requestFocus() ){
		try {
			let file = fs.openSync(singleLockFilePath, 'r');
			fs.close(file);
			try {
				// 存在していたので、手前へ表示させるためのファイルを作成
				fs.writeFileSync(requestFocusFilePath, "");
			} catch (e) {
			}
			return false;
		} catch (e) {
		}
	}
	try {
		fs.writeFileSync(singleLockFilePath, "");
	} catch (e) {
		// 権限等で書き込み失敗した場合もtrueとする
	}
	return true;
};
const singleUnlock = () => {
	try {
		fs.unlinkSync(singleLockFilePath);
	} catch (e) {
	}
};

setInterval( function(){
	if( requestFocus() ){
		// アプリを手前に持ってくる
		focusMainWindow();
	}
}, 500 );

app.on( "ready", () => {
	// 多重起動防止
	if( !singleLock() ){
		app.quit();
		return;
	}

	createWindow();
} );

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
exports.profilePath = profilePath;
exports.fs = fs;
exports.isEnglish = false;
exports.platform = process.platform;
exports.version = "";
