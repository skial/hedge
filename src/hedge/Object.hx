/**
 * ...
 * @author Skial Bainn
 */

package hedge;

class Object implements Dynamic {
	
	//public static var constructor:Object;
	//public static var prototype:Object; // causes jshx to crash - todo
	
	public var __jq__:JQuery;
	
	public function new() {
		
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
	
	/*public function __self__():Object {
		return this;
	}*/
	
}