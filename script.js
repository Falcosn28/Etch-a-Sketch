
const boxContainer = document.querySelector("#box-container")
const buttonCreate = document.querySelector("#button-create")

let board = 16

buttonCreate.addEventListener("click", () => {
  board = prompt("how big do you want it :) (max 100)", "16")
  if (board > 100) {return alert("too big")} 
  boxContainer.setAttribute("style", `width: ${board * 30}px;`);
  createBoard()
})


function createBoard () {
  boxContainer.innerHTML = ""
  for (let i = 0; i < board * board; i++) {
    const box = document.createElement("div")
    box.classList.add("box");
    boxContainer.appendChild(box)

    box.addEventListener("mouseenter",(event) => {
    event.target.classList.add("hover")
  }); 
}}

createBoard()