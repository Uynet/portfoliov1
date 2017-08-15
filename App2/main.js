/* global変数群 */
let mej;
let input_key=[];
let t  = 0;
/* objects */
let Entity=[];
/* graphics handler */
let canvas;
let ctx;
let quakeX = 0;
let quakeY = 0;
let po =0; 
/* initialization */
onload = function() {
  init();
  render();
  loop();
};

/* initialization */
onclick = function() {
  loop();
};

/* main loop */
const loop =_=> {
  window.requestAnimationFrame(loop);
//  input();
  update();
  render();
  t++;
}
