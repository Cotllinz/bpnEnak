<template>
  <div>
    <b-container>
      <b-row>
        <b-col col lg="5" md="5" sm="6" cols="6">
          <img
            style="cursor:pointer;"
            @click="onHome"
            src="../../../assets/Images/Logo/logoNavbar.svg"
          />
        </b-col>
        <b-col col lg="7" md="7" sm="6" cols="6">
          <div class="center">
            <router-link to="/">
              <p>Home</p>
            </router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    onHome() {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
img {
  max-width: 150px;
  min-width: 100px;
}

p {
  font-family: 'Acme', sans-serif;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
