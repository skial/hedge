/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;
import hedge.display.InteractiveObject;

class FocusEvent extends Event {
	
	//public var keyCode:Int;	// already in jQuery.Event
	public var relatedObject:InteractiveObject;
	//public var shiftKey:Bool;	// already in jQuery.Event

	public function new(	type:String,
								?bubbles:Bool = true,
								?cancelable:Bool = false,
								?relatedObject:InteractiveObject = null,
								?shiftKey:Bool = false,
								?keyCode:Int = 0) {
		this.type = type;
		this.bubbles = bubbles;
		this.cancelable = cancelable;
		this.relatedObject = relatedObject;
		this.shiftKey = shiftKey;
		this.keyCode = keyCode;
		super(this.type, this.bubbles, this.cancelable);
	}
	
	public static inline var FOCUS_IN:String = 'focusIn';
	public static inline var FOCUS_OUT:String = 'focusOut';
	public static inline var KEY_FOCUS_CHANGE:String = 'keyFocusChange';
	public static inline var MOUSE_FOCUS_CHANGE:String = 'mouseFocusChange';
	
}