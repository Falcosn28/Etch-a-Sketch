
const boxContainer = document.querySelector("#box-container")

for (let i = 0; i < 16 * 16; i++) {
  const box = document.createElement("div")
  box.classList.add("box");
  boxContainer.appendChild(box)
}