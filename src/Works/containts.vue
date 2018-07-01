<template>
<div class="containts" align="center">

<section v-for="product in products" class="products">
<frame v-bind:product="product"></frame>
</section>

<h3 align="center" class="works">参加作品</h3>

<section class="products" style="display:inline">
<div class="frame">
<div class="image">
<a href="https://trap.jp/post/480/"><img src="../../resource/ninja.png" class="img_show"></img></a>
</div>
<div class="fa-hilight"><b>GooglePlayIGF Top10</b></div>
<div class="title">
-  NinjaFlicker  -
</div>
<passage>部制作のスマホゲー<br>
サウンドすべて、一部グラフィックを担当</passage>
</div>


<div class="frame">
<div class="image">
<a href="https://trap.jp/post/35/"><img src="../../resource/po.png" class="img_show"></img></a>
</div>
<div class="title">
-  Polar Snow Fantasy  -
</div>
<passage>部制作のPCゲー<br>
サウンドすべて、一部グラフィックを担当</passage>
</div>
</section>


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
