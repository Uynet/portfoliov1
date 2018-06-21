<template>
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
</template>
