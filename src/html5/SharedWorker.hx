package html5;

@:native("SharedWorker")
etxern class SharedWorker {
	var port(default,null) : Dynamic; // MessagePort;
	function new( scriptURL : String, ?name : String ) : Void;
}
