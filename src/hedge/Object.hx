/**
 * ...
 * @author Skial Bainn
 */

package hedge;

import js.Dom;
import jQuery.JQuery;

class Object implements Dynamic {
	
	//public static var constructor:Object;
	//public static var prototype:Object; // causes __jq__hx to crash - todo
	
	public var __node__:HtmlDom;
	public var __ele__:JQuery;
	
	public function new() {
		this.initialize();
		if (this.__ele__ != null) {
			this.__ele__.addClass('hObject');
		}
	}
	
	public function hasOwnProperty(name:String):Bool {
		return false;
	}
	
	public function isPrototypeOf(theClass:Object):Bool {
		return false;
	}
	
	public function propertyIsEnumerable(name:String):Bool {
		return false;
	}
	
	public function setPropertyIsEnumerable(name:String, ?isEnum:Bool = true):Void {
		
	}
	
	/*public function toString():String {
		return '';
	}*/
	
	public function valueOf():Object {
		return this;
	}
	
	/*public function __self__():Hobject {
		return this;
	}*/
	
	//	INTERNAL
	
	private function initialize():Void {
		
	}
	
}