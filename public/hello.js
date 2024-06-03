let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"]
let start=false;
let level=0;
let h2=document.querySelector("h2");
let high=0;

document.addEventListener("keypress",function(){
    if(start==false){
        start=true;

        levelup();
    }
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx= Math.floor(Math.random()*4);
    let randcol=btns[randIdx];
    let randbtn=document.querySelector(`.${randcol}`);
    gameseq.push(randcol);
    btnflash(randbtn);
}

function check(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,750);
        }
    }
    else{
        if(level>high){
            high=level-1;
        }else{
            high=high;
        }
        h2.innerHTML=`Game Over! Your Score was: <b>${level-1}</b>  Highest Score: ${high}<br>Press any key to Restart `;
        document.querySelector("body").style.backgroundColor="#ff0000";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#ffffff";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    btnflash(btn);
    usercol=btn.getAttribute("id");
    userseq.push(usercol);
    check(userseq.length-1);
}
let allBtns=document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}