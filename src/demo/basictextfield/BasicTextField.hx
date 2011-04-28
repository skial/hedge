package demo.basictextfield;

import hedge.display.Sprite;
import hedge.Lib;
import hedge.Setup;
import hedge.text.TextField;
import hedge.text.TextFieldType;

class BasicTextField extends Sprite {
	
	static function main() {
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
		
		this.addChild(txt);
		this.addChild(input);
		
	}
	
}