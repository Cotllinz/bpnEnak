<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col col lg="6" md="6" sm="12" cols="12">
          <resetForm />
        </b-col>
        <b-col col lg="6" md="6" sm="0" cols="0">
          <img
            class="auth-img animate__animated animate__fadeInRight"
            src="../../assets/Images/stock/brooke-lark-1Rm9GLHV0UA-unsplash.jpg"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import resetForm from '../../components/_base/auth/resetForm'
export default {
  components: {
    resetForm
  }
}
</script>

<style scoped>
* {
  overflow: hidden;
}

.col,
.col-lg-6,
.col-md-6,
.col-sm-0,
.col-0 {
  padding: unset;
}
.auth-img {
  width: 100%;
  height: 100vh;
}
</style>
