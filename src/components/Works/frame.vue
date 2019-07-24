<template>
<div class="frame" align="center">
     <div class="image">
     <a v-bind:href="product.link">
       <img v-bind:src="path" class="img_show" width = 200 height = 125></img>
     </a>
     </div>

     <div class="title">
      -  {{this.product.title}}  -
     </div>
     <div class="passage">
     {{this.product.passage}}
     </div>
     <!--i class="fas fa-ellipsis-h fa-gray"></i-->
     <div class="icons">
     <a v-if="product.moment" v-bind:href="product.moment"><i class="fas fa-bolt fa-yellow"></i></a>
     <a v-if="product.blog" v-bind:href="product.blog"> <i class="fas fa-book fa-azure"></i> </a>
     <a v-if="product.code" v-bind:href="product.code"><i class="fas fa-code fa-green"></i></a>


     </div>
</div>
</template>
<script>
export default{ 
  props:["product"],
  computed:{
    path:function(){
      return "../../resource/img/" + this.product.path + ".png"; 
    },
    isBolt:function(){
      return this.product.moment != "null";
    }
  }
}
</script>
