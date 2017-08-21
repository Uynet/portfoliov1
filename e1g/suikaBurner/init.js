const load = _=>{
  /* load images*/
  banana = new Image();
  banana.src = "images/banana.png" ;
  suika = new Image();
  suika.src = "images/suika.png" ;
}

const init = _=>{
  canvas = document.getElementById('canvassample');
  ctx = canvas.getContext('2d');
  ctx.save();
  utilHandler = utilHandlerGetter();

  for(j=glid-1;j>=0;j--){
    for(i=0;i<glid;i++){
      if(j == glid-1){
        map[j][i] = (512 * Math.random());   
      }
      else if(j == glid-2){
        if(i>0 && i<glid-1)map[j][i] = (map[j+1][i-1]+map[j+1][i]+map[j+1][i+1])/3;   
        else if(i==0)map[j][i] = (map[j+1][i]+map[j+1][i+1])/2;   
        else if(i==glid-1)map[j][i] = (map[j+1][i-1]+map[j+1][i])/2;   
      }
      else if(j<=glid-3){
        if(i>0 && i<glid-1)map[j][i] = (map[j+1][i-1]+map[j+1][i]+map[j+1][i+1]+map[j+2][i])/4;   
        else if(i==0)map[j][i] = (map[j+1][i]+map[j+1][i+1]+map[j+2][i])/3;   
        else if(i==glid-1)map[j][i] = (map[j+1][i-1]+map[j+1][i]+map[j+2][i])/3;   
      }
    }
  }
 
  for(j=glid-1;j>=0;j--){
    for(i=0;i<glid;i++){
      b = new Rect(400/glid*i,400/glid*j);
      b.size = 400/glid;
      b.i = i;
      b.j = j;
      Entities.push(b);
    }
  }

  state = 0;
  timer = 0;
  
  a = new Apple(200-32,200-32);
  Entities.push(a);

  load();
}




