const load = _=>{
  /* load images*/
  banana = new Image();
  banana.src = "images/banana.png" ;
}

const init = _=>{
  canvas = document.getElementById('canvassample');
  ctx = canvas.getContext('2d');
  state = 0;
  timer = 0;
  
  a = new Apple(200-32,eyeline-32);
  Entities.push(a);

  load();
}




