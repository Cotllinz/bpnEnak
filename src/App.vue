<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
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
  updated() {
    if (
      this.$router.history.current.path !== '/login' &&
      this.$router.history.current.path !== '/signup' &&
      this.$router.history.current.path !== '/forgot'
    ) {
      this.setHistory(this.$router.history.current.path)
    }
  },
  created() {
    this.interceptorRequest()
    this.interceptorResponse()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    ...mapActions(['interceptorRequest', 'interceptorResponse']),
    ...mapMutations(['setCase', 'setHistory']),
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
.swal2-title,
.swal2-html-container,
.swal2-confirm,
.swal2-deny {
  font-family: 'Poppins', sans-serif;
}
</style>
