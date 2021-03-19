<template>
  <div class="restoDetail">
    <navBar :onScroll="false" />
    <main class="mainDetails">
      <imageSlider />
      <reviewsMaps />
      <reviews />
      <otherMenus />
    </main>
    <footerBar />
  </div>
</template>
<script>
import navBar from '@/components/navigationBar.vue'
import footerBar from '@/components/footerBar.vue'
import imageSlider from '@/components/_base/restoDetailsPage/imageSlider.vue'
import reviewsMaps from '@/components/_base/restoDetailsPage/reviewsMaps.vue'
import reviews from '@/components/_base/restoDetailsPage/reviews.vue'
import otherMenus from '@/components/_base/restoDetailsPage/otherMenus.vue'
export default {
  name: 'restoDetails',
  components: {
    navBar,
    footerBar,
    imageSlider,
    reviewsMaps,
    reviews,
    otherMenus
  },
  data() {
    return {
      /*  reload: location.reload() */
    }
  },
  created() {
    window.scrollTo(0, 0)
  }
}
</script>
<style scoped>
.restoDetail {
  background: #ffffff;
}
.mainDetails {
  padding-top: 110px;
}
</style>
