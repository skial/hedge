/**
 * ...
 * @author Skial Bainn
 */

package hedge.text;
import hedge.display.DisplayObject;
import hedge.display.InteractiveObject;
import hedge.geom.Rectangle;

class TextField extends InteractiveObject {
	
	public var alwaysShowSelection:Bool;
	public var antiAliasType:String;
	public var autoSize:String;
	public var background:Bool;
	public var backgroundColor:Int;
	public var border:Bool;
	public var borderColor:Int;
	public var bottomScrollV:Int;	// read-only
	public var caretIndex:Int;
	public var condenseWhite:Bool;
	//public var contextMenu:NativeMenu;	// read-only
	public var defaultTextFormat:TextFormat;
	public var displayAsPassword:Bool;
	public var embedFonts:Bool;
	public var gridFitType:String;
	public var htmlText:String;
	public var length:Int;	// read-only
	public var maxChars:Int;
	public var maxScrollH:Int;	// read-only
	public var maxScrollV:Int;	// read-only
	public var mouseWheelEnabled:Bool;
	public var multiline:Bool;
	public var numLines:Int;	// read-only
	public var restrict:String;
	public var scrollH:Int;
	public var scrollV:Int;
	public var selectable:Bool;
	public var selectionBeginIndex:Int;	// read-only
	public var selectionEndIndex:Int;	//	read-only
	public var sharpness:Float;
	public var styleSheet:StyleSheet;
	public var text:String;
	public var textColor:Int;
	public var textHeight:Float;	// read-only
	public var textWidth:Float;	// read-only
	public var thickness:Float;
	public var type:String;
	public var useRichTextClipboard:Bool;
	public var wordWrap:Bool;

	public function new() {
		
	}
	
	public function appendText(newText:String):Void {
		
	}
	
	public function getCharBoundaries(charIndex:Int):Rectangle {
		return new Rectangle();
	}
	
	public function getCharIndexAtPoint(x:Float, y:Float):Int {
		return 0;
	}
	
	public function getFirstCharInParagraph(charIndex:Int):Int {
		return 0;
	}
	
	public function getImageReference(id:String):DisplayObject {
		return new DisplayObject();
	}
	
	public function getLineIndexAtPoint(x:Float, y:Float):Int {
		return 0;
	}
	
	public function getLineIndexOfChar(charIndex:Int):Int {
		return 0;
	}
	
	public function getLineLength(lineIndex:Int):Int {
		return 0;
	}
	
	public function getLineMetrics(lineIndex:Int):TextLineMetrics {
		return new TextLineMetrics();
	}
	
	public function getLineOffset(lineIndex:Int):Int {
		return 0;
	}
	
	public function getLineText(lineIndex:Int):String {
		return '';
	}
	
	public function getParagraphLength(charIndex:Int):Int {
		return 0;
	}
	
	public function getTextFormat(?beginIndex:Int = -1, ?endIndex:Int = -1):TextFormat {
		return new TextFormat();
	}
	
	public function replaceSelectedText(value:String):Void {
		
	}
	
	public function replaceText(beginIndex:Int, endIndex:Int, newText:String):Void {
		
	}
	
	public function setSelection(beginIndex:Int, endIndex:Int):Void {
		
	}
	
	public function setTextFormat(format:TextFormat, beginIndex:Int = -1, endIndex:Int = -1):Void {
		
	}
	
}