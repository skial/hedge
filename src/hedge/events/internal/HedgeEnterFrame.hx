/**
 * ...
 * @author Skial Bainn
 */

package hedge.events.internal;

import hedge.events.Event;
import hedge.events.EventPhase;
import hedge.display.DisplayObject;
import hedge.Setup;
import js.Lib;

class HedgeEnterFrame {
	
	public static var array:Array<EnterFrameEventStructure> = new Array<EnterFrameEventStructure>();
	public static var length:Int = 0;
	public static var timer:Dynamic;
	public static var interval:Float;
	public static var event:Event<DisplayObject> = new Event<DisplayObject>(Event.ENTER_FRAME, false, false);
	
	public static function add(efes:EnterFrameEventStructure):Void {
		if (!Reflect.hasField(efes.listener, '__HEFUID__')) {
			Reflect.setField(efes.listener, '__HEFUID__', Setup.generateHEFUID());
		}
		for (n in array) {
			
			if (n == efes) {
				
				return;
				
			}
			
		}
		
		array.push(efes);
		length = array.length;
		
		if (length == 0) {
			determineFrameRate();
			timer = untyped Lib.window.requestInterval(runEnterFrame, interval);
			
		}
		
	}
	
	public static function remove(efes:EnterFrameEventStructure):Void {
		
		for (n in array) {
			
			if (n.listener.__proto__.__HEFUID__ == efes.listener.__proto__.__HEFUID__) {
				array.remove(n);
				break;
				
			}
			
		}
		
		length = array.length;
		
		if (length == 0) {
			untyped Lib.window.clearRequestInterval(timer);
		}
		
	}
	
	public inline static function determineFrameRate():Void {
		interval = 1000 / Setup.__fps__;
	}
	
	public static function runEnterFrame():Void {
		
		for (n in array) {
			
			event.currentTarget = event.target = n.target;
			n.listener(event);
			
		}
		
	}
	
}