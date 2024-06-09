// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");

// buttons.forEach(function (button) {
//     console.log("Tushar");
//     button.addEventListener("click", function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === "grey") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "blue") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "yellow") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "red") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "purple") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id == "green") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id == "pink") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "brown") {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    body.style.backgroundColor = e.target.id;
  });
});
