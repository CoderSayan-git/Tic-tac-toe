let btns = document.querySelectorAll(".btn");
let val = 'X';

btns.forEach((b) => {
    b.addEventListener("click",(evt) =>{
        if(val === 'X'){
            b.innerText = 'X';
            val = 'O';  
        }
        else{
            b.innerText = 'O';
            val = 'X';
        }
        b.disabled = true;
        if(!checkWinner(b.innerText)){
            draw();
        }
        
    })
});

const winPatterns = [
    [0,1,2],   [3,4,5],    [6,7,8],
    [0,3,6],   [1,4,7],    [2,5,8],
    [0,4,8],   [2,4,6]
];
        //  CHECKING WINNER
function checkWinner (player) {
    for(let pattern of winPatterns){
        let a = btns[pattern[0]].innerText;
        let b = btns[pattern[1]].innerText;
        let c = btns[pattern[2]].innerText;

        if(a != "" && b != "" && c != ""){
            if(a === b && b === c){
                btns.forEach((b) => {
                    b.disabled = true;
                })
                showWinner(a);  
                return true;
            }
        }
    }
}
let msgContainer = document.querySelector(".newGame");
let msg = document.querySelector("#msg");
let outerDiv = document.querySelector(".outer-div");
        // WINNER MESSAGE DISPLAY
const showWinner = (player) =>  {
    msg.innerText = `Congratulations !!! Winner is ${player}`;
    msgContainer.classList.remove("hide");
    outerDiv.classList.add("margin");
}
        //  NEW GAME BUTTON
let newGameBtn = document.querySelector(".newGame");
newGameBtn.addEventListener(("click"), () =>{
    btns.forEach((b) => {
        b.innerText = "";
        b.disabled = false;
    })
    msgContainer.classList.add("hide");
    outerDiv.classList.remove("margin");
});
        //  DRAW MESSAGE DISPLAY
let drawBox = document.querySelector(".drawn");
let text = document.querySelector("#draw");
const draw = () => {
    let a = btns[0].innerText;
    let b = btns[1].innerText;
    let c = btns[2].innerText;
    let d = btns[3].innerText;
    let e = btns[4].innerText;
    let f = btns[5].innerText;
    let g = btns[6].innerText;
    let h = btns[7].innerText;
    let i = btns[8].innerText;

    if(a != "" && b != "" && c != "" &&
        d != "" && e != "" && f != "" && 
            g != "" && h != "" && i != ""){
    text.innerText = "MATCH DRAWN !! \nPress RESET Button to play again...";
    drawBox.classList.remove("hide");
        }
}
        //  RESET BUTTON
let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    btns.forEach((b) => {
        b.innerText = "";
        b.disabled = false;
    })
    drawBox.classList.add("hide");
});

