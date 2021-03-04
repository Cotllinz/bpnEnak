<template>
  <div>
    <b-navbar toggleable="lg" fixed="top">
      <b-container>
        <b-navbar-brand
          ><img
            class="logo__images"
            src="../assets/Images/Logo/logoNavbar.svg"
            alt="imagesLogo"
        /></b-navbar-brand>
        <b-navbar-nav class="navbar_items flex-row">
          <b-nav-item class="mr-lg-3 mr-3">Login</b-nav-item>
          <b-nav-item>Signup</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'navigationBar'
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
</style>
