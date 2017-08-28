/* global変数群 */
let input_key=[];
/* objects */
let Entities=[];
/* graphics handler */
let canvas;
let ctx;
let timer;
let state = 0;
let EffectHandler;
let g;

/* initialization */
onload = _=> {
  init();
  loop();
};

/* main loop */
const loop =_=> {
  window.requestAnimationFrame(loop);
      input();
      update(state);
      render();
      timer+=1;
}
