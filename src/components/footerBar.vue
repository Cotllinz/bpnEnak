<template>
  <footer class="footerBpp mt-lg-5 mt-4">
    <b-container>
      <b-row>
        <b-col cols="12" class="text-center">
          <section class="mt-lg-5 mt-4 mb-3 mb-lg-4">
            <img
              class="icons_media mr-2"
              src="../assets/Images/Logo/icons_email.svg"
              alt="icons_email"
            />
            <img
              class="icons_media mr-2"
              src="../assets/Images/Logo/icons_whatsapp.svg"
              alt="icons_whatsapp"
            />
            <img
              class="icons_media mr-2"
              @click="onAbout"
              src="../assets/Images/Logo/AboutUs.svg"
              alt="icons_AboutUs"
            />
            <img
              class="icons_media"
              src="../assets/Images/Logo/icons_ig.svg"
              alt="icons_ig"
            />
          </section>
          <section class="meHover mb-4 mb-lg-5">
            <h4>
              Interested in us? <br />
              Contact us above!
            </h4>
            <h5 class="mt-3">© 2021 R3 Tech</h5>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script>
export default {
  name: 'footerBar',
  methods: {
    onAbout() {
      this.$router.push('/about').catch(() => {})
    }
  }
}
</script>
<style scoped>
.footerBpp {
  background: #222b45;
}
.icons_media {
  cursor: pointer;
  width: 40px;
  object-fit: contain;
}
.meHover h4 {
  color: #ffffff;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
}
.meHover h5 {
  color: #ffffff;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}
</style>
