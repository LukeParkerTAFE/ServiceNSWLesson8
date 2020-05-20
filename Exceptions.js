function addNumbers(num1, num2){
    if(isNaN(num1)){
        throw new Error("num1 must be a number");
    }
    if(isNaN(num2)){
        throw new Error("num2 must be a number");
    }
    return parseFloat(num1) + parseFloat(num2);
}



try {
    console.log(addNumbers(12.5, "a"));
} catch (err) {
    console.log(err.message);
}

console.log("This code is still running");
















// function addNumbers(num1, num2) {
//     if (isNaN(num1) || isNaN(num2)) {
//         throw new Error("ERROR: num1 and num2 should both be numbers.");
//     }
//     return parseInt(num1) + parseInt(num2);
// }

// try {
//     addNumbers("apple");
// } catch (e) {
//     console.log(e.message);
// }