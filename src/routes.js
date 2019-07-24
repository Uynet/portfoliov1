import index from './components/index.vue';
import about from './components/about.vue';
import works from './components/Works/works.vue';
import blog from './components/blog.vue';
// import post0 from './components/Posts/post0.vue';

export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/works',
    component: works
  },
  {
    path: '/blog',
    component: blog
  }
  /*
  {
    path: '/post/0',
    component: post0
  },
  */
]
