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

typedef CompareResultObject = {
	var js:TestResult;
	var fl:TestResult;
}

class GoogleFormClient implements ITestResultClient {
	
	public static var TARGET:String = #if js 'js'; #elseif flash9 'fl'; #end
	public static inline var DEFAULT_ID:String = 'GoogleFormClient';
	
	public var completionHandler(get_completeHandler, set_completeHandler):ITestResultClient->Void;
	public var id(default, null):String;
	
	#if js
	private var browser:String;
	#end
	
	private var printer:TestResult->String->String->Void;

	public function new(output_printer:TestResult->String->String->Void) {
		this.id = DEFAULT_ID;
		this.printer = output_printer;
		this.init();
	}
	
	public function init():Void {
		
		#if js
		this.browser = new JQuery('#bs-ua').children('strong').text();
		#end
		
	}
	
	// ITestResultClient methods
	
	public function get_completeHandler():ITestResultClient->Void {
		return completionHandler;
	}
	
	public function set_completeHandler(value:ITestResultClient->Void):ITestResultClient->Void {
		return completionHandler = value;
	}
	
	public function addPass(result:TestResult):Void {
		printer(result, 'pass', TARGET);
	}
	
	public function addFail(result:TestResult):Void {
		printer(result, 'fail', TARGET);
	}
	
	public function addError(result:TestResult):Void {
		printer(result, 'error', TARGET);
	}
	
	public function addIgnore(result:TestResult):Void {
		printer(result, 'ignore', TARGET);
	}
	
	public function reportFinalStatistics(testCount:Int, passCount:Int, failCount:Int, errorCount:Int, ignore:Int, time:Float):Dynamic {
		if (completionHandler != null) completionHandler(this);
		return 'blah';
	}
	
}