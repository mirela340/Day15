const milili = [10, 25, 4]; // DO NOT change this line

function myArr(mili) {
    'use strict';

    // only change code below this line
    // Using mili = [4, 10, 25] would be invalid
    milili[0] = 4;
    milili[1] = 10;
    milili[2] = 25
    // Only change code above this line
    return mili;
}
console.log(myArr(milili)); // Change this line
module.exports = myArr;