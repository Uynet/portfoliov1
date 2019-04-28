<template>
  <div>
    <div class="sideline rightside"></div>
    <div class="sideline leftside"></div>
    <div class="BGCircle1"></div>
    <div class="BGCircle2"></div>
    <div class="BGCircle3"></div>
    <div class = "logo" id="TitleLogo" align="center">
      ゆいブログ
    </div>
   <marquee class = "logo_subtext" >
   {{emo}}
   </marquee>
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
      let a = Math.random();
      return "(*'-'*)よおこそ";
    },
  }
}
</script>
