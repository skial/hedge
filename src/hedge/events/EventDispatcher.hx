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
import hedge.Object;
import hedge.Setup;

class EventDispatcher extends Object, implements IEventDispatcher {
	
	public function new(?target:IEventDispatcher = null) {
		super();
	}
	
	public function addEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false, ?priority:Int = 0, ?useWeakReference:Bool = false):Void {
		
		/*if (type == Event.ENTER_FRAME) {
			
			var efes:EnterFrameEventStructure = { target:cast(this, DisplayObject), listener:listener };
			HedgeEnterFrame.add(efes);
			
		}*/
		
	}
	
	public function dispatchEvent(event:Event):Bool {
		return true;
	}
	
	public function hasEventListener(type:String):Bool {
		return true;
	}
	
	public function removeEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false):Void {
		
		/*if (type == Event.ENTER_FRAME) {
			
			var efes:EnterFrameEventStructure = { target:cast(this, DisplayObject), listener:listener };
			HedgeEnterFrame.remove(efes);
			
		}*/
		
	}
	
	public function willTrigger(type:String):Bool {
		return true;
	}
	
	//	OVERRIDE METHODS
	
	//	INTERNAL METHODS
	
	private function initializeEventDispatcher():Void {
		
	}
	
}