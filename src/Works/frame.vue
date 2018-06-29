<template>
<div class="frame" align="center">
     <div class="image">
     <a v-bind:href="product.link">
       <img v-bind:src="path" class="img_show"></img>
     </a>
     </div>

     <div class="title">
      -  {{this.product.title}}  -
     </div>
     <div class="passage">
     {{this.product.passage}}
     </div>
     <div class="icons">
     <a v-if="product.moment" v-bind:href="product.moment"><i class="fas fa-bolt fa-yellow"></i></a>
     <i class="fab fa-blogger fa-azure"></i>
     <a v-if="product.code" v-bind:href="product.code"><i class="fas fa-code fa-green"></i></a>
     <i class="fas fa-ellipsis-h fa-hilight"></i>


     </div>
</div>
</template>
<script>
export default{ 
  props:["product"],
  computed:{
    path:function(){
      return "../../resource/" + this.product.path + ".png"; 
    },
    isBolt:function(){
      return this.product.moment != "null";
    }
  }
}
</script>
