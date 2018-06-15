import Vue from 'vue'
import App from './App.vue'

new Vue({
  el:"#hambar",
  data:{
    lass:"sidebar",
  },
  methods:{
    po:function(){
      this.lass = "sidebar_open";
      console.log(this.lass)
    }
  }
})
