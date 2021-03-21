<template>
  <main class="MbLogin">
    <b-container>
      <b-row>
        <b-col cols="12">
          <div>
            <section class="d-flex">
              <b-icon
                @click="Close(0)"
                icon="x-circle"
                scale="2"
                style="cursor: pointer;"
                class="ml-auto mt-4 mr-3"
                variant="danger"
              ></b-icon>
            </section>
            <img
              class="image_logo mt-4 mb-2"
              src="../../../assets/Images/Logo/logoNavbar.svg"
              alt="navbar"
            />
          </div>
        </b-col>
        <b-col cols="12">
          <section>
            <h2 class="text-center titles mt-3">
              Masuk atau daftar ke BalikpapanEnak
            </h2>
          </section>
          <section class="text-center mt-4">
            <button @click="onLogin" class="px-5 btn_masuk mr-3 py-2">
              Masuk
            </button>
            <button @click="onSignup" class="px-5 btn_daftar py-2">
              Daftar
            </button>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'MobileLogin',
  methods: {
    ...mapMutations(['setCase']),
    Close(payload) {
      this.setCase(payload)
    },
    onLogin() {
      this.$router.push('/login')
    },
    onSignup() {
      this.$router.push('/signup')
    }
  }
}
</script>
<style scoped>
.MbLogin {
  height: 100vh;
  background: rgb(220, 233, 253);
}

.image_logo {
  background-color: #222b45;
  padding: 10px;
  box-shadow: 3px 4px 7px #2e364b;
  border-radius: 25px 7px 35px 7px;
  display: block;
  margin: 0 auto;
}
.titles {
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
}
.btn_masuk,
.btn_daftar {
  border: none;
  font-weight: 500;
  box-shadow: 2px 3px 7px rgb(182, 182, 182);
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
}
.btn_masuk {
  background: #d01010;
  color: #ffffff;
}
.btn_daftar {
  background: #ffffff;
}
</style>
