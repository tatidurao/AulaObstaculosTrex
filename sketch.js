var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, GrupoNuvens, cloudImage;
var GrupoObstaculos, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var score = 0;




function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  //complete as proximas imagens
  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided" , trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  background(180);
  //pontuação
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -13;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  gerarNuvens();
  
  //gerar obstáculos no chão
  gerarObstaculos();
  
  drawSprites();
}

function gerarObstaculos(){
 
}

function gerarNuvens() {
  //gerar nuvens a cada 60 quadros
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,100));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
    //atribua tempo de vida à variável
    //milisegundos
   
    
    //ajuste a profundidade
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}
