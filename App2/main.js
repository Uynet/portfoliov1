onload = function() {
  draw();
};
function draw() {
  /* canvas要素のノードオブジェクト */
  var canvas = document.getElementById('canvassample');
  /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  /* 2dコンテキスト */
  var ctx = canvas.getcontext('2d');
  /* 四角を描く */
  ctx.beginpath();
  ctx.moveto(20, 20);
  ctx.lineto(120, 20);
  ctx.lineto(120, 120);
  ctx.lineto(20, 120);
  ctx.closepath();
  ctx.stroke();
}

