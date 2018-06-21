<template>
  <div v-bind:class="layerclass" v-on:click="$emit('toggle')"></div>
</template>
<script>
export default{
  props:["state"],
  computed:{
    layerclass:function(){
            switch(this.state){
              case "closed" : return "layer" ;
              case "open" : return "layer_dark" ;
              default : return "error";
            }
    }
  }
}
</script>
