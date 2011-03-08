/**
 * ...
 * @author Skial Bainn
 */

package hedge;

import js.Dom;

class Twig {
	
	/*
	 * ELEMENT DATA ASSOCIATION
	 */
	
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
	
	/*
	 * (G/S)ET ELEMENT ATTRIBUTE
	 */
	
	public static function attr(element:HtmlDom, name:String, ?value:String = null):String {
		
		// get
		if (value == null) {
			
			return element.getAttribute(name);
			
		// set
		} else {
			
			element.setAttribute(name, value);
			return value;
			
		}
		
	}
	
	public static function removeAttr(element:HtmlDom, name:String):Void {
		// removeAttribute not offically supported by haxe
		untyped element.removeAttribute(name);
	}
	
	/*
	 * (G/S)ET ELEMENT STYLES
	 */
	
	public static function css(element:HtmlDom, name:String, ?value:Dynamic = null):String {
		
		// get
		if (value == null) {
			
			return Reflect.field(element.style, name);
			
		// set
		} else {
			
			Reflect.setField(element.style, name, value);
			return value;
			
		}
		
	}
	
	public static function cssMap(element:HtmlDom, map:Dynamic):Void {
		
		var _t:String = '';
		
		for (n in Reflect.fields(map)) {
			
			//Reflect.setField(element.style, n, Reflect.field(map, n));
			_t += '' + n + ':' + Reflect.field(map, n) + '; ';
			
		}
		
		element.style.cssText = _t;
		
	}
	
}