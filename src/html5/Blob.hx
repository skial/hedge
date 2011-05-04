package html5;

extern class Blob {
	var size(default,null) : Float;
	var type(default,null) : String;
	function slice( start : Int, length : Int, ?contentType : String ) : Void;
}
