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
	public var color:Int;
	public var alpha:Float;
	
	public function new(parent:DisplayObject) {
		super();
		
		this.parent = parent;
		
		parent.__jq__.append(__jq__ = new JQuery('<div>'));
		__jq__.attr('id', parent.__originalName__ + '-graphics').css( { width:'100%', height:'100%' } ).css('background-color', 'transparent');
		
		__raphael__ = new Raphael(parent.__originalName__ + '-graphics', '100%', '100%');
	}
	
	public function beginBitmapFill(bitmap:BitmapData, matrix:Matrix = null, repeat:Bool = true, smooth:Bool = false) {
		// maybe use canvas...?
	}
	
	public function beginFill(color:Int, alpha:Float = 1.0) {
		this.color = color;
		this.alpha = alpha;
	}
	
	public function beginGradientFill(type:String, colors:Array<Int>, alphas:Array<Float>, ratios:Array<Int>, matrix:Matrix = null, spreadMethod:String = 'pad', interpolationMethod:String = 'rgb', focalPointRatio:Float = 0) {
		
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
		this.color = this.color == null ? 0xFFFFFF : this.color;
		__element__ = __raphael__.path(path);
		__element__.attr('fill', Setup.RGB_to_String(this.color));
		__element__.attr('stroke', Setup.RGB_to_String(this.color));
		parent.__jq__.trigger(Setup.RESIZE_ELEMENT, [ { x:x, y:y, w:width, h:height } ]);
	}
	
	public function drawRoundRect(x:Float, y:Float, width:Float, height:Float, radius:Float) {
		
	}
	
	public function endFill() {
		
	}
	
	public function lineGradientStyle(type:String, colors:Array<Int>, alphas:Array<Float>, ratios:Array<Int>, matrix:Matrix = null, spreadMethod:String = 'pad', interpolationMethod:String = 'rgb', focusPointRatio:Float = 0) {
		
	}
	
	public function lineStyle(thickness:Float = null, color:Int = 0xFFFFFF, alpha:Float = 1.0, pixelHinting:Bool = false, scaleMode:String = 'normal', caps:String = 'round', joints:String = 'round', miterLimit:Float = 3) {
		
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