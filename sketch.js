//https://replit.com/talk/share/Pong-Game-in-p5js/141901 - ORIGINAL CODE SOURCE

var xBall = 200; //ball starting position 
var yBall = 200; //ball starting position 
var xSpeed = 4;
var ySpeed = -2;
var player = 8000; //change this value for the starting score
var computer = 25000; //change this value for the starting score

var rat;
var lid;
var myFont


let textArray = ["PAY YOUR TAXES", "TIME TO PAY RENT", "YOU OWE TFL", "PHONE BILL", "TV LISCENSE", "PAY UTILITY BILLS"];
let currentIndex = 0;

function preload(){
  rat = loadImage("PINK_RAT.png");
  myFont = loadFont("font.ttf");
  lid = loadImage("bin_lid.png");
  lidTwo = loadImage("bin_lid_cpu.png");
}

function setup() {
  createCanvas(400, 400);
  noLoop(); //stops the background from constantly being redrawn when the game resets
  textFont(myFont);
}


function draw() {
  background(255,150,200);
  xBall = xBall + xSpeed;
  yBall = yBall + ySpeed;
  fill('white');

  //Player-Paddle1 - change mouseX to button or joystick for console version
  image(lid,mouseX, 360, 80, 30); //change rect to bin lid

  //Computer-Paddle2 
  image(lidTwo,xBall-50,20,80,30); //change rect to bin lid

  image(rat, xBall, yBall, 30,30); //change circle to rat

  
  //Function calls
  bounce();
  paddle1();
  paddle2();

  // setTimeout(fail, 1000); attempt to make the game fail after x amount of time

  //Score
  textSize(15);
  text("CPU:£" + computer,10,15);
  text("Player:£" + player,305,15);

  // animateText();
}


//Bounce back from sides of the canvas and game over
function bounce() {
let words = ['PAY YOUR TAXES','FEED YOUR CAT','YOU NEED FOOD, \nGO SHOPPING',"GET A PERSCRIPTION"];
let word = random(words);

  //defines the space in which the ball can move (bounces off the 'walls' of the canvas)
  if (xBall < 10 || xBall > 380) {
    xSpeed = -xSpeed;
  }
  if (yBall < 10 || yBall > 400) {
    ySpeed = -ySpeed;
  }
  //change all text
  if (yBall < 10 || yBall > 400) {
    textSize(20);
    noLoop();
    textSize(32);
    text(word, 100, 200);
    xBall = xSpeed + 10; //speed up when the player loses
  //if (computer > player){
	//text("Computer Wins",130,150);
  //player = player - 150;
	//}
	//if (computer < player){
	//text("Player Wins",130,150);
	//}
	//if (computer == player){
	//text("PAY YA MUM",130,150);
  //player = player - 50; //subtracts £50 to the score
	//}
  }
  }

//Bounce from player paddle - ball movement
function paddle1() {
  if ((xBall > mouseX && xBall < mouseX + 100) && (yBall >= 335)) {
    ySpeed = -ySpeed; 
    player = player + 50; //adds £50 to the score
  }
}

//Bounce from computer paddle - ball movement 
function paddle2() {
  if (yBall <= 50) {
    ySpeed = -ySpeed; 
    computer = computer + 50; //adds £50 to the score
  }
}

//Initialise the game on mouse press - can be changed to a button for the consol version
function mousePressed() {
  xBall = 200;
  yBall = 200;
  loop();
}


//doesnt work
// function fail(){

//   setTimeout(fail,1000);
//   paddle1 = (20, 360, 80, 30);


// }













// /*
//   Two-player Pong™ derivative game. 
//   This is a template for making your own Pong-game. It supports two players, 
//   and currently takes keyboard input. It could also take other forms of input
//   with minimal modification: asynchronous serial, Bluetooth LE, TCP socket,
//   UDP Datagram, WebSocket, or whatever you can come up with. 
//   The left paddle is controlled using the letters W and S (from the WASD gaming layout),
//   keyCodes 87 and 83, The right paddle is controlled using the up down arrows, keycodes
//   38 and 40. The keyReleased function below takes these inputs.
//   As long as your input can send those five different byte values, 
//   you won't have to touch the rest of the game.
//   created 15 July 2020 
//   by Tom Igoe
//   based on a version I did in Processing from 24 Jan 2011
// */

// // constants:
// const LEFT_PLAYER = 0;            // first player in the list
// const RIGHT_PLAYER = 1;           // second player in the list
// const WINNING_SCORE = 5;          // score needed to win
// const PADDLE_HEIGHT = 80;         // vertical dimension of the paddles
// const PADDLE_WIDTH = 10;          // horizontal dimension of the paddles
// const PADDLE_MOVE_DISTANCE = 20;  // minimum move of each paddle

// // make two players:
// let playerList;
// // make the ball: - CHANGE THIS TO A RAT
// let ball = {
//   size: 10,    // ball size
//   direction: { // direction, X and Y increments
//     h: 2,
//     v: 2
//   },              // position
//   h: 0,
//   v: 0,
//   moving: false   // whether it's currently moving or not
// }

// //CHANGE THESE RULES SO THE GAME DOESN'T END
// let gameOver = true;       // whether or not a game is in progress
// let delayCounter;          // a counter for the delay after an event
// let gameOverDelay = 4000;  // pause after each game
// let pointDelay = 2000;     // pause after each point

// function setup() {
//   // set up canvas and rect drawing mode:
//   createCanvas(windowWidth/2, windowHeight/2);
//   rectMode(CENTER);
//   // populate the player list with positions, now that
//   // you know the size of the window:
//   playerList = [
//     // left player:
//     //CHANGE PADELS TO BIN LIDS
//     {
//       paddleH: 30,
//       paddleV: height / 2,
//       score: 0
//     },
//     // right player:
//     {
//       paddleH: width - 30,
//       paddleV: height / 2,
//       score: 0
//     }
//   ];
// }

// function draw() {
//   drawGame();
// }

// /*
//   player input function. This version uses the USB keyboard and keyReleased() function,
//   but you could modify this for asynchronous serial, Bluetooth LE, or various network clients
//   by using  this function as a template. Have your clients send the byte values represented
//   by the keyCodes below, and call the movePaddle() and newGame() functions as needed, and the rest 
//   of the code can stay the same.
// */

// function keyReleased() {
//   switch (keyCode) {
//     case 87:    // W key
//       movePaddle(LEFT_PLAYER, -PADDLE_MOVE_DISTANCE);
//       break;
      
//     case 83:    // S key
//       movePaddle(LEFT_PLAYER, PADDLE_MOVE_DISTANCE);
//       break;
      
//     case 38:    // up arrow key
//       movePaddle(RIGHT_PLAYER, -PADDLE_MOVE_DISTANCE);
//       break;
      
//     case 40:    // down arrow key
//       movePaddle(RIGHT_PLAYER, PADDLE_MOVE_DISTANCE);
//       break;
      
//     case 78:   // n key
//       newGame();
//       break;
//   }
// }

// function drawGame() {
//   background(0);
//   // draw all the paddles
//   for (let p = 0; p < playerList.length; p++) {
//     // show the paddle for this player:
//     showPaddle(p);
//   }

//   // calculate ball's position:
//   if (ball.moving) {
//     moveBall();
//   }
//   // Draw the ball:
//   rect(ball.h, ball.v, ball.size, ball.size);

//   // show the score:
//   showScore();

//   // if the game is over, show the winner:
//   if (gameOver) {
//     textSize(24);
//     textAlign(CENTER);
//     text("Game Over", width / 2, height / 2 - 30);
//     if (playerList[LEFT_PLAYER].score > playerList[RIGHT_PLAYER].score) {
//       text("Left player Wins!", width / 2, height / 2);
//     }
//     else if (playerList[LEFT_PLAYER].score < playerList[RIGHT_PLAYER].score) {
//       text("Right player Wins!", width / 2, height / 2);
//     }
//     text("Press n for new game ", width / 2, height / 2 + 30);
//   }


//   // // pause after each point:
//   if (!gameOver && !ball.moving && (millis() >
//     delayCounter + pointDelay)) {
//     ball.moving = true;
//   }
// }

// function moveBall() {
//   // Check to see if the ball contacts any paddles:
//   for (let p = 0; p < playerList.length; p++) {
//     let thisPlayer = playerList[p];
//     // calculate the horizontal edges of the paddle:
//     let paddleRight = thisPlayer.paddleH + PADDLE_WIDTH / 2;
//     let paddleLeft = thisPlayer.paddleH - PADDLE_WIDTH / 2;

//     // calculate the vertical edges of the paddle:
//     let paddleTop = thisPlayer.paddleV - PADDLE_HEIGHT / 2;
//     let paddleBottom = thisPlayer.paddleV + PADDLE_HEIGHT / 2;

//     //check to see if the paddle is striking the paddle:
//     if ((ball.v >= paddleTop && ball.v <= paddleBottom)
//       && (ball.h <= paddleRight && ball.h >= paddleLeft)) {
//       // reverse the ball direction:
//       ball.direction.h = -ball.direction.h;
//     }
//   }

//   // if the ball goes off the screen left:
//   if (ball.h < 0) {
//     // increment right player's score:
//     playerList[RIGHT_PLAYER].score++;
//     // change ball direction:
//     ball.direction.h = (random(2) + 1) * -1;
//     // reset the ball to the center:
//     resetBall();
//   }
//   // if the ball goes off the screen right:
//   if (ball.h > width) {
//        // change ball direction:
//     playerList[LEFT_PLAYER].score++;
//         // reset the ball to the center:
//     ball.direction.h = (random(2) + 1);
//     resetBall();
//   }

//   // if any player goes over WINNING_SCORE points, the other player loses:
//   if ((playerList[LEFT_PLAYER].score > WINNING_SCORE) || (playerList[RIGHT_PLAYER].score > WINNING_SCORE)) {
//     // set the delay counter and reset the game:
//     delayCounter = millis();
//     gameOver = true;
//   }

//   // stop the ball going off the top or bottom of the screen:
//   if ((ball.v - ball.size / 2 <= 0) || (ball.v + ball.size / 2 >= height)) {
//     // reverse the y direction of the ball:
//     ball.direction.v = -ball.direction.v;
//   }
//   // update the ball position:
//   ball.v = ball.v + ball.direction.v;
//   ball.h = ball.h + ball.direction.h;
// }

// // reset the game:
// function newGame() {
//   gameOver = false;
//   playerList[LEFT_PLAYER].score = 0;
//   playerList[RIGHT_PLAYER].score = 0;
//   resetBall();
// }

// // show the score at the top of the screen:
// function showScore() {
//   textSize(24);
//   fill(255);
//   text(playerList[LEFT_PLAYER].score, 20, 40);
//   text(playerList[RIGHT_PLAYER].score, width - 40, 40);
// }

// // put the ball back in the center:
// function resetBall() {
//   ball.v = height / 2;
//   ball.h = width / 2;
//   ball.moving = false;
//   delayCounter = millis();
// }

// // change the position of a player's paddle
// function movePaddle(playerNumber, howMuch) {
//   let thisPlayer = playerList[playerNumber];
//   let newPosition = thisPlayer.paddleV + howMuch;
//   // constrain the paddle's position to the width of the window:
//   thisPlayer.paddleV = constrain(newPosition, 0, height);
// }

// // redraw a player's paddle (no change of position):
// function showPaddle(playerNumber) {
//   let thisPlayer = playerList[playerNumber];
//   rect(thisPlayer.paddleH, thisPlayer.paddleV, PADDLE_WIDTH, PADDLE_HEIGHT);
// }






// //https://editor.p5js.org/ehersh/sketches/Hk52gNXR7
// var screen = 0;
// var y=-20;
// var x= 200;
// var speed = 2;
// var score= 0;

// var myFont;
// var rat;

// function preload(){
//   rat = loadImage("PINK_RAT.png");
//   myFont = loadFont("font.ttf");
// }

// function setup() {
//   createCanvas(600, 400);
//   textFont(myFont);
// }

// function draw() {
// 	if(screen == 0){
//     startScreen()
//   }else if(screen == 1){
//   	gameOn()
//   }else if(screen==2){
//   	endScreen()
//   }	
// }

// function startScreen(){
// 		background(255, 157, 255)
// 		fill(255)
// 		textAlign(CENTER);
// 		text('RAT & M', width / 2, height / 2) //add games description 
//     //add rat&m logo
// 		text('click to start', width / 2, height / 2 + 20);
// 		reset();
// }

// function gameOn(){
// 	background(0)
//   text("score = " + score, 30,20)

//   ellipse(x,y,20,20) //CLOTHES IMAGE ARRAY 
//   rectMode(CENTER)
//   image(rat,mouseX,height-30,50,30) //CHANGE TO RAT AND SEWING MACHINE
// 	y+= speed;
//   if(y>height){
//   	screen =2
// 	 }
//   if(y>height-30 && x>mouseX-20 && x<mouseX+20){
//   	y=-20
//     speed+=.5
//     score+= 1
//   }
// 	if(y==-20){
//   	pickRandom();
//   }
// }

// function pickRandom(){
// 	x= random(20,width-20)
// }

// function endScreen(){
// 		background(150)
// 		textAlign(CENTER);
// 		text('YOU FAILED TO REACH YOUR QUOTA', width / 2, height / 2) 
//     //add dead rat image 
//   	text("SCORE = " + score, width / 2, height / 2 + 20)
// 		text('click to play again', width / 2, height / 2 + 40);
// }

// function mousePressed(){
// 	if(screen==0){
//   	screen=1
//   }else if(screen==2){
//   	screen=0
//   }
// }

// function reset(){
// 	  score=0;
//   	speed=2;
//   	y=-20;
// }
