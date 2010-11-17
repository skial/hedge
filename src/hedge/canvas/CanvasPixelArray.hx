/**
 * ...
 * @author Skial Bainn
 */

package hedge.canvas;

@:native('CanvasPixelArray')
extern class CanvasPixelArray implements ArrayAccess<Int> {
	
	public var length(default, null):Int;
	
}