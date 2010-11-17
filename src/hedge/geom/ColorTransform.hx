/**
 * ...
 * @author Skial Bainn
 */

package hedge.geom;

class ColorTransform {
	
	public var alphaMultiplier:Float;
	public var alphaOffset:Float;
	public var blueMultiplier:Float;
	public var blueOffset:Float;
	public var color:Int;
	public var greenMultiplier:Float;
	public var greenOffset:Float;
	public var redMultiplier:Float;
	public var redOffset:Float;

	public function new(redMultiplier:Float = 1.0, greenMultiplier:Float = 1.0, blueMultiplier:Float = 1.0, alphaMultiplier:Float = 1.0, redOffset:Float = 0, greenOffset:Float = 0, blueOffset:Float = 0, alphaOffset:Float = 0) {
		
	}
	
	public function concat(second:ColorTransform) {
		
	}
	
}