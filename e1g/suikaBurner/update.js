const update = _=>{
ctx.restore();
ctx.save();


  for(j=glid-1;j>=0;j--){
    for(i=0;i<glid;i++){
      if(j == glid-1){
        map[j][i] = (map[j][i]+4)%512;
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


  /*update Entity object */
  for(i=0;i<Entities.length;i++){
    Entities[i].update();
  }
}
