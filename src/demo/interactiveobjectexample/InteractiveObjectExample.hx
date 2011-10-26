package demo.interactiveobjectexample;

import flash.events.MouseEvent;
import flash.Lib;
import flash.display.Sprite;
import haxe.Firebug;

#if js
import hedge.Setup;
#end

class InteractiveObjectExample extends Sprite {
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new InteractiveObjectExample());
	}

	public function new() {
		super();
		var child:Sprite = new ChildSprite();
		addChild(child);
	}
	
}

class ChildSprite extends Sprite {
	private static var size:Int = 80;
	private static var overSize:Int = 60;
	private static var backgroundColor:Int = 0xFFCC00;
	private static var overColor:Int = 0xCCFF00;
	private static var downColor:Int = 0x00CCFF;
	
	public function new() {
		super();
		buttonMode = true;
		draw(size, size, backgroundColor);
		addEventListener(MouseEvent.MOUSE_OVER, mouseOverHandler);
		addEventListener(MouseEvent.MOUSE_OUT, mouseOutHandler);
		addEventListener(MouseEvent.MOUSE_DOWN, mouseDownHandler);
		addEventListener(MouseEvent.MOUSE_UP, mouseUpHandler);
	}
	
	private function draw(w:Int, h:Int, bgColor:Int):Void {
		graphics.clear();
		graphics.beginFill(bgColor);
		graphics.drawRect(0, 0, w, h);
		graphics.endFill();
	}
	
	public function mouseOverHandler(e:MouseEvent):Void {
		trace('mouseOverHandler');
		draw(overSize, overSize, overColor);
	}
	
	public function mouseOutHandler(e:MouseEvent):Void {
		trace('mouseOutHandler');
		draw(size, size, backgroundColor);
	}
	
	public function mouseDownHandler(e:MouseEvent):Void {
		trace('mouseDownHandler');
		draw(overSize, overSize, downColor);
	}
	
	public function mouseUpHandler(e:MouseEvent):Void {
		trace('mouseUpHandler');
		draw(overSize, overSize, overColor);
	}
}