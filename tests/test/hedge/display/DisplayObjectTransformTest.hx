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

class DisplayObjectTransformTest implements IMUnitBase, extends Sprite {

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
	@Ignore('unexpected effects on other results')
	public function testRotation():Void {
		sprite.rotation = 10.1;
		Assert.areEqual(10.1, sprite.rotation);
	}
	
	@Test
	@Ignore('unexpected effects on other results')
	public function testRotationX():Void {
		sprite.rotationX = 11.1;
		Assert.areEqual(11.1, sprite.rotationX);
	}
	
	@Test
	@Ignore('unexpected effects on other results')
	public function testRotationY():Void {
		sprite.rotationY = 12.1;
		Assert.areEqual(12.1, sprite.rotationY);
	}
	
	@Test
	@Ignore('unexpected effects on other results')
	public function testRotationZ():Void {
		sprite.rotationZ = 13.1;
		Assert.areEqual(13.1, sprite.rotationZ);
	}
	
	@Test
	@Ignore('unexpected effects on other results')
	public function testScaleX():Void {
		sprite.scaleX = 14.1;
		Assert.areEqual(14.1, sprite.scaleX);
	}
	
	@Test
	@Ignore('unexpected effects on other results')
	public function testScaleY():Void {
		sprite.scaleY = 15.1;
		Assert.areEqual(15.1, sprite.scaleY);
	}
	
	@Test
	@Ignore('unexpected effects on other results')
	public function testScaleZ():Void {
		sprite.scaleZ = 16.1;
		Assert.areEqual(16.1, sprite.scaleZ);
	}
	
}