const mainTitleEN  = "ClipGraph";
const mainTitleJP  = "関数グラフ";
const mainTrayIcon = "trayicon.png";

const fs = require( "fs" );
const os = require( 'os' );
const path = require( "path" );

var appDir = '';
if( process.platform == 'win32' ){
	appDir = process.env.APPDATA;
}
if( process.platform == 'darwin' ){
	appDir = process.env.HOME + '/Library/Application Support';
}
if( appDir.length > 0 ){
	appDir = path.join( appDir, require( 'package.json' ).name );
	fs.mkdir( appDir, function( err ){} );
}
const boundsInfoPath   = path.join( appDir, "bounds-info.json" );
const extFuncCachePath = path.join( appDir, "extfunc-cache.json" );
const profilePath      = path.join( os.homedir(), "ClipGraph.env" );

var globalShortcut;
var trayIcon;
var contextMenu;

function DesktopAppAPI(){
	// バージョンの取得
	this.version = require( 'package.json' ).version;

	// ロケールの取得
	var locale = Intl.NumberFormat().resolvedOptions().locale;
	this.isEnglish = (locale != "ja");

	// グローバルショートカットを登録
	globalShortcut = new nw.Shortcut({
		key : "Ctrl+Alt+G",
		active : function(){
			nw.Window.get().focus();
		},
		failed : function(msg){
		}
	});
	nw.App.registerGlobalHotKey(globalShortcut);

	var win = nw.Window.get();
	win.on( "loaded", function(){
		// ウィンドウ位置の復元
		var bounds;
		try {
			bounds = JSON.parse( fs.readFileSync( boundsInfoPath, "utf8" ) );
		} catch( e ){
			bounds = { "x": 100, "y": 100 };
		}
		win.moveTo( bounds.x, bounds.y );
		win.show();
	} );
	win.on( "close", function(){
		// ウィンドウ位置の保存
		try {
			fs.writeFileSync( boundsInfoPath, JSON.stringify( { "x": win.x, "y": win.y } ) );
		} catch( e ){
		}

		// グローバルショートカットを登録解除
		nw.App.unregisterGlobalHotKey( globalShortcut );

		nw.App.quit();
	} );

	// デベロッパーツール
//	win.showDevTools();

	// トレイアイコン
	trayIcon = new nw.Tray({
		tooltip: this.isEnglish ? mainTitleEN : mainTitleJP,
		icon: mainTrayIcon
	});
	trayIcon.on("click", function(){
		nw.Window.get().focus();
	});

	// トレイアイコンにメニューを設定
	contextMenu = new nw.Menu();
	contextMenu.append(new nw.MenuItem({
		label: (this.isEnglish ? "Show" : "表示"),
		click: function(){
			nw.Window.get().focus();
		}
	}));
	contextMenu.append(new nw.MenuItem({
		label: (this.isEnglish ? "Quit" : "終了"),
		click: function(){
			nw.Window.get().close();
		}
	}));
	trayIcon.menu = contextMenu;

	// ヘルプをデフォルトブラウザで開くように設定
	win.on( 'new-win-policy', function( frame, url, policy ){
		policy.ignore();
		nw.Shell.openExternal( url );
	} );

	this.extFuncCachePath = extFuncCachePath;
	this.profilePath = profilePath;
	this.fs = fs;
	this.platform = process.platform;
}

window.desktopAppAPI = new DesktopAppAPI();
