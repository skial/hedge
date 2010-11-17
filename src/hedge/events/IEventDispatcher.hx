/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;

class IEventDispatcher {
	
	public function addEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false, ?priority:Int = 0, ?useWeakReference:Bool = false) {
		
	}
	
	public function dispatchEvent(event:Event):Bool {
		return true;
	}
	
	public function hasEventListener(type:String):Bool {
		return true;
	}
	
	public function removeEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false) {
		
	}
	
	public function willTrigger(type:String):Bool {
		return true;
	}
	
}