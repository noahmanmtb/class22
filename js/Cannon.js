class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.topp=loadImage("canon.png")
    this.topp1=loadImage("cannonBase.png")
  }
 display() {
   push()
   imageMode(CENTER)
   image(this.topp,0,0,this.width,this.height)
   pop()
   image(this.topp1,70,20,200,200)
   noFill()
 }
}
