#define _UI_GRAPH_MODE_LINEAR	0	// 線形座標
#define _UI_GRAPH_MODE_LOG_X	1	// X軸対数
#define _UI_GRAPH_MODE_LOG_Y	2	// Y軸対数
#define _UI_GRAPH_MODE_LOG_XY	3	// 対数座標
#define _UI_GRAPH_MODE_PARAM	4	// 媒介変数
#define _UI_GRAPH_MODE_POLAR	5	// 極座標

#define _UI_GRAPH_TOOL_TRACE	0	// トレースツール
#define _UI_GRAPH_TOOL_HAND		1	// 手のひらツール
#define _UI_GRAPH_TOOL_ZOOM		2	// ボックスズームツール

#define _UI_GRAPH_ENV_OFFSET	0	// オフセット指定
#define _UI_GRAPH_ENV_WINDOW	1	// ウィンドウ指定

function GraphUI( proc, param ){
	this._proc  = proc;
	this._param = param;

	this._curVar = 65;

	this._graph  = procGraph();
	this._gWorld = procGWorld();

	this._mode = _UI_GRAPH_MODE_LINEAR;

	this._rectOffsetX  = _DIV( this._gWorld._width , 2 );
	this._rectOffsetY  = _DIV( this._gWorld._height, 2 );
	this._rectRatioX   =  20.0;
	this._rectRatioY   = -20.0;
	this._paramOffsetX = _DIV( this._gWorld._width , 2 );
	this._paramOffsetY = _DIV( this._gWorld._height, 2 );
	this._paramRatioX  =  20.0;
	this._paramRatioY  = -20.0;
	this._paramMin     = 0.0;
	this._paramMax     = 360.0;
	this._paramPitch   = 1.0;
	this._polarOffsetX = _DIV( this._gWorld._width , 2 );
	this._polarOffsetY = _DIV( this._gWorld._height, 2 );
	this._polarRatioX  =  20.0;
	this._polarRatioY  = -20.0;
	this._polarMin     = 0.0;
	this._polarMax     = 360.0;
	this._polarPitch   = 1.0;

	// 色
	this._colorBack  = 11;		// 背景
	this._colorScale = 12;		// X/Y軸
	this._colorUnit  = 14;		// 目盛り線
	this._colorText  = 15;		// 文字
	this._color = new Array();	// グラフ

	// 目盛り線
	this._unitX = 1.0;	// X方向
	this._unitY = 1.0;	// Y方向

	// 目盛り文字
	this._textX = 1;	// X方向（指定値毎に文字を表示）
	this._textY = 1;	// Y方向（指定値毎に文字を表示）

	// グラフ再生成
	this._rePlotModeFlag   = true;	// 座標系の変更時
	this._rePlotAngleFlag  = true;	// 角度の単位変更時
	this._rePlotWindowFlag = true;	// ウィンドウ座標の変更時

	this._tool = _UI_GRAPH_TOOL_TRACE;

	this._scrollFlag = false;
	this._toolX      = 0;
	this._toolY      = 0;
	this._posX       = 0.0;
	this._posY       = 0.0;
	this._posY2      = 0.0;
	this._endX       = 0.0;
	this._endY       = 0.0;
	this._drawFlag   = false;

	this._envType = _UI_GRAPH_ENV_OFFSET;

	this._envOffsetX = 0.0;
	this._envOffsetY = 0.0;
	this._envRatioX  = 0.0;
	this._envRatioY  = 0.0;

	this._staticExpr1 = new String();
	this._staticExpr2 = new String();
	this._editExpr1   = new String();
	this._editExpr2   = new String();

	this._staticX  = new String();
	this._staticY1 = new String();
	this._staticY2 = new String();
	this._editX    = new String();
	this._editY1   = new String();
	this._editY2   = new String();

	this._tableX  = new String();
	this._tableY1 = new String();
	this._tableY2 = new String();

	this._editMin   = new String();
	this._editMax   = new String();
	this._editPitch = new String();

	this._editEnvOffsetX = new String();
	this._editEnvOffsetY = new String();
	this._editEnvRatioX  = new String();
	this._editEnvRatioY  = new String();

	this._editEnvLeft   = new String();
	this._editEnvBottom = new String();
	this._editEnvRight  = new String();
	this._editEnvTop    = new String();

	onGraphInitEnv( this );

	this.setMode();
}

GraphUI.prototype = {

	updateSize : function(){
		onGraphInitEnv( this );
		this._setWindow();
		this.redraw();
	},

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
		var tmpRatioX  = new _Float();
		var tmpRatioY  = new _Float();
		this._gWorld.getWindow( tmpOffsetX, tmpOffsetY, tmpRatioX, tmpRatioY );
		switch( this._graph.mode() ){
		case _GRAPH_MODE_RECT:
			this._rectOffsetX = tmpOffsetX._val;
			this._rectOffsetY = tmpOffsetY._val;
			this._rectRatioX  = tmpRatioX ._val;
			this._rectRatioY  = tmpRatioY ._val;
			break;
		case _GRAPH_MODE_PARAM:
			this._paramOffsetX = tmpOffsetX._val;
			this._paramOffsetY = tmpOffsetY._val;
			this._paramRatioX  = tmpRatioX ._val;
			this._paramRatioY  = tmpRatioY ._val;
			break;
		case _GRAPH_MODE_POLAR:
			this._polarOffsetX = tmpOffsetX._val;
			this._polarOffsetY = tmpOffsetY._val;
			this._polarRatioX  = tmpRatioX ._val;
			this._polarRatioY  = tmpRatioY ._val;
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
		this._editX  = floatToString( x  );
		this._editY1 = floatToString( y1 );
		if( this._graph.mode() == _GRAPH_MODE_PARAM ){
			this._editY2 = floatToString( y2 );
		} else {
			this._editY2 = "";
		}
		onGraphUpdateValue( this );

		// 目印を描画する
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
			oldMin   = this._paramMin;
			oldMax   = this._paramMax;
			oldPitch = this._paramPitch;
			procToken().stringToValue( this._param, this._editMin  , x ); this._paramMin   = x.toFloat();
			procToken().stringToValue( this._param, this._editMax  , x ); this._paramMax   = x.toFloat();
			procToken().stringToValue( this._param, this._editPitch, x ); this._paramPitch = x.toFloat();
			if(
				(this._paramMin   != oldMin  ) ||
				(this._paramMax   != oldMax  ) ||
				(this._paramPitch != oldPitch)
			){
				ret = true;
			}
			break;
		case _GRAPH_MODE_POLAR:
			oldMin   = this._polarMin;
			oldMax   = this._polarMax;
			oldPitch = this._polarPitch;
			var type = new _Integer();
			var updateFlag = new _Boolean();
			this._proc.getAngType( type, updateFlag );
			var tmpValue = newValueArray( 3 );
			procToken().stringToValue( this._param, this._editMin  , x ); tmpValue[0].ass( x.toFloat() );
			procToken().stringToValue( this._param, this._editMax  , x ); tmpValue[1].ass( x.toFloat() );
			procToken().stringToValue( this._param, this._editPitch, x ); tmpValue[2].ass( x.toFloat() );
			tmpValue[0].angToAng( type._val, _ANG_TYPE_DEG ); this._polarMin   = tmpValue[0].toFloat();
			tmpValue[1].angToAng( type._val, _ANG_TYPE_DEG ); this._polarMax   = tmpValue[1].toFloat();
			tmpValue[2].angToAng( type._val, _ANG_TYPE_DEG ); this._polarPitch = tmpValue[2].toFloat();
			if(
				(this._polarMin   != oldMin  ) ||
				(this._polarMax   != oldMax  ) ||
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
			this._editMin   = "";
			this._editMax   = "";
			this._editPitch = "";
			break;
		case _GRAPH_MODE_PARAM:
			this._editMin   = floatToStringPoint( this._paramMin   );
			this._editMax   = floatToStringPoint( this._paramMax   );
			this._editPitch = floatToStringPoint( this._paramPitch );
			break;
		case _GRAPH_MODE_POLAR:
			var type       = new _Integer();
			var updateFlag = new _Boolean();
			this._proc.getAngType( type, updateFlag );
			var tmpValue = newValueArray( 3 );
			tmpValue[0].ass( this._polarMin   ); tmpValue[0].angToAng( _ANG_TYPE_DEG, type._val );
			tmpValue[1].ass( this._polarMax   ); tmpValue[1].angToAng( _ANG_TYPE_DEG, type._val );
			tmpValue[2].ass( this._polarPitch ); tmpValue[2].angToAng( _ANG_TYPE_DEG, type._val );
			this._editMin   = floatToStringPoint( tmpValue[0].toFloat() );
			this._editMax   = floatToStringPoint( tmpValue[1].toFloat() );
			this._editPitch = floatToStringPoint( tmpValue[2].toFloat() );
			break;
		}
		onGraphUpdatePitch( this );
	},

	redraw : function(){
		this._graph.clear(
			this.indexToColor( this._colorBack  ),
			this.indexToColor( this._colorScale ),
			this.indexToColor( this._colorUnit  ), this._unitX, this._unitY,
			this.indexToColor( this._colorText  ), this._textX, this._textY
			);

		// とりあえず既に計算された結果を表示
		if( this.indexToColor( this._color[this._graph._curIndex] ) != this._graph.color() ){
			this._graph.setColor( this.indexToColor( this._color[this._graph._curIndex] ) );
		}
_TRY
		this._graph.rePlot();
_CATCH
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
		case  0: return   0;	// 黒
		case  1: return   1;	// 赤
		case  2: return 249;	// 赤
		case  3: return   2;	// 緑
		case  4: return 250;	// 緑
		case  5: return   3;	// 黄
		case  6: return 251;	// 黄
		case  7: return   4;	// 青
		case  8: return 252;	// 青
		case  9: return   5;	// マゼンタ
		case 10: return 253;	// マゼンタ
		case 11: return   6;	// シアン
		case 12: return 254;	// シアン
		case 13: return   7;	// グレー
		case 14: return 247;	// グレー
		case 15: return 255;	// 白
		}
		return 0;
	},

	startTool : function( x, y ){
		this._toolX = x;
		this._toolY = y;
		if(
			(this._toolX >= 0/*theApp.fGraphMapPosX*/) &&
			(this._toolY >= 0/*theApp.fGraphMapPosY*/) &&
			(this._toolX < (0/*theApp.fGraphMapPosX*/ + this._gWorld._width )) &&
			(this._toolY < (0/*theApp.fGraphMapPosY*/ + this._gWorld._height))
		){
			switch( this._tool ){
			case _UI_GRAPH_TOOL_TRACE:
				var ans = new _GraphAns();
				if( this._graph.getAns(
					this._toolX - 0/*theApp.fGraphMapPosX*/,
					this._toolY - 0/*theApp.fGraphMapPosY*/,
					ans
				) ){
					this._posX  = ans._x;
					this._posY  = ans._y1;
					this._posY2 = ans._y2;
					this._editX  = floatToString( this._posX );
					this._editY1 = floatToString( this._posY );
					if( this._graph.mode() == _GRAPH_MODE_PARAM ){
						this._editY2 = floatToString( this._posY2 );
					}
					onGraphUpdateValue( this );

					this._drawFlag = true;
				} else {
					this._editX  = "";
					this._editY1 = "";
					this._editY2 = "";
					onGraphUpdateValue( this );

					this._drawFlag = false;
				}
				break;
			case _UI_GRAPH_TOOL_ZOOM:
				this._posX = this._gWorld.wndPosX( this._toolX - 0/*theApp.fGraphMapPosX*/ );
				this._posY = this._gWorld.wndPosY( this._toolY - 0/*theApp.fGraphMapPosY*/ );
				this._endX = this._posX;
				this._endY = this._posY;
				break;
			}

			if( !this._scrollFlag ){
				this._scrollFlag = true;

				switch( this._tool ){
				case _UI_GRAPH_TOOL_TRACE:
					// 目印を描画する
					if( this._drawFlag ){
						this._graph.mark( this._posX, this._posY, this._posY2 );
					}

					break;
				case _UI_GRAPH_TOOL_ZOOM:
					// 目印を描画する
					this._graph.markRect( this._posX, this._posY, this._endX, this._endY );

					break;
				case _UI_GRAPH_TOOL_HAND:
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
			case _UI_GRAPH_TOOL_TRACE:
				// 目印を描画する
				if( this._drawFlag ){
					this._graph.mark( this._posX, this._posY, this._posY2 );
				}

				break;
			case _UI_GRAPH_TOOL_ZOOM:
				// 目印を描画する
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
			case _UI_GRAPH_TOOL_HAND:
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
			case _UI_GRAPH_TOOL_TRACE:
				if( (this._toolX != x) || (this._toolY != y) ){
					// 目印を消す
					if( this._drawFlag ){
						this._graph.mark( this._posX, this._posY, this._posY2 );
					}

					this._toolX = x;
					this._toolY = y;
					var ans = new _GraphAns();
					if( this._graph.getAns(
						this._toolX - 0/*theApp.fGraphMapPosX*/,
						this._toolY - 0/*theApp.fGraphMapPosY*/,
						ans
					) ){
						this._posX  = ans._x;
						this._posY  = ans._y1;
						this._posY2 = ans._y2;
						this._editX  = floatToString( this._posX );
						this._editY1 = floatToString( this._posY );
						if( this._graph.mode() == _GRAPH_MODE_PARAM ){
							this._editY2 = floatToString( this._posY2 );
						}
						onGraphUpdateValue( this );

						this._drawFlag = true;
					} else {
						this._editX  = "";
						this._editY1 = "";
						this._editY2 = "";
						onGraphUpdateValue( this );

						this._drawFlag = false;
					}

					// 目印を描画する
					if( this._drawFlag ){
						this._graph.mark( this._posX, this._posY, this._posY2 );
					}
				}
				break;
			case _UI_GRAPH_TOOL_ZOOM:
				if( (this._toolX != x) || (this._toolY != y) ){
					// 目印を消す
					this._graph.markRect( this._posX, this._posY, this._endX, this._endY );

					this._toolX = x;
					this._toolY = y;
					this._endX = this._gWorld.wndPosX( this._toolX - 0/*theApp.fGraphMapPosX*/ );
					this._endY = this._gWorld.wndPosY( this._toolY - 0/*theApp.fGraphMapPosY*/ );
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

					// 目印を描画する
					this._graph.markRect( this._posX, this._posY, this._endX, this._endY );
				}
				break;
			case _UI_GRAPH_TOOL_HAND:
				if( (this._toolX != x) || (this._toolY != y) ){
					this._gWorld.scroll( x, y );
					this._toolX = x;
					this._toolY = y;

					// グラフィックを再表示する
					this.redraw();
				}
				break;
			}
		}
	},

	zoomIn : function(){
		var offsetX = new _Float();
		var offsetY = new _Float();
		var ratioX  = new _Float();
		var ratioY  = new _Float();
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
		var ratioX  = new _Float();
		var ratioY  = new _Float();
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

		this._editX  = "";
		this._editY1 = "";
		this._editY2 = "";
		onGraphUpdateValue( this );
	},

	draw : function(){
		var rePlotFlag;
		var savePitch;

		// 計算式が変更されているかどうか調べる
		switch ( this._graph.mode() ) {
		case _GRAPH_MODE_RECT:
		case _GRAPH_MODE_POLAR:
			if( this._editExpr1 != this._graph.expr() ){
				// 数表のリセット
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
				// 数表のリセット
				this.clearTable();

				this._graph.setExpr1( this._editExpr1 );
				this._graph.setExpr2( this._editExpr2 );
				rePlotFlag = false;
			} else {
				rePlotFlag = true;
			}
			break;
		}

		// グラフ描画色が変更されているかどうか調べる
		if( this.indexToColor( this._color[this._graph._curIndex] ) != this._graph.color() ){
			this._graph.setColor( this.indexToColor( this._color[this._graph._curIndex] ) );
		}

_TRY
		switch( this._graph.mode() ){
		case _GRAPH_MODE_RECT:
			this._graph.setStart( this._gWorld.wndPosX( 0 ) );
			this._graph.setEnd  ( this._gWorld.wndPosX( this._gWorld._width ) );
			this._graph.setStep ( 0.0/*無視される*/ );
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
			this._graph.setStart( this._paramMin   );
			this._graph.setEnd  ( this._paramMax   );
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
			tmpValue[0].ass( this._polarMin   ); tmpValue[0].angToAng( _ANG_TYPE_DEG, complexAngType() );
			tmpValue[1].ass( this._polarMax   ); tmpValue[1].angToAng( _ANG_TYPE_DEG, complexAngType() );
			tmpValue[2].ass( this._polarPitch ); tmpValue[2].angToAng( _ANG_TYPE_DEG, complexAngType() );
			this._graph.setStart( tmpValue[0].toFloat() );
			this._graph.setEnd  ( tmpValue[1].toFloat() );
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
_CATCH
	},

	clear : function(){
		// 計算結果を消去する
		this._graph.delAns();

		// グラフィックを再表示する
		this.redraw();
	},

	setMode : function( mode ){
		var newMode;

		if( mode != undefined ){
			this._mode = mode;
		}

		switch( this._mode ){
		case _UI_GRAPH_MODE_LINEAR: newMode = _GRAPH_MODE_RECT ; onGraphSetLogScaleX( this,  0.0 ); onGraphSetLogScaleY( this,  0.0 ); break;
		case _UI_GRAPH_MODE_LOG_X : newMode = _GRAPH_MODE_RECT ; onGraphSetLogScaleX( this, 10.0 ); onGraphSetLogScaleY( this,  0.0 ); break;
		case _UI_GRAPH_MODE_LOG_Y : newMode = _GRAPH_MODE_RECT ; onGraphSetLogScaleX( this,  0.0 ); onGraphSetLogScaleY( this, 10.0 ); break;
		case _UI_GRAPH_MODE_LOG_XY: newMode = _GRAPH_MODE_RECT ; onGraphSetLogScaleX( this, 10.0 ); onGraphSetLogScaleY( this, 10.0 ); break;
		case _UI_GRAPH_MODE_PARAM : newMode = _GRAPH_MODE_PARAM; break;
		case _UI_GRAPH_MODE_POLAR : newMode = _GRAPH_MODE_POLAR; break;
		}

		if( (mode == undefined) || (this._graph.mode() != newMode) ){
			// 計算式の初期化
			this._editExpr1 = "";
			this._editExpr2 = "";
			onGraphClearExpr( this );

			switch( newMode ){
			case _GRAPH_MODE_RECT:
				this._param._var._label.setLabel( _CHAR( 'x' ), "x", true );
				onGraphSetIndex( this, _CHAR( 'x' ) );

				this._staticExpr1 = "y=";
				this._staticExpr2 = "";

				this._staticX  = "x=";
				this._staticY1 = "y=";
				this._staticY2 = "";

				this._tableX  = "x";
				this._tableY1 = "y";
				this._tableY2 = "";

				break;
			case _GRAPH_MODE_PARAM:
				this._param._var._label.setLabel( _CHAR( 't' ), "t", true );
				onGraphSetIndex( this, _CHAR( 't' ) );

				this._staticExpr1 = "x=";
				this._staticExpr2 = "y=";

				this._staticX  = "t=";
				this._staticY1 = "x=";
				this._staticY2 = "y=";

				this._tableX  = "t";
				this._tableY1 = "x";
				this._tableY2 = "y";

				break;
			case _GRAPH_MODE_POLAR:
				this._param._var._label.setLabel( _CHAR( 't' ), "t", true );
				onGraphSetIndex( this, _CHAR( 't' ) );

				this._staticExpr1 = "r=";
				this._staticExpr2 = "";

				this._staticX  = "t=";
				this._staticY1 = "r=";
				this._staticY2 = "";

				this._tableX  = "t";
				this._tableY1 = "r";
				this._tableY2 = "";

				break;
			}
			onGraphUpdateStatic( this );

			// 数表のリセット
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
		var tmpRatioX  = new _Float();
		var tmpRatioY  = new _Float();
		this._gWorld.getWindow( tmpOffsetX, tmpOffsetY, tmpRatioX, tmpRatioY );
		this._envOffsetX = tmpOffsetX._val;
		this._envOffsetY = tmpOffsetY._val;
		this._envRatioX  = tmpRatioX ._val;
		this._envRatioY  = tmpRatioY ._val;

		this._editEnvOffsetX = floatToStringPoint( this._envOffsetX );
		this._editEnvOffsetY = floatToStringPoint( this._envOffsetY );
		this._editEnvRatioX  = floatToStringPoint( this._envRatioX  );
		this._editEnvRatioY  = floatToStringPoint( this._envRatioY  );
		onGraphUpdateEnvOffset( this );

		this.resetEnvWindow();
	},

	resetEnvOffset : function(){
		var left   = parseFloat( this._editEnvLeft   );
		var bottom = parseFloat( this._editEnvBottom );
		var right  = parseFloat( this._editEnvRight  );
		var top    = parseFloat( this._editEnvTop    );
		if( _ISNAN( left ) || _ISNAN( bottom ) || _ISNAN( right ) || _ISNAN( top ) ){
			return;
		}

		var svOffsetX = new _Float();
		var svOffsetY = new _Float();
		var svRatioX  = new _Float();
		var svRatioY  = new _Float();
		this._gWorld.getWindow( svOffsetX, svOffsetY, svRatioX, svRatioY );
		this._gWorld.setWindowIndirect( left, bottom, right, top );

		var tmpOffsetX = new _Float();
		var tmpOffsetY = new _Float();
		var tmpRatioX  = new _Float();
		var tmpRatioY  = new _Float();
		this._gWorld.getWindow( tmpOffsetX, tmpOffsetY, tmpRatioX, tmpRatioY );
		this._envOffsetX = tmpOffsetX._val;
		this._envOffsetY = tmpOffsetY._val;
		this._envRatioX  = tmpRatioX ._val;
		this._envRatioY  = tmpRatioY ._val;

		this._editEnvOffsetX = floatToStringPoint( this._envOffsetX );
		this._editEnvOffsetY = floatToStringPoint( this._envOffsetY );
		this._editEnvRatioX  = floatToStringPoint( this._envRatioX  );
		this._editEnvRatioY  = floatToStringPoint( this._envRatioY  );
		onGraphUpdateEnvOffset( this );

		this._gWorld.setWindow( svOffsetX._val, svOffsetY._val, svRatioX._val, svRatioY._val );
	},

	resetEnvWindow : function(){
		var svOffsetX = new _Float();
		var svOffsetY = new _Float();
		var svRatioX  = new _Float();
		var svRatioY  = new _Float();
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

		var left   = this._gWorld.wndPosX( 0                    );
		var top    = this._gWorld.wndPosY( 0                    );
		var right  = this._gWorld.wndPosX( this._gWorld._width  );
		var bottom = this._gWorld.wndPosY( this._gWorld._height );

		this._editEnvLeft   = floatToStringPoint( left   );
		this._editEnvBottom = floatToStringPoint( bottom );
		this._editEnvRight  = floatToStringPoint( right  );
		this._editEnvTop    = floatToStringPoint( top    );
		onGraphUpdateEnvWindow( this );

		this._gWorld.setWindow( svOffsetX._val, svOffsetY._val, svRatioX._val, svRatioY._val );
	},

	resetEnv : function(){
		this._envOffsetX = _DIV( this._gWorld._width , 2 );
		this._envOffsetY = _DIV( this._gWorld._height, 2 );
		this._envRatioX  =  20.0;
		this._envRatioY  = -20.0;

		this._editEnvOffsetX = floatToStringPoint( this._envOffsetX );
		this._editEnvOffsetY = floatToStringPoint( this._envOffsetY );
		this._editEnvRatioX  = floatToStringPoint( this._envRatioX  );
		this._editEnvRatioY  = floatToStringPoint( this._envRatioY  );
		onGraphUpdateEnvOffset( this );

		this.resetEnvWindow();
	},

	endEnv : function(){
		var offsetX = parseFloat( this._editEnvOffsetX );
		var offsetY = parseFloat( this._editEnvOffsetY );
		var ratioX  = parseFloat( this._editEnvRatioX  );
		var ratioY  = parseFloat( this._editEnvRatioY  );
		if( _ISNAN( offsetX ) || _ISNAN( offsetY ) || _ISNAN( ratioX ) || _ISNAN( ratioY ) ){
			return;
		}
		this._envOffsetX = offsetX;
		this._envOffsetY = offsetY;
		this._envRatioX  = ratioX;
		this._envRatioY  = ratioY;

		switch( this._graph.mode() ){
		case _GRAPH_MODE_RECT:
			this._rectOffsetX = this._envOffsetX;
			this._rectOffsetY = this._envOffsetY;
			this._rectRatioX  = this._envRatioX;
			this._rectRatioY  = this._envRatioY;
			break;
		case _GRAPH_MODE_PARAM:
			this._paramOffsetX =  this._envOffsetX;
			this._paramOffsetY =  this._envOffsetY;
			this._paramRatioX  =  this._envRatioX;
			this._paramRatioY  = -this._envRatioX;
			break;
		case _GRAPH_MODE_POLAR:
			this._polarOffsetX =  this._envOffsetX;
			this._polarOffsetY =  this._envOffsetY;
			this._polarRatioX  =  this._envRatioX;
			this._polarRatioY  = -this._envRatioX;
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

// マウス関連
var _graph_mouse_x;
var _graph_mouse_y;

// タッチ関連
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
		// マウスイベント
		_addGraphEventListener( _graph_event_canvas.element(), "mousedown", _onGraphMouseDown );
		_addGraphEventListener( _graph_event_canvas.element(), "mousemove", _onGraphMouseMove );
		_addGraphEventListener( _graph_event_canvas.element(), "mouseout" , _onGraphMouseOut  );
		_addGraphEventListener( _graph_event_canvas.element(), "mouseover", _onGraphMouseOver );
		_addGraphEventListener( _graph_event_canvas.element(), "mouseup"  , _onGraphMouseUp   );
	} else {
		// タッチイベント
		_addGraphEventListener( document, "touchstart", _onGraphTouchStart );
		_addGraphEventListener( document, "touchmove" , _onGraphTouchMove  );
		_addGraphEventListener( document, "touchend"  , _onGraphTouchEnd   );
	}
}

function removeGraphEvent(){
	if( _graph_event_canvas == null ){
		return;
	}

	if( isPC() ){
		// マウスイベント
		_removeGraphEventListener( _graph_event_canvas.element(), "mousedown", _onGraphMouseDown );
		_removeGraphEventListener( _graph_event_canvas.element(), "mousemove", _onGraphMouseMove );
		_removeGraphEventListener( _graph_event_canvas.element(), "mouseout" , _onGraphMouseOut  );
		_removeGraphEventListener( _graph_event_canvas.element(), "mouseover", _onGraphMouseOver );
		_removeGraphEventListener( _graph_event_canvas.element(), "mouseup"  , _onGraphMouseUp   );
	} else {
		// タッチイベント
		_removeGraphEventListener( document, "touchstart", _onGraphTouchStart );
		_removeGraphEventListener( document, "touchmove" , _onGraphTouchMove  );
		_removeGraphEventListener( document, "touchend"  , _onGraphTouchEnd   );
	}

	_graph_event_canvas = null;
}

function _getGraphMouse( e ){
	if( _graph_event_canvas == null ){
		return false;
	}
	_graph_mouse_x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - _graph_event_canvas.left();
	_graph_mouse_y = e.clientY + document.body.scrollTop  + document.documentElement.scrollTop  - _graph_event_canvas.top ();
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

//window.onGraphInitEnv = function( _this ){};

//window.onGraphSetMode = function( _this, mode ){};
//window.onGraphSetIndex = function( _this, index ){};
//window.onGraphSetLogScaleX = function( _this, base ){};
//window.onGraphSetLogScaleY = function( _this, base ){};
//window.onGraphClearExpr = function( _this ){};
//window.onGraphClearTable = function( _this ){};
//window.onGraphUpdateStatic = function( _this ){};
//window.onGraphUpdateValue = function( _this ){};
//window.onGraphUpdatePitch = function( _this ){};
//window.onGraphUpdateEnvOffset = function( _this ){};
//window.onGraphUpdateEnvWindow = function( _this ){};

//window.onGraphStartPlot = function(){};
//window.onGraphEndPlot = function(){};
//window.onGraphStartRePlot = function(){};
//window.onGraphEndRePlot = function(){};

//window.isPC = function(){ return true; };
//window.onGraphMouseDown = function(){};
//window.onGraphMouseMove = function(){};
//window.onGraphMouseOut = function(){};
//window.onGraphMouseOver = function(){};
//window.onGraphMouseUp = function(){};
//window.onGraphTouchStart = function(){};
//window.onGraphTouchMove = function(){};
//window.onGraphTouchEnd = function(){};
