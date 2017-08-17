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
    this.type = 0; 
  }

  draw(){
      ctx.beginPath();
      switch(this.type){
      case 0:
        ctx.drawImage(banana, this.x, this.y);
      break;
      case 1:
        ctx.drawImage(suika, this.x, this.y);
      break;
      }
  }

}
