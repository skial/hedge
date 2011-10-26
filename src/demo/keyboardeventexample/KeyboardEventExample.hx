package demo.keyboardeventexample;

import flash.Lib;
import flash.display.Sprite;
import flash.display.DisplayObject;
import flash.events.MouseEvent;
import flash.events.KeyboardEvent;
import haxe.Firebug;

#if js
import hedge.Setup;
#end

class KeyboardEventExample extends Sprite {
	
	private static var child:Sprite = new Sprite();
	private static var bgColor:Int = 0x00CCFF;
	private static var size:Int = 80;
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new KeyboardEventExample());
	}

	public function new() {
		super();
		
		child.graphics.beginFill(bgColor);
		child.graphics.drawRect(0, 0, size, size);
		child.graphics.endFill();
		this.addChild(child);
		child.addEventListener(MouseEvent.CLICK, clickHandler);
		child.addEventListener(KeyboardEvent.KEY_DOWN, keyDownHandler);
		child.addEventListener(KeyboardEvent.KEY_UP, keyUpHandler);
	}
	
	private function clickHandler(e:MouseEvent):Void {
		this.stage.focus = child;
	}
	
	private function keyDownHandler(e:KeyboardEvent):Void {
		trace('keyDownHandler: ' + e.keyCode);
		trace('ctrlKey: ' + e.ctrlKey);
		trace('keyLocation: ' + e.keyLocation);
		trace('shiftKey: ' + e.shiftKey);
		trace('altKey: ' + e.altKey);
	}
	
	private function keyUpHandler(e:KeyboardEvent):Void {
		trace('keyUpHandler: ' + e.keyCode);
	}
	
}