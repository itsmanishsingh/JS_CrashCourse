
/*
*/

// Falsy 
- false
- 0
- (-0)
- BigInt On
- ""
- null
- undefined
- NaN



/*
*/

// TRUTHY VALUES
- "0"   -->Inside the string
- 'false'
- " "
- []
- {}
- function(){};


/*
*/

// IMPORTANT 

false == 0
o/p - true

false == ''
o/p - true

0 == ''
o/p - true


/*

// Nullish Coalescing Operator (??) :null undefined
- If the result or the outcome is dependent on the third party app then we use Nullish Coalescing Operator
- If the output return is null or undefined then we ourselves keep a flag to note the outcome


*/
let val1;

// val1 = 5 ?? 10
val1 = null ?? 10;
console.log(val1);