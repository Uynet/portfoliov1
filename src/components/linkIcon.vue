<template>
<a v-bind:href="url"><i v-bind:class="awesome"></i></a>
</template>

<script>
export default{
  props:["url","icon"],
  computed:{
    awesome:function(){
      switch(this.icon){
      case "twitter" : return "fab fa-twitter-square fa-black";
      case "github" : return "fab fa-github fa-black";
      case "soundcloud" : return "fab fa-soundcloud fa-black";
      case "blog" : return "fab fa-blogger fa-black";
      default : return "fab fa-blogger fa-black";
      }
    }
  },
}
</script>
