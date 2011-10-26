package hedge.display;

import massive.munit.Assert;
import flash.display.Sprite;
import flash.Lib;
import haxe.Firebug;

#if js
import hedge.Setup;
import jQuery.JQuery;
#end

/**
 * ...
 * @author Skial Bainn
 */

class DisplayObjectTest implements IMUnitBase, implements IFormData, extends Sprite {
	

	#if js
	public var formUrl:String;
	public var formIDs:Hash<String>;
	#end
	
	private static var sprite:Sprite = new Sprite();
	
	public function new() {
		super();
		
		sprite.graphics.beginFill(0xFF8040);
		sprite.graphics.drawRect(50, 50, 50, 50);
		sprite.graphics.endFill();
		
		this.addChild(sprite);
	}
	
	public function run():Void {
		Lib.current.addChild(new DisplayObjectTest());
	}
	
	@BeforeClass
	public function beforeClass():Void {
		run();
	}
	
	@AfterClass
	public function afterClass():Void {
		//Lib.current.removeChildAt(0);
		#if js
		this.formUrl = 'https://docs.google.com/spreadsheet/formResponse?formkey=dGtfTXg0czhYX2VVcV9XMU5kbHMzdlE6MQ&ifq';
		this.formIDs = new Hash<String>();
		formIDs.set('Browser', '0');
		formIDs.set('FlashPlayer', '1');
		formIDs.set('OS', '2');
		formIDs.set('js_Height', '3');
		formIDs.set('fl_Height', '4');
		formIDs.set('js_Width', '6');
		formIDs.set('fl_Width', '8');
		formIDs.set('js_Alpha', '10');
		formIDs.set('fl_Alpha', '12');
		formIDs.set('js_Name', '14');
		formIDs.set('fl_Name', '16');
		formIDs.set('js_Stage', '18');
		formIDs.set('fl_Stage', '20');
		formIDs.set('js_Visible', '22');
		formIDs.set('fl_Visible', '32');
		formIDs.set('js_XPosition', '24');
		formIDs.set('fl_XPosition', '26');
		formIDs.set('js_YPosition', '28');
		formIDs.set('fl_YPosition', '30');
		
		TestMain.submitDataToGoogleForm(this, Type.getClassName(DisplayObjectTest));
		#end
	}
	
	@Before
	public function setup():Void {
		
	}
	
	@After
	public function tearDown():Void {
		
	}
	
	// TESTS
	
	@Test
	public function testHeight():Void {
		Assert.areEqual(50, sprite.height);
	}
	
	@Test
	public function testWidth():Void {
		Assert.areEqual(50, sprite.width);
	}
	
	@Test
	public function testAlpha():Void {
		sprite.alpha = 0.5;
		Assert.areEqual(0.5, sprite.alpha);
	}
	
	@Test
	public function testName():Void {
		sprite.name = 'testName';
		Assert.areEqual('testName', sprite.name);
	}
	
	@Test
	public function testStage():Void {
		Assert.areEqual(Lib.current.stage, sprite.stage);
	}
	
	@Test
	public function testVisible():Void {
		sprite.visible = false;
		Assert.isFalse(sprite.visible);
		sprite.visible = true;
		Assert.isTrue(sprite.visible);
	}
	
	@Test
	public function testXPosition():Void {
		Assert.areEqual(0, sprite.x);
	}
	
	@Test
	public function testYPosition():Void {
		Assert.areEqual(0, sprite.y);
	}
	
}