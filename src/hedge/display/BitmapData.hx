/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;

import haxe.io.Bytes;
import hedge.events.MouseEvent;
import hedge.filters.BitmapFilter;
import hedge.geom.ColorTransform;
import hedge.geom.Matrix;
import hedge.geom.Point;
import hedge.geom.Rectangle;
import hedge.utils.ByteArray;
import hedge.Setup;
import html5.Canvas;
import html5.CanvasRenderingContext2D;
import html5.Image;

import js.Lib;
import js.Dom;
import jQuery.JQuery;

using Std;

class BitmapData implements IBitmapDrawable, implements ArrayAccess<Dynamic> {
	
	/* resources
		[1] - http://stackoverflow.com/questions/1829586/how-do-i-give-an-html-canvas-the-keyboard-focus-using-jquery
	*/
	
	public var height(default, null):Int;
	public var rect:Rectangle;
	public var transparent:Bool;
	public var width(default, null):Int;
	
	public var __node__:Canvas;
	public var __ele__:JQuery;
	public var __ctx__:CanvasRenderingContext2D;
	public var __clr__:Int;
	public var __img__:Image;

	public function new(width:Int, height:Int, ?transparent:Bool = true, ?fillColor:Int = 0x00FFFFFF, ?elementId:String = null):Void {
		this.width = width;
		this.height = height;
		this.transparent = transparent;
		this.__clr__ = fillColor;
		
		this.__node__ = cast Lib.document.createElement('canvas');
		
		Setup.__storage__.appendChild(this.__node__);
		
		this.__ele__ = new JQuery(this.__node__);
		this.__ele__.attr( { id:Setup.generateInstanceName(), width:this.width, height:this.height } );
		this.__ele__.addClass('hBitmapData');
		this.__ctx__ = this.__node__.getContext('2d');
		
		if (elementId == null) {
			this.fillRect(new Rectangle(0, 0, this.width, this.height), fillColor);
		} else {
			this.__img__ = cast Lib.document.getElementById(elementId);
			this.__ctx__.drawImage(this.__img__, 0, 0);
		}
	}
	
	public function applyFilter(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, filter:BitmapFilter) {
		
	}
	
	public inline function clone():BitmapData {
		var b = new BitmapData(this.width, this.height, this.transparent, this.__clr__, this.__ele__.attr('id'));
		return b;
	}
	
	public function colorTransform(rect:Rectangle, colorTransform:ColorTransform) {
		
	}
	
	public function compare(otherBitmapData:BitmapData):Dynamic {
		return Dynamic;
	}
	
	public function copyChannel(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, sourceChannel:Int, destChannel:Int) {
		
	}
	
	public inline function copyPixels(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, alphaBitmapData:BitmapData = null, alphaPoint:Point = null, mergeAlpha:Bool = false) {
		this.__ctx__.drawImage(untyped sourceBitmapData.__node__, sourceRect.x, sourceRect.y, sourceRect.width, sourceRect.height, destPoint.x, destPoint.y, sourceRect.width, sourceRect.height);
	}
	
	public function dispose() {
		
	}
	
	public inline function draw(source:IBitmapDrawable, matrix:Matrix = null, colorTransform:ColorTransform = null, blendMode:String = null, clipRect:Rectangle = null, smoothing:Bool = false) {
		this.__ctx__.drawImage(source, 0, 0);
	}
	
	public inline function fillRect(rect:Rectangle, color:Int) {
		this.__ctx__.fillStyle = this.transparent == true ? Setup.rgba(color) : Setup.rgb(color);
		this.__ctx__.fillRect(rect.x.int(), rect.y.int(), rect.width.int(), rect.height.int());
	}
	
	public inline function floodFill(x:Int, y:Int, color:Int) {
		this.__ctx__.fillStyle = Setup.rgb(color);
		this.__ctx__.fillRect(x, y, this.width, this.height);
	}
	
	public function generateFilterRect(sourceRect:Rectangle, filter:BitmapData):Rectangle {
		return new Rectangle();
	}
	
	public function getColorBoundsRect(mask:Int, color:Int, findColor:Bool = true):Rectangle {
		return new Rectangle();
	}
	
	public inline function getPixel(x:Int, y:Int):Int {
		return Setup.rgbIntToHex(untyped this.__ctx__.getImageData(x, y, x + 1, y + 1).data);
	}
	
	public inline function getPixel32(x:Int, y:Int):Int {
		return Setup.argbIntToHex(untyped this.__ctx__.getImageData(x, y, x + 1, y + 1).data);
	}
	
	public function getPixels(rect:Rectangle):ByteArray {
		return new ByteArray();
	}
	
	public function hitTest(firstPoint:Point, firstAlphaThreshold:Int, secondObject:Dynamic, secondBitmapDataPoint:Point = null, secondAlphaThreshold:Int = 1):Bool {
		return true;
	}
	
	public inline function lock() {
		this.__ctx__.save();
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
	
	public inline function unlock(changeRect:Rectangle = null) {
		this.__ctx__.restore();
	}
	
	// INTERNAL METHODS
	
}