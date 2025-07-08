
const boxContainer = document.querySelector("#box-container")
const buttonCreate = document.querySelector("#button-create")

const buttonBlack = document.querySelector("#button-black")
const buttonRainbow = document.querySelector("#button-rainbow")
const buttonOpacity = document.querySelector("#button-opacity")

let board = 16
let color = "black"

buttonBlack.addEventListener("click", () => {
  color = "black"
})

buttonRainbow.addEventListener("click", () => {
  color = "rainbow"
})

buttonOpacity.addEventListener("click", () => {
  color = "opacity"
})


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
      boxEnter(event.target) 
    })
}}

function boxEnter(target) {
  switch(color) {
    case "black":  
      target.setAttribute("style", `background-color:black`);
      break;
    case "rainbow":
      let random_Number0 = Math.floor(Math.random() * 255)
      let random_Number1 = Math.floor(Math.random() * 255)
      let random_Number2 = Math.floor(Math.random() * 255)
      target.setAttribute("style", `background-color:rgb(${random_Number0}, ${random_Number1}, ${random_Number2})`);
      break
} 
}

createBoard()