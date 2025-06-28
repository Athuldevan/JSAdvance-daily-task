const student1 = {
  name: "Athul",
  age: 19,
  adress: {
    district: "palakkad",
    state: "Kerala",
  },
};

const student2 = Object.assign({}, student1); //SHALLOW COPY

student2.name = "John";

student1.adress.district = "Kozhikkode";
console.log(student1);
console.log(student2);  // IN shallow copy only the top layer is element is copuied in nested elements the reference is copied 

//Deep copy

const student3 = JSON.parse(JSON.stringify(student1));
student1.adress.state = "Goa";
console.log(student3);
console.log(student1)
