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
let map= new Array(256);
let glid = 100;
let phase = 0;
for(let y = 0; y < 256; y++) {
  map[y] = new Array(256).fill(0);
};

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
