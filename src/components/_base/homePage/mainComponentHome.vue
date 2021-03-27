<template>
  <main>
    <b-container>
      <div class="search__Input mx-auto">
        <b-input-group>
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
            autocomplete="off"
            v-model="searchFoods"
            @keyup.enter="searchFood"
            placeholder="Specify your taste"
            maxlength="30"
          ></b-form-input>
        </b-input-group>
      </div>
      <b-row cols-lg="2" cols-md="2" cols="1">
        <b-col lg="12" cols="12" md="12" class="mt-lg-5 mt-4">
          <section class="animate__animated animate__fadeIn">
            <h2>Best Choice</h2>
            <p class="mt-1 mt-lg-0">
              These are our collection that can you find from each district
              around Balikpapan.
            </p>
          </section>
        </b-col>
        <b-col v-for="(items, index) in restoTop" :key="index">
          <section class="cardBest__food">
            <b-card-group deck>
              <b-card
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="300"
                style="cursor: pointer;"
                @click="goToResto(items)"
                class="images_food mb-3 mb-lg-4"
                :img-src="`${imageUrl}resto/${items.resto_image}`"
                img-alt="images_bestFood"
                img-top
              >
                <b-card-text class="desc_bestFood">
                  <h3>{{ items.resto_name }}</h3>
                  <h5>
                    {{ items.resto_kelurahan }}, {{ items.resto_kecamatan }}
                  </h5>
                </b-card-text>
              </b-card>
            </b-card-group>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'mainComponent',
  data() {
    return {
      imageUrl: process.env.VUE_APP_URL_IMAGE,
      searchFoods: ''
    }
  },
  computed: {
    ...mapGetters({ restoTop: 'getBestResto', getParams: 'getParams' })
  },
  created() {
    this.BestResto()
  },
  methods: {
    ...mapActions(['BestResto']),
    ...mapMutations(['restartLimit', 'resetOnSearch']),
    searchFood() {
      this.restartLimit()
      this.resetOnSearch(this.searchFoods)
      this.$router.push('/Bppsearch')
    },
    goToResto(items) {
      const restoName = items.resto_name.replace(/\s/g, '')
      this.$router.push({
        name: 'restoDetails',
        params: {
          idResto: items.resto_id
        },
        query: {
          restoName: restoName
        }
      })
    }
  }
}
</script>
<style scoped>
.search__Input {
  width: 50%;
}

.input-group {
  filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));
  z-index: 1;
  margin-top: -30px;
}
.card-body {
  padding: 8px 20px 0;
}
.input-group,
input {
  height: 55px;
}
.search_btn {
  border-radius: 40px;
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
  border-radius: 40px;
  letter-spacing: 4px;
  box-shadow: none !important;
  border: 1px solid #ccc;
  border-left: none;
}
.title__BestFood h2 {
  font-family: 'Arvo', serif;
  font-size: 27px;
  margin-bottom: 0;
}
.title__BestFood p {
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.02em;
  color: #9c9c9c;
}
.card {
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
}
.images_food .card-img-top {
  object-fit: cover;
  height: 170px;
  border-radius: 10px 10px 0 0;
}
.desc_bestFood h3 {
  font-weight: 500;
  font-family: 'Arvo', serif;
  font-size: 24px;
}
.desc_bestFood h5 {
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.09em;
  color: rgba(0, 0, 0, 0.5);
}
@media (max-width: 576px) {
  .search__Input {
    width: 100%;
  }
}
</style>
