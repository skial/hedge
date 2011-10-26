package ;

import haxe.Firebug;
import haxe.Http;
import haxe.remoting.Connection;
import haxe.remoting.Context;
import haxe.remoting.ExternalConnection;
import haxe.Timer;
import massive.munit.TestResult;
import massive.munit.TestRunner;
import unitTest.munit.client.GoogleFormClient;

#if js
import jQuery.JQuery;
import js.Lib;
import hedge.Setup;
#elseif flash9
import flash.system.Capabilities;
#end

/**
 * ...
 * @author Skial Bainn
 */

typedef CompareResultObject = {
	var js:TestResult;
	var fl:TestResult;
}

class TestMain {
	
	public static var TARGET:String = #if js 'js'; #elseif flash9 'fl'; #end
	
	#if js
	public static var resultHash:Hash<CompareResultObject> = new Hash<CompareResultObject>();
	
	public static var browser:String;
	public static var flash:String;
	public static var os:String;
	#end
	
	public static var context:Context;
	public static var connection:Connection;
	
	public static function main():Void {
		
		Firebug.redirectTraces();
		
		context = new Context();
		
		#if js
		var cl = Type.resolveClass('hedge.display.Sprite');
		Console.log(cl);
		
		Setup.init(function() { }, 30, 0xFFFFFF, 0, 250, 'js_stage');
		
		browser = new JQuery('#bs-ua').children('strong').text();
		
		context.addObject('testMain_js', TestMain);
		connection = ExternalConnection.flashConnect('default', 'fl_stage', context);
		
		Lib.window.onload = function(e:Dynamic) { 
			Timer.delay(function() { new TestMain(); }, 200); // need to wait for the flash client to init - errr :(
		};
		#elseif flash9
		connection = ExternalConnection.jsConnect('default', null);
		
		new TestMain();
		sendFlashPlayerVersion();
		sendOperatingSystem();
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
		
		#elseif flash9
		
		#end
		//trace(TARGET + ' : unit test complete - result is (' + successful + ')');
	}
	
	#if flash9
	public static function sendTestResult(result:TestResult, type:String):Void {
		connection.testMain_js.printTestResult.call([result, type, 'fl']);
	}
	
	public static function sendOperatingSystem():Void {
		connection.testMain_js.saveOperatingSystem.call([Capabilities.os]);
	}
	
	public static function sendFlashPlayerVersion():Void {
		connection.testMain_js.saveFlashPlayerVersion.call([Capabilities.version.split(' ')[1]]);
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
	
	public static function saveFlashPlayerVersion(value:String):Void {
		flash = value;
	}
	
	public static function saveOperatingSystem(value:String):Void {
		os = value;
	}
	
	public static function printTestResult(result:TestResult, type:String, ?source:String = 'js'):Void {
		
		var compareObject:CompareResultObject = { js:null, fl:null };
		assignResult(compareObject, resultHash, result, source);
		
		var results:JQuery = source == 'js' ? new JQuery('#js').children('.results') : new JQuery('#fl').children('.results');
		var jq:JQuery = new JQuery('<div></div>');
		
		jq.text(result.className + '::' + result.name);
		jq.addClass(type).addClass(result.passed).attr('data-time', result.executionTime);
		
		results.append(jq);
		
	}
	
	public static function submitDataToGoogleForm(cls:IFormData, className:String):Void {
		var http:Http = new Http(cls.formUrl);
		var postData:String = '';
		var form_id:String = '';
		
		// temp objects
		var _tmp:Array<String> = [];
		var _test:CompareResultObject = { js:null, fl:null };
		var _result:TestResult = null;
		
		for (n in cls.formIDs.keys()) {
			form_id = cls.formIDs.get(n);
			
			if (n == 'Browser') {
				http.setParameter('entry.' + form_id + '.single', browser);
			} else if (n == 'FlashPlayer') {
				http.setParameter('entry.' + form_id + '.single', flash);
			} else if (n == 'OS') {
				http.setParameter('entry.' + form_id + '.single', os);
			} else {
				
				_tmp = n.split('_');
				_test = resultHash.get(className + '#test' + _tmp[1]);
				if (_tmp[0] == 'js') {
					
					_result = _test.js;
					
				} else if (_tmp[0] == 'fl') {
					
					_result = _test.fl;
					
				}
				http.setParameter('entry.' + form_id + '.single', _result.passed ? ''+1 : _result.ignore ? ''+0 : _result.failure.message);
				
			}
			
		}
		http.setHeader('Content-Type', 'application/x-www-form-urlencoded');
		http.setParameter('submit', 'Submit');
		http.request(true);
	}
	#end
	
}