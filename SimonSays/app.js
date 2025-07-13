let gameSeq =[];
let userSeq = [];

let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");
let btns  =["red", "yellow", "green", "blue"];

let started = false;
let level = 0;
let highscore = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game started");
        started = true;
    }

    levelUp();
});

function btnFlash(btn){
   btn.classList.add("flash");

   setTimeout(() => {
     btn.classList.remove("flash");
   }, 250);
}

function userFlash(btn){
   btn.classList.add("userFlash");

   setTimeout(() => {
     btn.classList.remove("userFlash");
   }, 250);
}

function check(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp, 1000); 
        }
    }else{
        h3.innerHTML = `Game Over! Your score is <b>${level}</b>. <br> Press any key to restart the game!`;
         if(level > highscore){
          highscore = level;
        }
        h2.innerText = `Highscore : ${highscore}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset();
    }
}


function levelUp(){
    userSeq = [];
    level++;
     h3.innerText = `Level ${level}`;

     let randomIdx = Math.floor(Math.random()*4);
     let ranColor = btns[randomIdx];
     let ranbtn = document.querySelector(`#${ranColor}`); 
     
     console.log(randomIdx);
     console.log(ranColor);
     console.log(ranbtn);

     gameSeq.push(ranColor);
     btnFlash(ranbtn);
}


function buttonPress(){
   let btn = this;
   userFlash(btn);

   let color = btn.getAttribute("id");
   userSeq.push(color);

   check(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", buttonPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}



