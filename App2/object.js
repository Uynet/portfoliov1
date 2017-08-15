/*
  P:Vector2D Position
  V:Vector2D Velocity
*/

class Object{
  constructor(x,y){
    this.born = 0;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.r = 250;
    this.g = 0;
    this.b = 100;
    this.alpha = 1;
    this.size = 50;
    this.type = 0; 
      /*
       0 : parent
       1 : child
       2 : 収束球
       3 : 爆発
      */
  }
  setsize(s){
    this.size = s;
  }
  
  setV(vx,vy){
    this.vx = vx;
    this.vy = vy;
  }
  
  settype(i){
    this.type = i;
  }

  draw(){
      ctx.beginPath();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = 'rgb(' + this.r  +',' + this.g + ',' + this.b + ')';
      ctx.fillRect(this.x,this.y,this.size,this.size);
      //  ctx.drawImage(mej, this.x, this.y);
  }

  update(){
    switch(this.type){
    case 2:
      this.size-=16;
      this.x+=8;
      this.y+=8;
      if(this.size <= 0){
        this.type = 3;
      }
    case 0:
      this.x += this.vx;
      this.y += this.vy;
      this.vy *=0.9;
      this.g+=5;
      this.b+=3;
      if(t%4 == 0){
        let b = new Object(this.x + 20*Math.random(),this.y);
        b.setV(this.vx+Math.random()-0.5,this.vy);
        b.settype(1);
        b.setsize(10);
        Entity.push(b);
      }
    break;
    case 1:
      this.x += this.vx;
      this.y += this.vy;
      this.vy *= 0.79;
      this.alpha = 0.1;
    break;
    }
  }


  bomb(){
    this.size--;
  }
}
