/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = [];

    for (let m of asteroids) {
       
        //hash element and top postive, coming negative
        while(stack.length>0 && stack[stack.length-1]>0 && m<0){
            
            
            if(Math.abs(stack[stack.length-1]) >  Math.abs(m)){
                m=0
            }else if(stack[stack.length-1]  <Math.abs(m)){
                stack.pop()
            }else{
                stack.pop()
                m=0
            }
            
        }
        
        if(m!=0) stack.push(m)
     
    }

    return stack;
};
