// hours is declared and giving the value 24 
// which is to be used for random picking
const hours = 24;     

// here time is being initialized to have the function of math.random 
// and also with the value of hours
let time = Math.ceil(Math.random()*hours);
// math.ceil is used in a situation where you need 4.6 = 5 

// this consoles the random number with :00
console.log(time + ':00');

// conditional statement for math.random
// notice if time is less than 12 then it should console good morning
if (time < 12) {
    console.log('good morning');
}

// conditional statement for math.random
// notice if time is greater than 13 then it should console good afternoon
if (time > 13) {

    console.log('good afternoon');
}
