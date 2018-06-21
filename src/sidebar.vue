<template>
      <div v-bind:class="sidebar">
        <div class = "menu">
          <div class="menutitle">☆めにゅ〜</div>
          <div class="label2"></div>

          <div class = "item" v-for="item in items">
            <item-menu v-bind:layer2="layer2" v-bind:title="item.message"></item-menu>
          </div>
        </div>
      </div>
</template>
