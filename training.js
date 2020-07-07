let x = 10;
let y = x; //this will stay 10 once x is changed

x = 20; //this will only effect x

//so:

x = {value:10};
y = x;

x.value= 20; //objects are not stored in variable so they will both equal 20 now

//Example 2
let number = 10;
function increase(number) {
    number++; //this will only increase the number in the function
}

increase(number);
console.log(number); //this will only return the original 10 and not the 11 in the func

//SO

let obj = {value:10};

function increase(obj) {
    obj.value++
}

increase(obj);
console.log(obj);

//adding and removing properties

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}

const circle = new Circle(10);

circle.location = {x: 1};

const propertyName ='center-location'; //special characters like - or space wont work with dot notation.
circle[propertyName] = {x:1};

delete circle.location; //delete the old location.

//Using the for in loop

function Circle2(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}
const circle2 = new Circle2(10);

for (let key in circle2) {
    console.log(key, circle2[key]);
} //return values and keys of circle2

//to get only the properties and not the methods we can use typeof:
for (let key in circle2) {
    if(typeof circle[key] !== 'function')
        console.log(key, circle2[key]);
}

Object.keys(circle2); //this will return all keys in circle as array
//so store them like
const keys = Object.keys(circle);
    console.log(keys); //this will give us back just the keys;

if ('radius' in circle)
    console.log('Circle has a radius.'); //this will tell us if prop or method is in object

//Complexity implementing Abstraction (hiding the details)

function Circle3(radius) {

    this.radius = radius;
    let defaultLocation = {x: 0, y:0}; //locale variable in function only (will die outside)
    let computerOptimumLocation = function(factor) {
        //...
    }

    this.draw = function() {
        computerOptimumLocation(0.1); 
        
        console.log('drawing')
    }
}
const circle3 = new Circle3(10);
circle3.draw();

//POTENTIAL ISSUES

function Circle4(radius) {

    this.radius = radius;
    let defaultLocation = {x: 0, y:0}; //locale variable in function only (will die outside)
    this.getDefaultLocation = function() {
        return defaultLocation;
    }
    this.draw = function() {
        console.log('drawing')
    }
}
const circle4 = new Circle4(10);
circle4.draw();

