<template>
  <div>
    <b-navbar
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
        <b-navbar-nav v-if="!onScroll" class="ml-2">
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
              placeholder="Specify your taste"
              maxlength="30"
            ></b-form-input>
            <b-input-group-append>
              <button class="btn_Onsearch px-2">Search</button>
            </b-input-group-append>
          </b-input-group>
        </b-navbar-nav>

        <b-navbar-nav class="navbar_items ml-auto align-items-center flex-row">
          <b-nav-item @click="designerAnjg" class="mr-lg-3 mr-3"
            >Login</b-nav-item
          >
          <b-nav-item v-if="onScroll">Signup</b-nav-item>
          <b-nav-item v-else
            ><button class="btn_singUp py-2 px-3">
              Create Account
            </button></b-nav-item
          >
        </b-navbar-nav>
        <!-- Right aligned nav items -->
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
  props: ['onScroll'],
  name: 'navigationBar',
  data() {
    return {
      scrollPosition: null
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    designerAnjg() {
      alert(
        'Designernya ke Anjg kalo ngasih Design Gak tau diri anjg bangst \n \n aku sayang yoko'
      )
    },
    onHome() {
      this.$router.push('/')
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
.btn_Onsearch {
  border: none;
  font-family: 'Poppins', sans-serif;
  background: #2a5be2;
  border-radius: 0 7px 7px 0;
  color: #ffffff;
  outline: none;
}
.btn_Onsearch:hover {
  background: #2a5be2;
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
</style>
