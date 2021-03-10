<template>
  <div class="foodDetails">
    <navigationBar :onScroll="false" />
    <main class="foodMain">
      <imageCaraousel />
      <menusInformation />
    </main>
    <footerBar />
  </div>
</template>
<script>
import navigationBar from '@/components/navigationBar.vue'
import footerBar from '@/components/footerBar.vue'
import imageCaraousel from '@/components/_base/foodDetailsPage/foodDetailsCaraousel.vue'
import menusInformation from '@/components/_base/foodDetailsPage/menusInformation.vue'
export default {
  name: 'foodetails',
  components: {
    navigationBar,
    footerBar,
    imageCaraousel,
    menusInformation
  }
}
</script>
<style scoped>
.foodDetails {
  background: #ffffff;
}
.foodMain {
  padding-top: 110px;
  height: 2000px;
}
</style>
