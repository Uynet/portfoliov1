import Vue from 'vue'
import App from './App.vue'


Vue.component('todo-item', {
  props: ['todo'],
  template: '<div class="box">{{ todo.text }}</div>'
})

new Vue({
  el:"#hambar",
  data:{
    view:"v-a",
    count:0,
  },
  components:{
    'v-a': {
      template: '<div class="unko">A</div>'
    },
    'v-b': {
      template: '<div>B</div>'
    },
  },
  methods:{
    po:function(){
      this.count++;
      if(this.view == "v-a")this.view = "v-b";
      else if (this.view == "v-b")this.view = "v-a";
      console.log(this.count);
    }
  },
});
new Vue({
  el: '#demo',
  data: {
    show: true
  }
})
