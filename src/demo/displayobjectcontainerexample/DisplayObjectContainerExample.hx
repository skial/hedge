package demo.displayobjectcontainerexample;

import flash.Lib;
import flash.display.Sprite;
import haxe.Firebug;

#if js
import hedge.Setup;
#end

class DisplayObjectContainerExample extends Sprite {
	
	private static var gutter:Int = 5;
	private static var childCount:Int = 5;
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new DisplayObjectContainerExample());
	}

	public function new() {
		super();
		this.configureAssets();
	}
	
	private function configureAssets():Void {
		var child:Sprite = new CustomSprite();
		var lastChild:Sprite = child;
		for (n in 0...childCount) {
			child = new CustomSprite();
			child.x = lastChild.x + lastChild.width + gutter;
			addChild(child);
			lastChild = child;
		}
	}
	
}

class CustomSprite extends Sprite {
	private static var size:Int = 50;
	private static var bgColor:Int = 0xFFCC00;
	
	public function new() {
		super();
		draw(size, size);
	}
	
	private function draw(w:Int, h:Int):Void {
		graphics.beginFill(bgColor);
		graphics.drawRect(0, 0, w, h);
		graphics.endFill();
	}
}