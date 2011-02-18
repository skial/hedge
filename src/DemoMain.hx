package ;

import haxe.Firebug;
import haxe.rtti.Meta;
#if js
#if bunnyBlit
import demo.bunnyBlitTest.BlitTest;
#elseif bunnyLand
	import demo.bunnyLandBlitTest.BunnyLandBlitTest;
#elseif wizardry
	import demo.wizardry.Main;
#end
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

class DemoMain {
		
	static function main() {
		if (Firebug.detect()) {
			Firebug.redirectTraces();
		}
		
		#if js
			// Setup.init params : callback method, frame rate for enterframe event, then stage id
			#if bunnyBlit
				Setup.init(launch, 30, 'bunnyBlit');
			#elseif bunnyLand 
				Setup.init(launch, 30, 'bunnyLand');
			#elseif wizardry
				Setup.init(launch, 15, 'wizardry');
			#end
		#elseif flash9
		launch();
		#end
	}
	
	static function launch() {
		#if !wizardry
			hedge.Lib.attachToStage(new Examples());
		#else
			hedge.Lib.attachToStage(new Main());
		#end
	}
	
}

class Examples extends Sprite {
	
	private var bunnyAmount:TextField;
	private var submitAmount:Sprite;
	private var submitText:TextField;
	private var bunnyOne:Dynamic;
	private var bunnyClass:Dynamic;
	private var max:Int;
	
	public function new() {
		super();
		
		bunnyOne = #if bunnyBlit new BlitTest(); max = 3000; #elseif bunnyLand new BunnyLandBlitTest(); max = 34000; #end
		bunnyOne.name = 'blit';
		bunnyClass = #if bunnyBlit BlitTest; #elseif bunnyLand BunnyLandBlitTest; #end
		
		bunnyAmount = new TextField();
		bunnyAmount.type = TextFieldType.INPUT;
		bunnyAmount.background = true;
		bunnyAmount.border = true;
		bunnyAmount.width = 50;
		bunnyAmount.height = 20;
		bunnyAmount.text = ''+max;
		bunnyAmount.name = 'bunnyAmount';
		
		submitAmount = new Sprite();
		submitAmount.graphics.beginFill(0x009FEC);
		submitAmount.graphics.lineStyle(1, 0x000000);
		submitAmount.graphics.drawRect(0, 0, 98, 20);
		submitAmount.graphics.endFill();
		submitAmount.name = 'submitAmount';
		
		submitText = new TextField();
		submitText.text = 'change';
		submitText.name = 'submitText';
		
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
		
		bunnyClass.numBunnies = 3000;
		bunnyAmount.text = '' + 3000;
	}
	
	public function onBunnyClick(e:Dynamic):Void {
		if (bunnyAmount.text == null) {
			bunnyAmount.text = ''+max;
		}
		var amount = Std.parseInt(bunnyAmount.text);
		if (amount > max) {
			bunnyAmount.text = ''+max;
		}
		if (amount <= 0) {
			bunnyAmount.text = '1';
		}
		bunnyClass.numBunnies = Std.parseInt(bunnyAmount.text);
	}
	
}