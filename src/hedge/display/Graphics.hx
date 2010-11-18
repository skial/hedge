/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.geom.Matrix;
import hedge.Object;
import hedge.Setup;
import Raphael;

class Graphics extends Object {
	
	public var __raphael__:Raphael;
	public var __element__:RaphaelElement;
	
	public var parent:DisplayObject;
	public var path:String;
	public var fill_color:Int;
	public var fill_alpha:Float;
	
	public function new(parent:DisplayObject) {
		super();
		
		this.parent = parent;
		
		parent.__jq__.append(__jq__ = new JQuery('<div>'));
		__jq__.attr('id', parent.__originalName__ + '-graphics').css( Setup.__attr__( { width:'100%', height:'100%' } ) ).css('background-color', 'transparent');
		
		__raphael__ = new Raphael(parent.__originalName__ + '-graphics', '100%', '100%');
	}
	
	public var fillType:String;
	
	public var bitmapdata_source:BitmapData;
	public var bitmapdata_matrix:Matrix;
	public var bitmapdata_repeat:Bool;
	public var bitmapdata_smooth:Bool;
	
	public function beginBitmapFill(bitmap:BitmapData, matrix:Matrix = null, repeat:Bool = true, smooth:Bool = false) {
		// maybe use canvas...?
		this.fillType = FillType.BITMAPDATA;
	}
	
	public function beginFill(color:Int, alpha:Float = 1.0) {
		this.fill_color = color;
		this.fill_alpha = alpha;
		this.fillType = FillType.FLOOD;
	}
	
	public var gradient_type:String;
	public var gradient_colors:Array<Int>;
	public var gradient_alphas:Array<Float>;
	public var gradient_ratios:Array<Int>;
	public var gradient_matrix:Matrix;
	public var gradient_spread:String;
	public var gradient_interpolation:String;
	public var gradient_focal:Float;
	
	public function beginGradientFill(type:String, colors:Array<Int>, alphas:Array<Float>, ratios:Array<Int>, matrix:Matrix = null, spreadMethod:String = 'pad', interpolationMethod:String = 'rgb', focalPointRatio:Float = 0) {
		this.fillType = FillType.GRADIENT;
	}
	
	private function checkFill():Void {
		switch (this.fillType) {
			case FillType.BITMAPDATA:
				
			case FillType.FLOOD:
				__element__.attr('fill', this.fill_color == null ? '#ffffff' : Setup.RGB_to_String(this.fill_color));
				__element__.attr('opacity', this.fill_alpha == null ? 1.0 : this.fill_alpha);
			case FillType.GRADIENT:
				
			default:
				
		}
	}
	
	public function clear() {
		
	}
	
	public function curveTo(controlX:Float, controlY:Float, anchorX:Float, anchorY:Float) {
		
	}
	
	public function drawCircle(x:Float, y:Float, radius:Float) {
		
	}
	
	public function drawEllipse(x:Float, y:Float, width:Float, height:Float) {
		
	}
	
	public function drawRect(x:Float, y:Float, width:Float, height:Float) {
		this.moveTo(x, y);
		this.lineTo(x + width, y);
		this.lineTo(x + width, y + height);
		this.lineTo(x, y + height);
		
		__element__ = __raphael__.path(path);
		this.fillType = FillType.FLOOD;
		this.lineType = LineType.PLAIN;
		this.checkFill();
		this.checkLineStyle();
		
		parent.__jq__.trigger(Setup.RESIZE_ELEMENT, [ { x:x, y:y, w:width, h:height } ]);
	}
	
	public function drawRoundRect(x:Float, y:Float, width:Float, height:Float, radius:Float) {
		
	}
	
	public function endFill() {
		
	}
	
	public var lineType:String;
	
	public function lineGradientStyle(type:String, colors:Array<Int>, alphas:Array<Float>, ratios:Array<Int>, matrix:Matrix = null, spreadMethod:String = 'pad', interpolationMethod:String = 'rgb', focusPointRatio:Float = 0) {
		this.lineType = LineType.GRADIENT;
	}
	
	public var line_thickness:Float;
	public var line_color:Int;
	public var line_alpha:Float;
	public var line_caps:String;
	public var line_joints:String;
	public var line_limit:Float;
	
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
	
	private function checkLineStyle():Void {
		switch (this.lineType) {
			case LineType.GRADIENT:
				
			case LineType.PLAIN:
				__element__.attr('stroke-width', this.line_thickness == null ? 1.0 : this.line_thickness);
				__element__.attr('stroke', this.line_color == null ? 'none' : Setup.RGB_to_String(this.line_color));
				__element__.attr('stroke-opacity', this.line_alpha == null ? 1.0 : this.line_alpha);
				// pixelhinting
				// scalemode
				__element__.attr('stroke-linecap', this.line_caps == null ? 'butt' : this.line_caps = this.line_caps == CapsStyle.NONE ? 'butt' : this.line_caps);
				__element__.attr('stroke-linejoin', this.line_joints == null ? JointStyle.MITER : this.line_joints);
				__element__.attr('stroke-miterlimit', this.line_limit == null ? 3.0 : this.line_limit);
			default:
				
		}
	}
	
	public function lineTo(x:Float, y:Float) {
		path += 'L' + x + ' ' + y;
	}
	
	public function moveTo(x:Float, y:Float) {
		path += 'M' + x + ' ' + y;
	}
	
	//	INTERNAL
	
	private function reset():Void {
		
	}
	
}