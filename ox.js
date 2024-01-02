let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let turnO = true;
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const reset = () => {
    enableBoxes()
    turnO = true;
    msgContainer.classList.add("hide")
}

const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerHTML= ""
    }
}
const showDraw = () =>{
    msg.innerText = `The match is a Draw`
    msgContainer.classList.remove("hide")
    disableBoxes()
}
const showWinner = (winner)=> {
    msg.innerText = `Congratulation, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      box.style.color = "blue";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
      box.style.color = "red"
      
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (const patterns of winPatterns) {
      let pos1Val = boxes[patterns[0]].innerHTML;
      let pos2Val = boxes[patterns[1]].innerHTML;
      let pos3Val = boxes[patterns[2]].innerHTML

      if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          console.log("winner" + pos1Val)
          showWinner(pos1Val)
        } 
      }
  }
};

const newGame = ()=> {
    msgContainer.classList.remove("hide")
    disableBoxes()
    enableBoxes()
    msg.innerHTML = ""
}
resetBtn.addEventListener("click", reset)
newGamebtn.addEventListener("click", reset)
