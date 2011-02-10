/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.canvas.CanvasRenderingContext2D;
import hedge.display.DisplayObject;
import hedge.Setup;

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
	
	public var __running__:Bool;
	public var __timers__:Array<Dynamic>;
	public var __counter__:Int;
	public var __interval__:Float;
	
	public var __bitmap__:Bitmap;
	public var __bitmapdata__:BitmapData;
	
	public var __movieclip__:MovieclipStructure;
	
	private var __frames__:Array<MovieclipFrame>;
	private var __layers__:Array<MovieclipLayer>;

	public function new() {
		super();
		
		for (i in Setup.__movieclips__) {
			if (i.movieclipLink == Type.getClassName(Type.getClass(this))) {
				__movieclip__ = { movieclipLink:null, movieclipLayers:new Array<MovieclipLayer>() };
				__movieclip__ = i;
				
				__layers__ = __movieclip__.movieclipLayers;
				__frames__ = __movieclip__.movieclipLayers[0].labelFrames;
				
				/*__bitmapdata__ = new BitmapData(new JQuery(__frames__[0].frameData).width(), new JQuery(__frames__[0].frameData).height(), true, 0xFF000000);
				__bitmap__ = new Bitmap(__bitmapdata__);*/
				
				break;
			}
		}
		
		//if (__movieclip__ != null) addChild(__bitmap__);
		if (__movieclip__ != null) {
			__timers__ = new Array<Dynamic>();
			for (i in __layers__) {
				// unfortunately we need to reference (this) for setTimeout to work, also to access __updateRender__ & mclb. Wrapped in a closure.
				var __self__ = this;
				var mclb:MovieclipLayerBitmap = { labelName:i.labelName, 
															 labelFrames:i.labelFrames, 
															 labelBitmap:new Bitmap(
																new BitmapData(
																	new JQuery(i.labelFrames[0].frameData).width(), 
																	new JQuery(i.labelFrames[0].frameData).height(), 
																	true, 
																	0xFF000000)
															 ),
															 labelTimerPosition:null};
				addChild(mclb.labelBitmap);
				mclb.labelTimerPosition = __timers__.push(untyped setTimeout(function() { __self__.__updateRender__(mclb); }, i.labelFrames[0].framePause))-1;
			}
		}
		
		__running__ = false;
		__counter__ = 0;
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
	
	/*override public function addChild(child:DisplayObject):DisplayObject {
		__checkRunning__();
		return super.addChild(child);
	}
	
	override public function addChildAt(child:DisplayObject, index:Int):DisplayObject {
		__checkRunning__();
		return super.addChildAt(child, index);
	}*/
	
	//	INTERNAL
	
	private inline function __checkRunning__():Void {
		if (__running__ == false) {
			__running__ = true;
			__timer__ = untyped setTimeout(__updateRender__, __interval__);
		}
	}
	
	private function __updateRender__(layer:MovieclipLayerBitmap):Void {
		trace(layer.labelName);
		trace(layer.labelTimerPosition);
		/*__bitmapdata__.__context__.drawImage(__frames__[__counter__].frameData, 0, 0);
		__interval__ = Std.parseFloat(__frames__[__counter__].framePause) * 1000;
		__counter__ == __frames__.length - 1 ? __counter__ = 0 : ++__counter__;
		__timer__ = untyped setTimeout(__updateRender__, __interval__);*/
	}
	
	private function __stopRender__():Void {
		__running__ = false;
		//untyped clearTimeout(__timer__);
	}
	
}