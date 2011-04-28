package demo.@package;

import hedge.Lib;
import hedge.Setup;
import hedge.display.Sprite;

class @name extends Sprite {
	
	static function main() {
		Setup.init(run, 30);
	}
	
	static function run():Void {
		Lib.current.addChild(new @name());
	}

	public function new() {
		super();
	}
	
}