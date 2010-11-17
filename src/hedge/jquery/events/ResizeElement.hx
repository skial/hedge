/**
 * ...
 * @author Skial Bainn
 */

package hedge.jquery.events;

import hedge.Setup;

class ResizeElement {
	
	public function new() {
		
	}
	
	/*public function setup(data:Dynamic, namespaces:Array<String>, eventHandle:Dynamic) {
		
	}
	
	public function teardown(namespaces:Array<String>) {
		
	}*/
	
	@jquery
	public function add(handleObj:HandleObj) {
		trace('add internal');
		handleObj.handler = function(e:Dynamic, p:ChildProperties) {
			trace(p);
			new JQuery(e.target).css( { width:p.w + p.x, height:p.h + p.y } );
		}
	}
	
	/*public function remove(handleObj:HandleObj) {
		
	}
	
	public function _default(event:Dynamic) {
		
	}*/
	
}