const load = _=>{
  /* load images*/
  suika = new Image();
  suika.src = "images/suika.png" ;
  banana = new Image();
  banana.src = "images/banana.png" ;
  title = new Image();
  title.src = "images/title.png" ;
}

const init = _=>{
  canvas = document.getElementById('canvassample');
  ctx = canvas.getContext('2d');
  t  = 0;
  quakeX = 0;
  quakeY = 0;
  po =0; 
  yo =0; 
  load();
}


