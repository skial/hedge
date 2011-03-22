/**
 * ...
 * @author Skial Bainn
 */

package hedge.events.internal;

import hedge.events.Event;
import hedge.events.EventPhase;
import hedge.Setup;

class HedgeEnterFrame {
	
	/*public static var dataHash		:Hash<Int> = new Hash<Int>();
	public static var dataArray	:Array<Dynamic> = new Array<Dynamic>();
	public static var interval		:Dynamic;
	public static var timer			:Dynamic;
	public static var eventLength	:Int = 0;
	public static var i				:Int = 0;*/
	
	public static var array:Array<EnterFrameEventStructure> = new Array<EnterFrameEventStructure>();
	public static var length:Int = 0;
	public static var timer:Dynamic;
	public static var interval:Float;
	public static var event:Event = new Event(Event.ENTER_FRAME, false, false);
	
	public static function init():Void {
		event.eventPhase = EventPhase.AT_TARGET;
	}
	
	//public static function add(name:String, listener:Dynamic):Void {
	public static function add(efes:EnterFrameEventStructure):Void {
		/*dataHash.set(name, dataArray.push(listener));
		if (dataArray.length != 0) {
			determineFrameRate();
			timer = untyped setInterval(runEnterFrame, interval);
		}
		eventLength = dataArray.length;*/
		
		array.push(efes);
		length = array.length;
		
		if (length == 0) {
			determineFrameRate();
			timer = untyped setInterval(runEnterFrame, interval);
			
		}
		
	}
	
	public static function remove(name:String, listener:Dynamic):Void {
		/*if (dataHash.exists(name) == true) {
			dataArray.remove(listener);
			dataHash.remove(name); // this might not work... need to test
			if (dataArray.length == 0) {
				untyped clearInterval(timer);
			}
			eventLength = dataArray.length;
		}*/
	}
	
	public inline static function determineFrameRate():Void {
		interval = 1000 / Setup.frameRate;
	}
	
	public static function runEnterFrame():Void {
		/*if (eventLength != 0) {
			i = eventLength;
			while (i > 0) {
				dataArray[i-1]('');
				i--;
			}
		} else {
			untyped clearInterval(timer);
		}*/
		for (n in array) {
			
			event.currentTarget = event.target = n.target;
			n.listener(event);
			
		}
		
	}
	
}