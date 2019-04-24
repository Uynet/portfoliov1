<template>
  <div>
    <div class = "logo" id="TitleLogo" align="center">
      ゆいブログ
          <div class = "logo_subtext"></div>
    </div>
    <div align="center">
      <img class = "chara" src = "../resource/img/bg.png"></img>
    </div>
    <div class = "links" align="center">
     <a class="link fab fa-twitter"    href="http://twitter.com/uynet"></a>
     <a class="link fab fa-soundcloud" href="http://soundcloud.com/saihate-1"></a>
     <a class="link fab fa-github"     href="http://github.com/Uynet"></a>
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
