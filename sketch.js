//Create variables here
var dog, happyDog, dogImg, happyDogImg, database, foodS, foodStock; 

function preload()
{
  //load images here
  dogImg = loadImage("images/Dog.png");
  happyDogImg = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  
  foodStock=database.ref('Food');
  foodStock.on("value", readstock);
}


function draw() {  
  background(46,139,87);
  //add styles here
  text("Pres UP_ARROW Key To Feed Drago Milk",100,100);
  textSize(15);
  fill("Green")
  stroke(15);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("dogImg");
  happyDog.addImage("happyDogImg");
}
drawSprites();
}
function readstock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}
