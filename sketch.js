var fr, mr
var a,b
function setup()  {
createCanvas(1200,800)
fr = createSprite(200,200,50,80)
mr = createSprite(400,200,80,30)
fr.shapeColor = "green"
mr.shapeColor = "green"
fr.debug = false
mr.debug = false
}
function draw(){
  background(0)
  mr.x = World.mouseX
  mr.y = World.mouseY
  a = fr.width/2+mr.width/2
  b = fr.height/2+mr.height/2
  console.log(a)
  console.log("fr.x"+fr.x)
  console.log("mr.x"+mr.x)
  if(mr.x-fr.x<a &&fr.x-mr.x<a &&mr.y-fr.y<b &&fr.y-mr.y<b){
    fr.shapeColor = "red"
    mr.shapeColor = "red"
    }
    else{
      mr.shapeColor = "green"
      fr.shapeColor = "green"
    }
  drawSprites()
}
