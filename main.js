scoreRightWrist="";
scoreLeftWrist="";
song="";
leftWristX=0;
rightWristY=0;
leftWristY=0;
rightWristX=0;
function preload() {
    song=loadSound("music.mp3");
}

function setup() {
 canvas = createCanvas(600,500);
 canvas.center();

 video = createCapture(VIDEO);
 video.hide();

 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet Is Initialized');
}
function draw(){
    image(video,0,0,600,500);

    fill("#FF0000");
    stroke("#FF000");    

    if(scoreRightWrist>0.2)
    {
    circle(rightWristY,rightWristX,20);

    if(rightWrightY >0 && rightWristY <=100)
    {
       document.getElementById("speed").innerHTML="Speed = 0.5x";
       song.rate(0.5);
    }
    else if(rightWristY >100 && rightWrist <= 200)
    {
        document.getElementById("speed").innerHTML="Speed = 1x";
        song.rate(1);
    }
    else if(rightWristY >200 && rightWrist <= 300)
    {
        document.getElementById("speed").innerHTML="Speed = 1.5x";
        song.rate(1.5);
    }
    else if(rightWristY >300 && rightWrist <= 400)
    {
        document.getElementById("speed").innerHTML="Speed = 2x";
        song.rate(2);
    }
    else if(rightWristY >400 && rightWrist <= 500)
    {
        document.getElementById("speed").innerHTML="Speed = 2.5x";
        song.rate(2.5);
    }
    }



    if(scoreLeftWrist>0.2)
    {
    circle(leftWristX,liftWristY,20);
     InNumberleftWristY = Number(leftWristY);
     remove_decimals= floor(InNumberleftWristY);
     volume = remove_decimals/500;
     volume=leftWelstY,dIvide_1000 *2 ; 
     document.getElementById("volume").innerHTML = "Volume =" + volume; 
     song.setVolume(volume);
    }
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function stop(){
    song.stop();
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist="+ scoreLeftWrist);
        console.log("scoreRightWrist ="+scoreRightWrist+"scoreLeftWrist =" + scoreLeftWrist);

        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX);
        console.log("leftWristY="+leftWristY);

        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX);
        console.log("rightWristY="+rightWristY);
    }
}
