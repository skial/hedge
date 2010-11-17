/**
 * ...
 * @author Skial Bainn
 */

package hedge.canvas;

@:native('ImageData')
extern class ImageData {
	
	public var width(default, null):Int;
	public var height(default, null):Int;
	public var data(default, null):CanvasPixelArray;
	
}