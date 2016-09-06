var canvas;
var ctx;
var isClicked = false;
var input_key = new Array();//キーの入力状態

//物体クラス
function Entity(x,y){
  this.x = x;//this = player
  this.y = y;
}

//プレイヤー
function Player(x,y){
    Entity.apply(this,arguments);//Entity.thisをplayer.thisにする的な
}
Player.prototype = new Entity;//プロトタイプを経由してEntityから継承
Player.prototype.update = function(){
    if(input(37)){
        this.x--;    
    }  
    if(input(38)){
        this.y--;    
    }  
    if(input(39)){
        this.x++;    
    }  
    if(input(40)){
        this.y++;    
    }  
}

box = new Player(220,220);


//ロード時関数
onload = function(){
    canvas = document.getElementById('cv');
    ctx = canvas.getContext('2d');
    


}

//メイン関数
var main = function() {
    clear();
    input();
    update();
    draw(box.x,box.y);
}
setInterval(main, 10);



function input(key){
    document.onkeydown = function (e){
	   if(!e) e = window.event;
       input_key[e.keyCode] = true;
    }
    document.onkeyup = function (e){
        if(!e) e = window.event;
        input_key[e.keyCode] = false;
    }
    
    return input_key[key];
}



//更新
function update() {
    box.update();
}

//描画
function draw(x,y) {
  ctx.fillStyle = "rgb(192,128,128)";
  ctx.fillRect(x,y,20,20);
    
  //外枠
  ctx.strokeStyle = "rgb(128,128,192)"
  ctx.strokeRect(0,0,canvas.width,canvas.height);
}

//クリア
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}




