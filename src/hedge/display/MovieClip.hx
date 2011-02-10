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
	public var __timer__:Dynamic;
	public var __counter__:Int;
	public var __interval__:Float;
	
	public var __bitmap__:Bitmap;
	public var __bitmapdata__:BitmapData;
	
	public var __movieclip__:MovieclipStructure;
	
	private var __frames__:Array<MovieclipFrame>;
	private var __layers__:Array<MovieclipLayer>;

	public function new() {
		super();
		
		__movieclip__ = { movieclipLink:null, movieclipLayers:new Array<MovieclipLayer>() };
		
		trace(Type.getClassName(Type.getClass(this)));
		for (i in Setup.__movieclips__) {
			if (i.movieclipLink == Type.getClassName(Type.getClass(this))) {
				__movieclip__ = i;
				
				__frames__ = __movieclip__.movieclipLayers[0].labelFrames;
				
				__bitmapdata__ = new BitmapData(new JQuery(__frames__[0].frameData).width(), new JQuery(__frames__[0].frameData).height(), true, 0xFF000000);
				__bitmap__ = new Bitmap(__bitmapdata__);
				
				break;
			}
		}
		
		trace(__movieclip__);
		trace(__movieclip__ != null);
		
		if (__movieclip__ != null) addChild(__bitmap__);
		
		/*var tmp:JQuery;
		var movie = new JQuery('div[data-link="' + Type.getClassName(Type.getClass(this)) + '"]');
		var layers:JQuery = movie.children('div');
		var frames:JQuery;
		
		__movieclip__.movieclipLink = movie.attr('data-link');
		
		for (i in 0...layers.length) {
			var mcl:MovieclipLayer = { labelName:null, labelFrames:new Array<MovieclipFrame>() };
			
			tmp = new JQuery(layers[i]);
			mcl.labelName = tmp.attr('class');
			
			frames = tmp.children('img');
			
			for (j in 0...frames.length) {
				var mcf:MovieclipFrame = { frameName:null, frameData:null, framePause:null };
				
				tmp = new JQuery(frames[j]);
				
				mcf.frameName = tmp.attr('class');
				mcf.framePause = tmp.attr('data-pause');
				mcf.frameData = tmp[0];
				
				mcl.labelFrames.push(mcf);
			}
			__movieclip__.movieclipLayers.push(mcl);
		}
		__frames__ = __movieclip__.movieclipLayers[0].labelFrames;
		trace(__movieclip__);
		trace(__movieclip__ != null);*/
		
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
		__bitmapdata__.__context__.drawImage(__frames__[__counter__].frameData, 0, 0);
		__interval__ = Std.parseFloat(__frames__[__counter__].framePause) * 1000;
		__counter__ == __frames__.length - 1 ? __counter__ = 0 : ++__counter__;
		__timer__ = untyped setTimeout(__updateRender__, __interval__);
	}
	
	private function __stopRender__():Void {
		__running__ = false;
		untyped clearTimeout(__timer__);
	}
	
}