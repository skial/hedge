package hedge.display;

import flash.text.TextField;
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

class DisplayObjectTest implements IMUnitBase, extends Sprite {
	
	// INTERFACE

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
		#if js
		//new JQuery('.hDisplayObject').remove();
		#elseif flash9
		
		#end
		Lib.current.removeChildAt(0);
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
		Assert.areEqual(100, sprite.height);
	}
	
	@Test
	public function testWidth():Void {
		Assert.areEqual(100, sprite.width);
	}
	
	@Test
	public function testAlpha():Void {
		sprite.alpha = 0.5;
		Assert.areEqual(0.5, sprite.alpha);
	}
	
	@Test
	public function testName():Void {
		sprite.name = 'displayObjectTest';
		Assert.areEqual('displayObjectTest', sprite.name);
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