// now look at the string in the javascript
let s1 = "welcome to the javascript core for subject of string for further knowledge of javascript visit google";

// lets look at the length
console.log(`the length of the string is : ${s1.length}`);

// now look at the manipulation of the string
let s2 = s1.substring(1,30);
console.log(`the substring of the string is : ${s2}`);

let s3 = s1.slice(1,30);
console.log(`after that split of the string is : ${s3}`);
// backend of the string
let s4 = s1.split(-10);
console.log(s4);

let s5 = s1.split(" ");
console.log(s5);
console.log(typeof(s5));

let arr1 = []
for(let i=0 ;i < s1.length ; i++){
    arr1.push(s1[i]);
}

console.log(arr1);


// lets do different search operation in the string

// to find the index of any char in the string
let first_index = s1.indexOf('javascript');
console.log(`the first index of the string is : ${first_index}`);

// last index of any string
let last_index = s1.lastIndexOf('javascript');
console.log(`the last index of the string is : ${last_index}`);

if(s1.startsWith('wel')==true){
    console.log('starting with wel');
}else{
    console.log('not starting with wel!');
}

// now look at the ending


if(s1.endsWith('google')){
    console.log('ending with google');
}else{
    console.log('not ending with google');
}

// checking that includes with the specific char
if(s1.includes('javascript')){
    console.log('contains javascript');
}else{
    console.log('not contains javascript');
}





