package demo.displayobject_alphaexample;

import flash.display.DisplayObject;
import flash.events.KeyboardEvent;
import flash.Lib;
import flash.display.Sprite;
import flash.events.MouseEvent;
import haxe.Firebug;

#if js
import hedge.Setup;
#end

class DisplayObject_AlphaExample extends Sprite {
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new DisplayObject_AlphaExample());
	}

	public function new() {
		super();
		
		var circle:Sprite = new Sprite();
		circle.graphics.beginFill(0xFF0000);
		circle.graphics.drawCircle(40, 40, 40);
		addChild(circle);
		
		circle.addEventListener(MouseEvent.MOUSE_OVER, dimObject);
		circle.addEventListener(MouseEvent.MOUSE_OUT, restoreObject);
	}
	
	public function dimObject(e:MouseEvent):Void {
		e.target.alpha = 0.5;
	}
	
	public function restoreObject(e:MouseEvent):Void {
		e.target.alpha = 1.0;
	}
	
}