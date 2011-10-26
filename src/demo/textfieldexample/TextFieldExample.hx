package demo.textfieldexample;

import flash.Lib;
import flash.display.Sprite;
import flash.text.TextField;
import flash.text.TextFieldAutoSize;
import flash.text.TextFormat;
import haxe.Firebug;

#if js
import hedge.Setup;
#end

class TextFieldExample extends Sprite {
	
	private static var label:TextField;
	private static var labetText:String = 'Hello world and welcome to the show.';
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new TextFieldExample());
	}

	public function new() {
		super();
		this.configureLabel();
		this.setLabel(labetText);
		trace(label.width);
		trace(label.height);
	}
	
	public function setLabel(str:String):Void {
		label.text = str;
	}
	
	private function configureLabel():Void {
		label = new TextField();
		label.autoSize = TextFieldAutoSize.LEFT;
		label.background = true;
		label.border = true;
		
		var format:TextFormat = new TextFormat();
		format.font = 'Verdana';
		format.color = 0xFF0000;
		format.size = 10;
		format.underline = true;
		
		label.defaultTextFormat = format;
		addChild(label);
	}
	
}