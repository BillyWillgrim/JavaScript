// The *this* keyword

// a variable that each execution context gets.

// in a regular function call, it points at the global object
// (the window object, in the browser)

// in a method call, it points to the object that is calling the method

// the this is keyword is not assigned a value until a function 
//where it is defined is actually called

console.log(this);

calculateAge(1995);

function calculateAge(year) {
    console.log(2020 - year);

    console.log(this);
    // this is an example of the this keyword allways pointing
    // to the global object in a regular function call

    // because the object that this function is attached to 
    // is the global object
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2020 - this.yearOfBirth);
    }
}

john.calculateAge();

