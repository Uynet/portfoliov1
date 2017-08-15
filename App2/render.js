const render =_=> {
  clear();
  /*draw Entity object */
  for(i=0;i<Entity.length;i++){
    Entity[i].draw();
  }

  if(t == 50){
    Entity[0].type = 2;
  }
  if(Entity[0].size <= 0){
    Entity[0].Bomb
  }

  /* 枠線 */
  ctx.beginPath();
  ctx.fillStyle = 'rgb(192, 80, 77)';
  ctx.strokeRect(0, 0,canvas.width, canvas.height);
}

const clear = _=>{
  ctx.beginPath();
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.fillRect(0, 0,canvas.width, canvas.height);
  ctx.fillStyle = 'rgb(25,4,42)';
  ctx.fillRect(quakeX, quakeY,canvas.width, canvas.height);
}

