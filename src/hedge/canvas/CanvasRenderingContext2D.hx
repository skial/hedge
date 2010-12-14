/**
 * ...
 * @author Skial Bainn
 */

package hedge.canvas;
import js.Dom;

@:native('CanvasRenderingContext2D')
extern class CanvasRenderingContext2D {
	
	//	Methods and Variables taken from the brillant HTML5 Canvas Cheat Sheet.
	//	URL	-	http://www.nihilogic.dk/labs/canvas_sheet/HTML5_Canvas_Cheat_Sheet.pdf
	
	// CANVAS ELEMENT
	
	//	?? calling width and height does not work... not sure what I'm doing wrong... ??
	// default	-	300
	public var width:Int;
	//	default	-	150
	public var height:Int;
	
	// CANVAS METHODS
	
	public function toDataURL(?type:String, ?args:Array<Dynamic>):String;
	public function getContext(contextId:String):CanvasRenderingContext2D;
	
	// 2D CONTEXT
	
	public var canvas(default, null):HtmlDom;
	public function save():Void;
	public function restore():Void;
	
	// TRANSFORMATION
	
	public function scale(x:Float, y:Float):Void;
	public function rotate(angle:Float):Void;
	public function translate(x:Float, y:Float):Void;
	public function transform(m11:Float, m12:Float, m21:Float, m22:Float, dx:Float, dy:Float):Void;
	public function setTransform(m11:Float, m12:Float, m21:Float, m22:Float, dx:Float, dy:Float):Void;
	
	// IMAGE DRAWING
	
	// Argument "image" can be of type HTMLImageElement, HTMLCanvasElement or HTMLVideoElement
	public function drawImage(image:Dynamic, sx:Float, sy:Float, ?sw:Float, ?sh:Float, ?dx:Float, ?dy:Float, ?dw:Float, ?dh:Float):Void;
	
	// COMPOSITING
	
	//	default	-	1.0
	public var globalAlpha:Float;
	
	//	default	-	source-over
	//	supports any of the following	-	source-over, source-in, source-out, source-atop, destination-over, destination-in,
	//												destination-out, destination-atop, lighter, copy, xor
	//	look at the pdf, link at top of class, for graphics explaining what each operation does.
	public var globalCompositeOperation:String;
	
	// LINE STYLES
	
	//	default	-	1.0
	public var lineWidth:Float;
	
	//	default	-	butt
	//	supports any of the following	-	butt, round, square
	//	look at the pdf, link at top of class, for graphics explaining each lineCap.
	public var lineCap:String;
	
	//	default	-	miter
	//	supports any of the following	-	round, bevel, miter
	//	look at the pdf, link at top of class, for graphics explaining each lineJoin.
	public var lineJoin:String;
	
	//	default	-	10
	public var miterLimit:Float;
	
	// COLOURS, STYLES AND SHADOWS
	
	//	default	-	black
	public var strokeStyle:Dynamic;
	
	//	default	-	black
	public var fillStyle:Dynamic;
	
	//	default	-	0.0
	public var shadowOffsetX:Float;
	
	//	default	-	0.0
	public var shadowOffsetY:Float;
	
	//	default	-	0.0
	public var shadowBlur:Float;
	
	//	default	-	transparent black
	public var shadowColor:String;
	
	// METHODS
	
	public function createLinearGradient(x0:Float, y0:Float, x1:Float, y1:Float):CanvasGradient;
	public function createRadialGradient(x0:Float, y0:Float, r0:Float, x1:Float, y1:Float, r1:Float):CanvasGradient;
	
	//	Argument "image" can be of type HTMLImageElement, HTMLCanvasElement or HTMLVideoElement
	//	"repetition" supports any of the following values:	
	//		.	repeat	-	default
	//		.	repeat-x
	//		.	repeat-y
	//		.	no-repeat
	public function createPattern(image:Dynamic, repetition:String):Void;
	
	// PATHS METHODS
	
	public function beginPath():Void;
	public function closePath():Void;
	public function fill():Void;
	public function stroke():Void;
	public function clip():Void;
	public function moveTo(x:Float, y:Float):Void;
	public function lineTo(x:Float, y:Float):Void;
	public function quadraticCurveTo(cpx:Float, cpy:Float, x:Float, y:Float):Void;
	public function bezierCurveTo(cp1x:Float, cp1y:Float, cp2x:Float, cp2y:Float, x:Float, y:Float):Void;
	public function arcTo(x1:Float, y1:Float, x2:Float, y2:Float, radius:Float):Void;
	public function arc(x:Float, y:Float, radius:Float, startAngle:Float, endAngle:Float, anticlockwise:Bool):Void;
	public function rect(x:Float, y:Float, w:Float, h:Float):Void;
	public function isPointInPath(x:Float, y:Float):Bool;
	
	//	TEXT
	
	//	default	-	10px sans-serif
	public var font:String;
	
	//	default	-	start
	//	supports any of the following values	-	start, end, left, right, center
	public var textAlign:String;
	
	//	default	-	alphabetic
	//	supports any of the following values	-	top, hanging, middle, alphabetic, ideographic, bottom
	public var textBaseline:String;
	
	// METHODS
	
	public function fillText(text:String, x:Float, y:Float, ?maxWidth:Float):Void;
	public function strokeText(text:String, x:Float, y:Float, ?maxWidth:Float):Void;
	public function measureText(text:String):TextMetrics;
	
	// RECTANGLES
	
	// METHODS
	
	public function clearRect(x:Float, y:Float, w:Float, h:Float):Void;
	public function fillRect(x:Float, y:Float, w:Float, h:Float):Void;
	public function strokeRect(x:Float, y:Float, w:Float, h:Float):Void;
	
	// PIXEL MANIPULATION
	
	// METHODS
	
	//	?? two methods named the same, other one only takes following param	-	imagedata:ImageData ??
	public function createImageData(sw:Float, sh:Float):ImageData;
	public function getImageData(sx:Float, sy:Float, sw:Float, sh:Float):ImageData;
	public function putImageData(imagedata:ImageData, dx:Float, dy:Float, ?dirtyX:Float, ?dirtyY:Float, ?dirtyWidth:Float, ?dirtyHeight:Float):Void;
	
	
}