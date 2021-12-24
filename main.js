song_1="";
song_2="";
function preload(){

music.mp3.play()
music2.mp3.play()

}


function draw(){



}


function setup(){

    canvas = createCanvas(500,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    storage = ml5.poseNet(video,modelLoaded)

}


function modelLoaded(){
    console.log("Model Has Loaded Successfully!")
}


