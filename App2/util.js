class Vector2D{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
}

function yure(){
  if(po == 1){
    quakeX *= -0.6+0.1*Math.random();
    quakeY *= -0.6+0.1*Math.random();
    if(quakeX <= 0.001 && quakeX >= -0.001){
      quakeX = 0;
      quakeY = 0;
      po = 0;
    }
  }
}
