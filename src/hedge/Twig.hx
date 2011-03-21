/**
 * ...
 * @author Skial Bainn
 */

package hedge;

import js.Dom;

using hedge.Twig;
using Std;

class Twig implements Dynamic {
	
	/*
	 * ELEMENT <-> DATA ASSOCIATION
	 */
	
	//	http://james.padolsey.com/javascript/element-datastorage/
	//	http://www.prototypejs.org/2009/2/16/pimp-my-code-1-element-storage
	
	private static var CACHE:Array<Dynamic> = new Array<Dynamic>();
	private static var CACHE_COUNTER:Int = 0;
	private static var CACHE_ID:Int = 0;
	
	private static inline var TWIG_ID:String = 'TWIG_ID';

	public static function data(element:HtmlDom, key:String, ?value:Dynamic = null):Dynamic {
		
		// check element for TWIG_ID
		if (!Reflect.hasField(element, TWIG_ID)) {
			// if false set one up
			
			Reflect.setField(element, TWIG_ID, CACHE_COUNTER);
			CACHE_ID = CACHE_COUNTER;
			CACHE.insert(CACHE_ID, { } );
			
			++CACHE_COUNTER;
			
		} else {
			// if true grab TWIG_ID
			
			CACHE_ID = Reflect.field(element, TWIG_ID);
		}
		
		// get data
		if (value == null) {
			
			return Reflect.field(CACHE[CACHE_ID], key);
			
		// set data
		} else {
			
			Reflect.setField(CACHE[CACHE_ID], key, value);
			return value;
			
		}
		
	}
	
	/*public function data(key:String, ?value:Dynamic = null):Dynamic {
		
		// check element for TWIG_ID
		if (!Reflect.hasField(element, TWIG_ID)) {
			// if false set one up
			
			Reflect.setField(element, TWIG_ID, CACHE_COUNTER);
			CACHE_ID = CACHE_COUNTER;
			CACHE.insert(CACHE_ID, { } );
			
			++CACHE_COUNTER;
			
		} else {
			// if true grab TWIG_ID
			
			CACHE_ID = Reflect.field(element, TWIG_ID);
		}
		
		// get data
		if (value == null) {
			
			return Reflect.field(CACHE[CACHE_ID], key);
			
		// set data
		} else {
			
			Reflect.setField(CACHE[CACHE_ID], key, value);
			return value;
			
		}
		
	}*/
	
	public static function removeData(element:HtmlDom, ?key:String = null):Void {
		
		// assumes element has TWIG_ID already - this might change.
		CACHE_ID = Reflect.field(element, TWIG_ID);
		
		// delete all if no key is given
		if (key == null) {
			
			CACHE[CACHE_ID] = null;
		
		// delete data associated to key
		} else {
			
			Reflect.deleteField(CACHE[CACHE_ID], key);
			
		}
		
	}
	
	/*public function removeData(?key:String = null):Void {
		
		// assumes element has TWIG_ID already - this might change.
		CACHE_ID = Reflect.field(element, TWIG_ID);
		
		// delete all if no key is given
		if (key == null) {
			
			CACHE[CACHE_ID] = null;
		
		// delete data associated to key
		} else {
			
			Reflect.deleteField(CACHE[CACHE_ID], key);
			
		}
		
	}*/
}