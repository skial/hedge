/**
 * ...
 * @author Skial Bainn
 */

package hedge.utils;

class ByteArray {
	
	public var bytesAvailable:Int;
	public var defaultObjectEncoding:Int;
	public var endian:String;
	public var length:Int;
	public var objectEncoding:Int;
	public var position:Int;

	public function new() {
		
	}
	
	public function compress(algorithm:String) {
		
	}
	
	public function readBoolean():Bool {
		return true;
	}
	
	public function readByte():Int {
		return 1;
	}
	
	public function readBytes(bytes:ByteArray, offset:Int = 0, length:Int = 0) {
		
	}
	
	public function readDouble():Float {
		return 12.0;
	}
	
	public function readFloat():Float {
		return 12.0;
	}
	
	public function readInt():Int {
		return 1;
	}
	
	public function readMultiByte(length:Int, charSet:String):String {
		return '';
	}
	
	public function readObject():Dynamic {
		return '';
	}
	
	public function readShort():Int {
		return 1;
	}
	
	public function readUnsignedByte():Int {
		return 1;
	}
	
	public function readUnsignedInt():Int {
		return 1;
	}
	
	public function readUnsignedShort():Int {
		return 1;
	}
	
	public function readUTF():String {
		return '';
	}
	
	public function readUTFBytes(length:Int):String {
		return '';
	}
	
	public function uncompress(algorith:String) {
		
	}
	
	public function writeBoolean(value:Bool) {
		
	}
	
	public function writeByte(value:Int) {
		
	}
	
	public function writeBytes(bytes:ByteArray, offset:Int = 0, length:Int = 0) {
		
	}
	
	public function writeDouble(value:Float) {
		
	}
	
	public function writeFloat(value:Float) {
		
	}
	
	public function writeInt(value:Int) {
		
	}
	
	public function writeMultiByte(value:String, charSet:String) {
		
	}
	
	public function writeObject(object:Dynamic) {
		
	}
	
	public function writeShort(value:Int) {
		
	}
	
	public function writeUnsignedInt(value:Int) {
		
	}
	
	public function writeUTF(value:String) {
		
	}
	
	public function writeUTFBytes(value:String) {
		
	}
	
}