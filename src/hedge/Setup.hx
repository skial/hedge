/**
 * ...
 * @author Skial Bainn
 */

package hedge;
import haxe.Md5;
import haxe.rtti.Meta;
import hedge.display.Bitmap;
import hedge.display.DisplayObject;
import hedge.display.DisplayObjectContainer;
import hedge.display.InteractiveObject;
import hedge.display.Sprite;
import hedge.display.Stage;
import hedge.events.Event;
import hedge.events.internal.HedgeResizeDisplayEvent;
import hedge.events.internal.HedgeEnterFrame;
import hedge.geom.Point;
import hedge.geom.Rectangle;
//import JQuery;
import js.Dom;
import clippings.Twig;

using Std;
using StringTools;

typedef EventStructure = {
	var listener:Event->Dynamic;
	var target:Dynamic;
}

typedef EnterFrameEventStructure = {
	var listener:Event->Void;
	var target:DisplayObject;
}

typedef MovieclipStructure = {
	var movieclipLink:String;
	var movieclipLayers:Array<MovieclipLayer>;
}

typedef MovieclipLayer = {
	var labelName:String;
	var labelFrames:Array<MovieclipFrame>;
}

typedef MovieclipLayerBitmap = { > MovieclipLayer,
	var labelBitmap:Bitmap;
	var labelTimerPosition:Int;
	var labelCounter:Int;
}

typedef MovieclipFrame = {
	var frameName:String;
	var frameData:Dynamic;
	var framePause:String;
}

class Setup {
	
	// PUBLIC PROPERTIES	
	
	public static var backgroundColor(getBackgroundColor, setBackgroundColor):Int;
	public static var frameRate(getFrameRate, setFrameRate):Int;
	
	public static var __version__(getVersion, setVersion):Float;
	public static var __project__(getProject, setProject):String;
	
	// INTERNAL PROPERTIES / ADVANCED PUBLIC PROPERTIES
	
	public static var __ele__:HtmlDom;
	public static var __normalStorage__:HtmlDom;
	public static var __graphicStorage__:HtmlDom;
	public static var __stage__:Stage;
	
	public static var __movieclips__:Array<MovieclipStructure> = new Array<MovieclipStructure>();
	
	// INTERNAL PROPERTIES
	
	private static var __counter__:Int = 0;
	
	// PUBLIC METHODS
	
	public static function init(_callback:Dynamic, ?fps:Int = 30, ?stageName:String = 'Stage') {
		// create graphic storage
		__graphicStorage__ = js.Lib.document.createElement('div');
		__graphicStorage__.setAttribute('id', 'graphicStorage');
		__graphicStorage__.style.cssText = 'position:absolute; width:100%; height:100%; left:-10000px;';
		
		// create normal storage
		untyped __normalStorage__ = js.Lib.document.createDocumentFragment();
		
		__ele__ = js.Lib.document.getElementById(stageName);
		__ele__.setAttribute('data-version', 0.1.string());
		__ele__.setAttribute('data-project', 'hedge');
		__ele__.setAttribute('data-haXe', 'http://www.haxe.org/');
		__ele__.style.cssText = 'overflow:hidden; visibility:visible; width:100%; height:100%; left:0px; top:0px; position:relative; background-color:' + RGB_to_String(0xFFFFFF) + '; z-index:0;';
		__ele__.appendChild(__graphicStorage__);
		
		//frameRate = fps;
		
		__stage__ = new Stage();
		//__stage__.__ele__ = __ele__;
		__stage__.name = stageName;
		__stage__.parent = null;
		__stage__.removeEventListener(HedgeResizeDisplayEvent.RESIZE_ELEMENT, HedgeResizeDisplayEvent.resizeDisplayObject);
		
		Lib.current = __stage__;
		
		HedgeEnterFrame.init();
		
		//getAllMovieClips();
		//createJqueryEvents();
		
		_callback();
	}
	
	// INTERNAL METHODS / ADVANCED PUBLIC METHODS
	
	public static function getAllMovieClips():Void {
		var movieclips = new JQuery('div.movieclip_timeline');
		
		var tmp:JQuery;
		var movieclip:JQuery;
		var layers:JQuery;
		var frames:JQuery;
		
		for (i in 0...movieclips.length) {
			var mcs:MovieclipStructure = { movieclipLink:null, movieclipLayers:new Array<MovieclipLayer>() };
			
			movieclip = new JQuery(movieclips[i]);
			layers = movieclip.children('div');
			
			mcs.movieclipLink = movieclip.attr('data-link');
			
			for (j in 0...layers.length) {
				var mcl:MovieclipLayer = { labelName:null, labelFrames:new Array<MovieclipFrame>() };
				
				tmp = new JQuery(layers[j]);
				mcl.labelName = tmp.attr('class');
				
				frames = tmp.children('img');
				
				for (k in 0...frames.length) {
					var mcf:MovieclipFrame = { frameName:null, frameData:null, framePause:null };
					
					tmp = new JQuery(frames[k]);
					
					mcf.frameName = tmp.attr('class');
					mcf.framePause = tmp.attr('data-pause');
					mcf.frameData = tmp[0];
					
					mcl.labelFrames.push(mcf);
				}
				
				mcs.movieclipLayers.push(mcl);
			}
			
			__movieclips__.push(mcs);
		}
		
	}
	
	/*public static function createJqueryEvents():Void {
		var _class;
		var _meta;
		var _fields;
		var _event;
		var _name;
		for (e in __events__) {
			_class 	= Type.createInstance(e, []);
			_name 	= Type.getClassName(e).split('.');
			_meta 	= Meta.getFields(e);
			_fields	= Reflect.fields(_meta);
			_event	= Reflect.setField(JQueryEventS.special, _name[_name.length-1], { } );
			
			for (f in _fields) {
				Reflect.setField(_event, f, Reflect.field(_class, f));
			}
			
			//trace(_event);
			//trace(_name[_name.length-1]);
		}
		//Reflect.deleteField(Setup, 'createJqueryEvents');
	}*/
	
	public static function getVersion():Float {
		//return __jq__.attr('data-version');
		return __ele__.getAttribute('data-version').parseFloat();
	}
	public static function setVersion(value:Float):Float { 
		//__jq__.attr('data-version', value); 
		__ele__.setAttribute('data-version', value.string());
		return value;
	}
	
	public static function getProject():String { 
		//return __jq__.attr('data-project');
		return __ele__.getAttribute('data-project');
	}
	public static function setProject(value:String):String { 
		//__jq__.attr('data-project', value);
		__ele__.setAttribute('data-project', value);
		return value; 
	}
	
	public static function getBackgroundColor():Int { 
		//return RGB_String_to_HEX(__jq__.css('background-color')); 
		return RGB_String_to_HEX(__ele__.style.backgroundColor);
	}
	public static function setBackgroundColor(value:Int):Int { 
		//__jq__.css('background-color', RGB_to_String(value));
		__ele__.style.backgroundColor = RGB_to_String(value);
		return value;
	}
	
	public static function getFrameRate():Int { 
		//return __jq__.attr('data-frameRate'); 
		return __ele__.getAttribute('data-frameRate').parseInt();
	}
	public static function setFrameRate(value:Int):Int { 
		//__jq__.attr('data-frameRate', value);
		__ele__.setAttribute('data-frameRate', value.string());
		return value;
	}
	
	public static function __data__(values:Dynamic):Dynamic {
		Reflect.deleteField(values, '__name__');
		var _n_:String = '';
		var _v_:Dynamic = { };
		for (n in Reflect.fields(values)) {
			_n_ = n;
			_v_ = Reflect.field(values, n);
			Reflect.deleteField(values, n);
			Reflect.setField(values, 'data-' + _n_, _v_);
		}
		return values;
	}
	
	public static function __attr__(values:Dynamic):Dynamic {
		var _r_:Dynamic = { overflow:'hidden', position:'absolute', visibility:'visible'};
		var _t_:Dynamic = { };
		Reflect.deleteField(values, '__name__');
		Reflect.deleteField(_r_, '__name__');
		for (n in Reflect.fields(values)) {
			_t_ = Reflect.field(values, n);
			if (_t_ != null) {
				Reflect.setField(_r_, n, _t_);
			}
		}
		return _r_;
	}
	
	public static function generateInstanceName():String {
		return 'instance' + (__counter__++);
	}
	
	public static function RGB_to_String(color:Int):String {
		return 'rgb(' + (color >> 16 & 0xFF) + ', ' + (color >> 8 & 0xFF) + ', ' + (color & 0xFF) + ')';
	}
	
	public static function ARGB_to_String(color:Int):String {
		return 'argb(' + (color >> 24 & 0xFF) + ', ' +  (color >> 16 & 0xFF) + ', ' + (color >> 8 & 0xFF) + ', ' + (color & 0xFF) + ')';
	}
	
	public static function canvas_RGBA_to_String(color:Int):String {
		return 'rgba(' + (color >> 16 & 0xFF) + ', '
							+ (color >> 8 & 0xFF) + ', ' 
							+ (color & 0xFF) + ', ' 
							// below - first check if color value is less than 0 if true(?) then calculate alpha value if false(:) set to max(1)
							// below - alpha values between 0 and 1
							+ (color < 0 ? -(color >> 24) / 255 : 1) + ')';
	}
	
	public static function RGB_String_to_HEX(color:String):Int {
		var values:Array<String> = color.substr(color.indexOf('rgb(') + 4, color.lastIndexOf(')') - 4).split(', ');
		return (((Std.parseInt(values[0])) << 16) | ((Std.parseInt(values[1])) << 8) | ((Std.parseInt(values[2]))));
	}
	
	public static function ARGB_String_to_HEX(color:String):Int {
		var values:Array<String> = color.substr(color.indexOf('argb(') + 5, color.lastIndexOf(')') - 5).split(', ');
		return (((Std.parseInt(values[3])) << 24) | ((Std.parseInt(values[0])) << 16) | ((Std.parseInt(values[1])) << 8) | ((Std.parseInt(values[2]))));
	}
	
	/*public static function triggerResize(target:DisplayObject, reference:Rectangle):Void {
		var _event = new DisplayEvent(DisplayEvent.RESIZE_ELEMENT, true, true, reference);
		_event.target = target == null ? _event.target : target;
		target.dispatchEvent(_event);
	}
	
	public static function resizeDiplay(e:DisplayEvent):Void {
		var target = cast(e.target, DisplayObject);
		var newWidth = e.rectangle.width + e.rectangle.x;
		var newHeight = e.rectangle.height + e.rectangle.y;
		
		if (target.width < newWidth) {
			target.width = target.width + (newWidth - target.width);
		}
		
		if (target.height < newHeight) {
			target.height = target.height + (newHeight - target.height);
		}
	}*/
	
	public static function createAncestorPath(target:DisplayObject):Array<DisplayObject> {
		
		var _temp = target;
		var _array = new Array<DisplayObject>();
		
		if (_temp.__originalName__ == 'Stage') {
			
			_array.push(_temp);
			
			return _array;
			
		}
		
		while (true) {
			_temp = _temp.parent;
			
			if (_temp.__originalName__ == 'Stage') {
				
				_array.push(_temp);
				break;
				
			}
			
		}
		
		return _array;
		
	}
	
	// http://www.quirksmode.org/js/findpos.html
	
	public static function calculateStagePosition():Point {
		untyped {
			var currentX = 0;
			var currentY = 0;
			var object = __stage__.__ele__;
			
			if (object.offsetParent) {
				
				do {
					
					currentX += object.offsetLeft;
					currentY += object.offsetTop;
					
				} while (object = object.offsetParent);
				
			}
			
			return new Point(currentX, currentY);
		}
		
	}
	
}