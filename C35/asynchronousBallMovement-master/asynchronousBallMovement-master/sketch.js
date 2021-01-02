var ball;
var database
var posraf
var readfrom

function setup(){
    database=firebase.database()
    posraf=database.ref("Ball")
    posraf.on("value",Readpos)
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        Rightpos(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        Rightpos(5,0);
    }
    else if(keyDown(UP_ARROW)){
        Rightpos(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        Rightpos(0,+5);
    }
    drawSprites();
}

function Rightpos(x,y){
    database.ref("Ball").set({
        "Xpos":ball.x+x,
        "Ypos":ball.y+y
    })
}

function Readpos(data){
    readfrom=data.val()
    ball.x=readfrom.x
    ball.y=readfrom.y 
}
