/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;
import JQuery;
import js.Lib;
import hedge.Object;
import hedge.Setup;

typedef EventData = {
	var r:String;				//	redirect handler
	var h:Dynamic;				//	event handler
}

class EventDispatcher extends Object, implements IEventDispatcher {
	
	public function new(?target:IEventDispatcher = null) {
		super();
	}
	
	public function addEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false, ?priority:Int = 0, ?useWeakReference:Bool = false):Void {
		// jquery only supports bubbling phase - so ignore useCapture - or check if its true and throw an error
		// event priority does not exist in javascript as far as im aware - ignore it or throw error
		// no weak reference also - ignore or throw error
		
		/*var listenername:String 				= Setup.generateListenerName(type);
		var eventlist:Array<EventData>	 	= __jq__.data(type);
		var eventdata:EventData 				= { r:listenername, h:listener };
		
		if (eventlist == null) {
			__jq__.data(type, [ eventdata ]);
		} else {
			eventlist.push(eventdata);
			__jq__.data(type, eventlist);
		}
		
		var redirect = function (e, new_event_data) {
			trace('hello from dynamic function');
			trace(e);
		}
		//Reflect.setField(this, 'eventListener_' + type, redirect);
		Reflect.setField(this, listenername, redirect);
		new JQuery('div#' + this.name).bind(Setup.generateEventName(type), { method:listener, type:type }, Reflect.field(this, listenername));
		//new JQuery('div#' + this.name).bind(type + '.' + Setup.__stage__.name, { method:listener, type:type }, Reflect.field(this, 'eventListener_' + type));*/
		__jq__.bind(type, { }, listener);
	}
	
	public function dispatchEvent(event:Event):Bool {
		event.target = event.target == null ? this : event.target;
		/*if (__jq__.data(event.type).length != 0) {
			trace(Type.getClassName(Type.getClass(event)));
		}*/
		return true;
	}
	
	public function hasEventListener(type:String):Bool {
		/*var events:Array<Dynamic> = new JQuery('div#' + this.name).data('events');
		return Reflect.hasField(events, Setup.__project__ + '_' + type);*/
		var events:Array<String> = __jq__.data('events');
		return Reflect.hasField(events, type);
	}
	
	public function removeEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false) {
		// ignore useCapture - reason above - method addEventListener
		//new JQuery('div#' + this.name).unbind(Setup.generateEventName(type), listener);
		__jq__.unbind(type, listener);
	}
	
	public function willTrigger(type:String):Bool {
		return true;
	}
	
}