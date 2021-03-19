<template>
  <div>
    <div class="about">
      <navbar />
      <headerComponent class="header" />
    </div>
    <why class="why" />
    <team class="team" />

    <footerBar />
  </div>
</template>

<script>
import navbar from '../components/_base/about/navbar'
import headerComponent from '../components/_base/about/header'
import why from '../components/_base/about/why'
import team from '../components/_base/about/team'
import footerBar from '../components/footerBar'

export default {
  components: {
    navbar,
    headerComponent,
    why,
    team,
    footerBar
  }
}
</script>

<style scoped>
.about {
  background-image: url('../assets/Images/stock/about-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 750px;
}

.header {
  margin-top: 100px;
}

.team {
  margin-top: 100px;
}

@media (max-width: 768px) {
  .about {
    background: #394d89;
    height: 640px;
  }
}
</style>
