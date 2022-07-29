let hour = pickRandom(24);
console.log(hour + ':00');

if (hour < 13) {
    console.log('good morning');
}

if (hour > 12) {

    console.log('good afternoon');
}