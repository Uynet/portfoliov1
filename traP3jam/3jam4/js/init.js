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
  EffectHandler = EffectHandlerGetter();
  state = 0;
  timer = 0;
  g = EffectHandler.shake(33);
  load();
}




