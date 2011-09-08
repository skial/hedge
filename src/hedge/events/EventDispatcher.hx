/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;

import hedge.events.Event;
import hedge.display.DisplayObject;
import hedge.events.internal.HedgeEnterFrame;
import jQuery.JQuery;
import js.Lib;

import hedge.Object;
import hedge.Setup;

using clippings.Twig;

class EventDispatcher extends Object, implements IEventDispatcher {
	
	private var _:Dynamic;
	
	public function new(?target:IEventDispatcher = null) {
		super();
	}
	
	public function addEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false, ?priority:Int = 0, ?useWeakReference:Bool = false):Void {
		var _t = type + '_' + (useCapture?'c':'t');
		if (this.__ele__.data(_t) == null) {
			this.__ele__.data(_t, listener);
			if (type != Event.ENTER_FRAME) {
				this.__ele__.bind(Setup.PREFIX + type, listener);
			} else {
				HedgeEnterFrame.add( { listener:listener, target:this } );
			}
		} else {
			throw 'Event[' + type + '] already exists on this object. Remove the previous event';
		}
	}
	
	public function dispatchEvent(event:Event<Dynamic>):Bool {
		try {
			this.__ele__.trigger(event);
			return true;
		} catch(e:Dynamic) {
			return false;
		}
	}
	
	public function hasEventListener(type:String):Bool {
		if (this.__ele__.data(type + '_' + 't') != null || this.__ele__.data(type + '_' + 'c') != null) {
			return true;
		} else {
			return false;
		}
	}
	
	public function removeEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false):Void {
		var _t = type + '_' + (useCapture?'c':'t');
		if (this.__ele__.data(_t) != null) {
			this.__ele__.removeData(_t);
			if (type != Event.ENTER_FRAME) {
				this.__ele__.unbind(Setup.PREFIX + type, listener);
			} else {
				HedgeEnterFrame.remove( { listener:listener, target:this } );
			}
		}
	}
	
	public function willTrigger(type:String):Bool {
		return true;
	}
	
	//	OVERRIDE METHODS
	
	override private function initialize():Void {
		super.initialize();
		this.initializeEventDispatcher();
	}
	
	//	INTERNAL METHODS
	
	private function initializeEventDispatcher():Void {
		this._ = { };
		this.__ele__ = new JQuery(this._);
	}
	
}