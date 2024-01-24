
  let gameSeq =[];
  let userSeq =[];

  let btns = ["yellow","red","purple","green"];

  let started =false;
  let level =0

 let h2= document.querySelector("h2");

 
 // start game using keypress;
 
  document.addEventListener("keypress", function(){
    if(started == false){
       started = true;
      //  h2.innerText = "level 1";
      console.log("game is started")
       levelup()
         // console.log("game was started")
    }
  })


  /* Add class list in css are 1)flash and 2)userflash */
  function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash");
   },250);
  }

  function userFlash(btn){
   btn.classList.add("userflash");
   setTimeout(function(){
      btn.classList.remove("userflash");
   },250);
  }



  function levelup(){
          userSeq = [];
          level++;
           h2.innerText = `level ${level}`
           let randIdx = Math.floor(Math.random()*4);
           let randColor = btns[randIdx];
           let randbtn = document.querySelector(`.${randColor}`);
           gameSeq.push(randColor)
           console.log(gameSeq);
          //   console.log(randIdx);
          //   console.log(randColor);
          //   console.log(randbtn);
          gameFlash(randbtn);
  }


  function checkAns(idx){
   //  console.log("current level is ",level);
   

    if(userSeq[idx] === gameSeq[idx]){
      if(userSeq.length == gameSeq.length){
         setTimeout(levelup,100);
      }
    }else{
      h2.innerHTML = `game is over! your score is <b>${level}! <b> <br>Press any key to start`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function(){
         document.querySelector("body").style.backgroundColor = "white";
      },150)
      reset();
    }
  }


function btnPress(){
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for ( btn of allBtns) {
   btn.addEventListener("click",btnPress)
}

function reset(){
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
}
