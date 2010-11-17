/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;
import hedge.Object;

class Event extends Object {
	
	// properties below all read only - todo
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
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var ACTIVATE:String = 'activate';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var ADDED:String = 'added';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var ADDED_TO_STAGE:String = 'addedToStage';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var CANCEL:String = 'cancel';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var CHANGE:String = 'change';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var CLOSE:String = 'close';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var COMPLETE:String = 'complete';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var CONNECT:String = 'connect';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var DEACTIVATE:String = 'deactivate';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var DISPLAYING:String = 'displaying';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var ENTER_FRAME:String = 'enterFrame';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var FULLSCREEN:String = 'fullScreen';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var ID3:String = 'id3';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var INIT:String = 'init';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var MOUSE_LEAVE:String = 'mouseLeave';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var OPEN:String = 'open';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var REMOVED:String = 'removed';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var REMOVED_FROM_STAGE:String = 'removedFromStage';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var RENDER:String = 'render';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var RESIZE:String = 'resize';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var SCROLL:String = 'scroll';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var SELECT:String = 'select';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var SOUND_COMPLETE:String = 'soundComplete';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var TAB_CHILDREN_CHANGE:String = 'tabChildrenChange';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var TAB_ENABLED_CHANGE:String = 'tabEnabledChange';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var TAB_INDEX_CHANGE:String = 'tabIndexChange';
	
	@properties('bubbles', 'cancelable', 'currentTarget', 'target')
	public static var UNLOAD:String = 'unload';
	
}