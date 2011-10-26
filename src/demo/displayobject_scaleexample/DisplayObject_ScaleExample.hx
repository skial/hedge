package demo.displayobject_scaleexample;

import flash.events.MouseEvent;
import flash.Lib;
import flash.display.Sprite;
import haxe.Firebug;

#if js
import hedge.Setup;
#end

class DisplayObject_ScaleExample extends Sprite {
	
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
		Lib.current.addChild(new DisplayObject_ScaleExample());
	}

	public function new() {
		super();
		
		square = new Sprite();
		square.graphics.beginFill(0xFFCC00);
		square.graphics.drawRect(0, 0, 100, 100);
		addChild(square);
		square.addEventListener(MouseEvent.CLICK, scale);
	}
	
	public function scale(e:MouseEvent):Void {
		square.scaleX *= 1.05;
		square.scaleY *= 1.10;
	}
	
}