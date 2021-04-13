var canvas;
var music;
var box1, box2, box3,box4;
var Mbox;
//var EdgeSprites;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    //canvas = createCanvas(800,600);
    canvas = createCanvas(windowWidth,windowHeight);


    //create 4 different surfaces

    //box1= createSprite(105,580,200,20);
    //box2= createSprite(310,580,200,20);
    //box3= createSprite(515,580,200,20);
    //box4= createSprite(720,580,200,20);

    box1= createSprite(width-1400,height-50,width/4,20);
    box2= createSprite(width-1000,height-50,width/4,20);
    box3= createSprite(width-600,height-50,width/4,20);
    box4= createSprite(width-200,height-50,width/4,20);



    box1.shapeColor= "teal"
    box2.shapeColor= "maroon"
    box3.shapeColor= "pink"
    box4.shapeColor= "blue"

    boxGroup= new Group();

    boxGroup.add(box1);
    boxGroup.add(box2);
    boxGroup.add(box4);


    //create box sprite and give velocity

    Mbox= createSprite(random(20, width-20), random(20,height/2), 40,40)
    Mbox.shapeColor= "white"
    Mbox.velocityY= random(-10,10);
    Mbox.velocityX= random(-10,10);
    

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();

    music.play();

    //Mbox.bounceOff(edges);
   // Mbox.bounceOff(boxGroup);
   

    if(Mbox.isTouching(box1)){
        Mbox.shapeColor= "teal";
        Mbox.bounceOff(boxGroup);
    }
    if(Mbox.isTouching(box2)){
        Mbox.shapeColor= "maroon";
        Mbox.bounceOff(boxGroup);
    }

    if(Mbox.isTouching(box3)){
        Mbox.shapeColor= "pink";
        Mbox.velocityX=0
        Mbox.velocityY=0
        music.stop();
    }

    if(Mbox.isTouching(box4)){
        Mbox.shapeColor= "blue";
        Mbox.bounceOff(boxGroup);
    }


    //add condition to check if box touching surface and make it box

    drawSprites();
}
