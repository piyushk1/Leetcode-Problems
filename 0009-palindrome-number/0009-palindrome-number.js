/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if(x<0)
    return false;

    let ans =0;
    let num =x;
    
    
    while(num!=0)
    {
        let last_digit = num%10;
        ans = ans*10 + last_digit;
        num = Math.floor(num/10);
    }

    return x === ans;
    
};