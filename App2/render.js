
class Objectw{
  constructor(x,y){
    this.x = x;
    this.y = x;
  } 
  draw(ctx){
    ctx.drawImage(mej, 0, 0);
    console.log("po");
  }
}

const render =_=> {
let a = new Object(5,0);
  window.requestAnimationFrame(render);
  let canvas = document.getElementById('canvassample');
  let ctx = canvas.getContext('2d');
  /* Imageオブジェクトを生成 */
  a.draw(ctx);

}
