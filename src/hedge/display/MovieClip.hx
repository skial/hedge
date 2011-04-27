/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import html5.CanvasRenderingContext2D;
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
	
	public var __timers__:Array<Dynamic>;
	
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
				
				break;
			}
		}
		
		if (__movieclip__ != null) {
			__timers__ = new Array<Dynamic>();
			for (i in __layers__) {
				// unfortunately we need to reference (this) for setTimeout to work, also to access __updateRender__. Wrapped in a closure.
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
															 labelTimerPosition:null,
															 labelCounter:0 };
				mclb.labelBitmap.name = mclb.labelName;
				addChild(mclb.labelBitmap);
				mclb.labelTimerPosition = __timers__.push(untyped setTimeout(function() { __self__.__updateRender__(mclb); }, 0)) - 1;
			}
		}
		
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
		for (i in __timers__) {
			untyped clearTimeout(i);
		}
	}
	
	//	OVERRIDE
	
	//	INTERNAL
	
	private function __updateRender__(layer:MovieclipLayerBitmap):Void {
		var __self__ = this;
		layer.labelBitmap.bitmapData.__context__.drawImage(layer.labelFrames[layer.labelCounter].frameData, 0, 0);
		layer.labelCounter == layer.labelFrames.length - 1 ? layer.labelCounter = 0 : ++layer.labelCounter;
		__timers__[layer.labelTimerPosition] = untyped setTimeout(untyped setTimeout(function() { __self__.__updateRender__(layer); }, Std.parseFloat(layer.labelFrames[layer.labelCounter].framePause) * 1000));
	}
	
}