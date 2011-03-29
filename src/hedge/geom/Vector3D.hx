/* 
*   haXe code by Martin Lindelšf 2011 (martin.lindelof@gmail.com)
*
*   work-in-progress to have a Vector3D class for cpp and js targeting
*   actually it's deprecated, waiting for nme.geom.Vector3D and nme.geom.Matrix3D
*   
*   w/o nme lib, there's no targeting cpp. this might be a temporary solution
*   
*/

package hedge.geom;

class Vector3D {

    public var x : Float;
    public var y : Float;
    public var z : Float;
    public var w : Float;

    public function new(?x : Float, ?y : Float, ?z : Float, ?w : Float):Void
    {
        this.x = (x!=null) ? x : 0.0;
        this.y = (y!=null) ? y : 0.0;
        this.z = (z!=null) ? z : 0.0;
        this.w = (w!=null) ? w : 0.0;
    }
    
    public function set(?x : Float, ?y : Float, ?z : Float, ?w : Float):Void
    {
        this.x = (x!=null) ? x : this.x;
        this.y = (y!=null) ? y : this.y;
        this.z = (z!=null) ? z : this.z;
        this.w = (w!=null) ? w : this.w;
    }
    
    public function add(v : Vector3D):Vector3D
    {
        x = (v.x!=null) ? x+v.x : x;
        y = (v.y!=null) ? y+v.y : y;
        z = (v.z!=null) ? z+v.z : z;
        return this;
    }
    
    public function subtract(v : Vector3D):Vector3D
    {
        x = (v.x!=null) ? x-v.x : x;
        y = (v.y!=null) ? y-v.y : y;
        z = (v.z!=null) ? z-v.z : z;
        return this;
    }
    
    public function scaleBy(f : Float):Void
    {
        x *= f;
        y *= f;
        z *= f;
    }
    
    /*public function distance(v : Vector3D):Float
    {
        return distanceSquaredTo(v);
    }*/
    
    public function distanceSquaredTo(v : Vector3D):Float
    {
        return Math.pow(x-v.x,2) +
               Math.pow(y-v.y,2) +
               Math.pow(z-v.z,2);
    }
    
    public function dotProduct(v : Vector3D):Float
    {
        return x*v.x + y*v.y + z*v.z;
    }
    
    public function crossProduct(v : Vector3D):Vector3D
    {
        return new Vector3D(y*v.z - z*v.y,
                            x*v.z - z*v.x,
                            x*v.y - y*v.x);
    }
    
    public function length():Float
    {
        return Math.sqrt(lengthSquared());
    }
    
    public function lengthSquared():Float
    {
        return Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2);
    }
    
    public function clear()
    {
        x = 0;
        y = 0;
        z = 0;
        w = 0;
    }
    
    public function clone():Vector3D
    {
        return new Vector3D(x, y, z, w);
    }
    
    public function toString():String
    {
        return "("+x+", "+y+", "+z+")";
    }
	 
	 public static function distance(pt1:Vector3D, pt2:Vector3D):Float {
		 var x:Float = pt2.x - pt1.x;
		 var y:Float = pt2.y - pt1.y;
		 var z:Float = pt2.z - pt1.z;
		 return Math.sqrt(x*x+y*y+z*z);
	 }
}