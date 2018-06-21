import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes.js"
import item from "./item";
import side from "./side";
Vue.use(VueRouter);

const cl = console.log
const router = new VueRouter({routes})

const sideComponent = Vue.component("side",{
  data:function(){
    return {
      state:"fas fa-bars",
      count:0,
    }
  },
  template:`
    <div class="side">
      <div class="sidelineR">
        <div class="cornerRT">
          <i v-bind:class=state v-on:click="$emit('open-menu')"></i>
        </div>
      </div>
      <div class="sidelineL">
        <div class="cornerLT">
          <div class = "links">
            <a href = "http://twitter.com/highsate"><i class="fab fa-twitter-square fa-black"></i></a>
            <a href = "http://github.com/uynet"><i class="fab fa-github fa-black"></i></a>
            <a href = "https://soundcloud.com/saihate-1"><i class="fab fa-soundcloud fa-black"></i></a>
            <a href = "http://uynet.work"><i class="fab fa-blogger fa-black"></i></a>
          </div>
        </div>
      </div>
    </div>
  `
})

Vue.component('item-menu', {
  props:["title","layer2"],
  methods:{
    open:function(){
      container.open(this.title);
    }
  },
  template:`
  <div v-on:click="open">{{title}}
    <div class="label"></div>
  </div>
  `
});

const container = new Vue({
  router,
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
        cl(sideComponent)
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

