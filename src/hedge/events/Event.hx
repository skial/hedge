/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;
import hedge.Hobject;

class Event extends Hobject {
	
	// TODO properties all read only
	public var bubbles:Bool;
	public var cancelable:Bool;
	public var currentTarget:Dynamic;
	public var eventPhase:Dynamic;
	public var target:Dynamic;
	public var type:String;

	public function new(type:String, ?bubbles:Bool = false, ?cancelable:Bool = false) {
		super();
		this.type = type;
		this.bubbles = bubbles;
		this.cancelable = cancelable;
	}
	
	public function clone():Event {
		return new Event(this.type, this.bubbles, this.cancelable);
	}
	
	public function formatToString(className:String, arguments):String {
		return '';
	}
	
	public function isDefaultPrevented():Bool {
		return true;
	}
	
	public function stopImmediatePropagation() {
		
	}
	
	public function stopPropagation() {
		
	}
	
	/*public function toString():String {
		
	}*/
	
	public static inline var ACTIVATE:String = 'activate';
	public static inline var ADDED:String = 'added';
	public static inline var ADDED_TO_STAGE:String = 'addedToStage';
	public static inline var CANCEL:String = 'cancel';
	public static inline var CHANGE:String = 'change';
	public static inline var CLOSE:String = 'close';
	public static inline var COMPLETE:String = 'complete';
	public static inline var CONNECT:String = 'connect';
	public static inline var DEACTIVATE:String = 'deactivate';
	public static inline var DISPLAYING:String = 'displaying';
	public static inline var ENTER_FRAME:String = 'enterFrame';
	public static inline var FULLSCREEN:String = 'fullScreen';
	public static inline var ID3:String = 'id3';
	public static inline var INIT:String = 'init';
	public static inline var MOUSE_LEAVE:String = 'mouseLeave';
	public static inline var OPEN:String = 'open';
	public static inline var REMOVED:String = 'removed';
	public static inline var REMOVED_FROM_STAGE:String = 'removedFromStage';
	public static inline var RENDER:String = 'render';
	public static inline var RESIZE:String = 'resize';
	public static inline var SCROLL:String = 'scroll';
	public static inline var SELECT:String = 'select';
	public static inline var SOUND_COMPLETE:String = 'soundComplete';
	public static inline var TAB_CHILDREN_CHANGE:String = 'tabChildrenChange';
	public static inline var TAB_ENABLED_CHANGE:String = 'tabEnabledChange';
	public static inline var TAB_INDEX_CHANGE:String = 'tabIndexChange';
	public static inline var UNLOAD:String = 'unload';
	
}