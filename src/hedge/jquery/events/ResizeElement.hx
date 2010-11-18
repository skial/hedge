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
		handleObj.handler = function(e:Dynamic, p:ChildProperties) {
			var __jq__:JQuery = new JQuery(e.target);
			var nw = p.w + p.x;
			var nh = p.h + p.y;
			var parent = p.p;
			// try to find out if I can move raphael canvas to show objects in negative space
			if (parent.width < nw) {
				parent.width = parent.width + (nw - parent.width);
			}
			if (parent.height < nh) {
				parent.height = parent.height + (nh - parent.height);
			}
		}
	}
	
	/*public function remove(handleObj:HandleObj) {
		
	}
	
	public function _default(event:Dynamic) {
		
	}*/
	
}