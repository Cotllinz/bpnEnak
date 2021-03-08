<template>
  <section>
    <b-container>
      <section class="title_reviews pl-lg-2">
        <h5>Reviews</h5>
      </section>
      <b-row
        cols="1"
        cols-lg="2"
        class="px-lg-2"
        :class="scroll ? 'scroll' : ''"
      >
        <b-col v-for="(items, index) in data" :key="index">
          <div>
            <b-card class="card_reviews mb-3">
              <section class="d-flex reviews_names align-items-center">
                <img
                  class="images_reviews"
                  src="../../../assets/Images/SecondaryThema/image_developers.jpeg"
                  alt="images_reviews"
                />
                <section class="pl-2">
                  <h4>Rudy Galih Putra</h4>
                  <p>114 written reviews</p>
                </section>
              </section>
              <section class="rating_desc">
                <b-form-rating
                  class="rating_review"
                  id="rating-inline"
                  inline
                  style="color: #fcc400;"
                  value="4"
                  readonly
                ></b-form-rating>
                <p class="pl-2 mb-0">
                  This place is pure paradise of seafood, the food is amazing.
                  the service is ok, i just had a bit misunderstanding with the
                  waitress here but overall the food is 5 Star!
                </p>
              </section>
            </b-card>
          </div>
        </b-col>
        <b-col :class="scroll ? 'd-none' : ''">
          <div>
            <b-card
              @click="showMore"
              style="cursor: pointer;"
              class="card_reviews mb-3"
            >
              <h2 class="moreBtn">See More Reviews</h2>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  name: 'Reviews',
  data() {
    return {
      data: 5,
      scroll: false
    }
  },
  methods: {
    showMore() {
      this.data = 10
      this.scroll = true
    }
  }
}
</script>
<style scoped>
.scroll {
  height: 630px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.scroll::-webkit-scrollbar {
  width: 5px;
}
.scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.title_reviews {
  font-family: 'Poppins', sans-serif;
}
.images_reviews {
  width: 50px;
  height: 50px;
  object-fit: contain;
  object-position: 45%;
  border-radius: 50%;
}

.reviews_names h4,
.reviews_names p {
  margin-bottom: 0;
  font-family: 'Poppins', sans-serif;
}
.reviews_names h4 {
  font-size: 18px;
}
.rating_review {
  border: none;
  padding: 0;
  box-shadow: none;
  font-size: 20px;
}
.rating_review:focus {
  box-shadow: none;
}
.card-body {
  padding: 5px;
}
.rating_desc {
  font-family: 'Poppins', sans-serif;
}
.card_reviews {
  height: 200px;
}
.moreBtn {
  text-align: center;
  font-family: 'Poppins', sans-serif;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateY(-50%);
}
</style>
