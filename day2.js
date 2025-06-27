const divideTwoNumbers = function (a, b) {
    let res;
  try {
    if (b === 0) {
      throw new Error("cant divide by zero ");
    } else {
       res = a / b;
      console.log(res);
    }
  } catch (err) {
    res = err;
    console.log(`${res}`)
  
  } finally {
    console.log("operation complete");
  }
};

divideTwoNumbers(4, 0);
divideTwoNumbers(4, 40);
