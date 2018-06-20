import Vue from 'vue'
import App from './App.vue'

Vue.component('item-menu', {
  props:["title","layer2"],
  methods:{
    open:function(){
      switch(this.title){
        case "About" :
          container.open("About");
          break;
        case "Works" :
          break;
        case "Music" :
          break;
      }
    }
  },
  template:`
  <div v-on:click="open">{{title}}
    <div class="label"></div>
  </div>
  `
});

const container = new Vue({
  el:"#page",
  data:{
    state:"fas fa-bars",
    sidebar:"sidebar",
    container:"container",
    layer:"layer",
    layer2:"layer2",
    items:[
      { message:"About", },
      { message:"Works", },
      { message:"Unko", },
    ],
  },
  methods:{
    slide:function(){
      if(this.sidebar=="sidebar"){
        this.sidebar = "sidebar_open";
        this.layer = "layer_dark";
        this.state = "fas fa-times";
      }
      else{
        this.sidebar = "sidebar";
        this.layer = "layer";
        this.state = "fas fa-bars";
      }
    },
    open:function(){
      this.layer2 = "layer2_trans"
    }
  }
})

