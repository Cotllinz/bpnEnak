<template>
  <div>
    <b-navbar
      :class="{ change_color: scrollPosition > 70 }"
      toggleable="lg"
      fixed="top"
    >
      <b-container>
        <b-navbar-brand
          ><img
            class="logo__images"
            src="../assets/Images/Logo/logoNavbar.svg"
            alt="imagesLogo"
        /></b-navbar-brand>
        <b-navbar-nav class="navbar_items flex-row">
          <b-nav-item @click="designerAnjg" class="mr-lg-3 mr-3"
            >Login</b-nav-item
          >
          <b-nav-item>Signup</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
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
  width: 125px;
  object-fit: contain;
}
.change_color {
  transition: 0.5s;
  background-color: #222b45;
}
</style>
