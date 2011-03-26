/**
 * ...
 * @author Skial Bainn
 */

package hedge;

import js.Dom;
import clippings.Twig;

class Object implements Dynamic {
	
	//public static var constructor:Object;
	//public static var prototype:Object; // causes __jq__hx to crash - todo
	
	//public var __jq__:JQuery;
	//public var __jq__:Twig;
	public var __ele__:HtmlDom;
	
	public function new() {
		this.initialize();
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