/**
 * ...
 * @author Skial Bainn
 */

package hedge;

import hedge.display.Bitmap;
import hedge.display.DisplayObject;
import hedge.display.DisplayObjectContainer;
import hedge.display.InteractiveObject;
import hedge.display.Sprite;
import hedge.display.Stage;
import hedge.events.Event;
import hedge.events.internal.HedgeResizeDisplayEvent;
import hedge.geom.Point;
import hedge.geom.Rectangle;

import js.Dom;
import jQuery.JQuery;

using Std;
using StringTools;

typedef EnterFrameEventStructure = {
	var listener:Dynamic;
	var target:Dynamic;
}

// TODO disable mozilla native editing controls http://stackoverflow.com/questions/2901759/how-to-i-disable-the-moz-resizing

class Setup {
	
	// PUBLIC PROPERTIES
	
	public static var backgroundColor:Int;
	
	public inline static var __version__:Float = 0.1;
	public inline static var __project__:String = 'hedge | http://github.com/skial/hedge';
	public inline static var __haxe__:String = ' haXe | http://haxe.org';
	
	// INTERNAL PROPERTIES / ADVANCED PUBLIC PROPERTIES
	
	public static var __ele__:HtmlDom;
	public static var __storage__:HtmlDom;
	public static var __stage__:Stage;
	
	public static var __stageWidth__:Int = 800;
	public static var __stageHeight__:Int = 600;
	
	public static var __stageX__:Int = 0;
	public static var __stageY__:Int = 0;
	
	public static var __fps__:Int = 30;
	public static var __background__:Int = 0xFFFFFF;
	
	// INTERNAL PROPERTIES
	
	private static var __counter__:Int = 0;
	private static var __HEFUID__:Int = 0;
	
	private static var __BROWSERS__:Array<String> = ['-webkit', '-moz', '-ms', '-o', '-khtml'
													#if HEDGE_ALT_BROWSER_PREFIXES
													// http://stackoverflow.com/questions/5411026/list-of-css-vendor-prefixes
													, '-xv', '-atsc', '-wap', '-apple', '-rim', '-hp'
													#end
													];
	
	// PUBLIC METHODS
	
	public static function __init__():Void {
		requestAnimFrame();
		requestInterval();
		requestTimeout();
		//untyped jQuery.Event.currentTarget
	}
	
	public static function init(_callback:Dynamic, ?fps:Int = 30, ?background:Int = 0xFFFFFF, ?stageWidth:Int = 800, ?stageHeight:Int = 600, ?stageName:String = 'Stage') {
		__fps__ = fps;
		__background__ = background;
		__stageWidth__ = stageWidth;
		__stageHeight__ = stageHeight;
		
		__storage__ = js.Lib.document.createElement('div');
		__storage__.setAttribute('id', 'hInternalStorage');
		
		__ele__ = js.Lib.document.getElementById(stageName);
		__ele__.style.backgroundColor = Setup.rgb(__background__);
		__ele__.setAttribute('data-version', __version__.string());
		__ele__.setAttribute('data-project', __project__);
		__ele__.setAttribute('data-haXe', __haxe__);
		__ele__.appendChild(__storage__);
		
		__stageWidth__ = new JQuery(__ele__).innerWidth();
		__stageHeight__ = new JQuery(__ele__).innerHeight();
		if (__stageWidth__ == 0) {
			__stageWidth__ = new JQuery(__ele__).parent().innerWidth();
		}
		if (__stageHeight__ == 0) {
			__stageHeight__ = new JQuery(__ele__).parent().innerHeight();
		}
		
		__stageX__ = new JQuery(__ele__).position().left.int();
		__stageY__ = new JQuery(__ele__).position().top.int();
		
		__stage__ = new Stage();
		__stage__.name = stageName;
		__stage__.parent = null;
		__stage__.__ele__.unbind(Setup.PREFIX + HedgeResizeDisplayEvent.RESIZE_DOM_ELEMENT, HedgeResizeDisplayEvent.resizeDisplayObject);
		
		Lib.current = __stage__;
		
		primaryMouseButtonDown();
		
		_callback();
	}
	
	// INTERNAL METHODS / ADVANCED PUBLIC METHODS
	
	public static function generateInstanceName():String {
		return 'instance' + (__counter__++);
	}
	
	public static function generateHEFUID():Int {
		++__HEFUID__;
		return __HEFUID__;
	}
	
	public static function createAncestorPath(target:DisplayObject):Array<DisplayObject> {
		
		var _temp = target;
		var _array = new Array<DisplayObject>();
		
		if (_temp.__originalName__ == 'Stage') {
			
			_array.push(_temp);
			
			return _array;
			
		}
		
		while (true) {
			
			_temp = _temp.parent;
			
			if (_temp.__originalName__ != 'Stage') {
				
				_array.push(_temp);
				
			} else if (_temp.__originalName__ == 'Stage') {
				
				_array.push(_temp);
				break;
				
			}
			
		}
		return _array;
		
	}
	
	//	GENERAL HELPERS
	
	public static inline var PREFIX:String = 'h';
	
	//	JAVASCRIPT HELPERS 
	
	//	CSS HELPERS
	
	public static function cssPrefix(v:Dynamic):Dynamic {
		var s;
		for (n in Reflect.fields(v)) {
			s = Reflect.field(v, n);
			for (m in __BROWSERS__) {
				Reflect.setField(v, m + '-' + n, s);
			}
		}
		return v;
	}
	
	public static inline function cssTransform(r:Float, rx:Float, ry:Float, rz:Float, sx:Float, sy:Float, sz:Float, tx:Float, ty:Float, tz:Float, e:JQuery):String {
		return 'rotate(' + r + 'deg) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz +'deg) scaleX(' + sx + ') scaleY(' + sy + ') scaleZ(' + sz + ')'
		+ 
		if (Modernizr.csstransforms3d) {
			/*trace('3d');
			trace(' translate3d(' + tx + 'px,' + ty + 'px,' + tz + 'px)');*/
			' translate3d(' + tx + 'px,' + ty + 'px,' + tz + 'px)';
		} else if (Modernizr.csstransforms) {
			/*trace('2d');
			trace(' translate(' + tx + 'px, ' + ty + 'px)');*/
			' translate(' + tx + 'px, ' + ty + 'px)';
		} else {
			//trace('normal');
			e.css( { left:tx.string() + 'px', top:ty.string() + 'px' } );
			'';
		}
	}
	
	//	COLOR HELPERS
	
	public static inline function rgb(v:Int):String {
		return 'rgb(' + ((v >> 16) & 0xFF) + ',' + ((v >> 8) & 0xFF) + ',' + ((v >> 0 ) & 0xFF) + ')';
	}
	
	public static inline function toHexString(v:Int, ?prefix:String = '#'):String {
		// from franco's thx library - cheers!
		return prefix + ((v >> 16) & 0xFF).hex(2) + ((v >> 8) & 0xFF).hex(2) + ((v >> 0) & 0xFF).hex(2);
	}
	
	public static inline function rgba(v:Int):String {
		return 'rgba(' + ((v >> 16) & 0xFF) + ',' + ((v >> 8) & 0xFF) + ',' + ((v >> 0 ) & 0xFF) + ',' + (v < 0 ? -(v >> 24) / 255 : 1) + ')';
	}
	
	public static inline function rgbIntToHex(v:Array<Int>):Int {
		return (((v[0] & 0xFF) << 16) | ((v[1] & 0xFF) << 8) | ((v[2] & 0xFF) << 0));
	}
	
	public static inline function argbIntToHex(v:Array<Int>):Int {
		return (((v[3] & 0xFF) << 24) | ((v[0] & 0xFF) << 16) | ((v[1] & 0xFF) << 8) | ((v[2] & 0xFF) << 0));
	}
	
	public static inline function rgbStringToHex(v:String):Int {
		var vs:Array<String> = v.substr(v.indexOf('rgb(') + 4, v.lastIndexOf(')') - 4).split(', ');
		return (((vs[0].parseInt() & 0xFF) << 16) | ((vs[1].parseInt() & 0xFF) << 8) | ((vs[2].parseInt() & 0xFF) << 0));
	}
	
	public static inline function argbStringToHex(v:String):Int {
		var vs:Array<String> = v.substr(v.indexOf('argb(') + 5, v.lastIndexOf(')') - 5).split(', ');
		return (((vs[3].parseInt() & 0xFF) << 24) | ((vs[0].parseInt() & 0xFF) << 16) | ((vs[1].parseInt() & 0xFF) << 8) | ((vs[2].parseInt() & 0xFF) << 0));
	}
	
	//	EVENT HELPERS
	
	//	requestAnimationFrame shim by joel ambert
	//	http://blog.joelambert.co.uk/2011/06/01/a-better-settimeoutsetinterval/
	//	https://gist.github.com/1002116
	
	public static function requestAnimFrame():Void {
		// requestAnimationFrame() shim by Paul Irish
		// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
		untyped __js__('
			window.requestAnimFrame = (function() {
				return  window.requestAnimationFrame       || 
						window.webkitRequestAnimationFrame || 
						window.mozRequestAnimationFrame    || 
						window.oRequestAnimationFrame      || 
						window.msRequestAnimationFrame     || 
						function(/* function */ callback, /* DOMElement */ element){
							window.setTimeout(callback, 1000 / 60);
						};
			})()
		');
	}
	
	public static function requestInterval():Void {
		/**
		 * Behaves the same as setInterval except uses requestAnimationFrame() where possible for better performance
		 * @param {function} fn The callback function
		 * @param {int} delay The delay in milliseconds
		 */
		
		/**
		 * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance
		 * @param {int|object} fn The callback function
		 */
		untyped __js__('
			window.requestInterval = function(fn, delay) {
				if( !window.requestAnimationFrame       && 
					!window.webkitRequestAnimationFrame && 
					!(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
					!window.oRequestAnimationFrame      && 
					!window.msRequestAnimationFrame)
						return window.setInterval(fn, delay);
					
				var start = new Date().getTime(),
					handle = new Object();
					
				function loop() {
					var current = new Date().getTime(),
						delta = current - start;
						
					if(delta >= delay) {
						fn.call();
						start = new Date().getTime();
					}
					
					handle.value = requestAnimFrame(loop);
				};
				
				handle.value = requestAnimFrame(loop);
				return handle;
			}
			window.clearRequestInterval = function(handle) {
				window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
				window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value)	:
				window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
				window.oCancelRequestAnimationFrame	? window.oCancelRequestAnimationFrame(handle.value) :
				window.msCancelRequestAnimationFrame ? msCancelRequestAnimationFrame(handle.value) :
				clearInterval(handle);
			}
		');
	}
	
	public static function requestTimeout():Void {
		/**
		 * Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance
		 * @param {function} fn The callback function
		 * @param {int} delay The delay in milliseconds
		 */
		
		/**
		 * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance
		 * @param {int|object} fn The callback function
		 */
		untyped __js__('
			window.requestTimeout = function(fn, delay) {
				if( !window.requestAnimationFrame      	&& 
					!window.webkitRequestAnimationFrame && 
					!(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
					!window.oRequestAnimationFrame      && 
					!window.msRequestAnimationFrame)
						return window.setTimeout(fn, delay);
						
				var start = new Date().getTime(),
					handle = new Object();
					
				function loop(){
					var current = new Date().getTime(),
						delta = current - start;
						
					delta >= delay ? fn.call() : handle.value = requestAnimFrame(loop);
				};
				
				handle.value = requestAnimFrame(loop);
				return handle;
			};
			window.clearRequestTimeout = function(handle) {
				window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
				window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value)	:
				window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
				window.oCancelRequestAnimationFrame	? window.oCancelRequestAnimationFrame(handle.value) :
				window.msCancelRequestAnimationFrame ? msCancelRequestAnimationFrame(handle.value) :
				clearTimeout(handle);
			}
		');
	}
	
	public static var PMBD:Bool = false;
	
	public static function primaryMouseButtonDown():Void {
		
		// source - http://stackoverflow.com/questions/4065992/jquery-detecting-pressed-mouse-button-during-mousemove-event
		// source - http://jsfiddle.net/G5Xr2/25/
		
		__stage__.__ele__.mousedown(function(e:jQuery.Event) { 
			if (e.which == 1) PMBD = true;
		} );
		__stage__.__ele__.mouseup(function(e:jQuery.Event) {
			if (e.which == 1) PMBD = false;
		} );
		__stage__.__ele__.mousemove(function(e:jQuery.Event) {
			if (js.Lib.isIE && !untyped (js.Lib.document.documentMode >= 9) && !e.button) {
				PMBD = false;
			}
			if (e.which == 1 && !PMBD) e.which = 0;
		} );
	}
}