/**
 * ...
 * @author Skial Bainn
 */

package hedge.events.internal;

import hedge.Setup;

@:keep
class EnterFrame {
	
	public static var dataHash		:Hash<Int> = new Hash<Int>();
	public static var dataArray	:Array<Dynamic> = new Array<Dynamic>();
	public static var interval		:Dynamic;
	public static var timer			:Dynamic;
	public static var eventLength	:Int = 0;
	public static var i				:Int = 0;
	
	public static function addListener(name:String, listener:Dynamic):Void {
		dataHash.set(name, dataArray.push(listener));
		if (dataArray.length != 0) {
			determineFrameRate();
			timer = untyped setInterval(runEnterFrame, interval);
		}
		eventLength = dataArray.length;
	}
	
	public static function removeListener(name:String, listener:Dynamic):Void {
		if (dataHash.exists(name) == true) {
			dataArray.remove(listener);
			dataHash.remove(name); // this might not work... need to test
			if (dataArray.length == 0) {
				untyped clearInterval(timer);
			}
			eventLength = dataArray.length;
		}
	}
	
	public inline static function determineFrameRate():Void {
		interval = 1000 / Setup.frameRate;
	}
	
	public static function runEnterFrame():Void {
		if (eventLength != 0) {
			i = eventLength;
			while (i > 0) {
				dataArray[i-1]('');
				i--;
			}
		} else {
			untyped clearInterval(timer);
		}
	}
	
}