let gameseq=[];
let userseq=[];

let game=false;
let level=0;
let arr=["palevioletred","goldenrod","aqua","purple"];
let high=level;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(game==false){
        game=true;
        levelup();
    }
})
let i=0;
function flash(btn){
    btn.classList.add("flash");
    
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
    
}
function flashs(btn){
    btn.classList.add("flashs");
    
    setTimeout(function(){
        btn.classList.remove("flashs");
    },250);
    
}
function flashss(btn){
    btn.classList.add("flashss");
    
    setTimeout(function(){
        btn.classList.remove("flashss");
    },250);
    
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ran=Math.floor(Math.random()*3);
    let btns=arr[ran];

    gameseq.push(btns);
    let btn=document.querySelector(`.${btns}`);
    console.log(gameseq);
    flash(btn);

}

let body=document.querySelector("body");
function btnprs(){
    let x=this;
    flashss(x);
    col=x.getAttribute("id");
    userseq.push(col);
    check(userseq.length-1);
}

function check(x){
    // let idx=level-1;
    if(gameseq[x]==userseq[x]){
        if(gameseq.length==userseq.length){
            levelup();
        }
    }
    else{
        if(level>high){
            high=level;
        }
        h2.innerText=`Game over! Your score was ${level}\n Press any key to restart the game \n Highest score ${high}`;
        flashs(body)
        gameseq=[];
        userseq=[];
        level=0;
        game=false;
    }
}

let abtn=document.querySelectorAll(".btn")
for(bts of abtn){
    bts.addEventListener("click",btnprs);
}

