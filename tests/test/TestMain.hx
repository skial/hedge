package ;

import haxe.Firebug;
import haxe.remoting.Connection;
import haxe.remoting.Context;
import haxe.remoting.ExternalConnection;
import haxe.Timer;
import massive.munit.TestResult;
import massive.munit.TestRunner;
import unitTest.munit.client.GoogleFormClient;

#if js
import hedge.display.Stage;
import jQuery.JQuery;
import js.Lib;
import hedge.Setup;
#end

/**
 * ...
 * @author Skial Bainn
 */

class TestMain {
	
	#if js
	private static var passedHash:Hash<CompareResultObject> = new Hash<CompareResultObject>();
	private static var failedHash:Hash<CompareResultObject> = new Hash<CompareResultObject>();
	private static var errorHash:Hash<CompareResultObject> = new Hash<CompareResultObject>();
	private static var ignoredHash:Hash<CompareResultObject> = new Hash<CompareResultObject>();
	
	public static var js_stage:Stage = null;
	#end
	
	public static var context:Context;
	public static var connection:Connection;
	
	public static function main():Void {
		
		Firebug.redirectTraces();
		
		context = new Context();
		
		#if js
		Setup.init(function() {}, 30, 0xFFFFFF, 0, 250, 'js_stage');
		
		context.addObject('testMain_js', TestMain);
		connection = ExternalConnection.flashConnect('default', 'fl_stage', context);
		
		Lib.window.onload = function(e:Dynamic) { 
			Timer.delay(function() { new TestMain(); }, 200); // need to wait for the flash client to init - errr :(
		};
		#elseif flash9
		connection = ExternalConnection.jsConnect('default', null);
		
		new TestMain();
		#end
		
	}

	public function new() {
		
		var client:GoogleFormClient = new GoogleFormClient(#if js TestMain.printTestResult #elseif flash9 TestMain.sendTestResult #end);
		var suites = new Array<Class<massive.munit.TestSuite>>();
		suites.push(TestSuite);
		
		var runner:TestRunner = new TestRunner(client);
		runner.completionHandler = completeHandler;
		runner.run(suites);
	}
	
	private function completeHandler(successful:Bool):Void {
		#if js
		Console.log('js : unit test complete - result is (' + successful + ')');
		Console.log(passedHash);
		Console.log(failedHash);
		Console.log(errorHash);
		Console.log(ignoredHash);
		#else
		trace('js : unit test complete - result is (' + successful + ')');
		#end
	}
	
	#if flash9
	public static function sendTestResult(result:TestResult, type:String, source:String):Void {
		connection.testMain_js.printTestResult.call([result, type, source]);
	}
	#end
	
	#if js
	public static function assignResult(object:CompareResultObject, hash:Hash<CompareResultObject>, result:TestResult, source:String):Void {
		if (hash.exists(result.location) == false) {
			source == 'fl' ? object.fl = result : object.js = result;
			hash.set(result.location, object);
		} else {
			object = hash.get(result.location);
			source == 'fl' ? object.fl = result : object.js = result;
		}
	}
	
	public static function printTestResult(result:TestResult, type:String, source:String):Void {
		
		var compareObject:CompareResultObject = { js:null, fl:null };
		assignResult(compareObject, 
		switch(type) {
			case 'pass':
				passedHash;
			case 'fail':
				failedHash;
			case 'error':
				errorHash;
			case 'ignore':
				ignoredHash;
		}, result, source);
		
		var results:JQuery = source == 'js' ? new JQuery('#js').children('.results') : new JQuery('#fl').children('.results');
		var jq:JQuery = new JQuery('<div></div>');
		
		jq.text('Class : ' + result.location);
		jq.addClass(type).addClass(result.passed).attr('data-time', result.executionTime);
		
		results.append(jq);
		
	}
	#end
	
}