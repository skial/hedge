/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.canvas.CanvasRenderingContext2D;
import hedge.filters.BitmapFilter;
import hedge.geom.ColorTransform;
import hedge.geom.Matrix;
import hedge.geom.Point;
import hedge.geom.Rectangle;
import hedge.utils.ByteArray;
import hedge.Setup;

class BitmapData implements IBitmapDrawable {
	
	public var height(getHeight, setHeight):Int;
	public var rect:Rectangle;
	public var transparent:Bool;
	public var width(getWidth, setWidth):Int;
	
	public var __canvas__:JQuery;
	public var __context__:CanvasRenderingContext2D;
	public var __id__:String;
	public var __fillColor__:Int;
	public var __canvasID__:String;

	public function new(width:Int, height:Int, ?transparent:Bool = true, ?fillColor:Int = 0xFFFFFFFF, ?canvasID:String = null):Void {
		this.width = width;
		this.height = height;
		this.transparent = transparent;
		this.__fillColor__ = fillColor;
		this.__canvasID__ = canvasID;
		
		__id__ = ((canvasID == null)) ? Setup.generateInstanceName() : __canvasID__;
		__canvas__ = new JQuery('<canvas></canvas>').attr('id', __id__).attr('width', width).attr('height', height);
		// put bitmapdata in default location - <div id="bmdh"></div>, if assigned to bitmap, move to new location
		Setup.__storage__.append(__canvas__);
		// untyped following line - as I could not call getContext from variable as it's type is Jquery
		__context__ = untyped __canvas__[0].getContext('2d');
		__context__.fillStyle = Setup.RGB_to_String(__fillColor__);
		__context__.fillRect(0, 0, width, height);
	}
	
	public function applyFilter(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, filter:BitmapFilter) {
		
	}
	
	public function clone():BitmapData {
		return new BitmapData(this.width, this.height, this.transparent, this.__fillColor__, this.__canvasID__ + '_clone');
	}
	
	public function colorTransform(rect:Rectangle, colorTransform:ColorTransform) {
		
	}
	
	public function compare(otherBitmapData:BitmapData):Dynamic {
		return Dynamic;
	}
	
	public function copyChannel(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, sourceChannel:Int, destChannel:Int) {
		
	}
	
	public function copyPixels(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, alphaBitmapData:BitmapData = null, alphaPoint:Point = null, mergeAlpha:Bool = false) {
		
	}
	
	public function dispose() {
		
	}
	
	public function draw(source:IBitmapDrawable, matrix:Matrix = null, colorTransform:ColorTransform = null, blendMode:String = null, clipRect:Rectangle = null, smoothing:Bool = false) {
		
	}
	
	public function fillRect(rect:Rectangle, color:Int) {
		__context__.fillStyle = Setup.RGB_to_String(color);
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
		
	}
	
	// INTERNAL METHODS
	
	private function getHeight():Int {
		return height;
	}
	
	private function setHeight(value:Int):Int {
		height = value;
		return height;
	}
	
	private function getWidth():Int {
		return width;
	}
	
	private function setWidth(value:Int):Int {
		width = value;
		return width;
	}
	
}