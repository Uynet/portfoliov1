/* global変数群 */
let input_key=[];
/* objects */
let Entities=[];
/* graphics handler */
let canvas;
let ctx;
let timer;
let state = 0;

let eyeline = 150;
let ground = 350;
let gv=0;
let po=0;
let apple = ["青森県","白雪姫","アダムとイヴ","Malus pumila","ピコ太郎","椎名林檎","万有引力","林檎","Apple","バーモンドカレー","iPhone","Ringo Starr","ウィリアム・テル","キティちゃん","ばなな"];

/* initialization */
onload = _=> {
  init();
  render();
  loop();
};


/* main loop */
const loop =_=> {
  window.requestAnimationFrame(loop);
  update();
  render();
  timer--;
}
