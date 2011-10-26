package demo.displayobject_mousexexample;

import flash.Lib;
import flash.display.Sprite;
import flash.events.MouseEvent;
import haxe.Firebug;

#if js
import hedge.Setup;
#end

class DisplayObject_MouseXExample extends Sprite {
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new DisplayObject_MouseXExample());
	}
	
	public var square:Sprite;

	public function new() {
		super();
		
		square = new Sprite();
		square.graphics.beginFill(0xFF0000);
		square.graphics.drawRect(0, 0, 200, 200);
		addChild(square);
		
		square.addEventListener(MouseEvent.CLICK, traceCoordinates);
	}
	
	public function traceCoordinates(e:MouseEvent):Void {
		trace('mouseX : ' + square.mouseX);
		trace('mouseY : ' + square.mouseY);
	}
	
}