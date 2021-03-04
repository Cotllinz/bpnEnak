<template>
  <div class="home">
    <div class="homebg__display">
      <navBar />
      <headerHome />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navBar from '@/components/navigationBar.vue'
import headerHome from '@/components/_base/homePage/headerHome.vue'
export default {
  name: 'Home',
  components: {
    navBar,
    headerHome
  }
}
</script>
<style scoped>
.homebg__display {
  background-image: url('../assets/Images/MainThema/bg_images.jpg');
  height: 550px;
  background-size: cover;
  background-position: 35% 10%;
  background-repeat: no-repeat;
}
</style>
