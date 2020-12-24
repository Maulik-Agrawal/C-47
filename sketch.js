//calling all the variables globally
var back_img;

var blueBoxer, redBoxer;
var boxer1, boxer2;

var gameState = "start";

var moveBoxer1 = 0;
var moveBoxer2 = 0;

var blueHealth = 100;
var redHealth = 100;

var counterRedHealth = 0;
var counterBlueHealth = 0;

var ending1, ending2;

var startBtn;

function preload() {
  //loading all the images 
  back_img = loadImage("images/bg.jpg");

  blueBoxer = loadImage("images/boxer_11.png");
  blueBoxer2 = loadImage("images/boxer_22.png");
  blueBoxer3 = loadImage("images/boxer_33.png");

  redBoxer = loadImage("images/boxer_1.png");
  redBoxer2 = loadImage("images/boxer_2.png")
  redBoxer3 = loadImage("images/boxer_3.png");

  end1 = loadImage("images/end image.png");
  end2 = loadImage("images/end image 1.png");
  start = loadImage("images/start.jpg");

  //loading all the sounds
  crowd = loadSound("sounds/crowd cheer.mp3");
  death = loadSound("sounds/death sound.mp3");
  win = loadSound("sounds/winner.mp3");
}

function setup() {
  //the canvas size will be of the size of the screen
  createCanvas(windowWidth,windowHeight);

  //sprites of the boxers
  boxer1 = createSprite(590,600);
  boxer1.addImage(blueBoxer);
  boxer1.scale = 5.8;

  boxer2 = createSprite(1200,600);
  boxer2.addImage(redBoxer);
  boxer2.scale = 5.8;
}

function draw() {
  //adding our own background
  background(back_img);

  //when game is start then the fighting will happen
  if(gameState === "start")
  {
    //the text for telling the controls
    textSize(30);
    fill("lime");
    text("Press S and A to attack",windowWidth/2-750,windowHeight/2-300);

    textSize(30);
    fill("lime");
    text("Press K and I to attack",windowWidth/2+500,windowHeight/2-300);

    //BOXER 1 
    //adding all the keys for boxer number 1
    if(keyDown("S"))
    {
      boxer1.addImage(blueBoxer2);
    }

    if(keyWentDown("A"))
    {
      boxer1.addImage(blueBoxer3);
      redHealth = redHealth-20;
      //the crowd will cheer if boxer 1 hits boxer 2 or vice-versa
       crowd.play();
    }else if(keyWentUp("A"))
    {
      //boxer's original image will come he/she hits the other boxer
      boxer1.addImage(blueBoxer);
    }

    //BOXER 2
    //adding all the keys for boxer number 2
    if(keyDown("K"))
    {
      boxer2.addImage(redBoxer2);
    }

    if(keyWentDown("I"))
    {
      boxer2.addImage(redBoxer3);
      blueHealth = blueHealth-20;
      //the crowd will cheer 
      crowd.play();
    }else if(keyWentUp("I"))
    {
      //boxer's original image will come he/she hits the other boxer
      boxer2.addImage(redBoxer);
    }

    //ending the game if a boxer's health reaches 0
    if(blueHealth === 0 || redHealth === 0)
    {
      gameState = "end";
      death.play();
    }
  }
  else if(gameState === "end")
  {
    //all the stuff for game end
    textSize(100);
    fill("lime");
    text("GAME OVER!", windowWidth/2-300,windowHeight/2-200);

    //creating the hooray pictures
    ending1 = createSprite(windowWidth/2-700,windowHeight/2-100);
    ending1.addImage(end1);
    ending1.scale = 0.7

    ending2 = createSprite(windowWidth/2+700,windowHeight/2-100);
    ending2.addImage(end2);
    ending2.scale = 0.7

    //adding the winning sound
    win.play();
  }

  drawSprites();

  //all the texts for the health part
  textSize(30)
  fill("blue")
  text("Health: "+blueHealth,windowWidth/2-400,windowHeight-510);

  textSize(30)
  fill("red")
  text("Health: "+redHealth,windowWidth/2+130,windowHeight-510);
}