/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;
import hedge.display.DisplayObject;

class KeyboardEvent extends Event<DisplayObject> {
	
	//public var altKey:Bool;	// already in jQuery.Event
	//public var charCode:Int;	// already in jQuery.Event
	//public var ctrlKey:Bool;	// already in jQuery.Event
	//public var keyCode:Int;	// already in jQuery.Event
	public var keyLocation:Int;
	//public var shiftKey:Bool;	// already in jQuery.Event
	
	public static inline var KEY_DOWN:String = 'keyDown';
	public static inline var KEY_UP:String = 'keyUp';

	public function new(type:String,
							?bubbles:Bool = true,
							?cancelable:Bool = false,
							?charCode:Int = 0,
							?keyCode:Int = 0,
							?keyLocation:Int = 0,
							?ctrlKey:Bool = false,
							?altKey:Bool = false,
							?shiftKey:Bool = false/*,
							?controlKey:Bool = false,
							?commandKey:Bool = false*/) {
		this.type = type;
		this.bubbles = bubbles;
		this.cancelable = cancelable;
		this.charCode = charCode;
		this.keyCode = keyCode;
		this.keyLocation = keyLocation;
		this.ctrlKey = ctrlKey;
		this.altKey = altKey;
		this.shiftKey = shiftKey;
		super(this.type, this.bubbles, this.cancelable);
	}
	
	override public function clone():Event<DisplayObject> {
		return new KeyboardEvent(	this.type, this.bubbles, this.cancelable, this.charCode, this.keyCode, this.keyLocation, this.ctrlKey, this.altKey,
									this.shiftKey); //TODO need to add controlKeyValue and commandKeyValue from constructor
	}
	
	/*override public function toString():String {
		return '';
	}*/
	
	public function updateAfterEvent():Void {
		
	}
	
}