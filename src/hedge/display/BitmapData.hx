/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.canvas.CanvasRenderingContext2D;
import hedge.canvas.ImageData;
import hedge.filters.BitmapFilter;
import hedge.geom.ColorTransform;
import hedge.geom.Matrix;
import hedge.geom.Point;
import hedge.geom.Rectangle;
import hedge.utils.ByteArray;
import hedge.Setup;
import js.Lib;
import js.Dom;

class BitmapData implements IBitmapDrawable, implements ArrayAccess<Dynamic> {
	
	public var height(getHeight, null)	:Int;
	public var rect			:Rectangle;
	public var transparent	:Bool;
	public var width(getWidth, null)		:Int;
	
	public var __canvas__	:JQuery;
	public var __context__	:CanvasRenderingContext2D;
	public var __id__			:String;
	public var __fillColor__:Int;
	public var __source__	:JQuery;

	public function new(width:Int, height:Int, ?transparent:Bool = true, ?fillColor:Int = 0x00FFFFFF, ?cssSelector:String = null):Void {
		this.width 				= width;
		this.height 			= height;
		this.transparent 		= transparent 	== null ? true 								: transparent;
		this.__fillColor__ 	= fillColor 	== null ? 0x00FFFFFF 						: fillColor;
		this.__id__				= Setup.generateInstanceName();
		this.__source__ 		= cssSelector	== null ? null									: new JQuery(cssSelector);
		
		__canvas__ = new JQuery('<canvas></canvas>').addClass('bitmapdata').attr('id', __id__).attr('width', width).attr('height', height);
		// put bitmapdata in default location - <div id="bmdh"></div>, if assigned to bitmap, move to new location
		Setup.__storage__.append(__canvas__);
		// untyped following line - as I could not call getContext from variable as it's type is Jquery
		__context__ = untyped __canvas__[0].getContext('2d');
		if (cssSelector == null) {
			this.fillRect(new Rectangle(0, 0, width, height), this.__fillColor__);
		} else {
			__context__.drawImage(this.__source__[0], 0, 0);
		}
	}
	
	public function applyFilter(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, filter:BitmapFilter) {
		
	}
	
	public function clone():BitmapData {
		var _b = new BitmapData(this.width, this.height, this.transparent, this.__fillColor__, this.__id__ + '_clone');
		_b.draw(this.__canvas__[0]);
		return _b;
	}
	
	public function colorTransform(rect:Rectangle, colorTransform:ColorTransform) {
		
	}
	
	public function compare(otherBitmapData:BitmapData):Dynamic {
		return Dynamic;
	}
	
	public function copyChannel(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, sourceChannel:Int, destChannel:Int) {
		
	}
	
	public function copyPixels(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, alphaBitmapData:BitmapData = null, alphaPoint:Point = null, mergeAlpha:Bool = false) {
		__context__.drawImage(sourceBitmapData.__canvas__[0], sourceRect.x, sourceRect.y, sourceRect.width, sourceRect.height, destPoint.x, destPoint.y, sourceRect.width, sourceRect.height);
	}
	
	public function dispose() {
		
	}
	
	public function draw(source:IBitmapDrawable, matrix:Matrix = null, colorTransform:ColorTransform = null, blendMode:String = null, clipRect:Rectangle = null, smoothing:Bool = false) {
		// todo - need to check type of source - or only allow bitmapdata
		__context__.drawImage(source, 0, 0);
	}
	
	public function fillRect(rect:Rectangle, color:Int) {
		__context__.fillStyle = this.transparent == true ? Setup.canvas_RGBA_to_String(color) : Setup.RGB_to_String(color);
		__context__.fillRect(rect.x, rect.y, rect.width, rect.height);
	}
	
	public function floodFill(x:Int, y:Int, color:Int) {
		__context__.fillStyle = Setup.RGB_to_String(color);
		__context__.fillRect(x, y, this.width, this.height);
	}
	
	public function generateFilterRect(sourceRect:Rectangle, filter:BitmapData):Rectangle {
		return new Rectangle();
	}
	
	public function getColorBoundsRect(mask:Int, color:Int, findColor:Bool = true):Rectangle {
		return new Rectangle();
	}
	
	public function getPixel(x:Int, y:Int):Int {
		var values:Array<Int> = untyped __context__.getImageData(x, y, x + 1, y + 1).data;
		return Setup.RGB_String_to_HEX('rgb(' + values[0] + ', ' + values[1] + ', ' + values[2] + ')');
	}
	
	public function getPixel32(x:Int, y:Int):Int {
		var values:Array<Int> = untyped __context__.getImageData(x, y, x + 1, y + 1).data;
		return Setup.ARGB_String_to_HEX('argb(' + values[3] + ', ' + values[0] + ', ' + values[1] + ', ' + values[2] + ')');
	}
	
	public function getPixels(rect:Rectangle):ByteArray {
		return new ByteArray();
	}
	
	public function hitTest(firstPoint:Point, firstAlphaThreshold:Int, secondObject:Dynamic, secondBitmapDataPoint:Point = null, secondAlphaThreshold:Int = 1):Bool {
		return true;
	}
	
	public function lock() {
		__context__.save();
	}
	
	public function merge(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, redMultiplier:Int, greenMultiplier:Int, blueMultiplier:Int, alphaMultiplier:Int) {
		
	}
	
	public function noise(randomSeed:Int, low:Int = 0, high:Int = 255, channelOptions:Int = 7, grayScale:Bool = false) {
		
	}
	
	public function paletteMap(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, redArray:Array<Int> = null, greenArray:Array<Int> = null, blueArray:Array<Int> = null, alphaArray:Array<Int> = null) {
		
	}
	
	public function perlinNoise(baseX:Float, baseY:Float, numOctaves:Int, randomSeed:Int, stitch:Bool, fractalNoise:Bool, channelOptions:Int = 7, grayScale:Bool = false, offsets:Array<Int> = null) {
		
	}
	
	public function pixelDissolve(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, randomSeed:Int = 0, numPixels:Int = 0, fillColor:Int = 0):Int {
		return 1;
	}
	
	public function scroll(x:Int, y:Int) {
		
	}
	
	public function setPixel(x:Int, y:Int, color:Int) {
		
	}
	
	public function setPixel32(x:Int, y:Int, color:Int) {
		
	}
	
	public function setPixels(rect:Rectangle, inputByteArray:ByteArray) {
		
	}
	
	public function threshold(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, operation:String, threshold:Int, color:Int = 0, mask:Int = 0xFFFFFFFF, copySource:Bool = false):Int {
		return 1;
	}
	
	public function unlock(changeRect:Rectangle = null) {
		__context__.restore();
	}
	
	// INTERNAL METHODS
	
	private function getHeight():Int {
		return height;
	}
	
	private function getWidth():Int {
		return width;
	}
	
}