/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;

class Bitmap extends DisplayObject {
	
	public var bitmapData(getBitmapData, setBitmapData):BitmapData;
	public var pixelSnapping:String;
	public var smoothing:Bool;

	public function new(?bitmapData:BitmapData = null, ?pixelSnapping:String = PixelSnapping.AUTO, ?smoothing:Bool = false):Void {
		super();
		this.bitmapData 		= bitmapData;
		this.pixelSnapping 	= pixelSnapping;
		this.smoothing 		= smoothing;
	}
	
	// INTERNAL METHODS
	
	private function getBitmapData():BitmapData {
		return __jq__.data('bitmapdata');
	}
	
	private function setBitmapData(value:BitmapData):BitmapData {
		this.width 	= value.width;
		this.height = value.height;
		__jq__.append(value.__canvas__);
		__jq__.data('bitmapdata', value);
		return value;
	}
	
}