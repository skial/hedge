/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;

class Shape extends DisplayObject {
	
	public var graphics(getGraphics, null):Graphics;							// read only
	
	/* INTERNAL VARIABLES */
	
	private var _g:Graphics;

	public function new() {
		super();
		
		_g = new Graphics(this);
	}
	
	/* INTERNAL FUNCTIONS */
	
	private function getGraphics():Graphics {
		/*if (new JQuery('div#' + this.name).has('div#' + this.name + '-graphics').length == 0) {
			new JQuery('<div></div>').attr('id', (this.name + '-graphics')).css( { width:'100%', height:'100%' } ).appendTo('div#' + this.name);
		}*/
		return _g;
	}
	
}