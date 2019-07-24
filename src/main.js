import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import routes from "./routes.js"
import item from "./item";
import sidebar from "./sidebar";
import side from "./side";
import hambar from "./hambar.vue";
import layer from "./layer.vue";
import linkicon from "./linkIcon.vue";

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({routes})

const store = new Vuex.Store({
  state: { },
  mutations: { }
})

const container = new Vue({
  router,
  el:"#page",
  store,
  data:{
    sidebarstate:"closed",
    container:"container",
    layer:"layer",
    box_state:"box",
    links:[
      {url: "http://twitter.com/highsate" , icon : "twitter"},
      {url : "http://github.com/uynet", icon : "github"},
      {url : "https://soundcloud.com/saihate-1", icon : "soundcloud"},
      //{url : "http://uynet.work", icon : "blog"},
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
        this.box_state = "box";
      }
      else{
        this.sidebarstate = "closed";
        this.layer = "layer";
        this.box_state = "box_white";
      }
    },
  },
})

export default container;
