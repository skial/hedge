/**
 * ...
 * @author Skial Bainn
 */

package hedge.ui;
import hedge.Object;

class Keyboard extends Object {
	
	public static var capsLock	(getCapsLock, 	null):Bool;
	public static var numLock	(getNumLock, 	null):Bool;
	
	public static inline var BACKSPACE:Int = 8;
	public static inline var C:Int = 67;
	public static inline var CAPS_LOCK:Int = 20;
	public static inline var CONTROL:Int = 17;
	public static inline var DELETE:Int = 46;
	public static inline var DOWN:Int = 40;
	public static inline var END:Int = 35;
	public static inline var ENTER:Int = 13;
	public static inline var ESCAPE:Int = 27;
	public static inline var F1:Int = 112;
	public static inline var F10:Int = 121;
	public static inline var F11:Int = 122;
	public static inline var F12:Int = 123;
	public static inline var F13:Int = 124;
	public static inline var F14:Int = 125;
	public static inline var F15:Int = 126;
	public static inline var F2:Int = 113;
	public static inline var F3:Int = 114;
	public static inline var F4:Int = 115;
	public static inline var F5:Int = 116;
	public static inline var F6:Int = 117;
	public static inline var F7:Int = 118;
	public static inline var F8:Int = 119;
	public static inline var F9:Int = 120;
	public static inline var G:Int = 71;
	public static inline var HOME:Int = 36;
	public static inline var INSERT:Int = 45;
	public static inline var LEFT:Int = 37;
	public static inline var NUMPAD_0:Int = 96;
	public static inline var NUMPAD_1:Int = 97;
	public static inline var NUMPAD_2:Int = 98;
	public static inline var NUMPAD_3:Int = 99;
	public static inline var NUMPAD_4:Int = 100;
	public static inline var NUMPAD_5:Int = 101;
	public static inline var NUMPAD_6:Int = 102;
	public static inline var NUMPAD_7:Int = 103;
	public static inline var NUMPAD_8:Int = 104;
	public static inline var NUMPAD_9:Int = 105;
	public static inline var NUMPAD_ADD:Int = 107;
	public static inline var NUMPAD_DECIMAL:Int = 110;
	public static inline var NUMPAD_DIVIDE:Int = 111;
	public static inline var NUMPAD_ENTER:Int = 108;
	public static inline var NUMPAD_MULTIPLY:Int = 106;
	public static inline var NUMPAD_SUBTRACT:Int = 109;
	public static inline var PAGE_DOWN:Int = 34;
	public static inline var PAGE_UP:Int = 33;
	public static inline var RIGHT:Int = 39;
	public static inline var SHIFT:Int = 16;
	public static inline var SPACE:Int = 32;
	public static inline var TAB:Int = 9;
	public static inline var UP:Int = 38;

	public function new() {
		super();
	}
	
	public static function isAccessible():Bool {
		// TODO
		return false;
	}
	
	//	INTERNAL METHODS
	
	private static function getCapsLock():Bool {
		return false;
	}
	
	private static function getNumLock():Bool {
		return false;
	}
	
}