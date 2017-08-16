/* global変数群 */
let mej;
let input_key=[];
/* objects */
let Entity=[];
/* graphics handler */
let canvas;
let ctx;
let t  = 0;
let quakeX = 0;
let quakeY = 0;
let po =0; 
let yo =0; 


const launch = _=>{
  init();
  render();
}

/* initialization */
onload = function() {
  init();
  render();
  loop();
};


/* main loop */
const loop =_=> {
  window.requestAnimationFrame(loop);
//  input();
  yure();
  update();
  render();
  t++;
}
