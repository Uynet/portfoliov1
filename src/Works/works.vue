<template>

<div>

<div align="center" class="works">作品おきば</div>

<containts v-bind:products="this.products"></containts>

<div align="center" class="works">音楽</div>

<div align="center">
<iframe style="border: 0; width: 100%; height: 112px;" src="https://bandcamp.com/EmbeddedPlayer/album=1352470804/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2081494030/transparent=true/" seamless><a href="http://trap-titech.bandcamp.com/album/trap-2018"]traP新歓コンピ2018 by uynet</a></iframe>

<iframe width="100%" height="128" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/saihate-1/immortal-flower&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"></iframe>

部内音ゲーに提供

<iframe width="100%" height="128" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/saihate-1/ninjsflicker-ost&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"></iframe>

NinjaFlicker

<iframe width="100%" height="128" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=
https://soundcloud.com/saihate-1/nmqlbynuqwaf
&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"></iframe>

NinjaFlicker ステージ曲

<iframe width="100%" height="128" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/saihate-1/pobattle4&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"></iframe>
ポ

<iframe width="100%" height="128" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/saihate-1/2017m3preview&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"></iframe>

2017秋M3

<iframe width="100%" height="128" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/saihate-1/rainbow-treasure&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"></iframe>

無料音源で本気だした
</div>

</div>
</template>
<script>
import containts from "./containts";

export default{ 
  data:function(){
  return {
      products:[
        {
        path:"kawasemi",
        title:"kawasemi",
        passage:"JS製2Dアクションゲームです",
        link:"http://kawasemi.uynet.trap.show",
        },
        {
        path:"artc",
        title:"芸術C",
        passage:"スマホで開いてね",
        link:"http://artc.uynet.trap.show",
        },
      ],
    }
  },
  components:{
    containts:containts
  },
}
</script>
