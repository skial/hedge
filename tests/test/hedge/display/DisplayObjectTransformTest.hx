package hedge.display;

import massive.munit.Assert;
import flash.display.DisplayObject;
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

class DisplayObjectTransformTest implements IMUnitBase, implements IFormData, extends Sprite {
	
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
		Lib.current.addChild(new DisplayObjectTransformTest());
	}
	
	@BeforeClass
	public function beforeClass():Void {
		run();
	}
	
	@AfterClass
	public function afterClass():Void {
		//Lib.current.removeChildAt(0);
		#if js
		this.formUrl = 'https://docs.google.com/spreadsheet/formResponse?formkey=dFM3bnlET0hCWS1VZDNKOV9oWmtSZ2c6MQ&ifq';
		this.formIDs = new Hash<String>();
		formIDs.set('Browser', '0');
		formIDs.set('FlashPlayer', '1');
		formIDs.set('OS', '2');
		formIDs.set('js_Rotation', '3');
		formIDs.set('fl_Rotation', '4');
		formIDs.set('js_RotationX', '6');
		formIDs.set('fl_RotationX', '8');
		formIDs.set('js_RotationY', '10');
		formIDs.set('fl_RotationY', '12');
		formIDs.set('js_RotationZ', '14');
		formIDs.set('fl_RotationZ', '16');
		formIDs.set('js_ScaleX', '18');
		formIDs.set('fl_ScaleX', '20');
		formIDs.set('js_ScaleY', '22');
		formIDs.set('fl_ScaleY', '24');
		formIDs.set('js_ScaleZ', '26');
		formIDs.set('fl_ScaleZ', '28');
		
		TestMain.submitDataToGoogleForm(this, Type.getClassName(DisplayObjectTransformTest));
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
	public function testRotation():Void {
		sprite.rotation = 10.1;
		Assert.areEqual(10.1, sprite.rotation);
	}
	
	@Test
	public function testRotationX():Void {
		sprite.rotationX = 11.1;
		Assert.areEqual(11.1, sprite.rotationX);
	}
	
	@Test
	public function testRotationY():Void {
		sprite.rotationY = 12.1;
		Assert.areEqual(12.1, sprite.rotationY);
	}
	
	@Test
	public function testRotationZ():Void {
		sprite.rotationZ = 13.1;
		Assert.areEqual(13.1, sprite.rotationZ);
	}
	
	@Test
	public function testScaleX():Void {
		sprite.scaleX = 14.1;
		Assert.areEqual(14.1, sprite.scaleX);
	}
	
	@Test
	public function testScaleY():Void {
		sprite.scaleY = 15.1;
		Assert.areEqual(15.1, sprite.scaleY);
	}
	
	@Test
	public function testScaleZ():Void {
		sprite.scaleZ = 16.1;
		Assert.areEqual(16.1, sprite.scaleZ);
	}
	
}