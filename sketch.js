
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
}


function draw() {
 background("yellow");
 text("Survival Time - " + score,50,50) 
  
  score = score + Math.round(getFrameRate()/60);
  
 if(ground.x<0){
  ground.x=ground.width/2;
 } 
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  bananax();
  rock();
  
  
  
  drawSprites();
}

function bananax(){
  if(frameCount%80 === 0){
    var banana = createSprite(400,120,40,40);
    banana.y = Math.round(random(120,240));
    banana.addImage(bananaImage);
    banana.scale=0.08;
    banana.velocityX = -3;
    
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  }
}

function rock(){
  if(frameCount % 300 === 0){
    var rock = createSprite(400,330,10,10);
    rock.velocityX = -6;
    rock.addImage(obstaceImage);
    rock.scale = 0.1;
    rock.lifetime = 300;
    
    obstacleGroup.add(rock);
  }
}


