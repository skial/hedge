/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.Twig;
import hedge.TwigType;
using hedge.Twig;

class Bitmap extends DisplayObject {
	
	private var bmd:BitmapData;
	
	public var bitmapData(getBitmapData, setBitmapData):BitmapData;
	public var pixelSnapping:String;
	public var smoothing:Bool;

	public function new(?bitmapData:BitmapData = null, ?pixelSnapping:String = PixelSnapping.AUTO, ?smoothing:Bool = false):Void {
		super();
		this.bitmapData 		= bitmapData;
		this.pixelSnapping 	= pixelSnapping;
		this.smoothing 		= smoothing;
		this.__ele__.className = 'bitmap ';
	}
	
	// INTERNAL METHODS
	
	private function getBitmapData():BitmapData {
		return this.bmd;
	}
	
	private function setBitmapData(value:BitmapData):BitmapData {
		this.width 	= value.width;
		this.height = value.height;
		//__jq__.append(value.__canvas__);
		__ele__.appendChild(value.__canvas__);
		this.bmd = value;
		return value;
	}
	
}