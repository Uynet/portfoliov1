<template>
<div class="flame">
     <div class="image">
       <img v-bind:src="path" class="unko"></img>
     </div>
     <div class="passage">
     つくったよ
     </div>
</div>
</template>
<script>
export default{ 
  props:["title"],
  computed:{
    path:function(){
      return "../../resource/" + this.title + ".png"; 
    }
  }
}
</script>
