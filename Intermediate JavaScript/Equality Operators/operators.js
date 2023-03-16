/* 

==  equal to
=== is equal to 
!== is not equal to
>   greater than
<   less than
>=  greater than equal to 
<=  less than equal to

*/

// NOTE :- there is a difference between === and ==.
// === compares along with their data types 
// ==  does not compare data type

var a = '1'
var b = 1 

if (a === b) {              // by changing  === to == you can validate it
    console.log("YES");
} else{
    console.log("NO");
}