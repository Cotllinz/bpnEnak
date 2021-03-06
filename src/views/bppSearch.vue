<template>
  <div class="bppSearch">
    <navBar :onScroll="false" />
    <main class="main_details">
      <b-container>
        <section class="desc_titleSearch">
          <h3>Balikpapan’s Restaurants</h3>
          <h5>Search results for “all”</h5>
        </section>
        <b-row>
          <b-col lg="4">
            <searchFilter />
          </b-col>
          <b-col>
            <cardProduct />
          </b-col>
        </b-row>
      </b-container>
    </main>
    <footerBar />
  </div>
</template>
<script>
import navBar from '@/components/navigationBar.vue'
import footerBar from '@/components/footerBar.vue'
import searchFilter from '@/components/_base/searchPage/subFilterSearch.vue'
import cardProduct from '@/components/_base/searchPage/cardProducts.vue'
export default {
  name: 'bppSearch',
  components: {
    navBar,
    searchFilter,
    cardProduct,
    footerBar
  },
  created() {
    window.scrollTo(0, 0)
  }
}
</script>
<style scoped>
.bppSearch {
  background: #f0f0f0;
  /*   height: 3000px; */
}
.main_details {
  padding-top: 110px;
}
.desc_titleSearch h3 {
  font-family: 'Arvo', serif;
}
.desc_titleSearch h5 {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}
</style>
