/**
 * ...
 * @author Skial Bainn
 */

package hedge.text;
import hedge.Object;

class TextFormat extends Object {
	
	public var align(default, setAlign):String;
	public var blockIndent(default, setBlockIndent):Int;
	public var bold(default, setBold):Bool;
	public var bullet(default, default):Bool;
	public var color(default, setColor):Int;
	public var font(default, setFont):String;
	public var indent(default, setIndent):Float;
	public var italic(default, setItalic):Bool;
	public var kerning(default, default):Bool;
	public var leading(default, setLeading):Float;
	public var leftMargin(default, setLeftMargin):Float;
	public var letterSpacing(default, setLetterSpacing):Int;
	public var rightMargin(default, setRightMargin):Float;
	public var size(default, setSize):Float;
	public var tabStops(default, default):Array<Dynamic>;
	public var target(default, default):String;
	public var underline(default, setUnderLine):Bool;
	public var url(default, default):String;
	
	//	INTERNAL VARIABLES
	
	public var __used__:Bool;
	public var __textfields__:Array<TextField>;

	public function new(?font:String = 'Times New Roman', ?size:Float = 12, ?color:Int = 0x000000, ?bold:Bool = false, ?italic:Bool = false, ?underline:Bool = false, 
						?url:String = '', ?target:String = '', ?align:String = TextFormatAlign.LEFT, ?leftMargin:Float = 0, ?rightMargin:Float = 0, 
						?indent:Float = 0, ?leading:Float = 0):Void {
		super();
		this.font = font;
		this.size = size;
		this.color = color;
		this.bold = bold;
		this.italic = italic;
		this.underline = underline;
		this.url = url;
		this.target = target;
		this.align = align;
		this.leftMargin = leftMargin;
		this.rightMargin = rightMargin;
		this.indent = indent;
		this.leading = leading;
	}
	
	//	OVERRIDE METHODS
	
	override private function initialize():Void {
		super.initialize();
		this.initializeTextFormat();
	}
	
	//	INTERNAL METHODS
	
	private function initializeTextFormat():Void {
		this.__used__ = false;
		this.__textfields__ = null;
	}
	
	private inline function triggerTextFieldUpdate():Void {
		if (this.__used__) for (n in this.__textfields__) n.__ele__.trigger('');
	}
	
	/*private function getAlign():String {
		return '';
	}*/
	private function setAlign(value:String):String {
		this.align = value;
		this.triggerTextFieldUpdate();
		return value;
	}
	/*private function getBlockIndent():Int {
		return 0;
	}*/
	private function setBlockIndent(value:Int):Int {
		this.blockIndent = value;
		this.triggerTextFieldUpdate();
		return value;
	}
	/*private function getBold():Bool {
		return true;
	}*/
	private function setBold(value:Bool):Bool {
		this.bold = value;
		this.triggerTextFieldUpdate();
		return value;
	}
	/*private function getBullet():Bool { 
		return true;
	}*/
	/*private function setBullet(value:Bool):Bool { 
		return true;
	}*/
	/*private function getColor():Int { 
		return this.color;
	}*/
	private function setColor(value:Int):Int { 
		this.color = value;
		this.triggerTextFieldUpdate();
		return value;
	}
	/*private function getFont():String {
		return this.font;
	}*/
	private function setFont(value:String):String {
		this.font = value;
		this.triggerTextFieldUpdate();
		return value;
	}
	/*private function getIndent():Float { 
		return 0;
	}*/
	private function setIndent(value:Float):Float { 
		return 0;
	}
	/*private function getItalic():Bool { 
		return true;
	}*/
	private function setItalic(value:Bool):Bool { 
		return true;
	}
	/*private function getKerning():Bool { 
		return true;
	}*/
	/*private function setKerning(value:Bool):Bool { 
		return value;
	}*/
	/*private function getLeading():Float { 
		return 0;
	}*/
	private function setLeading(value:Float):Float { 
		this.leading = value;
		this.triggerTextFieldUpdate();
		return value;
	}
	/*private function getLeftMargin():Float { 
		return 0;
	}*/
	private function setLeftMargin(value:Float):Float { 
		this.leftMargin = value;
		this.triggerTextFieldUpdate();
		return value;
	}
	/*private function getLetterSpacing():Int { 
		return 0;
	}*/
	private function setLetterSpacing(value:Int):Int { 
		this.letterSpacing = value;
		this.triggerTextFieldUpdate();
		return value;
	}
	/*private function getRightMargin():Float { 
		return 0;
	}*/
	private function setRightMargin(value:Float):Float { 
		this.rightMargin = value;
		this.triggerTextFieldUpdate();
		return value;
	}
	/*private function getSize():Float { 
		return this.size;
	}*/
	private function setSize(value:Float):Float {
		this.size = value;
		this.triggerTextFieldUpdate();
		return value;
	}
	/*private function getTabStops():Array<Dynamic> { 
		return [''];
	}*/
	/*private function setTabStops(value:Array<Dynamic>):Array<Dynamic> { 
		return [''];
	}*/
	/*private function getTarget():String { 
		return '';
	}*/
	/*private function setTarget(value:String):String { 
		this.target = value;
		this.triggerTextFieldUpdate();
		return value;
	}*/
	/*private function getUnderLine():Bool { 
		return this.underline;
	}*/
	private function setUnderLine(value:Bool):Bool { 
		this.underline = value;
		this.triggerTextFieldUpdate();
		return value;
	}
	/*private function getUrl():String { 
		return '';
	}*/
	/*private function setUrl(value:String):String {
		this.url = value;
		this.triggerTextFieldUpdate();
		return value;
	}*/
	
}