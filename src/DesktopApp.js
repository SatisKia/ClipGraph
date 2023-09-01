function DesktopApp( main ){
	this._main = main;

	try {
		this._extfunc = JSON.parse( this._main.fs.readFileSync( this._main.extFuncCachePath, "utf8" ) );
	} catch( e ){
		this._extfunc = {};
	}
	this._extfunc_update = false;

	this._extfunc_val = "";
	this._extfunc_s   = 0;
	this._extfunc_str = "";
}

DesktopApp.prototype = {

	version : function(){
		return this._main.version;
	},
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
			try {
				this._main.fs.writeFileSync( this._main.extFuncCachePath, JSON.stringify( this._extfunc ) );
			} catch( e ){}
		}
	},

	clipboardRead : function(){
		return this._main.clipboard.readText();
	},
	clipboardWrite : function( text ){
		this._main.clipboard.writeText( text );
	},

	beep : function(){
		this._main.shell.beep();
	},

	readProfile : function(){
		try {
			return this._main.fs.readFileSync( this._main.profilePath, "utf8" );
		} catch( e ){
		}
		return "";
	},
	writeProfile : function( text ){
		try {
			this._main.fs.writeFileSync( this._main.profilePath, text );
		} catch( e ){}
	}

};
