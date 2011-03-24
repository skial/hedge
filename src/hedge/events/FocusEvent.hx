/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;

class FocusEvent extends Event {

	public function new() {
		
	}
	
	public static inline var FOCUS_IN:String = 'focusIn';
	public static inline var FOCUS_OUT:String = 'focusOut';
	public static inline var KEY_FOCUS_CHANGE:String = 'keyFocusChange';
	public static inline var MOUSE_FOCUS_CHANGE:String = 'mouseFocusChange';
	
}