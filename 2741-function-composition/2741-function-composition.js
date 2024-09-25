/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
 
      return functions.reduce((a,b) =>{
        return (x) => a(b(x));
      },(x) =>x)
}
    

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */