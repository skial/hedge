/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;

class Bitmap extends DisplayObject {
	
	private var __bmd__:BitmapData;
	
	public var bitmapData(get_bitmapData, set_bitmapData):BitmapData;
	public var pixelSnapping:String;
	public var smoothing:Bool;

	public function new(?bitmapData:BitmapData = null, ?pixelSnapping:String = PixelSnapping.AUTO, ?smoothing:Bool = false):Void {
		super();
		this.bitmapData 	= bitmapData;
		this.pixelSnapping 	= pixelSnapping;
		this.smoothing 		= smoothing;
	}
	
	//	OVERRIDE METHODS
	
	override private function initialize():Void {
		super.initialize();
		this.initializeBitmap();
	}
	
	// INTERNAL METHODS
	
	private function initializeBitmap():Void {
		this.__ele__.addClass('hBitmap');
	}
	
	private inline function get_bitmapData():BitmapData {
		return this.__bmd__;
	}
	
	private function set_bitmapData(value:BitmapData):BitmapData {
		this.width = value.width;
		this.height = value.height;
		this.__node__.appendChild(value.__node__);
		this.__bmd__ = value;
		return value;
	}
	
}