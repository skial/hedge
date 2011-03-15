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
	 * GLOBAL VALUES
	 */
	
	public static var root:HtmlDom = js.Lib.document.body;
	
	public var element:HtmlDom;
	
	/*
	 * GENERAL METHODS
	 */
	
	//	http://blog.justswell.org/clientside-getelementsbyclassname-cross-browser-implementation/
	//	https://developer.mozilla.org/En/DOM/Document.querySelectorAll
	//	http://robertnyman.com/2008/05/27/the-ultimate-getelementsbyclassname-anno-2008/
	//	http://www.webmuse.co.uk/articles/custom-getelementsbyclassname-function-for-all-browsers/
	
	public function new(val:Dynamic, ?action:TwigType = null) {
		if (action == null) {
			trace('element no action');
			element = val;
		} else {
			switch (action) {
				case TwigType.FIND_ID:
					element = js.Lib.document.getElementById(val);
				case TwigType.CREATE_ELEMENT:
					element = js.Lib.document.createElement(val);
			}
		}
	}
	
	/*public static function width(element:HtmlDom, ?value:Float = null):Dynamic {
		
		// get
		if (value == null) {
			
			return element.style.width;
			
		// set
		} else {
			
			element.style.width = value.int().string() + 'px';
			return element;
			
		}
		
	}*/
	
	public function width(?value:Float = null):Dynamic {
		
		// get
		if (value == null) {
			
			return element.style.width;
			
		// set
		} else {
			
			element.style.width = value.int().string() + 'px';
			return this;
			
		}
		
	}
	
	/*public static function height(element:Dynamic, ?value:Float = null):Dynamic {
		
		// get
		if (value == null) {
			
			return element.style.height;
			
		// set
		} else {
			
			element.style.height = value.int().string() + 'px';
			return element;
			
		}
		
	}*/
	
	public function height(?value:Float = null):Dynamic {
		
		// get
		if (value == null) {
			
			return element.style.height;
			
		// set
		} else {
			
			element.style.height = value.int().string() + 'px';
			return this;
			
		}
		
	}
	
	/*public static function left(element:Dynamic, ?value:Float = null):Dynamic {
		
		// get
		if (value == null) {
			
			return element.style.left;
			
		// set
		} else {
			
			element.style.left = value.int().string() + 'px';
			return element;
			
		}
		
	}*/
	
	public function left(?value:Float = null):Dynamic {
		
		// get
		if (value == null) {
			
			return element.style.left;
			
		// set
		} else {
			
			element.style.left = value.int().string() + 'px';
			return this;
			
		}
		
	}
	
	/*public static function top(element:Dynamic, ?value:Float = null):Dynamic {
		
		// get
		if (value == null) {
			
			return element.style.top;
			
		// set
		} else {
			
			element.style.top = value.int().string() + 'px';
			return element;
			
		}
		
	}*/
	
	public function top(?value:Float = null):Dynamic {
		
		// get
		if (value == null) {
			
			return element.style.top;
			
		// set
		} else {
			
			element.style.top = value.int().string() + 'px';
			return this;
			
		}
		
	}
	
	/*
	 * (G/S)ET (FORM) ELEMENT VALUE
	 */
	
	/*public static function val(element:Dynamic, ?value:Dynamic = null):Dynamic {
		
		// get
		if (value == null) {
			
			return element.nodeValue;
			
		// set
		} else {
			
			element.nodeValue = value;
			return element;
			
		}
		
	}*/
	
	public function val(?value:Dynamic = null):Dynamic {
		
		// get
		if (value == null) {
			
			return element.nodeValue;
			
		// set
		} else {
			
			element.nodeValue = value;
			return this;
			
		}
		
	}
	
	/*
	 * ELEMENT <-> DATA ASSOCIATION
	 */
	
	//	http://james.padolsey.com/javascript/element-datastorage/
	//	http://www.prototypejs.org/2009/2/16/pimp-my-code-1-element-storage
	
	private static var CACHE:Array<Dynamic> = new Array<Dynamic>();
	private static var CACHE_COUNTER:Int = 0;
	private static var CACHE_ID:Int = 0;
	
	private static inline var TWIG_ID:String = 'TWIG_ID';

	public static function data(element:Dynamic, key:String, ?value:Dynamic = null):Dynamic {
		
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
	
	public static function removeData(element:Dynamic, ?key:String = null):Void {
		
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
	
	/*
	 * (G/S)ET ELEMENT ATTRIBUTE
	 */
	
	/*public static function attr(element:Dynamic, name:String, ?value:Dynamic = null):Dynamic {
		
		// get
		if (value == null) {
			
			return element.getAttribute(name);
			
		// set
		} else {
			
			element.setAttribute(name, Std.string(value));
			return element;
			
		}
		
	}*/
	
	public function attr(name:String, ?value:Dynamic = null):Dynamic {
		
		// get
		if (value == null) {
			
			return element.getAttribute(name);
			
		// set
		} else {
			
			element.setAttribute(name, Std.string(value));
			return this;
			
		}
		
	}
	
	/*public static function attrMap(element:Dynamic, map:Dynamic):Dynamic {
		
		for (n in Reflect.fields(map)) {
			
			//Reflect.setField(element.style, n, Reflect.field(map, n));
			element.setAttribute(n, Reflect.field(map, n));
			
		}
		
		return element;
		
	}*/
	
	public function attrMap(map:Dynamic):Twig {
		
		for (n in Reflect.fields(map)) {
			
			//Reflect.setField(element.style, n, Reflect.field(map, n));
			element.setAttribute(n, Reflect.field(map, n));
			
		}
		
		return this;
		
	}
	
	/*public static function removeAttr(element:Dynamic, name:String):Dynamic {
		// removeAttribute not offically supported by haxe
		untyped element.removeAttribute(name);
		
		return element;
	}*/
	
	public function removeAttr(name:String):Twig {
		// removeAttribute not offically supported by haxe
		untyped element.removeAttribute(name);
		
		return this;
	}
	
	public function addClass(value:String):Twig {
		
		element.className += ' ' + value;
		
		return this;
		
	}
	
	/*
	 * (G/S)ET ELEMENT STYLES (CSS)
	 */
	
	/*public static function css(element:Dynamic, name:String, ?value:Dynamic = null):Dynamic {
		
		// get
		if (value == null) {
			
			return Reflect.field(element.style, name);
			
		// set
		} else {
			
			Reflect.setField(element.style, name, value);
			return element;
			
		}
		
	}*/
	
	public function css(name:String, ?value:Dynamic = null):Dynamic {
		
		// get
		if (value == null) {
			
			return Reflect.field(element.style, name);
			
		// set
		} else {
			
			Reflect.setField(element.style, name, value);
			return this;
			
		}
		
	}
	
	/*public static function cssMap(element:Dynamic, map:Dynamic):Dynamic {
		
		var _t:String = '';
		
		for (n in Reflect.fields(map)) {
			
			//Reflect.setField(element.style, n, Reflect.field(map, n));
			_t += '' + n + ':' + Reflect.field(map, n) + '; ';
			
		}
		
		element.style.cssText = _t;
		
		return element;
		
	}*/
	
	public function cssMap(map:Dynamic):Twig {
		
		var _t:String = '';
		
		for (n in Reflect.fields(map)) {
			
			//Reflect.setField(element.style, n, Reflect.field(map, n));
			_t += '' + n + ':' + Reflect.field(map, n) + '; ';
			
		}
		
		element.style.cssText = _t;
		
		return this;
		
	}
	
	/*
	 * APPEND ELEMENT
	 */
	
	/*public static function append(element:Dynamic, content:HtmlDom):Dynamic {
		element.appendChild(content);
		return element;
	}*/
	
	public function append(child:Twig):Twig {
		element.appendChild(child.element);
		return this;
	}
	
	/*public static function appendTo(element:Dynamic, target:HtmlDom):Dynamic {
		target.appendChild(element);
		return element;
	}*/
	
	public function appendTo(target:Twig):Twig {
		target.element.appendChild(element);
		return this;
	}
	
	/*
	 * (BASIC) EVENT MANAGEMENT
	 */
	
	public static var EVENT_HANDLERS:Hash<Dynamic> = new Hash<Dynamic>();
	
	/*public static function bind(element:Dynamic, eventType:String, handler:Dynamic, ?useCapture:Bool = false):Dynamic {
		
		var _e:Dynamic = {
			capture:useCapture,
			path:[element]
		}
		
		var _t:HtmlDom = element;
			
		while (true) {
			if (_t == root) {
				break;
			}
			_e.path.push(_t.parentNode);
			_t = _t.parentNode;
		}
		
		_e.path = useCapture ? _e.path.reverse() : _e.path;
		
		var _p:String = useCapture ? 'CAPTURE' : 'TARGET';
		
		element.data(_p + eventType, _e);
		
		return element;
	}*/
	
	public function bind(eventType:String, handler:Dynamic, ?useCapture:Bool = false):Twig {
		
		var _e:Dynamic = {
			capture:useCapture,
			path:[element]
		}
		
		var _t:HtmlDom = element;
			
		while (true) {
			if (_t == root) {
				break;
			}
			_e.path.push(_t.parentNode);
			_t = _t.parentNode;
		}
		
		_e.path = useCapture ? _e.path.reverse() : _e.path;
		
		var _p:String = useCapture ? 'C' : 'T';
		
		this.data(_p + eventType, _e);
		
		return this;
	}
	
	/*public static function trigger(element:Dynamic, eventType:String, ?extra:Dynamic):Dynamic {
		return element;
	}*/
	
	public function trigger(eventType:String, ?extra:Dynamic):Twig {
		return this;
	}
	
	/*public static function unbind(element:Dynamic, eventType:String, handler:Dynamic):Dynamic {
		return element;
	}*/
	
	public function unbind(eventType:String, handler:Dynamic):Dynamic {
		return this;
	}
	
}