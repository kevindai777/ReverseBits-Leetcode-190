//Objective is to reverse the bits of a 32-bit binary number

let n = 4294967293


//O(1) solution since the number of bits is fixed at 32
//We use bit manipulation to create the revered binary number

//Start the result from the left and the traversal from the right
let result = 0
    
for (let i = 0; i < 32; i++) {
    
    //Multiply the result by 2...
    //Add in the bit...
    //Shift the number to the left
    result <<= 1
    result |= (n & 1)
    n >>= 1
}

//'>>>' represents an unsigned right shift
//Unsigned bits can hold large positive numbers but no negative numbers
return result >>> 0