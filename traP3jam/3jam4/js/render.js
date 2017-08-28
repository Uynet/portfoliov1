const render =_=> {
  clear();
  ctx.save();
  
  /*draw Entity object */
  for(i=0;i<Entities.length;i++){
    Entities[i].draw();
  }
  /* 枠線 */
  ctx.fillStyle = 'rgb(217,70,62)';
  ctx.strokeRect(0,0,canvas.width, canvas.height);
  ctx.restore();
}

const clear = _=>{
  ctx.save();
  ctx.translate(0,0);
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.restore();
}
