<template>
  <i v-bind:class="this.hambarclass" v-on:click="$emit('toggle')"></i>
</template>
<script>
export default{
  props:["state"],
  computed:{
    hambarclass:function(){
            switch(this.state){
              case "closed" : return "fas fa-bars" ;
              case "open" : return "fas fa-times" ;
              default : return "error";
            }
    }
  }
}
</script>

