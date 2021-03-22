var clock,ss,ms,hr;
var ssAngle,hrAngle,msAngle;




function setup() {

  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255); 
  translate(200,200) 
  rotate(-90)
  ss=second()
  hr=hour()
  ms=minute()
  ssAngle=map(ss,0,60,0,360)
  msAngle=map(ms,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)


  push()
  rotate(ssAngle)
  stroke("blue")
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(msAngle)
  stroke("red")
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(hrAngle)
  stroke("green")
  strokeWeight(7)
  line(0,0,50,0)
  pop()

  strokeWeight(10)
  stroke("blue")
  arc(0,0,300,300,0,ssAngle)

  strokeWeight(10)
  stroke("red")
  arc(0,0,300,300,0,msAngle)

  strokeWeight(10)
  stroke("green")
  arc(0,0,300,300,0,hrAngle)
  drawSprites();
}