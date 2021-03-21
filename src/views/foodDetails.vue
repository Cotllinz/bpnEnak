<template>
  <div class="foodDetails">
    <navigationBar :onScroll="false" />
    <LoginMobile v-if="getCase === 1" />
    <main class="foodMain">
      <imageCaraousel />
      <menusInformation />
      <otherMenus />
    </main>
    <footerBar />
  </div>
</template>
<script>
import navigationBar from '@/components/navigationBar.vue'
import footerBar from '@/components/footerBar.vue'
import LoginMobile from '@/components/_base/MobileSearch/LoginMobile.vue'
import imageCaraousel from '@/components/_base/foodDetailsPage/foodDetailsCaraousel.vue'
import menusInformation from '@/components/_base/foodDetailsPage/menusInformation.vue'
import otherMenus from '@/components/_base/foodDetailsPage/otherMenus.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'foodetails',
  components: {
    navigationBar,
    footerBar,
    imageCaraousel,
    LoginMobile,
    menusInformation,
    otherMenus
  },
  created() {
    window.scrollTo(0, 0)
  },
  computed: {
    ...mapGetters(['getCase'])
  }
}
</script>
<style scoped>
.foodDetails {
  background: #ffffff;
}
.foodMain {
  padding-top: 110px;
}
</style>
