/**
 * ...
 * @author Skial Bainn
 */

package demo.wizardry;

import hedge.display.Sprite;

class Game extends Sprite {
	
	public var entities:Array<Entity>;
	public var villiagers:Array<Villager>;
	public var enemies:Array<EvilWizard>;
	
	public var player:PlayerWizard;
	
	private static var numVillagers:Int = 15;
	private static var numEvilWizards:Int = 3;
	
	public static var instance:Game;
	
	public var level:Level;
	public var scene:Sprite;
	
	public var cameraX:Float;
	public var cameraY:Float;
	
	private static var screenCenterX:Float = 275;
	private static var screenCenterY:Float = 200;

	public function new() {
		super();
		
		instance = this;
		this.entities = [];
		this.villiagers = [];
		this.enemies = [];
		
		this.createScene();
		this.createLevel();
		this.createPlayer();
		this.createVilliagers();
		this.createEvilWizards();
	}
	
	private function createScene():Void {
		this.scene = new Sprite();
		this.addChild(scene);
	}
	
	private function createLevel():Void {
		this.level = new Level();
		
		var n:Int = level.numChildren;
		
		for (i in 0...n) {
			var entity:Entity = cast level.getChildAt(0);
			addEntity(entity);
		}
	}
	
	private function createVillagers():Void {
		for (i in 0...numVillagers) {
			createVillager();
		}
	}
	
	private function sortDepths():Void {
		// ?
	}
	
	private function createPlayer():Void {
		this.player = new PlayerWizard();
		this.player.setPosition(100, 100);
		this.addEntity(player);
		
	}
	
	private function createEvilWizards():Void {
		for (i in 0...numEvilWizards) {
			createEvilWizard();
		}
	}
	
	private function createEvilWizard():Void {
		var evilWizard:EvilWizard = new EvilWizard();
		evilWizard.setPosition(MathHelper.random(Config.leftBound, Config.rightBound), MathHelper.random(Config.leftBound, Config.rightBound));
		addEntity(evilWizard);
		
		enemies.push(evilWizard);
		evilWizard.kinGroup = enemies;
	}
	
	public function createVillager():Void {
		var villager:Villager = new Villager();
		villager.setPosition(MathHelper.random(Config.leftBound, Config.rightBound), MathHelper.random(Config.leftBound, Config.rightBound));
		
		addEntity(villager);
		
		villagers.push(villager);
		villager.kinGroup = villagers;
	}
	
	public function createExplosion(x:Float, y:Float):Void {
		var explosion:Explosion = new Explosion();
		explosion.x = x;
		explosion.y = y;
		addEntity(explosion);
	}
	
	public function addEntity(entity:Entity):Void {
		entities.push(entity);
		scene.addChild(entity);
	}
	
	public function removeEntity(entity:Entity):Void {
		ArrayHelper.removeFromArray(entity, entities);
		
		if (entity.kinGroup != null) ArrayHelper.removeFromArray(entity, entity.kinGroup);
		
		scene.removeChild(entity);
	}
	
	public function update():Void {
		for (i in entities) {
			i.update();
		}
		
		sortDepths();
		
		updateCamera();
	}
	
	private function updateCamera():Void {
		cameraX = MathHelper.constrain(player.x, Config.leftBound + screenCenterX, Config.rightBound - screenCenterX);
		cameraY = MathHelper.constrain(player.y, Config.topBound + screenCenterY - 40, Config.bottomBound - screenCenterY);
		
		scene.x = -cameraX + screenCenterX;
		scene.y = -cameraY + screenCenterY;
	}
	
}