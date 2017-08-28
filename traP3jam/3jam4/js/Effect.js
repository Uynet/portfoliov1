class Effect{
  constructor(){
    this.shake = function*(depth){
      while(Math.abs(depth)>0.1){
        ctx.translate(depth*Math.sin(timer),depth*Math.cos(timer));
        depth*=0.7;
        yield;
      }
    }
    return;
  }
}

const EffectHandlerGetter = _=>{
  if(EffectHandler == undefined){
    EffectHandler = new Effect();
  }
  return EffectHandler;
}

