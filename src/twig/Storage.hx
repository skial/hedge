/**
 * ...
 * @author Skial Bainn
 */

package twig;
import js.Dom;

class Storage {
	
	public static var cache:Array<Dynamic> = new Array<Dynamic>();
	private static var counter:Int = 0;
	private static var id:Int = 0;
	
	private static inline var TWIG_ID:String = 'TWIG_ID';

	public static function data(element:HtmlDom, key:String, ?value:Dynamic = null):Dynamic {
		
		// check element for TWIG_ID
		if (!Reflect.hasField(element, TWIG_ID)) {
			// if false set one up
			
			Reflect.setField(element, TWIG_ID, counter);
			id = counter;
			cache.insert(id, { } );
			
			++counter;
			
		} else {
			// if true grab TWIG_ID
			
			id = Reflect.field(element, TWIG_ID);
		}
		
		// get data
		if (value == null) {
			
			return Reflect.field(cache[id], key);
			
		// set data
		} else {
			
			Reflect.setField(cache[id], key, value);
			return value;
			
		}
		
	}
	
	public static function removeData(element:HtmlDom, ?key:String = null):Void {
		
		// assumes element has TWIG_ID already - this might change.
		id = Reflect.field(element, TWIG_ID);
		
		// delete all if no key is given
		if (key == null) {
			
			cache[id] = null;
		
		// delete data associated to key
		} else {
			
			Reflect.deleteField(cache[id], key);
			
		}
		
	}
	
}