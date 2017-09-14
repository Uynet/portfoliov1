const update = _=>{
ctx.restore();
ctx.save();


  for(j=glid-1;j>=0;j--){
    for(i=0;i<glid;i++){
      if(j == glid-1){
        phase += 1;
        map[j][i] = 768*Math.abs(Math.sin(phase + 2*(Math.random()-0.5)+ i*2*Math.PI/25));
      }
      else if(j == glid-2){
        if(i>0 && i<glid-1)map[j][i] = (map[j+1][i-1]+map[j+1][i]+map[j+1][i+1])/3;   
        else if(i==0)map[j][i] = (map[j+1][i]+map[j+1][i+1])/2;   
        else if(i==glid-1)map[j][i] = (map[j+1][i-1]+map[j+1][i])/2;   
      }
      else if(j <= glid-3){
        if(i>0 && i<glid-1)map[j][i] = (map[j+1][i-1]+map[j+1][i]+map[j+1][i+1]+map[j+2][i])/4;   
        else if(i==0)map[j][i] = (map[j+1][i]+map[j+1][i+1]+map[j+2][i])/3;   
        else if(i==glid-1)map[j][i] = (map[j+1][i-1]+map[j+1][i]+map[j+2][i])/3;   
      }
      if(j <= glid-4){
        map[j][i] = (map[j][i]+map[j+3][i])/2;
      }
        //map[j][i] += 40 *( Math.random()-0.5);
        map[j][i] -= 40*(Math.random()-0.2);
    }
  }


  /*update Entity object */
  for(i=0;i<Entities.length;i++){
    Entities[i].update();
  }
phase=16*Math.sin(timer/100);
}
