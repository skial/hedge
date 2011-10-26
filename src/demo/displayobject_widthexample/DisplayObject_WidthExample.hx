package demo.displayobject_widthexample;

import flash.events.MouseEvent;
import flash.Lib;
import flash.display.Sprite;
import haxe.Firebug;

#if js
import hedge.Setup;
#end

class DisplayObject_WidthExample extends Sprite {
	
	public var square:Sprite;
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new DisplayObject_WidthExample());
	}

	public function new() {
		super();
		
		square = new Sprite();
		square.graphics.beginFill(0xFF0000);
		square.graphics.drawRect(0, 0, 100, 100);
		square.graphics.endFill();
		addChild(square);
		
		square.addEventListener(MouseEvent.CLICK, widen);
	}
	
	public function widen(e:MouseEvent):Void {
		square.width += 10;
	}
	
}