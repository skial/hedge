package ;

import demo.bunnyLandBlitTest.BunnyLandBlitTest;
import haxe.Firebug;
import haxe.rtti.Meta;
import demo.bunnyBlitTest.BlitTest;
#if js
import js.Lib;
import hedge.display.Sprite;
import hedge.events.MouseEvent;
import hedge.text.TextField;
import hedge.text.TextFieldType;
import hedge.Setup;
#elseif flash9

#end

/**
 * ...
 * @author Skial Bainn
 */

class Main {
		
	static function main() {
		if (Firebug.detect()) {
			Firebug.redirectTraces();
		}
		
		#if js
		Setup.init(launch, 15, #if bunnyBlit 'bunnyBlit' #elseif bunnyLand 'bunnyLand' #end);
		#elseif flash9
		launch();
		#end
	}
	
	static function launch() {
		hedge.Lib.attachToStage(new Examples());
	}
	
}

class Examples extends Sprite {
	
	private var bunnyAmount:TextField;
	private var submitAmount:Sprite;
	private var submitText:TextField;
	private var bunnyOne:Dynamic;
	private var bunnyClass:Dynamic;
	
	public function new() {
		super();
		this.__jq__.css('border', '1px solid black');
		
		bunnyOne = #if bunnyBlit new BlitTest() #elseif bunnyLand new BunnyLandBlitTest() #end;
		bunnyClass = #if bunnyBlit BlitTest #elseif bunnyLand BunnyLandBlitTest #end;
		
		bunnyAmount = new TextField();
		bunnyAmount.type = TextFieldType.INPUT;
		bunnyAmount.background = true;
		bunnyAmount.border = true;
		bunnyAmount.width = 50;
		bunnyAmount.height = 20;
		bunnyAmount.text = '3000';
		
		submitAmount = new Sprite();
		submitAmount.graphics.beginFill(0x009FEC);
		submitAmount.graphics.lineStyle(1, 0x000000);
		submitAmount.graphics.drawRect(0, 0, 98, 20);
		submitAmount.graphics.endFill();
		
		submitText = new TextField();
		submitText.text = 'submit';
		
		submitAmount.x = 640 - (submitAmount.width + 5);
		submitAmount.y = 480 - (submitAmount.height + 5);
		
		bunnyAmount.x = 640 - (submitAmount.width + 5) - (bunnyAmount.width + 5);
		bunnyAmount.y = 480 - (submitAmount.height + 5);
		
		submitText.x = 25;
		submitText.y = 2;
		
		submitAmount.addEventListener(MouseEvent.CLICK, onBunnyClick);
		
		this.addChild(bunnyOne);
		this.addChild(bunnyAmount);
		this.addChild(submitAmount);
		submitAmount.addChild(submitText);
	}
	
	public function onBunnyClick(e:Dynamic):Void {
		if (bunnyAmount.text == null) {
			bunnyAmount.text = '3000';
		}
		var amount = Std.parseInt(bunnyAmount.text);
		if (amount > 3000) {
			bunnyAmount.text = '3000';
		}
		if (amount < 0) {
			bunnyAmount.text = '1';
		}
		BlitTest.numBunnies = Std.parseInt(bunnyAmount.text);
	}
	
}