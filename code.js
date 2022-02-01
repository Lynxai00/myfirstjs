//alert("e")

var table = "Normal table"; //Global variable
let chair = "One chair"; //Specific variable
console.log(table);
console.log(chair);

let testBoolean = true;
console.log(testBoolean);

let testNumber = 10;
console.log(testNumber);

let testString = 'text';
console.log(testString);

let testBooleanObject = new Boolean(true);
console.log(testBooleanObject);

let testNumberObject = new Number(10);
console.log(testNumberObject);

let testStringObject = new String('text');
console.log(testStringObject);

//Concatenate variables
let nameOK = 'John';
let surname = 'Doe';
let question = 'How are you ' + nameOK + ' ' + surname + '?';
console.log(question);

//Create interpolated strings with backtick
let nameOK2 = 'John';
let surname2 = 'Doe';
let age = 23;
let question2 = `How old is ${nameOK2} ${surname2}?`;
let answer = 'He is ' + age + ' years old';
console.log(question2);
console.log(answer);

//Concatenate using method
let nameOK3 = 'John';
let surname3 = 'Doe';
let question3 = 'How are you ' .concat(nameOK3) + ' ' .concat(surname3) + '?';
console.log(question3);

//Arithmetic operations
let operator_a = 12;
let operator_b = 6;
let sum = operator_a + operator_b;
let rest = operator_a + operator_b;
let mult = operator_a * operator_b;
let div = operator_a / operator_b;
console.log(sum);
console.log(rest);
console.log(mult);
console.log(div);

let operator_c = 3;
let operator_d = 3;
let expo = operator_c ** operator_d;
let incr = operator_c++;
let decr = operator_c--;
console.log(expo);
console.log(incr);
console.log(decr);

//Assignment Operators
let x = 5;
let y = 6;
console.log(x+=5);
console.log(x-=5);
console.log(x*=3);
console.log(y/=2);

//typeof, null & undefined
console.log(typeof(testBoolean));
console.log(typeof(testNumber));
console.log(typeof(testString));
console.log(typeof(testBooleanObject));

let testNull = null;
console.log(typeof(testNull));

let testUndefined;
console.log(testUndefined);

//Array definition
var first_array = [];
var second_array = new Array(3);
var third_array = new Array(3,5);
var fourth_array = new Array(3,5,'Seville',true,third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);

//Array access
console.log(third_array[1]);
console.log(fourth_array[4][0]); //Matrix

//Array length
console.log(fourth_array.length);

//Array push
console.log(fourth_array.push("Spain"));

//Array unshift
console.log(fourth_array.unshift("e"));

//For / For Each
/*for(var i = 0; i < fourth_array.length; i++){
    console.log("Entramos  en la iteración de " + fourth_array[i]);
}*/

/*for(var i = fourth_array.length; i > 0; i--){
    console.log("Second iteration " + fourth_array[i]);
}*/

/*var i = fourth_array.length;
for(;i>=0;i--){
    console.log("Third iteration " + fourth_array[i]);
}*/

fourth_array.forEach(function(element){
    console.log("Fourth iteration " + element);
});

//Date object
let today = new Date();
let first_october = new Date(2019, 10, 1);
console.log(today);
console.log(first_october);
console.log(today.getDay());