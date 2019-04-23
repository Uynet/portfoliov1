<template>
  <div>
    <div class = "logo" align="center">
      ゆいブログ
          <div class = "logo_subtext"></div>
    <img class = "chara" src = "../resource/img/bg.png" width=356></img>
    </div>
    <div class = "links" align="center">
     <i class="diamonde"><i class="link fab fa-twitter"></i></i>
     <i class="diamonde"><i class="link fab fa-soundcloud"></i></i>
     <i class="diamonde"><i class="link fab fa-github"></i></i>
    </div>
  </div>
</template>

<script>
export default{ 
  computed:{
    emo:function(){
      if(Math.random()<0.5){
        return "よおこそ♨";
      }else{
        return "こんにちわ☼";
      }
    },
  }
}
</script>
