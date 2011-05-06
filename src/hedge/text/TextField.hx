package hedge.text;

import hedge.display.DisplayObject;
import hedge.display.InteractiveObject;
import hedge.geom.Rectangle;
import hedge.Setup;
import clippings.Twig;
import js.Lib;

using Std;
using clippings.Twig;

class TextField extends InteractiveObject {
	
	public var alwaysShowSelection:Bool;
	public var antiAliasType:String;
	public var autoSize:String;
	public var background(getBackground, setBackground):Bool;
	public var backgroundColor(getBackgroundColor, setBackgroundColor):Int;
	public var border(getBorder, setBorder):Bool;
	public var borderColor(getBorderColor, setBorderColor):Int;
	public var bottomScrollV:Int;	// read-only
	public var caretIndex:Int;
	public var condenseWhite:Bool;
	//public var contextMenu:NativeMenu;	// read-only	// air only
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
	public var text(getText, setText):String;
	public var textColor:Int;
	public var textHeight:Float;	// read-only
	public var textWidth:Float;	// read-only
	public var thickness:Float;
	public var type(getType, setType):String;
	public var useRichTextClipboard:Bool;
	public var wordWrap(getWordWrap, setWordWrap):Bool;
	
	// TODO keep text selection on focus change http://stackoverflow.com/questions/1592637/keep-text-selection-when-focus-changes
	
	public function new() {
		super();
		// TODO values below - once all working, move to one line as most will = false
		//this.__jq__.css( {overflow:'none', padding:'0px', resize:'none', outline:'none'} ).css('border-width', '1px');
		//this.__jq__.cssMap( {overflow:'none', padding:'0px', resize:'none', outline:'none'} ).css('border-width', '1px');
		//'overflow:hidden; display:block; visibility:visible; position:absolute; width:0px; height:0px; left:0px; top:0px;'
		this.background = false;
		this.border = false;
		this.wordWrap = false;
		this.type = TextFieldType.DYNAMIC;
		this.width = this.height = 100;
	}
	
	public function appendText(newText:String):Void {
		//this.__jq__.val(this.text + newText);
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
	
	//	INTERNAL METHODS
	
	private function getBackground():Bool {
		//return this.__jq__.attr('data-background');
		return this.__ele__.getAttribute('data-background') == 'true' ? true : false;
	}
	
	private function setBackground(value:Bool):Bool {
		/*this.__jq__.attr('data-background', value);
		this.__jq__.css('background', value == true ? '' + Setup.RGB_to_String(0xFFFFFF) : 'none');
		return this.__jq__.attr('data-background');*/
		__ele__.setAttribute('data-background', value.string());
		__ele__.style.background = value == false ? Setup.RGB_to_String(0xFFFFFF) : '';
		return value;
	}
	
	private function getBackgroundColor():Int {
		//return this.background == true ? Setup.RGB_String_to_HEX(this.__jq__.css('background-color')) : 0xFFFFFFFF;
		return this.background == true ? Setup.RGB_String_to_HEX(__ele__.style.backgroundColor) : 0xFFFFFFFF;
	}
	
	private function setBackgroundColor(value:Int):Int {
		/*if (this.background == true) {
			//this.__jq__.css('background-color', Setup.RGB_to_String(value));
			this.__ele__.style.backgroundColor = Setup.RGB_to_String(value);
		}*/
		this.background == true ? this.__ele__.style.backgroundColor = Setup.RGB_to_String(value) : 'none';
		return value;
	}
	
	private function getBorder():Bool {
		//return this.__jq__.attr('data-border');
		return this.__ele__.getAttribute('data-border') == 'true' ? true : false;
	}
	
	private function setBorder(value:Bool):Bool {
		/*this.__jq__.attr('data-border', value);
		this.__jq__.css('border', value == true ? '1px solid ' + Setup.RGB_to_String(0x000000) : '0px none');
		return this.__jq__.attr('data-border');*/
		this.__ele__.setAttribute('data-border', value.string());
		this.__ele__.style.border = value == true ? '1px solid black' : '0 none';
		this.width = this.width;
		this.height = this.height;
		return value;
	}
	
	private function getBorderColor():Int {
		//return this.border == true ? Setup.RGB_String_to_HEX(this.__jq__.css('border-color')) : 0xFF000000;
		return this.border == true ? Setup.RGB_String_to_HEX(__ele__.style.borderColor) : 0xFF000000;
	}
	
	private function setBorderColor(value:Int):Int {
		/*if (border == true) {
			//this.__jq__.css('border-color', Setup.RGB_to_String(value));
			this.__ele__.style.borderColor = Setup.RGB_to_String(value);
		}*/
		
		this.border == true ? this.__ele__.style.borderColor = Setup.RGB_to_String(value) : 'black';
		
		return value;
	}
	
	private function getHtmlText():String {
		//return this.__jq__.html();
		return this.__ele__.innerHTML;
	}
	
	private function setHtmlText(value:String):String {
		/*this.__jq__.html(value);
		return this.__jq__.html();*/
		this.__ele__.innerHTML = value;
		return value;
	}
	
	private function getText():String {
		//return this.__jq__.val();
		return this.__ele__.innerHTML;
	}
	
	private function setText(value:String):String {
		/*this.__jq__.val(value);
		return this.__jq__.val();*/
		this.__ele__.innerHTML = value;
		return value;
	}
	
	private function getType():String {
		//return this.__jq__.attr('data-type');
		return this.__ele__.getAttribute('data-type');
	}
	
	private function setType(value:String):String {
		/*if (value == TextFieldType.DYNAMIC) {
			//this.__jq__.attr( { readonly:'readonly' } );
			this.__jq__.attr('readonly', 'readonly');
		} else if (value == TextFieldType.INPUT) {
			this.__jq__.removeAttr('readonly');
		}
		this.__jq__.attr('data-type', value);
		return this.__jq__.attr('data-type');*/
		switch(value) {
			case TextFieldType.DYNAMIC:
				
			case TextFieldType.INPUT:
				this.__ele__.setAttribute('contentEditable', 'true');
			default:
			
		}
		this.__ele__.setAttribute('data-type', value);
		return value;
	}
	
	private function getWordWrap():Bool {
		//return this.__jq__.attr('data-wordWrap');
		return true;
	}
	
	private function setWordWrap(value:Bool):Bool {
		/*this.__jq__.css('white-space', value == true ? 'normal' : 'nowrap');
		this.__jq__.attr('data-wordWrap', value);
		return this.__jq__.attr('data-wordWrap');*/
		return value;
	}
	
	//	OVERRIDE METHODS
	
	// http://stackoverflow.com/questions/572298/css-how-to-stop-text-from-taking-up-more-than-1-line
	override private function __generateHedgeDisplayObjectCSS__():Void {
		this.__ele__.style.cssText = 'overflow:hidden; white-space:nowrap; display:block; visibility:visible; position:absolute; width:0px; height:0px; left:0px; top:0px; padding:0px; resize:none; outline:none;';
	}
	
	/*private override function generateJQuery():Void {
		//Setup.__storage__.append(this.__jq__ = new JQuery('<textarea>'));
		Setup.__storage__.append(this.__jq__ = new Twig('textarea', TwigType.CREATE_ELEMENT));
	}*/
	
	/*private override function setWidth(value:Float):Float {
		this.__jq__.width(value);
		this.__jq__.data('width', value);
		//this.__ta__.width(this.border == true ? (value  - (Std.parseInt(this.__ta__.css('border-width'))*2)) : value);
		return this.__jq__.data('width');
	}*/
	
	/*private override function setHeight(value:Float):Float {
		this.__jq__.height(value);
		this.__jq__.data('height', value);
		//this.__ta__.height(this.border == true ? (value  - (Std.parseInt(this.__ta__.css('border-width'))*2)) : value);
		return this.__jq__.data('height');
	}*/
	
}