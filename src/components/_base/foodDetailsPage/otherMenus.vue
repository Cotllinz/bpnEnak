<template>
  <section>
    <b-container v-if="loadingMenu">
      <section class="title_menus mt-2 mb-3">
        <h4>Other Product From Restaurant</h4>
      </section>
      <b-row cols-md="2" cols-lg="2" cols-xl="3">
        <b-col
          v-for="(items, index) in menu.slice(0, 3)"
          :key="index"
          class="pr-lg-0"
        >
          <b-card
            :img-src="`${imageUrl}menu/${items.menu_image[0].image_name}`"
            class="py-lg-2 py-3 px-3 card_images align-items-center mb-4"
            img-alt="cardProduct"
            img-left
          >
            <section class="desc_Food">
              <h2>{{ items.menu_name }}</h2>
              <p>
                {{ items.menu_desc.slice(0, 110) + ',...' }}
              </p>
              <h5>Rp. {{ formatPrice(items.menu_price) }}</h5>
            </section>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'otherMenus',
  data() {
    return {
      imageUrl: process.env.VUE_APP_URL_IMAGE
    }
  },
  computed: {
    ...mapGetters({ menu: 'getMenuList', loadingMenu: 'getLoadingMenu' })
  },
  created() {
    this.menuList(this.$route.query.restoId)
  },
  methods: {
    ...mapActions(['menuList']),
    formatPrice(value) {
      if (value) {
        const val = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        return val
      }
    }
  }
}
</script>
<style scoped>
.card_images .card-img-left {
  min-width: 171px;
  height: 171px;
  border-radius: 10px;
  object-fit: cover;
  object-position: 45%;
}
.card {
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  height: 200px;
}
.card-body {
  padding: 0 0 0 5px;
}
.desc_Food {
  font-family: 'Poppins', sans-serif;
}
.desc_Food h2 {
  font-size: 18px;
  font-weight: 700;
  color: #d01010;
  margin-bottom: 5px;
}
.desc_Food p {
  font-size: 12px;
  height: 100px;
  margin-bottom: 0;
}
.desc_Food h5 {
  font-weight: 700;
  font-size: 18px;
}
.title_menus h4 {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #555555;
  font-size: 20px;
}
@media (max-width: 991px) {
  .card_images .card-img-left {
    min-width: 131px;
    height: 171px;
  }
}

@media (max-width: 576px) {
  .card_images .card-img-left {
    min-width: 171px;
    height: 171px;
  }
}
@media (max-width: 393px) {
  .card_images .card-img-left {
    min-width: 131px;
    height: 171px;
  }
}
</style>
