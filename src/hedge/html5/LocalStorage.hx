
/**
 * @source : https://github.com/tong/hx.html5
 * @author : tong / disktree - https://github.com/tong
 */

package hedge.html5;

@:native("localStorage") extern class LocalStorage {
	static var length(default,null) : Int;
	static function key( index : Int ) : String;
	static function setItem( key : String, value : Dynamic ) : Void;
	static function getItem( key : String ) : Dynamic;
	static function removeItem( key : String ) : Void;
	static function clear() : Void;
}
