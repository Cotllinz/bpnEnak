<template>
  <div>
    <div class="form animate__animated animate__fadeInLeft">
      <div class="top">
        <div class="d-flex justify-content-between align-items-center">
          <div></div>
          <div>
            <router-link to="/signup">
              <p class="signup-text mt-3">
                Sign Up
              </p></router-link
            >
          </div>
        </div>
      </div>
      <div class="bottom">
        <p class="text-grey text-center">
          Welcome Back!
        </p>
        <h4 class="text-black mt-3">
          Login your account
        </h4>
        <label class="text-grey mt-4">
          Email
        </label>
        <br />
        <input
          v-model="form.user_email"
          type="text"
          class="text-black text-14"
          autofocus
        />
        <br />
        <label class="text-grey mt-4">
          Password
        </label>
        <br />
        <input
          v-on:keyup.enter="loginUser"
          v-model="form.user_password"
          type="password"
          class="text-black text-14"
        />
        <div v-if="error" class="error mt-3">
          <p>*{{ error }}</p>
        </div>
        <button @click="loginUser" class="btn-login mt-5">
          Login
        </button>
        <p class="text-black text-14 text-center mt-4">
          Don't have an account ?
          <router-link to="/signup">sign up here</router-link>
        </p>
        <router-link to="/forgot">
          <p class="text-grey text-14 text-center mt-2">
            Forgot password ?
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Alert from '../../../mixins/Alert'
export default {
  mixins: [Alert],
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      },
      error: ''
    }
  },
  computed: {
    ...mapGetters(['getPathHistory'])
  },
  methods: {
    ...mapActions(['login']),
    ...mapMutations(['setCase']),
    loginUser() {
      if (!this.form.user_email || !this.form.user_password) {
        return (this.error =
          'Please fill your email & password correctly first')
      }
      this.login(this.form)
        .then(() => {
          this.AlertSuccesLogin().then(res => {
            if (res) {
              if (this.getPathHistory) {
                this.$router.push(this.getPathHistory)
                this.setCase(0)
              } else {
                this.$router.push('/')
                this.setCase(0)
              }
            }
          })
          this.error = ''
        })
        .catch(err => {
          this.setCase(0)
          this.AlertErrorLogin(err.data.msg)
          this.error = ''
        })
    }
  }
}
</script>

<style scoped>
* {
  font-family: poppins;
}

.text-grey {
  color: #bab6b9;
}

.text-black {
  color: rgb(51, 51, 51);
}

.text-14 {
  font-size: 14px;
}

h4 {
  font-weight: 700;
}

.form {
  padding: 0px 150px;
}

input {
  border-top: unset;
  border-left: unset;
  border-right: unset;
  border-bottom: 1px solid #bab6b9;
  transition-duration: 0.6s;
  width: 100%;
}

input:focus {
  border-bottom: 1px solid #fa4444;
  outline: unset;
}

.signup-text {
  color: #fa4444;
  font-size: 18px;
  font-weight: 700;
}

.btn-login {
  background-color: #fa4444;
  color: #fff;
  font-weight: 700;
  width: 100%;
  padding: 15px 0;
  outline: unset;
  transition-duration: 0.6s;
  border: unset;
  border-radius: 10px;
}

.btn-login:hover {
  background-color: #ca3a3a;
}

.bottom {
  margin-top: 100px;
}

a {
  text-decoration: none !important;
}

.error {
  width: 100%;
  background-color: #ca3a3a;
  border-radius: 5px;
  padding: 0 5px;
}

.error p {
  font-size: 12px;
  color: #fff;
}

@media (max-width: 1200px) {
  .form {
    padding: 0px 100px;
  }
}

@media (max-width: 992px) {
  .form {
    padding: 0px 100px;
  }
}

@media (max-width: 768px) {
  .form {
    padding: 0px 80px;
  }
}

@media (max-width: 576px) {
  .form {
    padding: 0px 60px;
  }
}
</style>
