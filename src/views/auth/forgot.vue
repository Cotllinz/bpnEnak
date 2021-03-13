<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col col lg="6" md="6" sm="12" cols="12">
          <forgotForm />
        </b-col>
        <b-col col lg="6" md="6" sm="0" cols="0">
          <img
            class="auth-img animate__animated animate__fadeInDown"
            src="../../assets/Images/stock/mae-mu-I7A_pHLcQK8-unsplash.jpg"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import forgotForm from '../../components/_base/auth/forgotForm'
export default {
  components: {
    forgotForm
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
  min-height: 620px;
}
</style>
