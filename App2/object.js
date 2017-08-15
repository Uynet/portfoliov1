/*
  P:Vector2D Position
  V:Vector2D Velocity
*/

class Object{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
  }
  
  setV(vx,vy){
    this.vx = vx;
    this.vy = vy;
  }
  
  draw(){
    ctx.drawImage(mej, this.x, this.y);
  }

  update(){
    this.x += this.vx;
    this.y += this.vy;
  }
}
