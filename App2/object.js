class Object{
  constructor(x,y){
    this.x = x;
    this.y = y;
  } 
  draw(ctx){
    ctx.drawImage(mej, this.x, this.y);
  }
}
