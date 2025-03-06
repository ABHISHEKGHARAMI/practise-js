// there are different types of js values
// 1. primitive type integer , boolean, string , null ,undefined , symbol
// 2. object type array , objects , map , set
// for js we need not worry about the garbage collection it will take care of itself automatically.
// js objects are mutable means its property ,value cam be change but for the primitive data
// can not be change
// lets look at the infinity
let a  = Infinity;
console.log(a,typeof(a));
let b = Number.POSITIVE_INFINITY // same value

if(a === b){
    console.log('same value');
}
else{
    console.log('different value!');
}

// lets look at the negative infinity
let c = Number.NEGATIVE_INFINITY;
console.log(c);
// look nan number
let d = Number.NaN;
console.log(d,typeof(d));

// bigint
let m = BigInt(Number.MAX_SAFE_INTEGER);
console.log(m);

// now look at the date operator
let t1 = Date.now();
console.log(t1);
let now = new Date();
console.log(now);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear(),now.getHours(),now.getTimezoneOffset());





