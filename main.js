
var canvas=new fabric.Canvas('mycanvas');

function pl1()
{
document.getElementById("myaudio").play();
}

var img_object;

function new_image()
{
    fabric.Image.fromURL("happy.jpg" ,function(Img){

img_object=Img;

img_object.scaleToWidth(800);
img_object.scaleToHeight(600);
img_object.set({
    top:0,
    left:0
})
canvas.add(img_object)
    })
}