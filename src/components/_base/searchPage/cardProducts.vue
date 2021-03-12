<template>
  <section class="mt-lg-3 images_card">
    <b-row cols="1">
      <h1 class="notFound text-center" v-if="errorSearch">Gak nemu blay :(</h1>
      <b-col
        class="d-none d-lg-block"
        v-for="(items, index) in foods"
        :key="'Dekstop' + index"
      >
        <b-card
          :img-src="`${imageUrl}menu/${items.image.image_name}`"
          @click="gotoFoodwithImage($event)"
          class="py-4 px-3 card_images align-items-center mb-4"
          img-alt="cardProduct"
          img-left
        >
          <section class="desc_Food">
            <section style="cursor:pointer;" @click="gotoFood(items)">
              <h2>{{ items.menu_name }}</h2>
              <h5>{{ items.resto_kelurahan }}</h5>
              <hr />
              <p>
                {{ items.resto_address }}
              </p>
              <p>
                Open Hours {{ items.resto_open_hour.slice(0, 5) }} -
                {{ items.resto_close_hour.slice(0, 5) }}
              </p>
            </section>

            <div class="d-flex align-items-center">
              <b-form-rating
                id="rating-dekstops"
                show-value
                show-value-max
                precision="2"
                readonly
                class="mb-lg-2"
                inline
                color="#FCC400"
                :value="items.rating"
              ></b-form-rating>
              <label class="label_revies" for="label_revies"
                >({{ items.review_by }} Reviews)</label
              >
            </div>

            <button
              type="button"
              @click="goToDetails"
              class="btn_visitRestaurant w-100 py-2"
            >
              Visit Restaurants
            </button>
          </section>
        </b-card>
      </b-col>
      <b-col
        v-for="(items, index) in foods"
        :key="'Mobile' + index"
        class="d-block d-lg-none"
      >
        <b-card
          :img-src="`${imageUrl}menu/${items.image.image_name}`"
          @click="gotoFoodwithImage($event)"
          class="py-4 px-3 d-block card_images align-items-center mb-4"
          img-alt="cardProduct"
          img-left
        >
          <section class="desc_Food mt-2">
            <section style="cursor:pointer;" @click="gotoFood">
              <h2>{{ items.menu_name }}</h2>
              <h5>{{ items.resto_kelurahan }}</h5>
              <hr />
              <p>
                {{ items.resto_address }}
              </p>
              <p>
                Open Hours {{ items.resto_open_hour.slice(0, 5) }} -
                {{ items.resto_close_hour.slice(0, 5) }}
              </p>
            </section>
            <div class="d-flex align-items-center">
              <b-form-rating
                id="rating-mobile"
                show-value
                show-value-max
                precision="2"
                readonly
                class="mb-lg-2"
                inline
                color="#FCC400"
                :value="items.rating"
              ></b-form-rating>
              <label class="label_revies" for="label_revies"
                >({{ items.review_by }} Reviews)</label
              >
            </div>

            <button
              type="button"
              @click="goToDetails"
              class="btn_visitRestaurant w-100 py-2"
            >
              Visit Restaurants
            </button>
          </section>
        </b-card>
      </b-col>

      <b-col v-if="!errorSearch">
        <button
          v-if="showButton"
          @click="setMore"
          class="btn_loadMore py-2 px-5"
        >
          Load More
        </button>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'FoodsCard',
  data() {
    return {
      imageUrl: process.env.VUE_APP_URL_IMAGE
    }
  },
  computed: {
    ...mapGetters({
      foods: 'getFoods',
      errorSearch: 'getErrorSearch',
      getTotalData: 'getTotalData',
      getSumData: 'getSumData'
    }),
    showButton() {
      if (this.getSumData > 6 && this.getTotalData > 0) {
        return true
      } else {
        return false
      }
    }
  },
  created() {
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
  },
  methods: {
    ...mapActions(['sortingFoods']),
    ...mapMutations(['setErrorFood', 'setLimit']),
    goToDetails() {
      this.$router.push('/restoDetails')
    },
    gotoFood(items) {
      const foodName = items.menu_name.replace(/\s/g, '')
      this.$router.push({
        name: 'fooDetails',
        params: {
          idFood: items.menu_id
        },
        query: {
          restoId: items.resto.resto_id,
          foodName: foodName
        }
      })
    },
    setMore() {
      this.setLimit()
    },
    gotoFoodwithImage(e) {
      if (e.toElement.alt === 'cardProduct') {
        this.$router.push('/fooDetails')
      }
    }
  }
}
</script>
<style scoped>
.card_images .card-img-left {
  width: 200px;
  max-width: 200px;
  height: 210px;
  border-radius: 10px;
  object-fit: cover;
  cursor: pointer;
  object-position: 45%;
}

.card {
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
.notFound {
  font-family: 'Poppins', sans-serif;
  font-size: 35px;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.card-body {
  padding: 0 0 0 20px;
}
.desc_Food {
  font-family: 'Poppins', sans-serif;
}
.desc_Food h2 {
  font-size: 20px;
  font-weight: 700;
  color: #d01010;
  margin-bottom: 5px;
}
.desc_Food h5 {
  font-size: 16px;
  font-weight: 700;
}
.label_revies {
  font-size: 13px;
}
.desc_Food p {
  font-size: 14px;
  margin-bottom: 0;
}
hr {
  margin: 0;
}
.b-rating {
  box-shadow: none !important;
  border: none;
  padding: 0;
  font-size: 16px;
}
.btn_visitRestaurant {
  background: none;
  font-weight: 500;
  border-radius: 7px;
  border: 0.75px solid #a6a6a6;
}
.btn_visitRestaurant:hover {
  background: #f7f7f7;
  transition: 0.5s;
}
.btn_loadMore {
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  background: #d01010;
  outline: none;
  border: none;
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
}
@media (max-width: 990px) {
  .card_images .card-img-left {
    width: 100%;
    max-width: 100%;
    height: 230px;
    border-radius: 10px;
    object-fit: cover;
    object-position: 45%;
  }
  .card-body {
    padding: 0;
  }
  .label_revies {
    top: 5px;
    position: relative;
  }
}

@media (max-width: 347px) {
  .b-rating {
    font-size: 13px;
  }
  .label_revies {
    font-size: 14.5px;
  }
}
</style>
