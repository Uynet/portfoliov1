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
  bomb(){
    for(i=0;i<15;i++){
      let b = new Particle(this.x+Math.floor(32*(Math.random()-0.5)),this.y+64);
      b.text = apple[i];
      b.theta = Math.PI + Math.random()*Math.PI;
      b.size = 40*Math.random()*Math.random();
      let vel = 20;
      b.vx = 5 + vel*Math.cos(b.theta)*Math.random();
      b.vy = 5 - vel*Math.sin(b.theta)*Math.random();
      Entities.push(b);
    }
    Entities.splice(0,1);
  }
  draw(){
    ctx.save();
    ctx.translate(this.x+32,this.y+32);
    ctx.rotate(this.arg);
    ctx.drawImage(banana,-32,-32);
    ctx.restore();
  }

  update(){
    this.arg *= 1.003;
    if(this.y+this.size>=400)this.vy*=-1;
    this.x += this.vx;
    this.y += this.vy;
  }
}

class Particle extends Object{
  draw(){
    ctx.font = this.size + "px 'ＭＳ Ｐゴシック'";
    ctx.fillStyle = "white";
    ctx.fillText(this.text,this.x-this.size*this.text.length/2,this.y);
  }
  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.9;
    this.vy *= 0.9;
  }
}
