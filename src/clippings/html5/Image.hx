
/**
 * @source : https://github.com/tong/hx.html5
 * @author : tong / disktree - https://github.com/tong
 */

package clippings.html5;

extern class Image {
	var alt : String;
	var src : String;
	var useMap : String;
	var isMap : Bool;
	var width : Int;
	var height : Int;
	var complete : Bool;//readonly
	var onload : Void->Void;
	function new() : Void;
}
