/**
 * ...
 * @author Skial Bainn
 */

package hedge.text;

class TextSnapshot {
	
	public var charCount:Int;

	public function new() {
		
	}
	
	public function findText(beginIndex:Int, textToFind:String, caseSensitive:Bool):Int {
		return 1;
	}
	
	public function getSelected(beginIndex:Int, endIndex:Int):Bool {
		return true;
	}
	
	public function getSelectedText(includeLineEndings:Bool = false):String {
		return '';
	}
	
	public function getText(beginIndex:Int, endIndex:Int, includeLineEndings:Bool = false):String {
		return '';
	}
	
	public function getTextRunInfo(beginIndex:Int, endIndex:Int):Array<Dynamic> {
		return [1];
	}
	
	public function hitTestTextNearPos(x:Float, y:Float, maxDistance:Float = 0):Float {
		return 12.0;
	}
	
	public function setSelectColor(hexColor:Int = 0xffff00) {
		
	}
	
	public function setSelected(beginIndex:Int, endIndex:Int, select:Bool) {
		
	}
	
}