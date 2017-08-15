/*
  P:Vector2D Position
  V:Vector2D Velocity
*/

class Object{
  constructor(x,y){
    this.born = t;
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
      yure();
      ctx.beginPath();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = 'rgb(' + this.r  +',' + this.g + ',' + this.b + ')';
      ctx.fillRect(this.x+quakeX,this.y+quakeY,this.size,this.size);
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
        Entity.pop();
      }
    case 0:
      this.x += this.vx;
      this.y += this.vy;
      this.vy *=0.9;
      this.g+=3;
      this.r+=1;
      this.b+=1;
      if(t%2 == 0){
//        let b = new object(this.x + 20*math.random(),this.y);
//        b.setv(this.vx+math.random()-0.5,this.vy);
//        b.settype(1);
//        b.setsize(10);
//        entity.push(b);
}
      if(this.born - t  == 50){
        this.type = 2;
      }
      if(this.size <= 0){
        this.bomb();
        po = 1;
          quakeX =50;
          quakeY =50;
        Entity.pop();
      }
      break;
    case 1:
      this.x += this.vx;
      this.y += this.vy;
      this.vx *= 0.99;
      this.vy *= 0.79;
      this.alpha = 0.1;
    break;
    case 4:
      this.x += this.vx;
      this.y += this.vy;
      this.vx *= (0.93-this.size*0.002);
      this.vy *= (0.93-this.size*0.002);
      this.y += 0.2;
      this.alpha *= 0.97;
    break;
    }
  }


  bomb(){
    for(i = 0;i<50;i++){
        let arg = 2*Math.PI*Math.random();
        let Vel =15;
        let b = new Object(this.x,this.y);
        let H = 1+Math.floor(6*Math.random());
        b.r = 100+(H == 1|| H == 4 || H == 5)*(75 + Math.floor(80* Math.random()));
        b.g = 100+(H == 2|| H == 5 || H == 6)*(75 + Math.floor(80* Math.random()));
        b.b = 100+(H == 3|| H == 6 || H == 4)*(75 + Math.floor(80* Math.random()));
        b.setV(Vel * Math.cos(arg),Vel * Math.sin(arg));
        b.settype(4);
        b.setsize(40*Math.random()*Math.random());
        Entity.push(b);
    }
  }
}
