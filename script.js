
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
  for (let i = 0; i < board * board; i++) { //create boxes with opacity zero
    const box = document.createElement("div")
    box.classList.add("box");
    boxContainer.appendChild(box)
    let opacity = 0
    boxEnter(box, opacity)    
}}

function boxEnter(box, opacity) {
  box.addEventListener("mouseenter",() => {
    let random_Number0 = Math.floor(Math.random() * 255)
    let random_Number1 = Math.floor(Math.random() * 255)
    let random_Number2 = Math.floor(Math.random() * 255)
    opacity += 10
    box.setAttribute("style", `background: rgb(${random_Number0}, ${random_Number1}, ${random_Number2}, ${opacity}%);`);
  })}


createBoard()