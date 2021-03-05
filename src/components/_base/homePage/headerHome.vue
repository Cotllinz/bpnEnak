<template>
  <div class="headerHome">
    <b-container>
      <section class="title_header">
        <h1>Find the best food in Balikpapan with us!</h1>
      </section>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'headerHome'
}
</script>
<style scoped>
.headerHome {
  padding-top: 70px;
}
.title_header {
  text-align: center;
  position: absolute;
  top: 50%;
  color: #ffffff;
  font-family: 'Arvo', serif;
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.title_header h1 {
  font-size: 60px;
  font-weight: 100;
  padding: 0 21%;
  line-height: 90px;
}
.headerHome {
  background-image: url('../../../assets/Images/MainThema/bg_images.jpg');
  height: 550px;
  position: relative;
  background-size: cover;
  background-position: 35% 10%;
  background-repeat: no-repeat;
}
@media (max-width: 576px) {
  .headerHome {
    background-position: 15% 10%;
  }
  .title_header h1 {
    font-size: 50px;
    font-weight: 100;
    padding: 0 0%;
    line-height: 65px;
  }
}
</style>
