/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.events.KeyboardEvent;

class InteractiveObject extends DisplayObject {
	
	//public var contextMenu:NativeMenu;
	public var doubleClickEnabled:Bool;
	public var focusRect:Dynamic;
	public var mouseEnabled:Bool;
	public var tabEnabled:Bool;
	public var tabIndex:Int;

	public function new() {
		super();
		//throw 'you cant create a new ineractiveobject';
	}
	
	//	OVERRIDE METHODS
	
	override private function initialize():Void 	{
		super.initialize();
		/*this.addEventListener(KeyboardEvent.KEY_DOWN, onKeyDown);
		this.addEventListener(KeyboardEvent.KEY_UP, onKeyUp);*/
		untyped this.__ele__.onkeydown = onKeyDown;
		untyped this.__ele__.onkeyup = onKeyUp;
	}
	
	//	INTERNAL METHODS
	
	private function onKeyDown(e):Void {
		var event:KeyboardEvent = new KeyboardEvent(KeyboardEvent.KEY_DOWN, true, false, e.charCode, e.keyCode, e.keyLocation, e.ctrlKey, e.altKey, e.shiftKey);
		event.target = this;
		cast(this, DisplayObject).dispatchEvent(event);
	}
	
	private function onKeyUp(e):Void {
		var event:KeyboardEvent = new KeyboardEvent(KeyboardEvent.KEY_UP, true, false, e.charCode, e.keyCode, e.keyLocation, e.ctrlKey, e.altKey, e.shiftKey);
		event.target = this;
		cast(this, DisplayObject).dispatchEvent(event);
	}
	
}