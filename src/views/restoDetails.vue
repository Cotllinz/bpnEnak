<template>
  <div class="restoDetail">
    <navBar :onScroll="false" />
    <LoginMobile v-if="getCase === 1" />
    <main v-if="getCase === 0" class="mainDetails">
      <imageSlider />
      <reviewsMaps />
      <reviews />
      <otherMenus />
    </main>
    <footerBar v-if="getCase === 0" />
  </div>
</template>
<script>
import navBar from '@/components/navigationBar.vue'
import footerBar from '@/components/footerBar.vue'
import imageSlider from '@/components/_base/restoDetailsPage/imageSlider.vue'
import reviewsMaps from '@/components/_base/restoDetailsPage/reviewsMaps.vue'
import LoginMobile from '@/components/_base/MobileSearch/LoginMobile.vue'
import reviews from '@/components/_base/restoDetailsPage/reviews.vue'
import otherMenus from '@/components/_base/restoDetailsPage/otherMenus.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'restoDetails',
  components: {
    navBar,
    footerBar,
    imageSlider,
    reviewsMaps,
    reviews,
    LoginMobile,
    otherMenus
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getCase'])
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
