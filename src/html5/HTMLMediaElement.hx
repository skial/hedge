package html5;

typedef HTMLMediaElement = { > js.Dom.HtmlDom,
	var buffered:MediaTimeRanges;
	var duration:Float;
	var initialTime:Float;
	var paused:Bool;
	var ended:Bool;
	var played:MediaTimeRanges;
	
	function currentTime(?value:Float):Float;
	function defaultPlaybackRate(?value:Float):Float;
	function playbackRate(?value:Float):Float;
	function play();
	function pause();
}