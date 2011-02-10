/**
 * ...
 * @author Skial Bainn
 */

package demo.wizardry;

import hedge.display.MovieClip;

class Entity extends MovieClip {
	
	public var radius:Float;
	public var kinGroup:Array<Dynamic>;
	public var isDestroyed:Bool;

	public function new() {
		super();
		this.radius = 16;
	}
	
	public function setPosition(x:Float, y:Float):Void {
		this.x = x;
		this.y = y;
	}
	
	public function checkCollision(entity:Entity):Bool {
		return MathHelper.closerThan(x, y, entity.x, entity.y, radius + entity.radius);
	}
	
	public function destroy():Void {
		this.isDestroyed = true;
		Game.instance.removeEntity(this);
	}
	
	public function update():Void {
		render();
	}
	
	public function render():Void {
		
	}
	
}