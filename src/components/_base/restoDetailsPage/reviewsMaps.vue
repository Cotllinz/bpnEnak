<template>
  <section>
    <b-container>
      <b-row class="ter pl-2">
        <b-col
          md="7"
          lg="8"
          class="revies_section pr-md-0 order-2 order-lg-1 mt-3 mt-lg-0"
        >
          <section class="desc_restaurant d-none d-lg-block mt-3 pt-1">
            <h5><span>Open</span> (Mon - Sat, 09:00 - 21:00)</h5>
            <p>Gn. Bahagia</p>
          </section>
          <section>
            <b-card class="text-center card_reviews mt-2">
              <b-form-rating
                class="rating_review mb-3"
                id="rating-inline"
                inline
                style="color: #fcc400;"
                value="4"
              ></b-form-rating>
              <div class="reviews_area position-relative">
                <section class="wrapper_textarea">
                  <b-form-textarea
                    placeholder="Write a Review here..."
                    rows="5"
                    maxlength="170"
                  ></b-form-textarea>
                  <button class="btn_sendReview py-2 px-5">Give Review</button>
                </section>
              </div>
            </b-card>
          </section>
        </b-col>
        <b-col md="5" lg="4" class="maps_section pl-md-1 order-1 order-lg-2">
          <section class="desc_restaurant d-block d-lg-none mt-2">
            <h5><span>Open</span> (Mon - Sat, 09:00 - 21:00)</h5>
            <p>Gn. Bahagia</p>
          </section>
          <section class="pt-2 pr-lg-1">
            <b-card class="card_descResto">
              <section class="desc_resto">
                <h5>Directions</h5>
                <maps class="images_example" />
                <p class="text-center mt-2">
                  Jl. Marsma R. Iswahyudi No.70, Gn. Bahagia, Kecamatan
                  Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76114
                </p>
                <h5 class="mb-0">
                  Call
                </h5>
                <a :href="`tel:${phone}`">082350775253</a>
              </section>
            </b-card>
          </section>
        </b-col>
      </b-row>
      <hr class="mx-3" />
    </b-container>
  </section>
</template>
<script>
import maps from './maps'
export default {
  name: 'reviewsMaps',
  data() {
    return {
      phone: '082350775253'
    }
  },
  components: {
    maps
  }
}
</script>

<style scoped>
.card_descResto,
.card_reviews {
  max-height: 374px;
}
.card_descResto {
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 400px;
}
.card_descResto .card-body {
  padding: 10px 10px;
}
.images_example {
  width: 100%;
  height: 180px;
}

.desc_restaurant h5,
.desc_restaurant p {
  font-family: 'Poppins', sans-serif;
  margin: 0;
}
.desc_resto {
  font-family: 'Poppins', sans-serif;
}
.desc_resto p {
  height: 75px;
  max-height: 75px;
  font-size: 15px;
}

.desc_resto a {
  text-decoration: none;
  color: #ff9900;
  letter-spacing: 1px;
}
.desc_resto a:hover {
  color: #e79418;
  transition: 0.4s;
}

.desc_restaurant h5 {
  font-size: 18px;
  color: #898989;
}
.desc_restaurant h5 span {
  color: rgb(255, 2, 2);
}

.card_reviews {
  border-radius: 7px;
  font-family: 'Poppins', sans-serif;
}
.rating_review {
  border: none;
  box-shadow: none !important;
  font-size: 2.2em;
}
.rating_review:focus {
  background: #ffffff;
}
textarea:focus {
  background: #eaeaea;
  border: none;
}
textarea {
  background: #eaeaea;
  resize: none;
  border: none;
  box-shadow: none !important;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
textarea::-webkit-scrollbar {
  display: none;
}

.wrapper_textarea {
  max-height: 185px;
  border: 1px solid #ccc;
  background: #eaeaea;
}
.btn_sendReview {
  border: none;
  background: #ffffff;
  border-radius: 7px;
  color: #979797;
  bottom: 0;
  left: 0;
  margin: 0 auto 10px;
  right: 0;
}
.btn_sendReview:hover {
  background: #fafafa;
  transition: 0.3s;
}
</style>
