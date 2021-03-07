<template>
  <div class="foodDetails">
    <navBar :onScroll="false" />
    <main class="mainDetails">
      <imageSlider />
    </main>
    <footerBar />
  </div>
</template>
<script>
import navBar from '@/components/navigationBar.vue'
import footerBar from '@/components/footerBar.vue'
import imageSlider from '@/components/_base/detailsPage/imageSlider.vue'
export default {
  name: 'Foodetails',
  components: {
    navBar,
    footerBar,
    imageSlider
  },
  created() {
    window.scrollTo(0, 0)
  }
}
</script>
<style scoped>
.foodDetails {
  background: #f0f0f0;
}
.mainDetails {
/*   height: 3000px; */
  padding-top: 110px;
}
</style>
