/* global変数群 */
let input_key=[];
let suikaSetting;
/* objects */
let Entities=[];
/* graphics handler */
let canvas;
let ctx;
let timer = 500;
let quakeX = 0;
let quakeY = 0;
let po =0; 
let yo =0; 
let state = 0;
let click = false;
let ARROW_LEFT = 37;
let ARROW_UP = 38;
let ARROW_RIGHT = 39;
let ARROW_DOWN = 40;
let SPACE = 32;
let ENTER = 13;
let score = 0;
let SUIKA = [];
let exit = false;

/* initialization */
onload = _=> {
  init();
  render();
  loop();
};


/* main loop */
const loop =_=> {
  if(!exit)window.requestAnimationFrame(loop);
  input();
  yure();
//  update();
  render();
  timer--;
}
