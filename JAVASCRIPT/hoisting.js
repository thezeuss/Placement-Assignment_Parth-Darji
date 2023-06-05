// Hoisting

getJob();

console.log(x);
console.log(getJob);

var x = 5;

function getJob(){
    console.log("Backend Developer!");
}
