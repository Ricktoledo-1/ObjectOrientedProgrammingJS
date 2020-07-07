function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}

Circle.call({}, 1) //the {} means an empty object or 'this'
Circle.apply({}, [1,2,3]) //[pass this with an array]
const another = new Circle(1);