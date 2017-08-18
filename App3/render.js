const render =_=> {
  clear();
  /*draw Entity object */
  for(i=0;i<Entities.length;i++){
    Entities[i].draw();
  }

  /* 枠線 */
  ctx.beginPath();
  ctx.fillStyle = 'rgb(192, 80, 77)';
  ctx.strokeRect(0, 0,canvas.width, canvas.height);
  
    


  switch(state){
    case 0://title
      if(input_key[SPACE]==1)state = 1;
      ctx.drawImage(title,0,-160);
      ctx.fillStyle = 'rgb(55,55,205)';
      ctx.font = "26px 'Monotype Corsiva'";
      ctx.fillText("press SPACE",80+quakeX,100+quakeY);
      break;
    case 1://game
      if(timer <=0) state = 2;
      if(!suikaSetting)makeSuika();
      ctx.fillstyle = 'rgb(55,55,55)';
      ctx.font = "23px 'Monotype Corsiva'";
      ctx.fillText(score,150+quakeX,150+quakeY);
      ctx.fillText("残り時間 "+timer,250+quakeX,380+quakeY);

      if(input_key[ARROW_LEFT]&&click){
        if(SUIKA[0]==1){
          state = 3;
        }
        else{
          state = 2;
        }
      }
      if(input_key[ARROW_UP]&&click){
        if(SUIKA[1]==1){
          state = 3;
        }
        else{
          state = 2;
        }
      }
      if(input_key[ARROW_RIGHT]&&click){
        if(SUIKA[2]==1){
          state = 3;
        }
        else{
          state = 2;
        }
      }
      if(input_key[ARROW_DOWN]&&click){
        if(SUIKA[3]==1){
          state = 3;
        }
        else{
          state = 2;
        }
      }
      break;
    case 2://gameover
      if(input_key[SPACE] == 1) init();
      ctx.fillStyle = 'rgb(255,55,55)';
      ctx.font = "23px 'Monotype Corsiva'";
      ctx.fillText("game over :"+score+"てん!",70,110);
      ctx.fillText("Tweet:ENTER",70,140);
      ctx.fillText("Rstart:SPACE",70,170);
      if(input_key[ENTER]){
        exit = true;
        let tweet = ["https://twitter.com/intent/tweet?text=",score,"玉のスイカを破壊しました！ https://uynet.github.io/App3/index.html #traP3jam"] ;
        let con  =  tweet.join("");
        location.href = (con);
      }
      break;
    case 3://suika
      po = 1;
      yo = 1;
      quakeX =(50+Math.random()*70)* (2*Math.floor(Math.random())-1);
      quakeY =(50+Math.random()*70)* (2*Math.floor(Math.random())-1);
      deleteSuika();
      score ++;
      click = false;
      state = 1; 
      break;
  }

}

const clear = _=>{
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.beginPath();
  ctx.fillRect(0, 0,canvas.width, canvas.height);
}

const makeSuika = _=>{
  for(i=0;i<4;i++){
    SUIKA[i] = 0;
  }

  SUIKA[Math.floor(4*Math.random())] = 1;
  for(i=0;i<4;i++){
    x = 150 + Math.floor(150 *(-Math.cos(Math.PI * i/2)));
    y = 150 + Math.floor(150 *(-Math.sin(Math.PI * i/2)));
    a = new Object(x,y);
    a.type = SUIKA[i];
    Entities.push(a);
  }
suikaSetting = 1;
}

const deleteSuika =_=>{
  while(Entities.length>0)Entities.pop();
  suikaSetting = 0;
}
