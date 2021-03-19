<template>
  <div>
    <b-navbar
      v-if="getCase === 0"
      :class="onScroll ? { change_color: scrollPosition > 70 } : 'navbarColor'"
      toggleable="lg"
      fixed="top"
    >
      <b-container>
        <b-navbar-brand
          ><img
            @click="onHome"
            class="logo__images"
            src="../assets/Images/Logo/logoNavbar.svg"
            alt="imagesLogo"
          />
        </b-navbar-brand>

        <!-- Search Section -->
        <b-navbar-nav v-if="!onScroll" class="ml-2 d-none d-md-block">
          <b-input-group class="search__Input">
            <template #prepend>
              <b-input-group-text class="search_btn"
                ><b-icon
                  icon="search"
                  font-scale="1.5"
                  aria-hidden="true"
                  style="color:#797878;"
                ></b-icon
              ></b-input-group-text>
            </template>
            <b-form-input
              type="text"
              v-model.lazy="getParams.searchName"
              @keyup.enter="searchFood($event)"
              @keyup="searchFood($event)"
              placeholder="Specify your taste"
              maxlength="30"
            ></b-form-input>
            <b-input-group-append>
              <button class="btn_Onsearch px-2">Search</button>
            </b-input-group-append>
          </b-input-group>
        </b-navbar-nav>

        <b-navbar-nav class="navbar_items ml-auto align-items-center flex-row">
          <b-nav-item class="mr-lg-3 mr-3 d-none d-md-block" @click="onLogin"
            >Login</b-nav-item
          >
          <b-nav-item @click="onSignup" v-if="onScroll">Signup</b-nav-item>
          <b-nav-item v-else
            ><button
              @click="onSignup"
              class="btn_singUp d-none d-md-block py-2 px-3"
            >
              Create Account
            </button>
            <div class="d-block d-md-none d-flex mobile_signup">
              <section>
                <b-icon
                  @click="clickTrigger(2)"
                  class="mr-3"
                  icon="search"
                  font-scale="1.5"
                  aria-hidden="true"
                  style="color:#ffffff;"
                ></b-icon>
              </section>
              <section>
                <b-icon
                  @click="clickTrigger(1)"
                  class="mr-3"
                  icon="person-fill"
                  font-scale="1.5"
                  aria-hidden="true"
                  style="color:#ffffff;"
                ></b-icon>
              </section>
            </div>
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  props: ['onScroll'],
  name: 'navigationBar',
  data() {
    return {
      scrollPosition: null,
      search: ''
    }
  },
  computed: {
    ...mapGetters({ getParams: 'getParams', getCase: 'getCase' })
  },
  methods: {
    ...mapMutations(['restartLimit', 'setErrorFood', 'setCase']),
    ...mapActions(['sortingFoods']),
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    onLogin() {
      this.$router.push('/login')
    },
    onSignup() {
      this.$router.push('/signup')
    },
    searchFood(e) {
      this.restartLimit()
      this.sortingFoods()
        .then(res => {
          if (res) {
            this.setErrorFood(false)
          }
        })
        .catch(err => {
          if (err) {
            this.setErrorFood(true)
          }
        })
      if (e.key === 'Enter') {
        this.$router.push('/Bppsearch').catch(() => {})
      }
    },
    onHome() {
      this.$router.push('/')
    },
    clickTrigger(payload) {
      this.setCase(payload)
    }
  },
  created() {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>
<style scoped>
.navbar_items .nav-item .nav-link {
  color: #ffffff;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}
.navbar_items .nav-item .nav-link:hover {
  color: #eeeeee;
}
.logo__images {
  cursor: pointer;
  width: 125px;
  object-fit: contain;
}
.change_color {
  transition: 0.5s;
  background-color: #222b45;
}
.navbarColor {
  background-color: #222b45;
}
.btn_singUp {
  border: none;
  background: #2e4b9d;
  border-radius: 7px;
  color: #ffffff;
  outline: none;
}
.mobile_signup {
  color: #ffffff;
  text-decoration: none;
}
.mobile_signup:hover {
  color: #e9e9e9;
}
.btn_Onsearch {
  border: none;
  font-family: 'Poppins', sans-serif;
  background: #2e4b9d;
  border-radius: 0 7px 7px 0;
  color: #ffffff;
  outline: none;
}
.btn_Onsearch:hover {
  background: #2e4b9d;
}
.btn_singUp:hover {
  transition: 0.5s;
  background: #173a9b;
}
.search__Input {
  width: 600px;
}
.input-group,
input {
  height: 45px;
}
.search_btn {
  border-radius: 10px;
  padding-left: 20px;
  background: #fafafa;
  border-right: none;
}
input[type='text'] {
  font-family: 'Poppins', sans-serif;
  outline: none;
  padding: 5px 14px 5px;
  font-size: 18px;
  background: #fafafa;
  border-radius: 10px;
  letter-spacing: 4px;
  box-shadow: none !important;
  border: 1px solid #ccc;
  border-left: none;
}
@media (max-width: 1025px) {
  .search__Input {
    width: 440px;
  }
}
@media (max-width: 991px) {
  .search__Input {
    width: 300px;
  }
  input[type='text'] {
    font-size: 16px;
    background: #fafafa;
    border-radius: 10px;
    letter-spacing: 0;
  }
}
</style>
