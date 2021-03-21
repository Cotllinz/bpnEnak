<template>
  <div class="bppSearch">
    <navBar :onScroll="false" :MobileSearch="true" />
    <LoginMobile v-if="getCase === 1" />
    <SearchMobile v-if="getCase === 2" />
    <main v-if="getCase === 0" class="main_details">
      <b-container>
        <section class="desc_titleSearch">
          <h3>Balikpapan’s Restaurants</h3>
          <h5>
            Search results for “{{
              getParams.searchName ? getParams.searchName : 'all'
            }}”
          </h5>
        </section>
        <b-row>
          <b-col cols="4" lg="4" class="d-none d-md-block">
            <searchFilter />
          </b-col>
          <b-col md="8">
            <cardProduct />
          </b-col>
        </b-row>
      </b-container>
      <footerBar />
    </main>
  </div>
</template>
<script>
import navBar from '@/components/navigationBar.vue'
import footerBar from '@/components/footerBar.vue'
import searchFilter from '@/components/_base/searchPage/subFilterSearch.vue'
import cardProduct from '@/components/_base/searchPage/cardProducts.vue'
import LoginMobile from '@/components/_base/MobileSearch/LoginMobile.vue'
import SearchMobile from '@/components/_base/MobileSearch/SearchMobile.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'bppSearch',
  components: {
    navBar,
    searchFilter,
    cardProduct,
    footerBar,
    LoginMobile,
    SearchMobile
  },

  computed: {
    ...mapGetters(['getParams', 'getCase'])
  },

  created() {
    window.scrollTo(0, 0)
    this.restartLimit()
  },
  methods: {
    ...mapMutations(['restartLimit'])
  }
}
</script>
<style scoped>
.bppSearch {
  background: #f0f0f0;
}
.main_details {
  padding-top: 110px;
  min-height: 100vh;
}
.desc_titleSearch h3 {
  font-family: 'Arvo', serif;
}
.desc_titleSearch h5 {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}
</style>
