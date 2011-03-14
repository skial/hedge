/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;
import hedge.jquery.events.EnterFrame;
import JQuery;
import js.Lib;
import haxe.Timer;
import hedge.Object;
import hedge.Setup;
import hedge.Twig;
import hedge.TwigType;

class EventDispatcher extends Object, implements IEventDispatcher {
	
	public function new(?target:IEventDispatcher = null) {
		super();
	}
	
	public function addEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false, ?priority:Int = 0, ?useWeakReference:Bool = false):Void {
		// jquery only supports bubbling phase - so ignore useCapture - or check if its true and throw an error
		// event priority does not exist in javascript as far as im aware - ignore it or throw error
		// no weak reference also - ignore or throw error
		if (type != Event.ENTER_FRAME) {
			//__jq__.bind(type, { }, listener);
			__jq__.bind(type, listener);
		} else {
			trace('enterframe');
			EnterFrame.addListener(this.__originalName__, listener);
		}
	}
	
	public function dispatchEvent(event:Event):Bool {
		event.target = event.target == null ? this : event.target;
		/*if (__jq__.data(event.type).length != 0) {
			trace(Type.getClassName(Type.getClass(event)));
		}*/
		return true;
	}
	
	public function hasEventListener(type:String):Bool {
		var events:Array<String> = __jq__.data('events');
		return Reflect.hasField(events, type);
	}
	
	public function removeEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false) {
		// ignore useCapture - reason above - method addEventListener
		if (type != Event.ENTER_FRAME) {
			__jq__.unbind(type, listener);
		} else {
			EnterFrame.removeListener(this.__originalName__, listener);
		}
	}
	
	public function willTrigger(type:String):Bool {
		return true;
	}
	
}