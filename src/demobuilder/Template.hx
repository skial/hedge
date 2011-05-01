package demo.@package;

import haxe.Firebug;
import hedge.Lib;
import hedge.Setup;
import hedge.display.Sprite;

class @name extends Sprite {
	
	static function main() {
		Firebug.redirectTraces();
		Setup.init(run, 30);
	}
	
	static function run():Void {
		Lib.current.addChild(new @name());
	}

	public function new() {
		super();
	}
	
}