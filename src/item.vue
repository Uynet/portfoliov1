<template>
<router-link v-bind:to="path">
  {{title}}
    <div class="label"></div>
</router-link>
</template>

<script>
export default{
  props:["title","path"],
  methods:{
    open:function(){
    }
  },
}
</script>
