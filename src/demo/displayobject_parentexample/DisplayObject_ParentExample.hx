package demo.displayobject_parentexample;

import flash.Lib;
import flash.display.Sprite;
import haxe.Firebug;

#if js
import hedge.Setup;
#end

class DisplayObject_ParentExample extends Sprite {
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new DisplayObject_ParentExample());
	}

	public function new() {
		super();
		
		var sprite1:Sprite = new Sprite();
		sprite1.name = 'sprite1';
		var sprite2:Sprite = new Sprite();
		sprite2.name = 'sprite2';
		var sprite3:Sprite = new Sprite();
		sprite3.name = 'sprite3';
		
		addChild(sprite1);
		sprite1.addChild(sprite2);
		sprite2.addChild(sprite3);
		
		trace(sprite2.parent.name);
		trace(sprite3.parent.name);
		trace(sprite3.parent.parent.name);
	}
	
}