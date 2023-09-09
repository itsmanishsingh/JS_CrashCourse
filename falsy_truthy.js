
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



// Nullish Coalescing Operator (??) :null undefined

let val1;

// val1 = 5 ?? 10
val1 = null ?? 10;
console.log(val1);