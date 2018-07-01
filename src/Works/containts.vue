<template>
<div class="containts" align="center">

<section v-for="product in products" class="products">
<frame v-bind:product="product"></frame>
</section>

<h3 align="center" class="works">参加作品</h3>

<div class="frame">
<div class="image">
<img src="../../resource/ninja.png" class="img_show"></img>
</div>
<div class="title">
-  NinjaFlicker  -
</div>
<passage>スマホゲー</passage>
</div>

<h3 align="center" class="works">音楽</h3>

<section class="products">
<div class="frame_music">
<iframe style="border: 0; width: 100%; height: 112px;" src="https://bandcamp.com/EmbeddedPlayer/album=1352470804/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2081494030/transparent=true/" seamless><a href="http://trap-titech.bandcamp.com/album/trap-2018"]traP新歓コンピ2018 by uynet</a></iframe>
<div class="title">
-  Stardust  -
</div>

<div class="passage">
2018新歓コンピ
</div>
</div>

<div class="frame_music">
<iframe width="100%" height="128" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/saihate-1/immortal-flower&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"></iframe>

<div class="passage">
部内音ゲーに提供
</div>
</div>

<div class="frame_music">
<iframe width="100%" height="128" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/saihate-1/ninjsflicker-ost&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"></iframe>

<div class="passage">
NinjaFlicker
</div>
</div>
</section>


</div>
</template>
<script>
import frame from "./frame";
export default{ 
  props:["products"],
  components:{
    frame:frame
  },
}
</script>
