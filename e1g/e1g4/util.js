class Vector2D{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
}

class util{
  constructor(){
    this.shake = function*(depth){
      while(depth>0){
        ctx.translate(depth,depth);
        depth--;
        yield;
      }
    }
  }
}

const utilHandlerGetter = _=>{
  if(utilHandler == undefined){
    utilHandler = new util();
  }
  return utilHandler;
}

