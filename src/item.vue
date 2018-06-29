<template>
<div v-on:click="sound">
  {{title}}
  <div class="label"></div>
</div>
</template>

<script type="module">
export default{
  props:["title","path"],
  methods:{
    sound:function(){
    }
  },
}
</script>
