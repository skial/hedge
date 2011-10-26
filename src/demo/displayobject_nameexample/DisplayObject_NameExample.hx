package demo.displayobject_nameexample;

import flash.Lib;
import flash.display.Sprite;
import flash.events.MouseEvent;
import haxe.Firebug;

#if js
import hedge.Setup;
#end

class DisplayObject_NameExample extends Sprite {
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new DisplayObject_NameExample());
	}

	public function new() {
		super();
		
		var circle1:Sprite = new Sprite();
		circle1.graphics.beginFill(0xFF0000);
		circle1.graphics.drawCircle(40, 40, 40);
		circle1.name = 'circle1';
		addChild(circle1);
		circle1.addEventListener(MouseEvent.CLICK, traceName);
		
		var circle2:Sprite = new Sprite();
		circle2.graphics.beginFill(0x0000FF);
		circle2.graphics.drawCircle(140, 40, 40);
		circle2.name = 'circle2';
		addChild(circle2);
		circle2.addEventListener(MouseEvent.CLICK, traceName);
	}
	
	public function traceName(e:MouseEvent):Void {
		trace(e.target.name);
	}
	
}