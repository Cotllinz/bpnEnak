<template>
  <div class="home">
    <div class="homebg__display">
      <navBar :onScroll="true" />
      <headerHome />
      <mainHome />
      <corouselFood />
      <subSearch />
      <footerBar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navBar from '@/components/navigationBar.vue'
import headerHome from '@/components/_base/homePage/headerHome.vue'
import mainHome from '@/components/_base/homePage/mainComponentHome.vue'
import corouselFood from '@/components/_base/homePage/corouselFoods.vue'
import subSearch from '@/components/_base/homePage/subSearch.vue'
import footerBar from '@/components/footerBar.vue'
export default {
  name: 'Home',
  components: {
    navBar,
    headerHome,
    mainHome,
    corouselFood,
    subSearch,
    footerBar
  },
  data() {
    return {}
  },
  created() {
    window.scrollTo(0, 0)
  }
}
</script>
<style scoped>
.home {
  background: #ffffff;
}
</style>
