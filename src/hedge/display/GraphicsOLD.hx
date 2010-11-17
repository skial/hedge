/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.geom.Matrix;
import hedge.Object;
import hedge.Setup;

class GraphicsOLD extends Object {
	
	/* INTERNAL VARIABLES */
	
	/*
	 * key:
	 * * 	= default
	 * ?	= todo
	 */
	
	private var _r:Raphael;
	private var _e:Dynamic;
	private var _p:DisplayObject;
	
	private static var i:Int 						= 0;
	private static var path:String 				= '';
	
	private static var _fill_c:String 			= '#ffffff';
	private static var _fill_a:Float 			= 0;
	
	private static var _stroke_c:String 		= '#000000';
	private static var _stroke_t:Float 			= 1;
	private static var _stroke_a:Float 			= 1.0;
	private static var _stroke_lc:String 		= 'round';							// possible values: none, round*, square
	private static var _stroke_lj:String 		= 'round';							// possible values: miter, round*, bevel
	private static var _stroke_ml:Float 		= 3;
	
	private static var _gr_c:Array<Int> 		= new Array<Int>();				// colors
	private static var _gr_a:Array<Float> 		= new Array<Float>();				// alphas - dont work
	private static var _gr_r:Array<Int> 		= new Array<Int>();					// ratios
	
	private static var ALPHA:String 				= 'opacity';
	private static var COLOR:String 				= 'fill';
	private static var COLOR_ALPHA:String 		= 'fill-opacity';
	private static var LINE_THICKNESS:String 	= 'stroke-width';
	private static var LINE_COLOR:String 		= 'stroke';
	private static var LINE_ALPHA:String 		= 'stroke-opacity';
	private static var LINECAP:String 			= 'stroke-linecap';
	private static var LINEJOINTS:String 		= 'stroke-linejoin';
	private static var MITERLIMIT:String 		= 'stroke-miterlimit';
	
	private static var gradient:String = '';
	
	/**
	 * 
	 * @param	parent	Containing DisplayObjectContainer eg Sprite, Shape
	 */
	public function new(?parent:DisplayObject = null) {
		super();
		_p = parent == null ? Setup.__default__ : parent;
		_p.__jq__.append(__jq__ = new JQuery('<div>'));
		__jq__.attr('id', _p.__originalName__ + '-graphics').css( { width:'100%', height:'100%' } );
	}
	
	public function beginBitmapFill(bitmap:BitmapData, matrix:Matrix = null, repeat:Bool = true, smooth:Bool = false) {
		// maybe use canvas...?
	}
	
	public function beginFill(color:Int, alpha:Float = 1.0) {
		_fill_c = Setup.RGB_to_String(color);
		_fill_a = alpha;
	}
	
	/**
	 * 
	 * @param	type					| RADIAL gradients can only be applied to circles and ellipses - raphaeljs restriction
	 * @param	colors
	 * @param	alphas 					| alpha's dont work with gradients in raphaeljs - (potential raphaeljs bug?)
	 * @param	ratios					| seems fine with LINEAR gradients 0 being smallest 255 being biggest vaule - (I might be wrong?),
	 * 									  but the biggest value for RADIAL is radius*2 eg. radius = 50, max value will be 100
	 * @param	matrix?
	 * @param	spreadMethod?
	 * @param	interpolationMethod?
	 * @param	focalPointRatio?		| might change from Float to Array<Float> as raphaeljs can take more than one value - (possible enhancement?)
	 */
	public function beginGradientFill(type:String, colors:Array<Int>, alphas:Array<Float>, ratios:Array<Int>, matrix:Matrix = null, spreadMethod:String = 'pad', interpolationMethod:String = 'rgb', focalPointRatio:Float = 0) {
		gradient = type;
		_gr_c = colors;
		_gr_a = alphas;
		_gr_r = ratios;
	}
	
	public function clear() {
		_r.clear();
		reset();
	}
	
	public function curveTo(controlX:Float, controlY:Float, anchorX:Float, anchorY:Float) {
		checkRaphael();
		path += 'S' + controlX + ' ' + controlY + ' ' + anchorX + ' ' + anchorY;
	}
	
	public function drawCircle(x:Float, y:Float, radius:Float) {
		checkRaphael();
		_e = _r.circle(x, y, radius);
	}
	
	public function drawEllipse(x:Float, y:Float, width:Float, height:Float) {
		checkRaphael();
		_e = _r.ellipse(x, y, width, height);
	}
	
	public function drawRect(x:Float, y:Float, width:Float, height:Float) {
		checkRaphael();
		_e = _r.rect(x, y, width, height);
	}
	
	public function drawRoundRect(x:Float, y:Float, width:Float, height:Float, radius:Float) {
		checkRaphael();
		_e = _r.rect(x, y, width, height, radius);
	}
	
	public function endFill() {
		
		if (path != '') {
			_e = _r.path(path + 'z');
		}
				
		/* LINE STYLE */
		_e.attr(LINE_THICKNESS, _stroke_t);
		_e.attr(LINE_COLOR, _stroke_c);
		_e.attr(LINE_ALPHA, _stroke_a);
		_e.attr(LINECAP, _stroke_lc);
		_e.attr(LINEJOINTS, _stroke_lj);
		_e.attr(MITERLIMIT, _stroke_ml);
		
		/* FILL STYLE */
		if (gradient == '') {
			_e.attr(COLOR, _fill_c);
			_e.attr(COLOR_ALPHA, _fill_a);
		}
		
		/* GRADIENT STYLE */
		
		if (gradient == GradientType.LINEAR) {
			i = 0;
			var _gr = '0';
			for (n in _gr_c) {
				_gr += '-' + Setup.RGB_to_String(n) + ':' + (_gr_r[i]);
				i++;
			}
			_e.attr(COLOR, _gr);
		} else if (gradient == GradientType.RADIAL) {
			i = 0;
			var _gr = 'r';
			
			/*if (_gr_a != []) {		// ?replace _gr_a with focus point variable if it gets implemented
				_gr += '(';
				for (n in _gr_a) {
					if (i == 0) {
						_gr += '' + n;
					} else {
						_gr += ', ' + n;
					}
					i++;
				}
				_gr += ')';
			}*/
			i = 0;
			for (n in _gr_c) {
				if (i == 0) {
					_gr += '' + Setup.RGB_to_String(n);
				} else {
					_gr += '-' + Setup.RGB_to_String(n);
				}
				_gr += ':' + (_gr_r[i]);
				i++;
			}
			_e.attr(COLOR, _gr);
		}
		
		/* GENERAL STYLE */
		
		reset();
		_p.__jq__.trigger(Setup.RESIZE_ELEMENT, [{x:0, y:0, w:0, h:0}]);
	}
	
	public function lineGradientStyle(type:String, colors:Array<Int>, alphas:Array<Float>, ratios:Array<Int>, matrix:Matrix = null, spreadMethod:String = 'pad', interpolationMethod:String = 'rgb', focusPointRatio:Float = 0) {
		// raphaeljs? - ?dont think this will be possible
	}
	
	public function lineStyle(thickness:Float = null, color:Int = 0xFFFFFF, alpha:Float = 1.0, pixelHinting:Bool = false, scaleMode:String = 'normal', caps:String = 'round', joints:String = 'round', miterLimit:Float = 3) {
		_stroke_t = thickness;
		_stroke_c = Setup.RGB_to_String(color);
		_stroke_a = alpha;
		_stroke_lc = caps;
		_stroke_lj = joints;
		_stroke_ml = miterLimit;
		/* pixelHinting?
		 * scaleMode?
		 */
	}
	
	public function lineTo(x:Float, y:Float) {
		checkRaphael();
		path += 'L' + x + ' ' + y;
		// raphaeljs
	}
	
	public function moveTo(x:Float, y:Float) {
		checkRaphael();
		path += 'M' + x + ' ' + y;
		// raphaeljs? or not?
		// idea: acts like lineTo, but makes the lines alpha 0... ?which will still allow fills
	}
	
	/* MAGIC FUNCTIONS */
	
	public function __raphael__():Raphael {
		return _r;
	}
	
	/* INTERNAL FUNCTIONS */
	
	private function reset() {
		i 				= 0;
		
		_fill_c 		= '#ffffff';
		_fill_a 		= 0;
		
		_stroke_c 		= '#000000';
		_stroke_t 		= 1;
		_stroke_a 		= 1.0;
		_stroke_lc 		= 'round';							// possible values: none, round*, square
		_stroke_lj 		= 'round';							// possible values: miter, round*, bevel
		_stroke_ml 		= 3;
		
		_gr_c			= new Array<Int>();				// colors
		_gr_a			= new Array<Float>();				// alphas - dont work
		_gr_r			= new Array<Int>();					// ratios
		
		ALPHA 			= 'opacity';
		COLOR 			= 'fill';
		COLOR_ALPHA 	= 'fill-opacity';
		LINE_THICKNESS 	= 'stroke-width';
		LINE_COLOR 		= 'stroke';
		LINE_ALPHA 		= 'stroke-opacity';
		LINECAP 			= 'stroke-linecap';
		LINEJOINTS 		= 'stroke-linejoin';
		MITERLIMIT 		= 'stroke-miterlimit';
		
		gradient = '';
		path = '';
	}
	
	private function checkRaphael() {
		if (_r == null) {
			//_r = new Raphael(('' + _p.name + '-graphics'), '' + _p.width + 'px', '' + _p.height + 'px');
			_r = new Raphael((_p.__originalName__ + '-graphics'), '100%', '100%');
		} else {
			// nothing...
		}
		
	}
	
}