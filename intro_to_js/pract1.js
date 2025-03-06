// starting the js core fundamental for the later framework
console.log('hello world!!');;


// some of the js example of code
let arr1 = [1,2,3,4,5];
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
    
}

console.log(arr1[0]+arr1[arr1.length-1]);
// some more example
function fact(x){
    if(x === 0 || x == 1){
        return 1;
    }
    return x*fact(x-1);
}

console.log(fact(5));

// lets now look at an object
let obj1 = {
    obj_name : 'javascript',
    published : 2010,
    develop : true
}
console.log(obj1);
console.log(typeof(obj1));


// now have a look of the 2D array
let twoD = [
    {
        x : 0,
        y : 1
    },
    {
        x : 2,
        y : 3
    }
]

// now going to loop over the object for the different operation
twoD.forEach(element => {
    console.log(`the x element is : ${element.x}`);
    console.log(`the y element is : ${element.y}`);
});


// now flip this in to the object with  2D array
let obj2 = {
    trail1 : [[1,2],[3,4]],
    trail2 : [[5,6],[7,8]],
    trail3 : [[9,10],[11,12]]
}

//  lets print the object
console.log(obj2);

// now what we do specific operation for the element in the object
console.log(obj2.trail1[0][0]);

// sum of the first trail

function sum_of_object(obj){
    let sum = 0;
    for(let i = 0;i<obj.trail1.length;i++){
        for(let j=0;j<obj.trail1[i].length;j++){
            sum+=obj.trail1[i][j];
        }
    }
    return sum;
}

console.log(sum_of_object(obj2));

// sum of the whole object
function sum_of_whole_object(obj){
    let sum = 0;
    for(item in obj){
        for(let i=0 ; i< obj[item].length ; i++){
            for(let j = 0 ; j < obj[item][i].length ; j ++){
                sum += obj[item][i][j];
            }
        }
    }
    return sum;
}


// sum for the whole object
console.log(`the sum of the whole object is : ${sum_of_whole_object(obj2)}`);


// lets have a look for the arrow function
let square = x => x*x;

console.log(square(40));


// different method for the array
let arr2 = [];


// push for the array
arr2.push(1,2,3);

console.log(`array is : ${arr2}`);
console.log(`reverse is : ${arr2.reverse()}`);

// lets have a look for the class 
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    // method for the point
    distance(){
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }
}

// lets have the look for the new object
let p1 = new Point(2,3);
console.log(`the distance between the object is : ${p1.distance()}`);

let p2 = new Point(3,4);
console.log(`the distance between the object is : ${p2.distance()}`);

