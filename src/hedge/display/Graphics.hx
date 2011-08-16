/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;

import hedge.events.internal.HedgeResizeDisplayEvent;
import hedge.geom.Matrix;
import hedge.geom.Rectangle;
import hedge.Object;
import hedge.Setup;

import js.Dom;
import js.Lib;

import Raphael;
import jQuery.JQuery;

using Std;
using Math;
using StringTools;

// TODO http://caniuse.com/#cats=SVG
// TODO http://www.w3.org/Graphics/SVG/ first edition
// TODO http://www.w3.org/TR/2010/WD-SVG11-20100622/ second edition
// TODO http://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html
// TODO http://www.w3.org/TR/#tr_SVG list of svg documents
// TODO http://en.wikipedia.org/wiki/Comparison_of_layout_engines_%28Scalable_Vector_Graphics%29
// TODO http://www.codedread.com/svg-support.php

class Graphics extends Object {
	
	private var __parent__:DisplayObject;
	private var __current__:Raphael;
	private var __shape__:RaphaelElement;
	private var __set__:Array<RaphaelElement>;
	
	private var depth:Int;
	
	private var path:String;
	private var pathPW:Float;
	private var pathPH:Float;
	private var pathNW:Float;
	private var pathNH:Float;
	
	private var shapeW:Float;
	private var shapeH:Float;
	private var shapeX:Float;
	private var shapeY:Float;
	
	private var fill_color:Int;
	private var fill_alpha:Float;
	
	//	GENERAL LINE VARIABLES
	
	private var lineType:String;
	
	//	LINESTYLE
	
	private var line_thickness:Float;
	private var line_color:Int;
	private var line_alpha:Float;
	private var line_caps:String;
	private var line_joints:String;
	private var line_limit:Float;
	
	// LINE GRADIENT
	
	private var line_gradient_type:String;
	private var line_gradient_colors:Array<Int>;
	private var line_gradient_alphas:Array<Float>;
	private var line_gradient_ratios:Array<Int>;
	private var line_gradient_matrix:Matrix;
	private var line_gradient_spread:String;
	private var line_gradient_interpolation:String;
	private var line_gradient_focus:Float;
	
	//	GENERAL FILL VARIABLES
	
	private var fillType:String;
	
	//	FILL GRADIENT
	
	private var fill_gradient_type:String;
	private var fill_gradient_colors:Array<Int>;
	private var fill_gradient_alphas:Array<Float>;
	private var fill_gradient_ratios:Array<Int>;
	private var fill_gradient_matrix:Matrix;
	private var fill_gradient_spread:String;
	private var fill_gradient_interpolation:String;
	private var fill_gradient_focal:Float;
	
	//	BITMAPDATA FILL
	
	private var bitmapdata_source:BitmapData;
	private var bitmapdata_matrix:Matrix;
	private var bitmapdata_repeat:Bool;
	private var bitmapdata_smooth:Bool;
	
	// SVG path data at - http://www.w3.org/TR/SVG/paths.html#PathData
	
	public function new(__holder__:DisplayObject) {
		super();
		
		this.__parent__ = __holder__;
	}
	
	public function beginBitmapFill(bitmap:BitmapData, matrix:Matrix = null, repeat:Bool = true, smooth:Bool = false) {
		// maybe use canvas...?
		this.fillType = FillType.BITMAPDATA;
		// TODO
		this.bitmapdata_source = bitmap;
		this.bitmapdata_matrix = matrix;
		this.bitmapdata_repeat = repeat;
		this.bitmapdata_smooth = smooth;
	}
	
	public function beginFill(color:Int, alpha:Float = 1.0) {
		this.fill_color = color;
		this.fill_alpha = alpha;
		this.fillType = FillType.FLOOD;
	}
	
	public function beginGradientFill(type:String, colors:Array<Int>, alphas:Array<Float>, ratios:Array<Int>, ?matrix:Matrix = null, ?spreadMethod:String = 'pad', ?interpolationMethod:String = 'rgb', ?focalPointRatio:Float = 0) {
		this.fillType = FillType.GRADIENT;
		// TODO - not compatible yet - needs better browser support for svg
		this.fill_gradient_type = type;
		this.fill_gradient_colors = colors;
		this.fill_gradient_alphas = alphas;
		this.fill_gradient_ratios = ratios;
		this.fill_gradient_matrix = matrix;
		this.fill_gradient_spread = spreadMethod;
		this.fill_gradient_interpolation = interpolationMethod;
		this.fill_gradient_focal = focalPointRatio;
		
		//	WARNING - INCOMPLETE METHOD - LACK OF BROWSER SUPPORT
		
		throw 'This method is not complete - not recommend to use';
		
		if (this.fill_gradient_colors.length != this.fill_gradient_alphas.length) {
			throw 'You must have an alpha value for each colour value.';
		}
		if (this.fill_gradient_colors.length != this.fill_gradient_ratios.length) {
			throw 'You must have an ratio value for each colour value.';
		}
	}
	
	public function clear() {
		// TODO check IE vml tag is <vml> if you get my drift... bored!
		this.__parent__.__ele__.children(Lib.isIE ? 'vml' : 'svg').remove();
	}
	
	public function curveTo(controlX:Float, controlY:Float, anchorX:Float, anchorY:Float) {
		// TODO add check path boundaries method or create new check...
		this.path += 'Q' + controlX + ' ' + controlY + ' ' + anchorX + ' ' + anchorY;
	}
	
	public function drawCircle(x:Float, y:Float, radius:Float) {
		x += this.line_thickness;
		y += this.line_thickness;
		
		this.checkCircleBoundaries(x, y, radius);
		this.checkForCurrent();
		
		//this.__shape__ = this.__current__.circle((Setup.__stageWidth__ + x), (Setup.__stageHeight__ + y), radius);
		this.__shape__ = this.__current__.circle(radius, radius, radius);
		
		this.checkFill();
		this.checkLineStyle();
		
		this.__parent__.__ele__.trigger(new HedgeResizeDisplayEvent(HedgeResizeDisplayEvent.RESIZE_DOM_ELEMENT, false, false));
	}
	
	public function drawEllipse(x:Float, y:Float, width:Float, height:Float) {
		/*x += this.line_thickness;
		y += this.line_thickness;*/
		
		//this.checkShapeBoundaries(x, y, width, height);
		this.shapeW = width;
		this.shapeH = height;
		this.shapeX = x;
		this.shapeY = y;
		this.checkForCurrent();
		
		// TODO move to raphaeljs ellipse method
		var lt = this.line_thickness / 2;
		width = (width / 2) - lt;
		height = (height / 2) - lt;
		
		//this.__shape__ = this.__current__.ellipse((Setup.__stageWidth__ + x) + width, (Setup.__stageHeight__ + y) + height, width, height);
		this.__shape__ = this.__current__.ellipse(width + lt, height + lt, width, height);
		
		this.checkFill();
		this.checkLineStyle();
		
		this.__parent__.__ele__.trigger(new HedgeResizeDisplayEvent(HedgeResizeDisplayEvent.RESIZE_DOM_ELEMENT, false, false));
	}
	
	public function drawRect(x:Float, y:Float, width:Float, height:Float) {
		x += this.line_thickness;
		y += this.line_thickness;
		width -= this.line_thickness;
		height -= this.line_thickness;
		
		//this.checkShapeBoundaries(x, y, width, height);
		this.shapeW = width;
		this.shapeH = height;
		this.shapeX = x;
		this.shapeY = y;
		this.checkForCurrent();
		
		//this.__shape__ = this.__current__.rect((Setup.__stageWidth__ + x), (Setup.__stageHeight__ + y), width, height);
		this.__shape__ = this.__current__.rect(0, 0, width, height);
		
		this.checkFill();
		this.checkLineStyle();
		
		this.__parent__.__ele__.trigger(new HedgeResizeDisplayEvent(HedgeResizeDisplayEvent.RESIZE_DOM_ELEMENT, false, false));
	}
	
	public function drawRoundRect(x:Float, y:Float, width:Float, height:Float, radius:Float) {
		x += this.line_thickness;
		y += this.line_thickness;
		width -= this.line_thickness;
		height -= this.line_thickness;
		
		this.checkShapeBoundaries(x, y, width, height);
		this.checkForCurrent();
		
		//this.__shape__ = this.__current__.rect((Setup.__stageWidth__ + x), (Setup.__stageHeight__ + y), width, height, radius);
		this.__shape__ = this.__current__.rect(x, y, width, height, radius);
		
		this.checkFill();
		this.checkLineStyle();
		
		this.__parent__.__ele__.trigger(new HedgeResizeDisplayEvent(HedgeResizeDisplayEvent.RESIZE_DOM_ELEMENT, false, false));
	}
	
	public function endFill() {
		if (this.path != '' && this.path != null) {
			this.path += ' z';
			trace(this.pathPW);
			trace(this.pathPH);
			trace(this.pathNW);
			trace(this.pathNH);
			trace(this.path);
			this.__current__ = new Raphael(this.__parent__.__node__, this.pathPW, this.pathPH);
			new JQuery(this.__current__.canvas).css( { position:'absolute' } ).css('z-index', this.depth);
			++this.depth;
			this.__shape__ = this.__current__.path(this.path);
			
			this.checkFill();
			this.checkLineStyle();
			
			this.__parent__.__ele__.trigger(new HedgeResizeDisplayEvent(HedgeResizeDisplayEvent.RESIZE_DOM_ELEMENT, false, false));
		}
		
		this.__current__ = null;
		this.path = '';
		this.pathNH = this.pathNW = this.pathPH = this.pathPW = 0;
		this.shapeY = this.shapeX = this.shapeH = this.shapeW = 0;
		
		this.fill_color = null;
		this.fill_alpha = null;
		this.fillType = null;
		this.fillType = null;
		this.bitmapdata_source = null;
		this.bitmapdata_matrix = null;
		this.bitmapdata_repeat = null;
		this.bitmapdata_smooth = null;
	}
	
	public function lineGradientStyle(type:String, colors:Array<Int>, alphas:Array<Float>, ratios:Array<Int>, matrix:Matrix = null, spreadMethod:String = 'pad', interpolationMethod:String = 'rgb', focusPointRatio:Float = 0) {
		this.lineType = LineType.GRADIENT;
		// TODO
		this.line_gradient_type = type;
		this.line_gradient_colors = colors;
		this.line_gradient_alphas = alphas;
		this.line_gradient_ratios = ratios;
		this.line_gradient_matrix = matrix;
		this.line_gradient_spread = spreadMethod;
		this.line_gradient_interpolation = interpolationMethod;
		this.line_gradient_focus = focusPointRatio;
	}
	
	public function lineStyle(thickness:Float = null, color:Int = 0x000000, alpha:Float = 1.0, pixelHinting:Bool = false, scaleMode:String = 'normal', caps:String = 'none', joints:String = 'miter', miterLimit:Float = 3) {
		this.lineType = LineType.PLAIN;
		this.line_thickness = thickness;
		this.line_color = color;
		this.line_alpha = alpha;
		// pixelhinting
		// scalemode
		this.line_caps = caps;
		this.line_joints = joints;
		this.line_limit = miterLimit;
	}
	
	public function lineTo(x:Float, y:Float) {
		this.checkPathBoundaries(x, y);
		this.path += 'L' + x + ' ' + y;
	}
	
	public function moveTo(x:Float, y:Float) {
		this.checkPathBoundaries(x, y);
		this.path += 'M' + x + ' ' + y;
	}
	
	//	OVERRIDE METHODS
	
	override private function initialize():Void {
		super.initialize();
		this.initializeGraphics();
	}
	
	//	INTERNAL METHODS
	
	private function initializeGraphics():Void {
		this.depth = 1;
		this.__set__ = new Array<RaphaelElement>();
		this.pathNH = this.pathNW = this.pathPH = this.pathPW = 0;
		this.shapeY = this.shapeX = this.shapeH = this.shapeW = 0;
	}
	
	private function checkForCurrent():Void {
		if (this.__current__ == null) {
			//this.__current__ = new Raphael(this.__parent__.__node__, Setup.__stageWidth__*2, Setup.__stageHeight__*2);
			this.__current__ = new Raphael(this.__parent__.__node__, this.shapeW, this.shapeH);
			//new JQuery(this.__current__.canvas).css( { position:'absolute', left: -Setup.__stageWidth__, top: -Setup.__stageHeight__ } ).css('z-index', this.depth);
			new JQuery(this.__current__.canvas).css( { position:this.depth == 1?'absolute' :'relative', left:this.shapeX, top:this.shapeY } ).css('z-index', this.depth);
			++this.depth;
		}
	}
	
	private inline function checkPathBoundaries(x:Float, y:Float):Void {
		this.pathPW = x > this.pathPW ? x : this.pathPW;
		this.pathPH = y > this.pathPH ? y : this.pathPH;
		if (x < 0) {
			this.pathNW = -x > this.pathNW ? -x : this.pathNW;
		}
		if (y < 0) {
			this.pathNH = -y > this.pathNH ? -y : this.pathNH;
		}
	}
	
	private inline function checkCircleBoundaries(x:Float, y:Float, r:Float):Void {
		this.shapeW = this.shapeH = r*2;
		this.shapeX = x - r;
		this.shapeY = y - r;
	}
	
	private inline function checkShapeBoundaries(x:Float, y:Float, w:Float, h:Float):Void {
		this.shapeW = w;
		this.shapeH = h;
		if (x < 0) {
			this.shapeX = -x > this.shapeX ? -x : this.shapeX;
			this.shapeW += -x;
		} else if (x > 0) {
			this.shapeX = x;
			this.shapeW += x;
		}
		if (y < 0) {
			this.shapeY = -y > this.shapeY ? -y : this.shapeY;
			this.shapeH += -y;
		} else if (y > 0) {
			this.shapeY = y;
			this.shapeH += y;
		}
	}
	
	private function checkFill():Void {
		this.fillType = this.fillType == null ? FillType.FLOOD : this.fillType;
		switch (this.fillType) {
			case FillType.BITMAPDATA:
				throw 'beginBitmapFill is not implemented';
			case FillType.FLOOD:
				__shape__.attr('fill', this.fill_color == null ? '#ffffff' : Setup.rgb(this.fill_color))
							  .attr('opacity', this.fill_alpha == null ? 1.0 : this.fill_alpha);
			case FillType.GRADIENT:
				// TODO - raphael gradient incompatible with flash code & cant recreate same result
				// TODO - replace all this
				var color_alpha:String = '';
				
				for (i in 0...this.gradient_colors.length) {
					if (i == 0) {
						color_alpha += Setup.rgb(this.fill_gradient_colors[i]);
					} else {
						color_alpha += '-' + Setup.rgb(this.fill_gradient_colors[i]);
					}
					color_alpha += ':' + ((this.fill_gradient_ratios[i]/255)*100);
				}
				
				switch (this.fill_gradient_type) {
					case GradientType.LINEAR:
						__shape__.attr('fill', '0-' + color_alpha);
					case GradientType.RADIAL:
						throw 'Gradient.RADIAL is not supported by Raphael__jq__ on any thing not a circle or ellipse';
						__shape__.attr('fill', 'r' + color_alpha);
				}
			default:
				
		}
	}
	
	private function checkLineStyle():Void {
		this.lineType = this.lineType == null ? LineType.PLAIN : this.lineType;
		switch (this.lineType) {
			case LineType.GRADIENT:
				
			case LineType.PLAIN:
				__shape__	.attr('stroke-width', this.line_thickness == null ? 1.0 : this.line_thickness)
							.attr('stroke', this.line_color == null ? 'none' : Setup.toHexString(this.line_color))
							.attr('stroke-opacity', this.line_alpha == null ? 1.0 : this.line_alpha)
				// pixelhinting
				// scalemode
							.attr('stroke-linecap', this.line_caps == null ? 'butt' : this.line_caps = this.line_caps == CapsStyle.NONE ? 'butt' : this.line_caps)
							.attr('stroke-linejoin', this.line_joints == null ? JointStyle.MITER : this.line_joints)
							.attr('stroke-miterlimit', this.line_limit == null ? 3.0 : this.line_limit);
			default:
				
		}
	}
	
}