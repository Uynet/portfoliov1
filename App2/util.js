class Vector2D{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
}

function yure(){
  if(po == 1){
    quakeX *= -0.98;
    quakeY *= -0.98;
    if(quakeX <= 0.001 && quakeX >= -0.001){
      po = 0;
    }
  }
}
