import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes.js"
import item from "./item";
import sidebar from "./sidebar";
import hambar from "./hambar.vue";
import layer from "./layer.vue";
import linkicon from "./linkIcon.vue";

Vue.use(VueRouter);

const router = new VueRouter({routes})

const container = new Vue({
  router,
  el:"#page", data:{
    sidebarstate:"closed",
    container:"container",
    layer:"layer",
    items:[
      { message:"Top",path:"./" },
      { message:"About",path:"/about" },
      { message:"Works",path:"./works" },
    ],
    links:[
      {url: "http://twitter.com/highsate" , icon : "twitter"},
      {url : "http://github.com/uynet", icon : "github"},
      {url : "https://soundcloud.com/saihate-1", icon : "soundcloud"},
      {url : "http://uynet.work", icon : "blog"},
    ],
  },
  components:{
    sidebar:sidebar,
    item:item,
    hambar:hambar,
    layer:layer,
    linkicon:linkicon,
  },
  methods:{
    toggle:function(){
      if(this.sidebarstate=="closed"){
        this.sidebarstate = "open";
        this.layer = "layer_dark";
      }
      else{
        this.sidebarstate = "closed";
        this.layer = "layer";
      }
    },
  }
})

