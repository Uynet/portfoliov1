/* global変数群 */
let mej;
let input_key=[];
/* objects */
let Entity=[];

/* graphics handler */
let canvas;
let ctx;



/* initialization */
onload = function() {
  init();
  loop();
};

/* main loop */
const loop =_=> {
  window.requestAnimationFrame(loop);

  input();
  update();
  render();
}

