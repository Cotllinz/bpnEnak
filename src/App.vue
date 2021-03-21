<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'apps',
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    ...mapMutations(['setCase']),
    onResize() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth > 767) {
        this.setCase(0)
      }
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Arvo:wght@700&family=Poppins:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
html,
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
