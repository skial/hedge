package demo.displayobject_visibleexample;

import flash.Lib;
import flash.display.Sprite;
import flash.text.TextField;
import haxe.Firebug;
import haxe.Timer;

#if js
import hedge.Setup;
#end

class DisplayObject_VisibleExample extends Sprite {
	
	public var tf:TextField;
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new DisplayObject_VisibleExample());
	}

	public function new() {
		super();
		tf = new TextField();
		tf.text = 'Hello.';
		addChild(tf);
		
		var t = new Timer(250);
		t.run = blinker;
	}
	
	public function blinker():Void {
		tf.visible = !tf.visible;
	}
	
}