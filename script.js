let btn=document.querySelectorAll(".box");
let turn=0;
const wins = [
    [0, 1, 2], [2, 4, 6], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
];

function write(event){
    let eve=event.target;
    if(turn<=8){
    if(turn%2===0)
        {
            //x's turn
            eve.style.color='#c1121f';
            eve.innerText='X';
        }
        else
            {
                //o's turn
                eve.style.color='black';
                eve.innerText='O';
            }
            turn++;
            checkWinner();
        }

}

let el=document.createElement("h3");
let result=document.querySelector("#reset");
function checkWinner() {
    for (let pattern of wins) {
        let pos1 = btn[pattern[0]].innerText;
        let pos2 = btn[pattern[1]].innerText;
        let pos3 = btn[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            console.log("Winner");
            el.innerText = `${pos1} wins!`;
            el.style.textAlign = "center";
            el.style.color = "white";
            result.before(el);
            return;
        }
    }
    if(turn===9){
    alert('Its a tie! Try Again.');
    }
}

btn.forEach(eve=>{
        eve.addEventListener("click", write);
});

let reset=document.querySelector("#reset");
reset.onclick=()=>{
    btn.forEach(eve =>{
        eve.innerText='';
    });
    
    el.innerText = '';
    turn=0;
    
};