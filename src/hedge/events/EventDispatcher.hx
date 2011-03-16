/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;
import hedge.display.DisplayObject;
import hedge.events.internal.EnterFrame;
import JQuery;
import js.Lib;
import haxe.Timer;
import hedge.Object;
import hedge.Setup;
import hedge.Twig;
import hedge.TwigType;

using hedge.Twig;

typedef HedgeEventStructure = {
	var path:Array<DisplayObject>;
	var listener:Dynamic;
	//var displayObject:DisplayObject;
	//var capture:Bool;
	//var type:String;
}

class EventDispatcher extends Object, implements IEventDispatcher {
	
	public function new(?target:IEventDispatcher = null) {
		super();
	}
	
	public function addEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false, ?priority:Int = 0, ?useWeakReference:Bool = false):Void {
		// jquery only supports bubbling phase - so ignore useCapture - or check if its true and throw an error
		// event priority does not exist in javascript as far as im aware - ignore it or throw error
		// no weak reference also - ignore or throw error
		/*if (type != Event.ENTER_FRAME) {
			//__jq__.bind(type, { }, listener);
			//__jq__.bind(type, listener);
		} else {
			trace('enterframe');
			EnterFrame.addListener(this.__originalName__, listener);
		}*/
		
		/*
			
			-----------------------------------------------------------------
			| type | listener | ?useCapture | ?priority | ?useWeakReference |
			-----------------------------------------------------------------
				|			|				|				TODO				 TODO
				V			V				V
			---------------------------------		array ------------------------------ reverse if ?useCapture is true
			|	event containter	|	 path	  | --->	|	this	|	this.parent	|	parent.parent	|	...  |	stage/root	|
			---------------------------------		-------------------------------------------------------------------
								|
								V
			---------------------------------
			|				CACHE					  |
			---------------------------------		---------------------------------------------------------------------
			|	       eventType_c		 	  | ---> |	This depends on ?useCapture. Only one event can exist for each	  |
			---------------------------------		|	event phase (capture or target/bubbling). Currently thinking if  |
			|			 eventType_t			  | ---> |	I should allow you to overwrite a event or stay strict to flash. |
			---------------------------------		---------------------------------------------------------------------
			
		 */
		
		var _event:HedgeEventStructure = {
			listener:listener,
			path:[untyped this]
		}
		
		var _temp = this;
		
		while (true) {
			if (_temp == Setup.__stage__) {
				break;
			}
			if (_temp.parent != null) {
				_event.path.push(_temp.parent);
				_temp = _temp.parent;
			} else {
				break;
			}
		}
		
		if (useCapture) {
			_event.path.reverse();
		}
		
		var _access = type + '_' + (useCapture?'c':'t');
		var _type = this.data(_access);
		
		if (_type == null) {
			this.data(_access, _event);
		} /*else {
			// throw '_event already set remove previous event
		}*/
		
	}
	
	public function dispatchEvent(event:Event):Bool {
		
		/*
			Only Event.ACTIVATE .DEACTIVATE .ENTER_FRAME and .RENDER have a target phase only.
			All other events targeting the display list have a capture and target phase and
			might have a bubbling phase.
		*/
		
		var _data:HedgeEventStructure = null;
		var _access = null;
		var _temp = null;
		
		event.target = event.target == null ? this : event.target;
		
		#if INCLUDE_HEDGE_EVENT_CAPTURE
		if (event.useCapture) {
			
			event.eventPhase = EventPhase.CAPTURING_PHASE;
			
			_access = event.type + '_c';
			_data = untyped this.data(_access);
			
			if (_data != null) {
				
				for (n in _data.path) {
					
					_temp = n.data(_access);
					
					if (_temp != null) {
						
						event.currentTarget = n;
						
						_temp.listener(event);
						
					}
					
				}
				
			} else {
				
				return false;
				
			}
			
		}
		#end
		
		#if !EXCLUDE_HEDGE_EVENT_BUBBLE
		if (event.bubbles) {
			
			_access = event.type + '_t';
			_data = untyped this.data(_access);
			
			if (_data != null) {
				
				for (n in _data.path) {
					
					_temp = n.data(_access);
					
					if (_temp != null) {
						
						event.eventPhase = event.target == n ? EventPhase.AT_TARGET : EventPhase.BUBBLING_PHASE;
						event.currentTarget = n;
						
						_temp.listener(event);
						
					}
					
				}
				
			} else {
				
				return false;
				
			}
			
		}
		#end
		
		//event.target = event.target == null ? this : event.target;
		/*if (__jq__.data(event.type).length != 0) {
			trace(Type.getClassName(Type.getClass(event)));
		}*/
		return true;
	}
	
	public function hasEventListener(type:String):Bool {
		//var events:Array<String> = __jq__.data('events');
		var events:Array<String> = __ele__.data('events');
		return Reflect.hasField(events, type);
	}
	
	public function removeEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false) {
		// ignore useCapture - reason above - method addEventListener
		/*if (type != Event.ENTER_FRAME) {
			//__jq__.unbind(type, listener);
		} else {
			EnterFrame.removeListener(this.__originalName__, listener);
		}*/
	}
	
	public function willTrigger(type:String):Bool {
		return true;
	}
	
}