/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.Setup;

class Shape extends DisplayObject {
	
	public var graphics(getGraphics, null):Graphics;							// read only
	
	/* INTERNAL VARIABLES */
	
	private var _g:Graphics;

	public function new() {
		super();
		
		__jq__.bind(Setup.RESIZE_ELEMENT, { }, {});
		_g = new Graphics(this);
	}
	
	/* INTERNAL FUNCTIONS */
	
	private function getGraphics():Graphics {
		return _g;
	}
	
}