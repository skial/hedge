/**
 * ...
 * @author Skial Bainn
 */

package hedge.geom;

class Matrix {
	
	public var a:Float;
	public var b:Float;
	public var c:Float;
	public var d:Float;
	public var tx:Float;
	public var ty:Float;

	public function new(a:Float = 1, b:Float = 0, c:Float = 0, d:Float = 1, tx:Float = 0, ty:Float = 0) {
		
	}
	
	public function clone():Matrix {
		return new Matrix();
	}
	
	public function concat(m:Matrix) {
		
	}
	
	public function createBox(scaleX:Float, scaleY:Float, rotation:Float = 0, tx:Float = 0, ty:Float = 0) {
		
	}
	
	public function createGradientBox(width:Float, height:Float, rotation:Float = 0, tx:Float = 0, ty:Float = 0) {
		
	}
	
	public function deltaTransformPoint(point:Point):Point {
		return new Point();
	}
	
	public function identity() {
		
	}
	
	public function invert() {
		
	}
	
	public function rotate(angle:Float) {
		
	}
	
	public function scale(sx:Float, sy:Float) {
		
	}
	
	public function transformPoint(point:Point):Point {
		return new Point();
	}
	
	public function translate(dx:Float, dy:Float) {
		
	}
	
}