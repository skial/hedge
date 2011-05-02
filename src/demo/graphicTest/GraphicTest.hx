package demo.graphicTest;

import haxe.Firebug;

#if js
import hedge.Lib;
import hedge.Setup;
import hedge.display.Sprite;
#else
import flash.Lib;
import flash.display.Sprite;
#end

class GraphicTest extends Sprite {
	
	static function main() {
		Firebug.redirectTraces();
		#if js
		Setup.init(run, 30);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new GraphicTest());
	}

	public function new() {
		super();
		
		graphics.beginFill(0xFF0000);
		graphics.drawCircle(0, 0, 40);
		graphics.lineStyle(1, 0x510000);
		graphics.drawRect(-20, 100, 85, 40);
	}
	
}