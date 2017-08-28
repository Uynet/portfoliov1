/* global変数群 */
let input_key=[];
/* objects */
let Entities=[];
/* graphics handler */
let canvas;
let ctx;
let timer;
let state = 0;
let utilHandler;
let g;

/* initialization */
onload = _=> {
  init();
  loop();
};

/* main loop */
const loop =_=> {
  window.requestAnimationFrame(loop);
      update();
      render();
      timer+=1;
}
