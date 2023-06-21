const gridContainer = document.querySelector(`#gridContainer`);

// Sets the amount of divs (blocks)
function gridSize(num) {
  for (let i = 0; i < num; i++) {
    const div = document.createElement("div");
    gridContainer.appendChild(div);
    div.setAttribute("class", `grid`);
  }
}
gridSize(24 ** 2);
const div = document.querySelectorAll(`div.grid`);

// Sets the effects for each div (eg. styles & effects)
div.forEach((div) => {
  div.setAttribute(
    "style",
    `
    width: ${400 / 24 - 1}px; 
    height: ${400 / 24 - 1}px;
    `
    // ^ the negative 1px is the width of the combined top (0.5) & bottom (0.5) border per div
  );
  div.addEventListener(
    "mouseover",
    (event) => {
      event.target.style.backgroundColor = `green`;
      //   setTimeout(() => {
      //     event.target.style.backgroundColor = "";
      //   }, 500);
    },
    false
  );
});
