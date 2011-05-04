package html5;

typedef Audio = { > HTMLMediaElement,
	var src:String;
	var preload:String;	// none, metadata, auto
	var autoplay:Bool;
	var mediagroup:String;
	var loop:Bool;
	var muted:Bool;
	var controls:Bool;
}