const load = _=>{
  /* load images*/
  mej = new Image();
  mej.src = "images/mej.png" ;
}

const init = _=>{
  canvas = document.getElementById('canvassample');
  ctx = canvas.getContext('2d');
  let a = new Object(5,20);
  Entity.push(a);



  load();
}


