package unitTest.munit.client;

import haxe.remoting.Connection;
import haxe.remoting.Context;
import haxe.remoting.ExternalConnection;
import massive.munit.ITestResultClient;
import massive.munit.TestResult;

#if js
import jQuery.JQuery;
#end

/**
 * ...
 * @author Skial Bainn
 */

class GoogleFormClient implements ITestResultClient {
	
	public static inline var DEFAULT_ID:String = 'GoogleFormClient';
	
	public var completionHandler(get_completeHandler, set_completeHandler):ITestResultClient->Void;
	public var id(default, null):String;
	
	private var printer:Dynamic;

	public function new(output_printer:Dynamic) {
		this.id = DEFAULT_ID;
		this.printer = output_printer;
		this.init();
	}
	
	public function init():Void {
		
	}
	
	// ITestResultClient methods
	
	public function get_completeHandler():ITestResultClient->Void {
		return completionHandler;
	}
	
	public function set_completeHandler(value:ITestResultClient->Void):ITestResultClient->Void {
		return completionHandler = value;
	}
	
	public function addPass(result:TestResult):Void {
		printer(result, 'pass');
	}
	
	public function addFail(result:TestResult):Void {
		printer(result, 'fail');
	}
	
	public function addError(result:TestResult):Void {
		printer(result, 'error');
	}
	
	public function addIgnore(result:TestResult):Void {
		printer(result, 'ignore');
	}
	
	public function reportFinalStatistics(testCount:Int, passCount:Int, failCount:Int, errorCount:Int, ignore:Int, time:Float):Dynamic {
		if (completionHandler != null) completionHandler(this);
		return 'blah';
	}
	
}