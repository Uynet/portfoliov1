const load = _=>{
  /* load images*/
  mej = new Image();
  mej.src = "images/mej.png" ;
}

const init = _=>{
  canvas = document.getElementById('canvassample');
  ctx = canvas.getContext('2d');
  let a = new Object(150,380);
  a.setsize(30);
  a.setV(0,-30);
  a.settype(0);
  Entity.push(a);

  load();
}


