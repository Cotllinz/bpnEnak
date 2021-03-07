<template>
  <section class="mt-lg-3">
    <b-row cols="1">
      <b-col
        class="d-none d-lg-block"
        v-for="(items, index) in data"
        :key="'Dekstop' + index"
      >
        <b-card
          :img-src="
            'https://images.unsplash.com/photo-1594030990808-ebd1c2247c28?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=696&q=80'
          "
          class="py-4 px-3 card_images align-items-center mb-4"
          img-alt="cardProduct"
          img-left
        >
          <section class="desc_Food">
            <h2>Kepiting Saus Khas Dandito</h2>
            <h5>Gn. Bahagia</h5>
            <hr />
            <p>
              Jl. Marsma R. Iswahyudi No.70, Gn. Bahagia, Kecamatan Balikpapan
              Selatan, Kota Balikpapan, Kalimantan Timur
            </p>
            <p>Open Hours 09:00 - 21:00</p>
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
                value="3.544"
              ></b-form-rating>
              <label class="label_revies" for="label_revies"
                >(110 Reviews)</label
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
        v-for="(items, index) in data"
        :key="'Mobile' + index"
        class="d-block d-lg-none"
      >
        <b-card
          :img-src="
            'https://images.unsplash.com/photo-1594030990808-ebd1c2247c28?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=696&q=80'
          "
          class="py-4 px-3 d-block card_images align-items-center mb-4"
          img-alt="cardProduct"
          img-left
        >
          <section class="desc_Food mt-2">
            <h2>Kepiting Saus Khas Dandito</h2>
            <h5>Gn. Bahagia</h5>
            <hr />
            <p>
              Jl. Marsma R. Iswahyudi No.70, Gn. Bahagia, Kecamatan Balikpapan
              Selatan, Kota Balikpapan, Kalimantan Timur
            </p>
            <p>Open Hours 09:00 - 21:00</p>
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
                value="4"
              ></b-form-rating>
              <label class="label_revies" for="label_revies"
                >(110 Reviews)</label
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

      <b-col>
        <button class="btn_loadMore py-2 px-5">Load More</button>
      </b-col>
    </b-row>
  </section>
</template>
<script>
export default {
  name: 'FoodsCard',
  data() {
    return {
      data: 6
    }
  },
  methods: {
    goToDetails() {
      this.$router.push('/Foodetails')
    }
  }
}
</script>
<style scoped>
.card_images .card-img-left {
  min-width: 210px;
  height: 230px;
  border-radius: 10px;
  object-fit: cover;
  object-position: 45%;
}
.card {
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
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
.desc_Food p {
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
    min-width: 100%;
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
