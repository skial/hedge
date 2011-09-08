/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;

import hedge.Setup;
import hedge.events.internal.HedgeResizeDisplayEvent;

class Shape extends DisplayObject {
	
	private var __graphic__:Graphics;
	
	public var graphics(dynamic, null):Graphics;							// read only
	
	/* INTERNAL VARIABLES */
	
	public function new() {
		super();
	}
	
	/* OVERRIDE METHODS */
	
	override private function initialize():Void {
		super.initialize();
		this.initializeShape();
	}
	
	/* INTERNAL METHODS */
	
	private function initializeShape():Void {
		this.__graphic__ = new Graphics(this);
	}
	
	private inline function get_graphics():Graphics {
		return this.__graphic__;
	}
	
}