package demo.displayobject_xexample;

import flash.Lib;
import flash.display.Sprite;
import haxe.Firebug;
import haxe.Timer;

#if js
import hedge.Setup;
#end

class DisplayObject_XExample extends Sprite {
	
	public var circle:Sprite;
	public var xInc:Float;
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new DisplayObject_XExample());
	}

	public function new() {
		super();
		
		circle = new Sprite();
		circle.graphics.beginFill(0xFF0000);
		circle.graphics.drawCircle(100, 100, 100);
		circle.graphics.endFill();
		addChild(circle);
		
		xInc = 2;
		
		var t = new Timer(50);
		t.run = bounce;
	}
	
	public function bounce():Void {
		circle.x += xInc;
		if (circle.x > circle.width) {
			xInc = -2;
		}
		if (circle.x < 0) {
			xInc = 2;
		}
	}
	
}