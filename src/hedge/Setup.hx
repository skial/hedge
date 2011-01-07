/**
 * ...
 * @author Skial Bainn
 */

package hedge;
import haxe.Md5;
import haxe.rtti.Meta;
import hedge.display.BitmapData;
import hedge.display.DisplayObject;
import hedge.display.DisplayObjectContainer;
import hedge.display.Stage;
import hedge.events.Event;
import hedge.jquery.events.ResizeElement;
import JQuery;

using StringTools;

typedef HandleObj = {
	var type:String;
	var data:Dynamic;
	var namespace:String;
	var handler:Dynamic;
	var guid:Float;
	var selector:String;
	var origHandler:Dynamic;
}

typedef ChildProperties = {
	var x:Float;
	var y:Float;
	var w:Float;
	var h:Float;
	var p:DisplayObject;
}

class Setup {
	
	private static var __events__:Array<Dynamic> = [ResizeElement,
	];
	
	// PUBLIC PROPERTIES	
	
	public static var backgroundColor(getBackgroundColor, setBackgroundColor):Int;
	public static var frameRate(getFrameRate, setFrameRate):Int;
	
	public static var __version__(getVersion, setVersion):Float;
	public static var __project__(getProject, setProject):String;
	
	// INTERNAL PROPERTIES / ADVANCED PUBLIC PROPERTIES
	
	public static var __jq__:JQuery;
	public static var __storage__:JQuery;
	public static var __stage__:Stage;
	public static var __default__:DisplayObjectContainer;
	
	// INTERNAL PROPERTIES
	
	private static var __counter__:Int;
	
	// PUBLIC METHODS
	
	public static function init(_callback:Dynamic, ?fps:Int = 30, ?stageName:String = 'Stage') {
		__jq__ = new JQuery('div#' + stageName);
		__jq__.css( __attr__( { width:'100%', height:'100%', left:'0px', top:'0px', position:'relative' } ) )
				.css('background-color', RGB_to_String(0xFFFFFF))
				.css('z-index', 0);
		
		__jq__.attr( __data__( { version:0.1, project:'hedge', haXe:'http://www.haxe.org' } ) );
		frameRate = fps;
		
		// create default holder
		__storage__ = new JQuery('<div>').attr('id', 'storage').css( { display:'none', width:'100%', height:'100%' } );
		__jq__.append(__storage__);
		
		__stage__ = new Stage();
		__stage__.name = stageName;
		__stage__.__jq__ = __jq__;
		
		__default__ = new DisplayObjectContainer();
		__default__.name = 'default_parent_object';
		
		createJqueryEvents();
		
		_callback();
	}
	
	// INTERNAL METHODS / ADVANCED PUBLIC METHODS
	
	public static function createJqueryEvents():Void {
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
	}
	
	public static function getVersion():Float {
		return __jq__.attr('data-version');
	}
	public static function setVersion(value:Float):Float { 
		__jq__.attr('data-version', value); 
		return value;
	}
	
	public static function getProject():String { 
		return __jq__.attr('data-project'); 
	}
	public static function setProject(value:String):String { 
		__jq__.attr('data-project', value);
		return value; 
	}
	
	public static function getBackgroundColor():Int { 
		return RGB_String_to_HEX(__jq__.css('background-color')); 
	}
	public static function setBackgroundColor(value:Int):Int { 
		__jq__.css('background-color', RGB_to_String(value));
		return value;
	}
	
	public static function getFrameRate():Int { 
		return __jq__.attr('data-frameRate'); 
	}
	public static function setFrameRate(value:Int):Int { 
		__jq__.attr('data-frameRate', value);
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
	
	public static function generateListenerName(type:String):String {
		return 'eventListener_' + type + '_' + Md5.encode(Date.now().getTime() + '_' + Math.random());
	}
	public static function generateEventName(type:String):String {
		return __project__ + '_' + type + '.' + __stage__.name;
	}
	public static function generateInstanceName():String {
		return 'instance' + ((__counter__++) - 1);
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
	
	// EVENTS
	
	public static var RESIZE_ELEMENT:String = 'ResizeElement';
	
}