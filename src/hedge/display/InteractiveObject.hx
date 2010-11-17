/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.events.EventDispatcher;

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
	
}