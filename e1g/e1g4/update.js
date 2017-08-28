const update = _=>{
ctx.restore();
ctx.save();

let g = utilHandler.shake(33);
g.next();
  /*update Entity object */
  for(i=0;i<Entities.length;i++){
    Entities[i].update();
  }
}
