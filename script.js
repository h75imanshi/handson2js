// answer1//
const square = function (number) {
    return number * number;
  };
  
  console.log(square(4))

// answer2//
function add()
{
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne + numTwo;
  document.getElementById("answer").value = sum;
}

// answer3//
let greet = () => console.log('Hello');
greet();

//answer4//
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();


// answer5//
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};


// answer6//
var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};


// answer7//
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(factorial(4));

  //answer8//
  function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));

//answer 9//
Abc();
const Abc = function(){
    let value = 20;
    console.log(value);
    }

// answer 10//
var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();


// answer11//
const greet1 =  function(name)
{
  return function(m)
  {
  
      console.log(`Hi!! ${name}, ${m}`);
  }
}

const greet_message = greet1('EA19');
greet_message("Welcome To PrepBytes");