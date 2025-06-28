"use strict";

// const p = document.querySelector("p");
// const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   const request = fetch(`https://api.adviceslip.com/advice`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Bad internet connection ");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       const { advice } = data.slip;
//       console.log(advice);
//       p.textContent = advice;
//     })
//     .catch((err) => console.log(`${err.message}`))
//     .finally(() => console.log(`loading your advice`));
// });
////////

// const request = fetch("https://jsonplaceholder.typicode.com/posts/2")
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// const request = fetch(`	https://api.adviceslip.com/advice/1`)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     const { advice } = data.slip;
//     console.log(`quote of the day is ${advice}`);
//   });

// json placeholder fectcg \

const request = (` https://jsonplaceholder.typicode.com/posts`)
  .then((response) => {
    if (!response.ok) throw new Error("Something went wrong ");
    console.log(response);
    return response.json();
  })
  .then((data) => {
    const arr = data.filter((obj) => obj.userId === 1);
    console.log(arr);
    arr.map((obj) => {
      console.log(obj.title);
    });
  })
  .catch((error) =>
    console.log("could not fetch the url ❌" + " " + error.message)
  );

//Building promise
const randomNumber = Math.random() * 50 + 1;
console.log(`Making a random number `);
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (randomNumber > 25) {
      resolve("Congratulations! You won the game");
    } else {
      reject(new Error(`Oops! You lost the game`));
    }
  }, 3000);
});

//   handling promise
promise.then((res) => console.log(res)).catch((rej) => console.log(rej));
