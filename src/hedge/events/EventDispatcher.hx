/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;
import hedge.display.DisplayObject;
import hedge.events.internal.HedgeEnterFrame;
import JQuery;
import js.Lib;
import haxe.Timer;
import hedge.Hobject;
import hedge.Setup;
import hedge.Twig;
import hedge.TwigType;

using hedge.Twig;

class EventDispatcher extends Hobject, implements IEventDispatcher {
	
	public function new(?target:IEventDispatcher = null) {
		super();
	}
	
	public function addEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false, ?priority:Int = 0, ?useWeakReference:Bool = false):Void {
		
		if (type == Event.ENTER_FRAME) {
			
			var efes:EnterFrameEventStructure = { target:cast(this, DisplayObject), listener:listener };
			HedgeEnterFrame.add(efes);
			
		}
		
	}
	
	public function dispatchEvent(event:Event):Bool {
		return true;
	}
	
	public function hasEventListener(type:String):Bool {
		//var events:Array<String> = __jq__.data('events');
		var events:Array<String> = __ele__.data('events');
		return Reflect.hasField(events, type);
	}
	
	public function removeEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false):Void {
		
	}
	
	public function willTrigger(type:String):Bool {
		return true;
	}
	
}