// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const currColor = document.querySelector("#current-color");
const colorsOptions = document.querySelectorAll(".color");
const blankCell = document.querySelectorAll(".cell");

colorsOptions.forEach((color) => {
  color.addEventListener("click", () => {
    currColor.style.backgroundColor = color.style.backgroundColor;
  });
});

blankCell.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = currColor.style.backgroundColor;
  });
});

// for (const color of colorsOptions) {

//   color.addEventListener("click", () => {
//     //set the current color element background color to the clicked elements background color
//     currColor.style.backgroundColor =  color.style.backgroundColor;
//   })
//   console.log(color)
// }
