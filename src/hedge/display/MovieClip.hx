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

	public function new() {
		super();
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
	
	//	INTERNAL
	
}