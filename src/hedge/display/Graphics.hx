/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;

import hedge.geom.Matrix;
import hedge.geom.Rectangle;

import hedge.events.internal.HedgeResizeDisplayEvent;
import hedge.Object;
import hedge.Setup;
import js.Lib;
import Raphael;

class Graphics extends Object {
	
	public var __raphael__:Raphael;
	public var __shape__:RaphaelElement;
	public var __rectangle__:Rectangle;
	public var __set__:RaphaelSet;
	
	public var __holder__:Sprite;
	public var path:String;
	public var fill_color:Int;
	public var fill_alpha:Float;
	
	//	GENERAL LINE VARIABLES
	
	public var lineType:String;
	
	//	LINESTYLE
	
	public var line_thickness:Float;
	public var line_color:Int;
	public var line_alpha:Float;
	public var line_caps:String;
	public var line_joints:String;
	public var line_limit:Float;
	
	// LINE GRADIENT
	
	public var line_gradient_type:String;
	public var line_gradient_colors:Array<Int>;
	public var line_gradient_alphas:Array<Float>;
	public var line_gradient_ratios:Array<Int>;
	public var line_gradient_matrix:Matrix;
	public var line_gradient_spread:String;
	public var line_gradient_interpolation:String;
	public var line_gradient_focus:Float;
	
	//	GENERAL FILL VARIABLES
	
	public var fillType:String;
	
	//	FILL GRADIENT
	
	public var fill_gradient_type:String;
	public var fill_gradient_colors:Array<Int>;
	public var fill_gradient_alphas:Array<Float>;
	public var fill_gradient_ratios:Array<Int>;
	public var fill_gradient_matrix:Matrix;
	public var fill_gradient_spread:String;
	public var fill_gradient_interpolation:String;
	public var fill_gradient_focal:Float;
	
	//	BITMAPDATA FILL
	
	public var bitmapdata_source:BitmapData;
	public var bitmapdata_matrix:Matrix;
	public var bitmapdata_repeat:Bool;
	public var bitmapdata_smooth:Bool;
	
	// SVG path data at - http://www.w3.org/TR/SVG/paths.html#PathData
	
	public function new(__holder__:Sprite) {
		this.__holder__ = __holder__;
		super();
	}
	
	public function beginBitmapFill(bitmap:BitmapData, matrix:Matrix = null, repeat:Bool = true, smooth:Bool = false) {
		// maybe use canvas...?
		this.fillType = FillType.BITMAPDATA;
		// todo
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
			throw 'You must have an alpha value for each color value.';
		}
		if (this.fill_gradient_colors.length != this.fill_gradient_ratios.length) {
			throw 'You must have an ratio value for each color value.';
		}
	}
	
	public function clear() {
		// TODO need to update display object size
		__raphael__.clear();
	}
	
	public function curveTo(controlX:Float, controlY:Float, anchorX:Float, anchorY:Float) {
		path += 'Q' + controlX + ' ' + controlY + ' ' + anchorX + ' ' + anchorY;
	}
	
	public function drawCircle(x:Float, y:Float, radius:Float) {
		x = x + this.line_thickness;
		y = y + this.line_thickness;
		
		__shape__ = __raphael__.circle(x, y, radius);
		__set__.push(__shape__);
		
		this.checkFill();
		this.checkLineStyle();
		
		//this.parent.__jq__.trigger(Setup.RESIZE_ELEMENT, [ { x:x, y:y, w:radius + this.line_thickness, h:radius + this.line_thickness, p:this.parent } ]);
		//Setup.triggerResize(__holder__, x-radius, y-radius, (radius*2) + line_thickness, (radius*2) + line_thickness);
		this.__rectangle__.x = x - radius;
		this.__rectangle__.y = y - radius;
		this.__rectangle__.width = this.__rectangle__.height = (radius * 2) + line_thickness;
		//Setup.triggerResize(this.__holder__, this.__rectangle__);
		this.__holder__.__triggerResize__(this.__rectangle__);
	}
	
	public function drawEllipse(x:Float, y:Float, width:Float, height:Float) {
		x = x + this.line_thickness;
		y = y + this.line_thickness;
		width = Math.round(width/2) - this.line_thickness;
		height = Math.round(height/2) - this.line_thickness;
		
		__shape__ = __raphael__.ellipse(x + width, y + height, width, height);
		__set__.push(__shape__);
		
		this.checkFill();
		this.checkLineStyle();
		
		//this.parent.__jq__.trigger(Setup.RESIZE_ELEMENT, [ { x:x, y:y, w:(width * 2) + this.line_thickness, h:(height * 2) + this.line_thickness, p:this.parent } ]);
		//Setup.triggerResize(__holder__, x, y, (width*2) + line_thickness, (height*2) + line_thickness);
		this.__rectangle__.x = x;
		this.__rectangle__.y = y;
		this.__rectangle__.width = width + line_thickness;
		this.__rectangle__.height = height + line_thickness;
		//Setup.triggerResize(this.__holder__, this.__rectangle__);
		this.__holder__.__triggerResize__(this.__rectangle__);
	}
	
	public function drawRect(x:Float, y:Float, width:Float, height:Float) {
		x = x + this.line_thickness;
		y = y + this.line_thickness;
		width = width - this.line_thickness;
		height = height - this.line_thickness;
		
		__shape__ = __raphael__.rect(x, y, width, height);
		__set__.push(__shape__);
		
		this.checkFill();
		this.checkLineStyle();
		
		//this.parent.__jq__.trigger(Setup.RESIZE_ELEMENT, [ { x:x, y:y, w:width + this.line_thickness, h:height + this.line_thickness, p:this.parent } ]);
		//Setup.triggerResize(__holder__, x, y, width + line_thickness, height + line_thickness);
		this.__rectangle__.x = x;
		this.__rectangle__.y = y;
		this.__rectangle__.width = width + line_thickness;
		this.__rectangle__.height = height + line_thickness;
		//Setup.triggerResize(this.__holder__, this.__rectangle__);
		this.__holder__.__triggerResize__(this.__rectangle__);
	}
	
	public function drawRoundRect(x:Float, y:Float, width:Float, height:Float, radius:Float) {
		x = x + this.line_thickness;
		y = y + this.line_thickness;
		width = width - this.line_thickness;
		height = height - this.line_thickness;
		
		__shape__ = __raphael__.rect(x, y, width, height, radius);
		__set__.push(__shape__);
		
		this.checkFill();
		this.checkLineStyle();
		
		//this.parent.__jq__.trigger(Setup.RESIZE_ELEMENT, [ { x:x, y:y, w:width + this.line_thickness, h:height - this.line_thickness, p:this.parent } ]);
		//Setup.triggerResize(__holder__, x, y, width + line_thickness, height - line_thickness);
		this.__rectangle__.x = x;
		this.__rectangle__.y = y;
		this.__rectangle__.width = width + line_thickness;
		this.__rectangle__.height = height + line_thickness;
		//Setup.triggerResize(this.__holder__, this.__rectangle__);
		this.__holder__.__triggerResize__(this.__rectangle__);
	}
	
	public function endFill() {
		
		if (this.path != '' || this.path == null) {
			__shape__ = __raphael__.path(path += ' z');
			__set__.push(__shape__);
			
			this.checkFill();
			this.checkLineStyle();
			
			//this.parent.__jq__.trigger(Setup.RESIZE_ELEMENT, [ { x:__element__.getBBox().x, y:__element__.getBBox().y, w:__element__.getBBox().width, h:__element__.getBBox().height, p:this.parent } ]);
			//Setup.triggerResize(__holder__, __element__.getBBox().x, __element__.getBBox().y, __element__.getBBox().width, __element__.getBBox().height);
			//Setup.triggerResize(this.__holder__, this.__rectangle__);
			this.__holder__.__triggerResize__(this.__rectangle__);
		}
		
	}
	
	public function lineGradientStyle(type:String, colors:Array<Int>, alphas:Array<Float>, ratios:Array<Int>, matrix:Matrix = null, spreadMethod:String = 'pad', interpolationMethod:String = 'rgb', focusPointRatio:Float = 0) {
		this.lineType = LineType.GRADIENT;
		// todo
		this.line_gradient_type = type;
		this.line_gradient_colors = colors;
		this.line_gradient_alphas = alphas;
		this.line_gradient_ratios = ratios;
		this.line_gradient_matrix = matrix;
		this.line_gradient_spread = spreadMethod;
		this.line_gradient_interpolation = interpolationMethod;
		this.line_gradient_focus = focusPointRatio;
	}
	
	public function lineStyle(thickness:Float = null, color:Int = 0xFFFFFF, alpha:Float = 1.0, pixelHinting:Bool = false, scaleMode:String = 'normal', caps:String = 'none', joints:String = 'miter', miterLimit:Float = 3) {
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
		path += 'L' + x + ' ' + y;
	}
	
	public function moveTo(x:Float, y:Float) {
		path += 'M' + x + ' ' + y;
	}
	
	//	OVERRIDE METHODS
	
	override private function initialize():Void {
		super.initialize();
		initializeGraphics();
	}
	
	//	INTERNAL METHODS
	
	private function initializeGraphics():Void {
		this.path = '';
		this.__rectangle__ = new Rectangle(this.__holder__.x, this.__holder__.y, this.__holder__.width, this.__holder__.height);
		/*this.__ele__ = Lib.document.createElement('div');
		this.__ele__.setAttribute('id', this.__holder__.__originalName__ + '-graphics');
		this.__ele__.style.cssText = 'overflow:hidden; position:absolute; visibility:visible; width:100%; height:100%; background-color:transparent;';
		this.__holder__.__ele__.appendChild(this.__ele__);*/
		this.__raphael__ = new Raphael(this.__holder__.__ele__, '100%', '100%');
		this.__set__ = this.__raphael__.set();
		//untyped this.__raphael__.canvas.style.position = 'absolute';
	}
	
	private function checkFill():Void {
		this.fillType = this.fillType == null ? FillType.FLOOD : this.fillType;
		switch (this.fillType) {
			case FillType.BITMAPDATA:
				throw 'beginBitmapFill is not implemented';
			case FillType.FLOOD:
				__shape__.attr('fill', this.fill_color == null ? '#ffffff' : Setup.RGB_to_String(this.fill_color))
							  .attr('opacity', this.fill_alpha == null ? 1.0 : this.fill_alpha);
			case FillType.GRADIENT:
				// TODO - raphael gradient incompatible with flash code & cant recreate same result
				//	Browsers need to better support svg so raphael can advance
				var color_alpha:String = '';
				
				for (i in 0...this.gradient_colors.length) {
					if (i == 0) {
						color_alpha += Setup.RGB_to_String(this.fill_gradient_colors[i]);
					} else {
						color_alpha += '-' + Setup.RGB_to_String(this.fill_gradient_colors[i]);
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
				__shape__.attr('stroke-width', this.line_thickness == null ? 1.0 : this.line_thickness)
							  .attr('stroke', this.line_color == null ? 'none' : Setup.RGB_to_String(this.line_color))
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