package demo.basicTextField;

import haxe.Firebug;
import hedge.display.Sprite;
import hedge.Lib;
import hedge.Setup;
import hedge.text.TextField;
import hedge.text.TextFieldType;

using clippings.Twig;

class BasicTextField extends Sprite {
	
	static function main() {
		Firebug.redirectTraces();
		Setup.init(run, 30);
	}
	
	static function run() {
		Lib.current.addChild(new BasicTextField());
	}

	public function new() {
		
		super();
		
		var txt:TextField = new TextField();
		var input:TextField = new TextField();
		
		txt.border = input.border = true;
		txt.text = 'This is a non-editable textfield';
		
		input.type = TextFieldType.INPUT;
		input.text = 'This is a editable textfield - click to edit this textfield';
		
		txt.y = input.y = 100;
		input.x = 250;
		
		input.background = true;
		input.backgroundColor = 0x91DFCA;
		
		txt.borderColor = 0x31CE74;
		
		this.addChild(txt);
		this.addChild(input);
		
	}
	
}