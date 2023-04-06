// intiating each player's count to get final count of score
let playerCount=0;
let computerCount=0;

// getting computer choice
function getComputerChoice() {
     options=["rock", "paper", "scissors"];
     let computerSelection=options[Math.floor(Math.random()*3)];
     return computerSelection;
}
// the current round score and response
function playRound(playerSelection,computerSelection) {
     if (computerSelection===playerSelection) {
          compMsg = computerSelection
          playMsg = playerSelection
          return compMsg && playMsg;
     }
     else if (
          (computerSelection=="rock" && playerSelection=="paper")||
          (computerSelection=="paper" && playerSelection=="scissors") ||
          (computerSelection=="scissors" && playerSelection=="rock")
      ){
          playerCount+=1;
          compMsg = computerSelection;
          playMsg = playerSelection;
          return compMsg && playMsg;
      }
      else if (
          (computerSelection=="paper" && playerSelection=="rock")||
          (computerSelection=="rock" && playerSelection=="scissors") ||
          (computerSelection=="scissors" && playerSelection=="paper")
      ) {
          computerCount+=1;
          compMsg = computerSelection
          playMsg = playerSelection
          return compMsg && playMsg;
      }
}
//getting body
let body = document.querySelector('body');

//create result showing elements
let h1 = document.createElement('h1');
let butn = document.createElement('button');
let a = document.createElement('a');
let footer = document.createElement('footer');

//adding attributes for footer
footer.style.textAlign = 'center';
footer.style.fontSize = '2vw';
footer.style.fontStyle = 'italic';
footer.textContent = 'By: Zekaryas Mekuaninit @ The Odin Project';

//adding attributes and/or styles for the after round button and heading element
butn.style.fontSize = '4vw';
butn.style.color = 'yellow';
butn.textContent = 'Play Again';
butn.style.backgroundColor = 'rgb(220, 20, 60)';
butn.style.width = '17vw';
butn.style.height = '13vw';
butn.style.borderRadius = '20px';
h1.style.fontSize = '4vw';
//selecting elements 
 let imageRock = document.querySelector('#rock');
 let imagePaper = document.querySelector('#paper');
 let imageScissors = document.querySelector('#scissors');
 let playerScore = document.querySelector('#player-score');
 let computerScore = document.querySelector('#computer-score');
 let mainContainer = document.querySelector('.main-container');
 let playerMessage = document.querySelector('#msgone');
 let computerMessage = document.querySelector('#msgtwo');
 let audioClick = document.querySelector('#kick');
 let winSound = document.querySelector('#winning');
 let lostSound = document.querySelector('#losing');

//create elements which will be displayed after five scores
 //attained by one of the two
let newDiv = document.createElement('div');
let playerLogo = document.createElement('img');
playerLogo.setAttribute('src', 'Images/person-last.png');
playerLogo.style.width = '17vw';// to be tracked
playerLogo.style.height = '17vh';//to be seen
playerLogo.style.borderRadius = '20px';
newDiv.appendChild(playerLogo);
newDiv.appendChild(h1);
newDiv.appendChild(butn);

//styling the newer div element 
newDiv.style.display = 'flex';
newDiv.style.flexDirection = 'column';
newDiv.style.alignItems='center';
newDiv.style.justifyContent='space-between';
newDiv.style.gap= "5vw";
newDiv.style.border='10px groove aqua';
newDiv.style.width = '60vw';
newDiv.style.height = '50vw';
newDiv.style.backgroundColor = 'rgb(127, 255, 0, 0.4)';
newDiv.style.padding = '3vw';
newDiv.style.flex = '1 1 auto';

//make images to listen functions by events
imageRock.addEventListener('click', function() {
     playRound(imageRock.id.toLowerCase(),getComputerChoice())
     audioClick.play();
     revealScore()
     showResult()
})
imagePaper.addEventListener('click', function() {
     playRound(imagePaper.id.toLowerCase(),getComputerChoice())
     audioClick.play();
     revealScore();
     showResult()
})
imageScissors.addEventListener('click', function() {
     playRound(imageScissors.id.toLowerCase(),getComputerChoice())
     audioClick.play();
     revealScore();
     showResult();
})
//reloading game by button
butn.addEventListener('click',()=>{
     document.location='Index.html';
})
function revealScore() {
     playerMessage.innerHTML=`You: ${playMsg}`
     computerMessage.innerHTML = `Computer: ${compMsg}`
     playerScore.textContent=`Score: ${playerCount}`;
     computerScore.textContent=`Score: ${computerCount}`;
}
function showResult() {
     if (computerCount===5 || playerCount===5) {
          mainContainer.style.display="none";
          body.appendChild(newDiv);
          body.appendChild(footer);
          body.style.display='flex';
          body.style.flexDirection='column';
          body.style.alignItems='center';
          body.style.gap = '8vh';
          body.style.justifyContent='space-between';
          if (playerCount>computerCount) {
               winSound.play()
               h1.textContent="You Won!";
               h1.style.color="green";
          }
          else if (computerCount>playerCount) {
               h1.textContent="You Lose!";
               h1.style.color="red";
               lostSound.play()
          }
          else {
               h1.textContent="Tie Game";
               h1.style.color="yellow";
          }
}
}