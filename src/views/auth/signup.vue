<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col col lg="6" md="6" sm="12" cols="12">
          <signupForm />
        </b-col>
        <b-col col lg="6" md="6" sm="0" cols="0">
          <img
            class="auth-img animate__animated animate__fadeInUp"
            src="../../assets/Images/stock/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import signupForm from '../../components/_base/auth/signupForm'
export default {
  components: {
    signupForm
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
  min-height: 670px;
}
</style>
