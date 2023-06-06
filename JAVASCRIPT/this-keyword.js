
console.log(this) //points to window

// this inside a function
const calcAge = function (birthYear) {
    console.log(2040 - birthYear);
    console.log(this);
}
calcAge(1991);

//  this inside arrow function
const calcAgeArrow = (birthYear) => {
    console.log(2040 - birthYear);
    console.log(this);
}
calcAgeArrow(1991);

// this inside object
const Parth = {
    name: 'Parth Darji',
    year:2002,
    age: function(){
        console.log(2023-this.year);
        console.log(this);
    }
};
Parth.age();

const Madhav = {
    name: 'Madhav Chaudhary',
    year: 2003,
};

Madhav.age = Parth.age;
Madhav.age();