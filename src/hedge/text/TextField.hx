package hedge.text;

import hedge.display.DisplayObject;
import hedge.display.InteractiveObject;
import hedge.geom.Rectangle;
import hedge.Setup;
import js.Lib;

import jQuery.JQuery;

using Std;

class TextField extends InteractiveObject {
	
	public var alwaysShowSelection:Bool;
	public var antiAliasType:String;
	public var autoSize(default, setAutoSize):String;
	public var background(default, setBackground):Bool;
	public var backgroundColor(getBackgroundColor, setBackgroundColor):Int;
	public var border(default, setBorder):Bool;
	public var borderColor(getBorderColor, setBorderColor):Int;
	public var bottomScrollV:Int;	// read-only
	public var caretIndex:Int;
	public var condenseWhite:Bool;
	//public var contextMenu:NativeMenu;	// read-only	// air only
	public var defaultTextFormat(getDefaultTextFormat, setDefaultTextFormat):TextFormat;
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
	public var text(getText, setText):String;
	public var textColor:Int;
	public var textHeight:Float;	// read-only
	public var textWidth:Float;	// read-only
	public var thickness:Float;
	public var type(default, setType):String;
	public var useRichTextClipboard:Bool;
	public var wordWrap(default, setWordWrap):Bool;
	
	private var __borderColor__:String;
	private var __backgroundColor__:String;
	private var __textFormat__:TextFormat;
	
	// TODO keep text selection on focus change http://stackoverflow.com/questions/1592637/keep-text-selection-when-focus-changes
	// http://stackoverflow.com/questions/572298/css-how-to-stop-text-from-taking-up-more-than-1-line
	
	public function new() {
		super();
	}
	
	public function appendText(newText:String):Void {
		this.__ele__.text(this.__ele__.text() + newText);
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
	
	//	OVERRIDE METHODS
	
	override private function initialize():Void {
		super.initialize();
		this.initializeTextField();
	}
	
	override private function __generateHedgeDisplayObjectElement__():Void {
		this.__node__ = Lib.document.createElement('p');
		
		Setup.__storage__.appendChild(this.__node__);
		
		this.__ele__ = new JQuery(this.__node__);
		this.__ele__.addClass('hDisplayObject');
	}
	
	//	INTERNAL METHODS
	
	private function initializeTextField():Void {
		this.__ele__.addClass('hTextField');
		this.width = this.height = 100;
		this.__textFormat__ = null;
	}
	
	/*private function getBackground():Bool {
		return true;
	}*/
	
	private function setBackground(value:Bool):Bool {
		this.__node__.style.backgroundColor = value ? 'white' : 'transparent';
		this.background = value;
		return value;
	}
	
	private function getBackgroundColor():Int {
		return this.background ? Setup.rgbStringToHex(this.__node__.style.backgroundColor) : 0xffffff;
	}
	
	private function setBackgroundColor(value:Int):Int {
		this.__backgroundColor__ = Setup.rgb(value);
		this.__node__.style.backgroundColor = this.background ? this.__backgroundColor__ : 'white';
		return value;
	}
	
	/*private function getBorder():Bool {
		return true;
	}*/
	
	private function setBorder(value:Bool):Bool {
		this.__node__.style.border =  value ? '1px solid ' + (this.__borderColor__ == null ? 'black' : this.__borderColor__) : '0 none';
		this.border = value;
		return value;
	}
	
	private function getBorderColor():Int {
		return this.border ? Setup.rgbStringToHex(this.__node__.style.borderColor) : 0x000000;
	}
	
	private function setBorderColor(value:Int):Int {
		this.__borderColor__ = Setup.rgb(value);
		this.__node__.style.borderColor = this.border ? this.__borderColor__ : 'black';
		return value;
	}
	
	private function getHtmlText():String {
		return this.__node__.innerHTML;
	}
	
	private function setHtmlText(value:String):String {
		this.__node__.innerHTML = value;
		return value;
	}
	
	private function getText():String {
		return this.__ele__.text();
	}
	
	private function setText(value:String):String {
		this.__ele__.text(value);
		return value;
	}
	
	/*private function getType():String {
		return '';
	}*/
	
	private function setType(value:String):String {
		switch(value) {
			case TextFieldType.DYNAMIC:
				this.__ele__.attr('contentEditable', false);
			case TextFieldType.INPUT:
				this.__ele__.attr('contentEditable', true);
			default:
			
		}
		this.type = value;
		return value;
	}
	
	/*private function getWordWrap():Bool {
		return true;
	}*/
	
	private function setWordWrap(value:Bool):Bool {
		this.__ele__.css('white-space', value ? 'normal' : 'nowrap');
		this.wordWrap = value;
		return value;
	}
	
	private function getDefaultTextFormat():TextFormat {
		return this.__textFormat__;
	}
	
	private function setDefaultTextFormat(value:TextFormat):TextFormat {
		this.defaultTextFormat = value;
		// missing bullet
		this.__ele__.css('text-align', value.align)
					.css('font-weight', (value.bold?'bold':'normal'))
					.css('padding-left', untyped (value.blockIndent || 0))
					.css('color', Setup.rgb(value.color))
					.css('font-family', value.font)
					.css('text-indent', untyped (value.indent || 0))
					.css('font-style', (value.italic?'italic':'normal'))
					.css('line-height', untyped (value.leading > 0?value.leading:'normal'))
					.css('margin-left', value.leftMargin)
					.css('letter-spacing', untyped (value.letterSpacing > 0?value.letterSpacing :'normal'))
					.css('margin-right', value.rightMargin)
					.css('font-size', value.size)
					.css('text-decoration', (value.underline?'underline':'none'));
		return value;
	}
	
	private function setAutoSize(value:String):String {
		this.autoSize = value;
		switch(value) {
			case TextFieldAutoSize.NONE:
				this.__ele__.width(this.width);
				this.__ele__.height(this.height);
			default:
				this.__ele__.css('width', '')
							.css('height', '');
		}
		return value;
	}
	
}