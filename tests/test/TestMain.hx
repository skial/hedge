package ;
import massive.munit.TestRunner;
import massive.munit.TestSuite;
import unitTest.munit.client.GoogleFormClient;

/**
 * ...
 * @author Skial Bainn
 */

class TestMain {
	
	public static function main():Void {
		new TestMain();
	}

	public function new() {
		var suites = new Array<Class<TestSuite>>();
		suites.push();
		
		var runner:TestRunner = new TestRunner(new GoogleFormClient());
		runner.completionHandler = completeHandler;
		runner.run(suites);
	}
	
	private function completeHandler(successful:Bool):Void {
		
	}
	
}