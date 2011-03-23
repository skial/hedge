/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.html5.Canvas;
import hedge.html5.CanvasRenderingContext2D;
import hedge.html5.Image;
import hedge.html5.ImageData;
import hedge.events.MouseEvent;
import hedge.filters.BitmapFilter;
import hedge.geom.ColorTransform;
import hedge.geom.Matrix;
import hedge.geom.Point;
import hedge.geom.Rectangle;
import hedge.utils.ByteArray;
import hedge.Setup;
import js.Lib;
import js.Dom;
import hedge.Twig;
import hedge.TwigType;

using Std;

class BitmapData implements IBitmapDrawable, implements ArrayAccess<Dynamic> {
	
	/* resources
		[1] - http://stackoverflow.com/questions/1829586/how-do-i-give-an-html-canvas-the-keyboard-focus-using-jquery
	*/
	
	public var height(getHeight, null)	:Int;
	public var rect			:Rectangle;
	public var transparent	:Bool;
	public var width(getWidth, null)		:Int;
	
	//public var __canvas__	:JQuery;
	//public var __canvas__	:Twig;
	public var __canvas__	:HtmlDom;
	public var __context__	:CanvasRenderingContext2D;
	public var __id__			:String;
	public var __fillColor__:Int;
	//public var __source__	:JQuery;
	public var __source__	:Image;

	public function new(width:Int, height:Int, ?transparent:Bool = true, ?fillColor:Int = 0x00FFFFFF, ?elementId:String = null):Void {
		this.width 				= width;
		this.height 			= height;
		this.transparent 		= transparent 	== null ? true 								: transparent;
		this.__fillColor__ 	= fillColor 	== null ? 0x00FFFFFF 						: fillColor;
		this.__id__				= Setup.generateInstanceName();
		//this.__source__ 		= cssSelector	== null ? null									: new JQuery(cssSelector);
		//this.__source__ 		= elementId	== null ? null									: untyped new Twig(elementId, TwigType.FIND_ID).element;
		this.__source__ 		= elementId	== null ? null									: untyped Lib.document.getElementById(elementId);
		
		//__canvas__ = new JQuery('<canvas>')
		/*__canvas__ = new Twig('canvas', TwigType.CREATE_ELEMENT)
			.addClass('bitmapdata')
			//.attr( { id:__id__, width:width, height:height } );
			.attrMap( { id:__id__, width:width, height:height } );*/
		
		__canvas__ = Lib.document.createElement('canvas');
		__canvas__.className += 'bitmapdata';
		__canvas__.setAttribute('id', __id__);
		__canvas__.setAttribute('width', width.string());
		__canvas__.setAttribute('height', height.string());
		
		// put bitmapdata in default location - <div id="bmdh"></div>, if assigned to bitmap, move to new location
		//Setup.__storage__.append(__canvas__);
		Setup.__storage__.appendChild(__canvas__);
			
		/*__canvas__.bind('mouseenter', onCanvasEnter);
		__canvas__.bind('mouseleave', onCanvasLeave);*/
		untyped __canvas__.onmouseover = onCanvasEnter;
		untyped __canvas__.onmouseout = onCanvasLeave;
		
		//__context__ = untyped __canvas__.element.getContext('2d');
		__context__ = untyped __canvas__.getContext('2d');
		
		if (elementId == null) {
			this.fillRect(new Rectangle(0, 0, width, height), this.__fillColor__);
		} else {
			//__context__.drawImage(this.__source__[0], 0, 0);
			__context__.drawImage(this.__source__, 0, 0);
		}
	}
	
	public function applyFilter(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, filter:BitmapFilter) {
		
	}
	
	public function clone():BitmapData {
		var _b = new BitmapData(this.width, this.height, this.transparent, this.__fillColor__, this.__id__ + '_clone');
		//_b.draw(this.__canvas__[0]);
		_b.draw(this.__canvas__);
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
		//this.__context__.drawImage(sourceBitmapData.__canvas__[0], sourceRect.x, sourceRect.y, sourceRect.width, sourceRect.height, destPoint.x, destPoint.y, sourceRect.width, sourceRect.height);
		//this.__context__.drawImage(untyped sourceBitmapData.__canvas__.element, sourceRect.x, sourceRect.y, sourceRect.width, sourceRect.height, destPoint.x, destPoint.y, sourceRect.width, sourceRect.height);
		this.__context__.drawImage(untyped sourceBitmapData.__canvas__, sourceRect.x, sourceRect.y, sourceRect.width, sourceRect.height, destPoint.x, destPoint.y, sourceRect.width, sourceRect.height);
	}
	
	public function dispose() {
		
	}
	
	public function draw(source:IBitmapDrawable, matrix:Matrix = null, colorTransform:ColorTransform = null, blendMode:String = null, clipRect:Rectangle = null, smoothing:Bool = false) {
		// todo - need to check type of source - or only allow bitmapdata
		this.__context__.drawImage(source, 0, 0);
	}
	
	public function fillRect(rect:Rectangle, color:Int) {
		__context__.fillStyle = this.transparent == true ? Setup.canvas_RGBA_to_String(color) : Setup.RGB_to_String(color);
		__context__.fillRect(rect.x.int(), rect.y.int(), rect.width.int(), rect.height.int());
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
	
	private function onCanvasEnter(e:MouseEvent):Void {
		//__canvas__.attr( { tabindex:0 }).focus();
		//__canvas__.attr('tabindex', 0).focus();
		__canvas__.setAttribute('tabindex', '0');
		__canvas__.focus();
	}
	
	private function onCanvasLeave(e:MouseEvent):Void {
		//__canvas__.removeAttr('tabindex').blur();
		untyped __canvas__.removeAttribute('tabindex');
		__canvas__.blur();
	}
	
}