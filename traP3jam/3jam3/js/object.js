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
    this.size = 10; 
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.arg = 1;
    this.theta = 1;
    this.i;
    this.j;
  }

  draw(){
      ctx.beginPath();
      ctx.drawImage(banana, this.x, this.y);
  }

  update(){
    this.x += this.vx;
    this.y += this.vy;
  }

  
}

class Apple extends Object{
  draw(){
    ctx.save();
    ctx.translate(this.x+32,this.y+32);
    ctx.rotate(this.arg);
    ctx.drawImage(suika,-32,-32);
    ctx.restore();
  }

  update(){
    this.arg += .03;
    if(this.y+this.size>=400)this.vy*=-1;
    this.x += this.vx;
    this.y += this.vy;
  }
}

class Rect extends Object{
  draw(){
    ctx.fillStyle = 'rgb('+this.r+','+ this.g+','+ this.b+')';
    ctx.fillRect(this.x,this.y,this.size,this.size);
  }
  update(){
  }
}
