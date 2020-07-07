//Factory Function:
function createCircle(radius) {
return {
    radius, //if the key and the value are the same we dont need both
    draw: function() {
        console.log('draw')
    }
};
}
//If we return an object in the function it is a factory function

const circle = createCircle(1);
circle.draw();

//Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}

const another = new Circle(1); //the new operator creates an empty object,
// sets this to point to it, and returns object from this function

//if we use this and new its a constructor function

//either of these is fine to use. Its preference man.