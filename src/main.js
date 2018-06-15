import Vue from 'vue'
import App from './App.vue'

new Vue({
  el:"#hambar",
  data:{
    lass:"sidebar",
    items:[
      {message:"about"},
      {message:"works"},
      {message:"unko"},
    ],
  },
  methods:{
    po:function(){
      if(this.lass=="sidebar")this.lass = "sidebar_open";
      else this.lass = "sidebar";
    }
  }
})

