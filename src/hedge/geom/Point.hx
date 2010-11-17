/**
 * ...
 * @author Skial Bainn
 */

package hedge.geom;

class Point {
	
	public var length:Float;
	public var x:Float;
	public var y:Float;

	public function new(x:Float = 0, y:Float = 0) {
		
	}
	
	public function add(v:Point):Point {
		return new Point();
	}
	
	public function clone():Point {
		return new Point();
	}
	
	public function distance(pt1:Point, pt2:Point):Float {
		return 12.0;
	}
	
	public function equals(toCompare:Point):Bool {
		return true;
	}
	
	public function interpolate(pt1:Point, pt2:Point, f:Float):Point {
		return new Point();
	}
	
	public function normalize(thickness:Float) {
		
	}
	
	public function offset(dx:Float, dy:Float) {
		
	}
	
	public function polar(len:Float, angle:Float):Point {
		return new Point();
	}
	
	public function subtract(v:Point):Point {
		return new Point();
	}
	
}