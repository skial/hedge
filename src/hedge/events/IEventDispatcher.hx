/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;

interface IEventDispatcher {
	
	public function addEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false, ?priority:Int = 0, ?useWeakReference:Bool = false):Void;
	public function dispatchEvent(event:Event<Dynamic>):Bool;
	public function hasEventListener(type:String):Bool;
	public function removeEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false):Void;
	public function willTrigger(type:String):Bool;
	
}