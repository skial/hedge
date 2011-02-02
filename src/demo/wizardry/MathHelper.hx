/**
 * ...
 * @author Skial Bainn
 */

package demo.wizardry;

class MathHelper {
	
	public static var TWO_PI:Float = Math.PI * 2;
	public static var PI_OVER_TWO:Float = Math.PI / 2;
	public static var PI_OVER_FOUR:Float = Math.PI / 4;
	public static var PI_OVER_EIGHT:Float = Math.PI / 8;
	
	public static var CIRCLE:Float = Math.PI * 2;
	public static var HALF_CIRCLE:Float = Math.PI;
	public static var QUARTER_CIRCLE:Float = Math.PI / 2;
	public static var EIGHTH_CIRCLE:Float = Math.PI / 4;
	public static var SIXTEENTH_CIRCLE:Float = Math.PI / 8;
	
	public static var DEGREES_TO_RADIANS:Float = Math.PI / 180;
	public static var RADIANS_TO_DEGREES:Float = 180 / Math.PI;

	public function new() {
		
	}
	
	public static function random(from:Float = 0, to:Float = 1):Float {
		return (Math.random() * (to - from)) + from;
	}
	
	public static function randomInt(equalOrGreaterThan:Float = 0, lessThan:Float = 1):Int {
		return Math.floor(MathHelper.random(equalOrGreaterThan, lessThan));
	}
	
	public static function randomIntInclusive(from:Float = 0, to:Float = 1):Int {
		return Math.floor(MathHelper.randomInt(from, to + 1));
	}
	
	public static function randomBool(chance:Float = 0.5):Bool {
		return Math.random() < chance;
	}
	
	public static function randomPlusMinus(chance:Float = 0.5):Int {
		return (Math.random() < chance) ? -1 : 1;
	}
	
	public static function roundToDecimalPlaces(Float:Float, decimalPlaces:Int):Float {
		var shift:Int = Math.pow(10, decimalPlaces);
		return Math.round(Float * shift) / shift;
	}
	
	public static function floorToDecimalPlaces(Float:Float, decimalPlaces:Int):Float {
		var shift:Int = Math.pow(10, decimalPlaces);
		return Math.floor(Float * shift) / shift;
	}
	
	public static function ceilToDecimalPlaces(Float:Float, decimalPlaces:Int = 0):Float {
		var shift:Int = Math.pow(10, decimalPlaces);
		return Math.ceil(Float * shift) / shift;
	}
	
	public static function getSign(value:Float):Float {
		return (value >= 0) ? 1 : -1;
	}
	
	public static function shortestAngle(angle1:Float, angle2:Float):Float {
		var pi:Float = Math.PI;
		var pi2:Float = pi*2;
		
		angle1 = (Math.abs(angle1)>pi2) ? (angle1<0) ? angle1%pi2+ pi2 : angle1%pi2 : angle1;
     	angle2 = (Math.abs(angle2)>pi2) ? (angle2<0) ? angle2%pi2+ pi2 : angle2%pi2 : angle2;
     	
     	var diff:Float = angle1-angle2;
     	diff += (Math.abs(diff) <pi) ? 0 : (diff>0) ? -pi2 : pi2;
     	
     	return diff;
	}
	
	
	public static function getDistance(x1:Float, y1:Float, x2:Float, y2:Float):Float {
		var dx:Float = x1 - x2;
		var dy:Float = y1 - y2;
		return Math.sqrt((dx * dx) + (dy * dy));
	}
	
	public static function constrain(value:Float, min:Float = 0, max:Float = 1):Float {
		if (value > max) {
			return max;
		}
		else if (value < min) {
			return min;
		}
		
		return value;
	}
	
	public static function boxesCollide(left1:Float, right1:Float, top1:Float, bottom1:Float, left2:Float, right2:Float, top2:Float, bottom2:Float):Bool {
		if (bottom1 < top2) {
			return false;
		}
		else if (top1 > bottom2) {
			return false;
		}
		else if (right1 < left2) {
			return false;
		}
		else if (left1 > right2) {
			return false;
		}
		
		return true;
	}
	
	public static function convertToFraction(value:Float, lowerLimit:Float, upperLimit:Float):Float {
		var range:Float = upperLimit - lowerLimit;
		var valueOffset:Float = value - lowerLimit;
		return valueOffset / range;
	}
	
	public static function convertToRange(value:Float, lowerLimit:Float, upperLimit:Float):Float {
		var range:Float = upperLimit - lowerLimit;
		return lowerLimit + (value * range);
	}
	
	public static function convertRanges(value:Float, lowerLimit1:Float, upperLimit1:Float, lowerLimit2:Float, upperLimit2:Float):Float {
		var fraction:Float = convertToFraction(value, lowerLimit1, upperLimit1);
		return convertToRange(fraction, lowerLimit2, upperLimit2);
	}
	
	public static function isWithinRange(value:Float, lowerLimit:Float, upperLimit:Float):Bool {
		return value > lowerLimit && value < upperLimit;
	}
	
		
	public static function smallestAngle(angle:Float, targetAngle:Float):Float {
		angle = limitRadians(angle);
		targetAngle = limitRadians(targetAngle);
		
		// STANDARD
		
		var difference1:Float = targetAngle - angle;
		
		// "ROUND THE HORN" CLOCKWISE / POSITIVE 
		
		var difference2:Float = (targetAngle + (Math.PI * 2)) - angle;
					
		// "ROUND THE HORN" ANTI-CLOCKWISE / NEGATIVE 
		
		var difference3:Float = (targetAngle - (Math.PI * 2)) - angle;
		
		// GET SHORTEST		
		
		var absDifference1:Float = Math.abs(difference1);
		var absDifference2:Float = Math.abs(difference2);
		var absDifference3:Float = Math.abs(difference3);
		
		var difference:Float = difference1;
		
		if (absDifference2 < absDifference1 && absDifference2 < absDifference3) {
			difference = difference2;
		}
		else if (absDifference3 < absDifference1 && absDifference3 < absDifference2) {
			difference = difference3;
		}
		
		return difference;
	}
	
	public static function limitPlusMinus(value:Float, max:Float):Float {
		var output:Float = Math.min(Math.abs(value), max);
		output *= MathHelper.getSign(value);
		
		return output;
	}
	
	/* LIMIT RADIANS 
	limit angle to +/- PI */
	
	public static function isBetweenOrEqualTo(value:Float, lowerLimit:Float, upperLimit:Float):Bool	{
		return value >= lowerLimit && value <= upperLimit;
	}
	
	public static function isBetweenButNotEqualTo(value:Float, lowerLimit:Float, upperLimit:Float):Bool {
		return value > lowerLimit && value < upperLimit;
	}
	
	public static function limitRadians(angle:Float):Float {
		if (angle >= 0)
		{
			while (angle > Math.PI)
			{
				angle -= MathHelper.TWO_PI;
			}
		}
		else
		{
			while (angle < -Math.PI)
			{
				angle += MathHelper.TWO_PI;
			}
		}
		
		return angle;
	}
	
	public static function hyp(x1:Float, y1:Float, x2:Float, y2:Float):Float {
		var dx:Float = x1 - x2;
		var dy:Float = y1 - y2;
		
		return Math.sqrt((dx*dx)+(dy*dy));
	}
	
	public static function getAngle(x1:Float, y1:Float, x2:Float, y2:Float):Float {
		var dx:Float = x1 - x2;
		var dy:Float = y1 - y2;
		
		return Math.atan2(dx, dy);
	}
	
	public static function magnitude(dx:Float, dy:Float):Float {
		return Math.sqrt((dx*dx)+(dy*dy));
	}
	
	public static function closerThan(x1:Float, y1:Float, x2:Float, y2:Float, distance:Float):Bool {
		var dx:Float = x1 - x2;
		var dy:Float = y1 - y2;
		
		return (dx*dx)+(dy*dy) < distance * distance;
	}
	
}