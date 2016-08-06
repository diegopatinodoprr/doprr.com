/**
 * Created by beeuser on 02/08/2016.
 */
function Point(x,y,z){
    var _vector=new THREE.Vector3(x, y, z);
    function update()
    {
        _vector.set(Math.random()*100*-1,0,0)


    }
    return {update:update,vector:_vector}



}