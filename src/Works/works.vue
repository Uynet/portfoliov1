<template>

<div>

<h3 style="color:#334478">さくひんおきば</h3>
<div class="label"></div>

<containts v-bind:products="this.products" align="center"></containts>

<div align="center" class="works">音楽</div>

<div align="center">
<iframe style="border: 0; width: 100%; height: 112px;" src="https://bandcamp.com/EmbeddedPlayer/album=1352470804/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2081494030/transparent=true/" seamless><a href="http://trap-titech.bandcamp.com/album/trap-2018"]traP新歓コンピ2018 by uynet</a></iframe>

<iframe width="100%" height="128" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/saihate-1/immortal-flower&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"></iframe>

部内音ゲーに提供

<iframe width="100%" height="128" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/saihate-1/ninjsflicker-ost&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"></iframe>

NinjaFlicker

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
        moment:"https://twitter.com/i/moments/953677385584427008",
        },
        {
        path:"artc",
        title:"芸術C",
        passage:"スマホで開いてね",
        link:"http://artc.uynet.trap.show",
        moment:false,
        },
        {
        path:"raitracing",
        title:"レイトレ",
        passage:"レイトレしただけ",
        link:false,
        moment:false,
        },
      ],
    }
  },
  components:{
    containts:containts
  },
}
</script>
