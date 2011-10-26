package demo.displayobject_rotateexample;

import flash.Lib;
import flash.display.Sprite;
import flash.events.MouseEvent;
import haxe.Firebug;

#if js
import hedge.Setup;
#end

class DisplayObject_RotateExample extends Sprite {
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new DisplayObject_RotateExample());
	}
	
	public var square:Sprite;

	public function new() {
		super();
		
		square = new Sprite();
		square.graphics.beginFill(0xFFCC00);
		square.graphics.drawRect( -50, -50, 100, 100);
		square.x = 150;
		square.y = 150;
		addChild(square);
		
		square.addEventListener(MouseEvent.CLICK, rotate);
	}
	
	public function rotate(e:MouseEvent):Void {
		square.rotation += 15;
	}
	
}