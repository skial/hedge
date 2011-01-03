/**
 * ...
 * @author Skial Bainn
 */

package hedge.jquery.events;

import haxe.Timer;
import hedge.Setup;

@:keep
class EnterFrame {
	
	public static var data		:Hash<Dynamic> = new Hash<Dynamic>();
	public static var events	:Array<Dynamic> = new Array<Dynamic>();
	public static var interval	:Dynamic;
	public static var running	:Bool = false;
	public static var timer		:Timer;
	
	public static function addListener(name:String, listener:Dynamic):Void {
		data.set(name, listener);
		events.push(name);
		if (events.length != 0) {
			running = true;
			determineFrameRate();
			timer = new Timer(interval);
			timer.run = runEnterFrame;
		}
	}
	
	public static function removeListener(name:String, listener:Dynamic):Void {
		if (data.exists(name) == true) {
			data.remove(name);
			events.remove(name);
			if (events.length == 0) {
				running = false;
				timer.stop();
			}
		}
	}
	
	public static function determineFrameRate():Void {
		interval = 1000 / Setup.frameRate;
	}
	
	public static function runEnterFrame():Void {
		if (running == true) {
			for (i in events) {
				data.get(i)('');
			}
		} else {
			timer.stop();
		}
	}
	
}