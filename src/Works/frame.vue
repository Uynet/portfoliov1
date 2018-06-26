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
</div>
</template>
<script>
export default{ 
  props:["product"],
  computed:{
    path:function(){
      return "../../resource/" + this.product.path + ".png"; 
    }
  }
}
</script>
