const gridContainer = document.querySelector(`#gridContainer`);
const gridSize = document.querySelector(`#gridSize`);

// User defines the grid size
function gridSlider() {
  let gridSizeInput = 16; // Default grid size upon load
  gridSize.addEventListener(`input`, (e) => {
    gridSizeInput = e.target.value;
  });
  return gridSizeInput;
}
console.log(gridSlider());
// Takes user defined grid size and generates the divs
function gridSizeCalc(num) {
  let squared = num ** 2;
  for (let i = 0; i < squared; i++) {
    const div = document.createElement("div");
    gridContainer.appendChild(div);
    div.setAttribute("class", `grid`);
  }
}

// Both of the above in action
gridSizeCalc(gridSlider());
const grid = document.querySelectorAll(`div.grid`);

// Sets the effects for each div (eg. styles & effects)
grid.forEach((div) => {
  div.setAttribute(
    "style",
    `
    width: ${400 / gridSlider() - 1}px; 
    height: ${400 / gridSlider() - 1}px;
    `
    // ^ the negative 1px is the width of the combined top (0.5) & bottom (0.5) border per div
  );
  div.addEventListener(
    "mouseover",
    (event) => {
      event.target.style.backgroundColor = `maroon`;

      // Trail effect when mouse over
      setTimeout(() => {
        event.target.style.backgroundColor = "";
      }, 400);
    },
    false
  );
});
