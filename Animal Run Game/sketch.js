var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage, blastImg;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

function preload(){
  trackTmg = loadImage("assets/road.jpg");
  bgImg = loadImage("assets/background.png")
  boneImg = loadImage("assets/bone1.png");
  dogImg = loadImage("assets/dog.jpg");
  catImg = loadImage("assets/cat.jpg");
  fishImg = loadImage("assets/fish.jpg");
  monkeyImg = loadImage("assets/monkey.jpg");
  bananaImg = loadImage("assets/banana.jpg");
  rabbitImg = loadImage("assets/rabbit.jpg");
  dogImg = loadImage("assets/dog.jpg");
  lifeImage = loadImage("assets/life.png");
  fuelImage = loadImage("assets/fuel.png");


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
