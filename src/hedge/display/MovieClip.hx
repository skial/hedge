/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.canvas.CanvasRenderingContext2D;
import hedge.display.DisplayObject;

class MovieClip extends Sprite {
	
	public var currentFrame:Int;
	public var currentLabel:String;
	public var currentLabels:Array<String>;
	public var currentScene:Scene;
	public var enabled:Bool;
	public var framesLoaded:Int;
	public var scenes:Array<Scene>;
	public var totalFrames:Int;
	public var trackAsMenu:Bool;
	
	private var __timeline__:JQuery;
	private var __frames__:JQuery;
	
	private var __running__:Bool;
	private var __timer__:Dynamic;
	private var __counter__:Int;
	private var __interval__:Float;
	
	private var __bitmap__:Bitmap;
	private var __bitmapdata__:BitmapData;
	
	private var __array__:Array<Dynamic>;

	public function new() {
		super();
		__timeline__ = new JQuery('div[data-link="' + Type.getClassName(Type.getClass(this)) + '"]');
		__frames__ = __timeline__.children('img');
		
		__running__ = false;
		__counter__ = 0;
		__array__ = new Array<Dynamic>();
		
		for (n in 0...__frames__.length) {
			__array__.push( { image:new JQuery(__frames__[n]), pause:new JQuery(__frames__[n]).attr('data-pause') } );
		}
		
		__bitmapdata__ = new BitmapData(__array__[0].image.width(), __array__[0].image.height(), true, 0xFF000000);
		__bitmap__ = new Bitmap(__bitmapdata__);
		
		this.addChild(__bitmap__);
	}
	
	public function gotoAndPlay(frame:Dynamic, ?scene:String = null):Void {
		
	}
	
	public function gotoAndStop(frame:Dynamic, ?scene:String = null):Void {
		
	}
	
	public function nextFrame():Void {
		
	}
	
	public function nextScene():Void {
		
	}
	
	public function play():Void {
		
	}
	
	public function prevFrame():Void {
		
	}
	
	public function prevScene():Void {
		
	}
	
	public function stop():Void {
		
	}
	
	//	OVERRIDE
	
	override public function addChild(child:DisplayObject):DisplayObject {
		__checkRunning__();
		return super.addChild(child);
	}
	
	override public function addChildAt(child:DisplayObject, index:Int):DisplayObject {
		__checkRunning__();
		return super.addChildAt(child, index);
	}
	
	//	INTERNAL
	
	private inline function __checkRunning__():Void {
		if (__running__ == false) {
			__running__ = true;
			__timer__ = untyped setTimeout(__updateRender__, __interval__);
		}
	}
	
	private function __updateRender__():Void {
		__bitmapdata__.__context__.drawImage(__array__[__counter__].image[0], 0, 0);
		__interval__ = Std.parseFloat(__array__[__counter__].pause) * 1000;
		__counter__ == __array__.length - 1 ? __counter__ = 0 : ++__counter__;
		__timer__ = untyped setTimeout(__updateRender__, __interval__);
	}
	
	private function __stopRender__():Void {
		__running__ = false;
		untyped clearTimeout(__timer__);
	}
	
}