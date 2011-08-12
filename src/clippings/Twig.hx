/**
 * ...
 * @author Skial Bainn
 */

package clippings;

#if js
import js.Lib;
import js.Dom;
#elseif jstm
import HTMLElement;
#elseif jquery

#end

using clippings.Twig;
using StringTools;
using Std;

typedef TwigPoint = {
	var x:Int;
	var y:Int;
}

class Twig {
	
	// TODO change any methods names to match jquery method names
	
	/*
	 * ELEMENT <-> DATA ASSOCIATION
	 */
	
	//	http://james.padolsey.com/javascript/element-datastorage/
	//	http://www.prototypejs.org/2009/2/16/pimp-my-code-1-element-storage
	
	private static var CACHE:Array<Dynamic> = new Array<Dynamic>();
	private static var CACHE_COUNTER:Int = 0;
	private static var CACHE_ID:Int = 0;
	
	private static inline var TWIG_ID:String = 'TWIG_ID';

	public static function data(#if jstm element:HTMLElement, #elseif js element:HtmlDom, #end key:String, ?value:Dynamic = null):Dynamic {
		
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
	
	public static function removeData(#if jstm element:HTMLElement, #elseif js element:HtmlDom, #end ?key:String = null):Void {
		
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
	
	public static inline function bind(element:HtmlDom, event:String, handler:Dynamic):Void {
		
		if (Lib.isIE) {
			
			untyped element.attachEvent('on' + event, handler);
			
		} else {
			
			untyped element.addEventListener(event, handler, false);
			
		}
		
	}
	
	public static inline function unbind(element:HtmlDom, event:String, handler:Dynamic):Void {
		
		if (Lib.isIE) {
			
			untyped element.detachEvent('on' + event, handler);
			
		} else {
			
			untyped element.removeEventListener(event, handler, false);
			
		}
		
	}
	
	// http://www.quirksmode.org/js/findpos.html
	
	public static function getPosition(#if jstm element:HTMLElement #elseif js element:HtmlDom #end):TwigPoint {
		untyped {
			var currentX = 0;
			var currentY = 0;
			var object = element;
			
			if (object.offsetParent) {
				
				do {
					
					currentX += object.offsetLeft;
					currentY += object.offsetTop;
					
				} while (object = object.offsetParent);
				
			}
			
			return {x:currentX, y:currentY};
		}
	}
	
	// from prototype.js camelize https://github.com/sstephenson/prototype/blob/master/src/prototype/lang/string.js#L560
	// useful http://stackoverflow.com/questions/1955048/get-computed-font-size-for-dom-element-in-js
	// TODO convert to haXe
	public static function camelize(value:String):String {
		return untyped __js__("value.replace(/-+(.)?/g, function(match, chr) { return chr ? chr.toUpperCase() : ''; });");
	}
	
	// smart! original source - https://gist.github.com/369133
	public static function getStyle(#if jstm element:HTMLElement, #elseif js element:HtmlDom, #end style:String):String {
		var value:String = 'TWIG SNAPPED';
		var search:String = style;
		var defaultView = untyped element.ownerDocument.defaultView;
		
		// W3C standard way
		if (untyped defaultView && defaultView.getComputedStyle) {
			
			// sanitize property name to css notation (hypen separated words eg. font-Size)
			
			search = ~/([A-Z])/g.replace(search, '$1').toLowerCase();
			value = untyped defaultView.getComputedStyle(element, null).getPropertyValue(search);
			
		} else if (untyped element.currentStyle) {
			// IE
			// sanitize property name to camelCase
			
			trace(search.camelize());
			search = search.camelize();
			value = untyped element.currentStyle[search];
			
			// convert other units to pixels on IE
			if (~/^\d+(em|pt|%|ex)?$/i.match(value)) {
				
				var oldLeft = element.style.left;
				var oldRsLeft = untyped element.runtimeStyle.left;
				
				untyped element.runtimeStyle.left = element.currentStyle.left;
				untyped element.style.left = value || 0;
				untyped value = element.style.pixelLeft + 'px';
				element.style.left = oldLeft;
				untyped element.runtimeStyle.left = oldRsLeft;
				
			}
			
		}
		
		// from prototype.js getStyle https://github.com/sstephenson/prototype/blob/master/src/prototype/dom/dom.js#L2263
		if (untyped !value || value == 'auto') {
			search = style == 'float' ? 'cssFloat' : style.camelize();
			value = untyped element.style[search];
		}
		
		// from prototype.js getStyle https://github.com/sstephenson/prototype/blob/master/src/prototype/dom/dom.js#L2270
		return value == 'auto' ? null : value;
		
	}
	
}