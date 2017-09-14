const render =_=> {
  clear();

  
  /*地面*/  
  ctx.fillStyle = 'rgb(217,70,62)';
  ctx.fillRect(0,ground,canvas.width, canvas.height);
  ground-=gv;
  if(ground>eyeline)gv += 0.1;
  else {
    gv*=0.95;
    if(po==0){
      gv = 1;
      po = 1;
      Entities[0].bomb();
    }
  }
  /*draw Entity object */
  for(i=0;i<Entities.length;i++){
    Entities[i].draw();
  }
  /* 枠線 */
  ctx.fillStyle = 'rgb(217,70,62)';
  ctx.strokeRect(0, 0,canvas.width, canvas.height);
}

const clear = _=>{
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.fillRect(0, 0,canvas.width, canvas.height);
}
