const update = (state)=>{
  ctx.restore();
  ctx.save();
  switch(state){
    case 0:
      if(timer%100==0){
        g = EffectHandler.shake(133);
      }
      g.next();
      /*update Entity object */
      for(i=0;i<Entities.length;i++){
        Entities[i].update();
      }
      if(input_key[38]){
        state = 1;
      }
  break;
  }
}
