<template>
  <div class="foodDetails">
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
import imageSlider from '@/components/_base/detailsPage/imageSlider.vue'
import reviewsMaps from '@/components/_base/detailsPage/reviewsMaps.vue'
import reviews from '@/components/_base/detailsPage/reviews.vue'

import otherMenus from '@/components/_base/detailsPage/otherMenus.vue'
export default {
  name: 'Foodetails',
  components: {
    navBar,
    footerBar,
    imageSlider,
    reviewsMaps,
    reviews,
    otherMenus
  },
  created() {
    window.scrollTo(0, 0)
  }
}
</script>
<style scoped>
.foodDetails {
  background: #ffffff;
}
.mainDetails {
  padding-top: 110px;
}
</style>
