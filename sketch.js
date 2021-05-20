const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
s1=loadImage("sunrise1.png")
s2=loadImage("sunrise2.png")
s3=loadImage("sunrise3.png")
s4=loadImage("sunrise4.png")
s5=loadImage("sunrise5.png")
s6=loadImage("sunrise6.png")
s7=loadImage("sunset7.png")
s8=loadImage("sunset8.png")
s9=loadImage("sunset9.png")
s10=loadImage("sunset10.png")
s11=loadImage("sunset11.png")
s12=loadImage("sunset12.png")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
   getBackgroundImg();
}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }
Engine.update(engine);  

  

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
//var response = await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata",{ mode: 'no-cors'})
var response = await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata");
    //change the data in JSON format

    console.log(response)
    //var response= await response.JSSON()
    var responseJSON=await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
   console.log(datetime);
    // write code slice the datetime
    var hour = datetime.slice(11,13);
    //var hour=responseJSON.utc_datetime

    console.log("Hour = "+hour);
    // add conditions to change the background images from sunrise to sunset
bg = s1;
    if (hour>=05&&hour<06){
    bg=s1
}
else if (hour>=06&&hour<08){ 
    bg=s1
}
else if (hour>=08&&hour<10){ 
    bg=s2
}
else if (hour>=10&&hour<12){ 
    bg=s3
}
else if (hour>=13&&hour<14){ 
    bg=s4
}
else if (hour>=14&&hour<15){ 
    bg=s5
}
else if (hour>=15&&hour<16){ 
    console.log("15+");
    bg=s6
}
else if (hour>=16&&hour<17){ 
    bg=s7
}
else if (hour>=17&&hour<18){ 
    bg=s8
}
else if (hour>=18&&hour<19){ 
    bg=s9
}
else if (hour>=19&&hour<20){ 
    bg=s10
}
else if (hour>=20&&hour<21){ 
    bg=s11
}
else if (hour>=21&&hour<24){ 
    bg=s12
}

    //load the image in backgroundImg variable here
//backgroundImg=loadImage(bg);
backgroundImg=bg;

}
