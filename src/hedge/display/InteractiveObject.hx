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
		/*this.addEventListener(KeyboardEvent.KEY_DOWN, onKeyDown);
		this.addEventListener(KeyboardEvent.KEY_UP, onKeyUp);*/
	}
	
	//	INTERNAL METHODS
	
	private function onKeyDown(e:KeyboardEvent):Void {
		
	}
	
	private function onKeyUp(e:KeyboardEvent):Void {
		
	}
	
}