"use strict";

//  Create 3 nested functions: first(), second(), and third().

// Each function should log its own name when called.

// Call them in a nested fashion: first() calls second(), which calls third().

// Use comments to explain the creation and execution phases of the context for each function.
//***************************************************************************************************************************************************************************** */
// first function
const first = function () {
  console.log(" i am first function ");  //Printing i am first function  
  second();  //CALLING THE SECOND FUNCTION 
  function second() {
    console.log(" i am second  function");  //Printing i am second fucntion 
    third();  //Calling the third function 
  }

  function third() {
    console.log("i am  third function ");//Printing i am third fucntion 
  }
};

first();  //Calling the first function 
