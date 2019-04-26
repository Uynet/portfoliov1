<template>
<div>

  <div class="headbox" align="center">作ったもの</div>
    <div class="sideline rightside"></div>
    <div class="sideline leftside"></div>
  <div class="dummy_padding"></div>

  <containts v-bind:products="this.products" align="center"></containts>

</div>
</template>
<script>
import containts from "./containts";

export default{ 
  data:function(){
  return {
      musics:[
      {
      title:"Stardust",
      passage:"2018春新歓コンピ",
      },
      ],
      products:[
        {
        path:"kawasemi",
        title:"サイハテドロップ",
        hilight:"第七回GAME^3優勝",
        passage:"JS製2Dアクションゲームです",
        link:"http://kawasemi.uynet.trap.show",
        moment:"https://twitter.com/i/moments/953677385584427008",
        code:"https://github.com/Uynet/kawasemi",
        blog:"https://www.titech.ac.jp/news/2019/043553.html",
        },
        {
        path:"visualizer",
        title:"CPCTF visualizer2019",
        hilight:false,
        passage:"CTFのやつ",
        link:"http://visualizer.uynet.trap.show",
        moment:"https://twitter.com/i/moments/1103656306479513600?s=13",
        code:"https://github.com/Uynet/CPCTFvisualizer2019",
        blog:"https://trap.jp/post/697/",
        },
        {
        path:"artc",
        title:"芸術C",
        hilight:false,
        passage:"スマホで開いてね",
        link:"http://artc.uynet.trap.show",
        moment:false,
        code:"https://github.com/Uynet/artc",
        },
        {
        path:"raitracing",
        title:"レイトレ",
        hilight:false,
        passage:"レイトレしただけ",
        link:false,
        moment:false,
        code:"https://github.com/Uynet/RayTracing",
        },
        {
        path:"uyblog",
        title:"ゆいブログ",
        hilight:false,
        passage:"このサイト",
        link:false,
        moment:false,
        code:"https://github.com/Uynet/uynet.github.io",
        },
        {
        path:"ninja",
        title:"NinjaFlicker",
        hilight:false,
        passage:"部制作のスマホゲー",
        link:"https://trap.jp/post/480/",
        moment:false,
        code:false,
        blog:"https://trap.jp/post/480/",
        },
        {
        path:"po",
        title:"PolarSnowFantasy",
        hilight:false,
        passage:"サークル制作のげーむ",
        link:"https://trap.jp/post/35/",
        moment:false,
        code:false,
        blog:"https://trap.jp/post/35/",
        },
      ],
    }
  },
  components:{
    containts:containts
  },
}
</script>
