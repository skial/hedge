/**
 * ...
 * @author Skial Bainn
 */

package hedge.geom;

class Rectangle {
	
	public var bottom:Float;
	public var bottomRight:Point;
	public var left:Float;
	public var right:Float;
	public var size:Point;
	public var top:Float;
	public var topLeft:Point;
	public var height:Float;
	public var width:Float;
	public var y:Float;
	public var x:Float;

	public function new(x:Float = 0, y:Float = 0, width:Float = 0, height:Float = 0) {
		
	}
	
	public function clone():Rectangle {
		return new Rectangle();
	}
	
	public function contains(x:Float, y:Float):Bool {
		return true;
	}
	
	public function containsPoint(point:Point):Bool {
		return true;
	}
	
	public function containsRect(rect:Rectangle):Bool {
		return true;
	}
	
	public function equals(toCompare:Rectangle):Bool {
		return true;
	}
	
	public function inflate(dx:Float, dy:Float) {
		
	}
	
	public function inflatePoint(point:Point) {
		
	}
	
	public function intersection(toIntersect:Rectangle):Rectangle {
		return new Rectangle();
	}
	
	public function intersects(toIntersect:Rectangle):Bool {
		return true;
	}
	
	public function isEmpty():Bool {
		return true;
	}
	
	public function offset(dx:Float, dy:Float) {
		
	}
	
	public function offsetPoint(point:Point) {
		
	}
	
	public function setEmpty() {
		
	}
	
	public function union(toUnion:Rectangle):Rectangle {
		return new Rectangle();
	}
	
}