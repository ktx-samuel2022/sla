function setup(){
    canvas = createCanvas(450,450)

    video = createCapture(VIDEO)
    video.hide()
    video.size(450,450)
}

function draw(){
    canvas.position(windowWidth/2-225,windowHeight/2)
    image(video,0,0,450,450)
}