/* global変数群 */
let mej;
let input_key=[];
let t  = 0;
/* objects */
let Entity=[];
/* graphics handler */
let canvas;
let ctx;


/* initialization */
onload = function() {
  init();
  render();
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
