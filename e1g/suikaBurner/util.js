class Vector2D{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
}

class util{
  shake(depth){
      ctx.translate(depth,depth);
      console.log(depth);
  }
}

const utilHandlerGetter = _=>{
  if(utilHandler == undefined){
    utilHandler = new util();
  }
  return utilHandler;
}

