const render =_=> {
  clear();
  /*draw Entity object */
  for(i=0;i<Entity.length;i++){
    if(Entity[i].size<=0.01){ Entity.pop(Entity[i]); }
    else{ Entity[i].draw(); }
  }

  if(t == 50){
    let bang = 60;
    Entity[0].size+=bang;
    Entity[0].x-=bang/2;
    Entity[0].y-=bang/2;
    Entity[0].type = 2;
  }

  /* 枠線 */
  ctx.beginPath();
  ctx.fillStyle = 'rgb(192, 80, 77)';
  ctx.strokeRect(0, 0,canvas.width, canvas.height);
}

const clear = _=>{
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.beginPath();
  ctx.fillRect(0, 0,canvas.width, canvas.height);
  ctx.fillStyle = 'rgb(25,4,42)';
  //flush
  if(yo == 1){
    ctx.fillStyle = 'rgb(169,255,255)';
  ctx.fillRect(0, 0,canvas.width, canvas.height);
    return;
  }
  if(t>60){
  }

  ctx.fillRect(quakeX, quakeY,canvas.width, canvas.height);
}

