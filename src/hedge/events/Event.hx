/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;

import jQuery.JQuery;
import hedge.Setup;
import js.Dom;

class Event<T> extends jQuery.Event {
	
	// TODO properties all read only
	public var bubbles:Bool;
	public var cancelable:Bool;
	public var eventPhase:Dynamic;
	
	public var target(get_target, set_target):T;	// already in jQuery.Event
	public var currentTarget(get_currentTarget, set_currentTarget):T;	// already in jQuery.Event
	//public var type:String;	// already in jQuery.Event
	
	private var _type:String;
	private var _target:Dynamic;
	private var _currentTarget:Dynamic;

	public function new(type:String, ?bubbles:Bool = false, ?cancelable:Bool = false) {
		super(Setup.PREFIX + type);
		this._type = type;
		//this.type = Setup.PREFIX + this._type;
		this.bubbles = bubbles;
		this.cancelable = cancelable;
	}
	
	public function clone():Event<T> {
		return new Event<T>(this.type, this.bubbles, this.cancelable);
	}
	
	public function formatToString(className:String, arguments):String {
		return '';
	}
	
	// already in jQuery.Event
	/*public function isDefaultPrevented():Bool {
		return true;
	}*/
	
	// already in jQuery.Event
	/*public function stopImmediatePropagation() {
		
	}*/
	
	// already in jQuery.Event
	/*public function stopPropagation() {
		
	}*/
	
	public function toString():String {
		return '[Event type="'+this._type+'" bubbles='+this.bubbles+' cancelable='+this.cancelable+' eventPhase=?]';
	}
	
	public static var ACTIVATE:String = 'activate';
	public static var ADDED:String = 'added';
	public static var ADDED_TO_STAGE:String = 'addedToStage';
	public static var CANCEL:String = 'cancel';
	public static var CHANGE:String = 'change';
	public static var CLOSE:String = 'close';
	public static var COMPLETE:String = 'complete';
	public static var CONNECT:String = 'connect';
	public static var DEACTIVATE:String = 'deactivate';
	public static var DISPLAYING:String = 'displaying';
	public static var ENTER_FRAME:String = 'enterFrame';
	public static var FULLSCREEN:String = 'fullScreen';
	public static var ID3:String = 'id3';
	public static var INIT:String = 'init';
	public static var MOUSE_LEAVE:String = 'mouseLeave';
	public static var OPEN:String = 'open';
	public static var REMOVED:String = 'removed';
	public static var REMOVED_FROM_STAGE:String = 'removedFromStage';
	public static var RENDER:String = 'render';
	public static var RESIZE:String = 'resize';
	public static var SCROLL:String = 'scroll';
	public static var SELECT:String = 'select';
	public static var SOUND_COMPLETE:String = 'soundComplete';
	public static var TAB_CHILDREN_CHANGE:String = 'tabChildrenChange';
	public static var TAB_ENABLED_CHANGE:String = 'tabEnabledChange';
	public static var TAB_INDEX_CHANGE:String = 'tabIndexChange';
	public static var UNLOAD:String = 'unload';
	
	//	INTERNAL METHODS
	
	public function get_target():T {
		this._target = new JQuery(this.target).data('__self__');
		return this._target;
	}
	
	public function set_target(value:T):T {
		this._target = value;
		return value;
	}
	
	public function get_currentTarget():T {
		this._currentTarget = new JQuery(this.currentTarget).data('__self__');
		return this._currentTarget;
	}
	
	public function set_currentTarget(value:T):T {
		this._currentTarget = value;
		return value;
	}
	
}