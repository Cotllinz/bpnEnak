<template>
  <section v-if="loadingResto">
    <b-container>
      <section>
        <img
          @click="onBack"
          class="backArrow  d-block d-md-none"
          src="../../../assets/Images/Logo/previous.svg"
          alt="backArrow"
        />
      </section>
      <b-row>
        <b-col cols="12">
          <section
            class="d-flex align-items-center align-items-lg-start title_details"
          >
            <h2>{{ resto.resto_name }}</h2>
            <div class="d-flex flex-column pt-1 ml-auto">
              <b-form-rating
                id="rating-details"
                show-value
                show-value-max
                precision="2"
                readonly
                class="mb-lg-2"
                inline
                color="#FCC400"
                :value="resto.rating"
              ></b-form-rating>
              <label class="label_revies text-right" for="label_revies"
                >({{ resto.review_by }} Reviews)</label
              >
            </div>
          </section>
        </b-col>
        <b-col cols="12">
          <section v-if="show">
            <agile
              class="images__view"
              ref="main"
              :options="options1"
              :as-nav-for="viewImage"
            >
              <div
                class="slide d-flex align-items-center"
                v-for="(slide, index) in resto.resto_image"
                :key="index"
              >
                <img
                  class="images_main"
                  :src="`${imageUrl}resto/${slide.image_name}`"
                  alt="images_main"
                />
              </div>
              <template slot="prevButton"
                ><img
                  class="prevs"
                  src="../../../assets/Images/Logo/Arrow scroll white 3.svg"
                  alt="prevs"
              /></template>
              <template slot="nextButton"
                ><img
                  class="nexts"
                  src="../../../assets/Images/Logo/icons_scrolls_right.svg"
                  alt="nexts"
              /></template>
            </agile>
            <agile
              class="thumbnails mt-3"
              ref="thumbnails"
              :options="options2"
              :as-nav-for="thumbnailImaes"
            >
              <div
                class="slides_thumnail"
                v-for="(items, index) in resto.resto_image"
                :key="index"
                @click="$refs.thumbnails.goTo(index)"
              >
                <img
                  :src="`${imageUrl}resto/${items.image_name}`"
                  :class="
                    lenghtImage === 2
                      ? 'images_thumnail_two'
                      : lenghtImage === 1
                      ? 'images_thumnail_one'
                      : 'images_thumnail'
                  "
                  alt="images_thumnail"
                />
              </div>
            </agile>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import { VueAgile } from 'vue-agile'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'SliderImage',
  components: { agile: VueAgile },
  data() {
    return {
      imageUrl: process.env.VUE_APP_URL_IMAGE,
      lenghtImage: 0,
      show: false,
      viewImage: [],
      thumbnailImaes: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: true
      },
      options2: {
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 3,
        infinite: false,
        responsive: [
          {
            breakpoint: 100,
            settings: {
              centerMode: false,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              centerMode: true,
              slidesToShow: 3
            }
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({ resto: 'getResto', loadingResto: 'getLoadingResto' })
  },
  created() {
    this.restoData(this.$route.params.idResto).then(() => {
      this.lenghtImage = this.resto.resto_image.length
      this.show = true
      if (this.lenghtImage > 2) {
        this.options2.infinite = true
        this.options2.slidesToShow = 3
      } else if (this.lenghtImage > 1) {
        this.options2.infinite = true
        this.options2.responsive[1].settings.slidesToShow = 2
      } else if (this.lenghtImage === 1) {
        this.options1.navButtons = false
      }
      this.$nextTick(() => {
        if (this.show) {
          this.viewImage.push(this.$refs.thumbnails)
          this.thumbnailImaes.push(this.$refs.main)
        }
      })
    })
  },

  methods: {
    onBack() {
      this.$router.push('/Bppsearch')
    },
    ...mapActions(['restoData'])
  }
}
</script>
<style scoped>
.slide {
  height: 320px;
  width: 100%;
  border-radius: 15px;
}
.agile__slides {
  border-radius: 15px;
}
.backArrow {
  cursor: pointer;
  width: 35px;
  height: 35px;
  margin-top: -20px;
}
.images_main {
  height: 320px;
  border-radius: 15px;
  width: 100%;
  object-fit: cover;
  object-position: 45%;
}
/deep/ .images__view .agile__nav-button {
  position: absolute;
  top: 50%;
  border-radius: 15px 15px 15px 15px;
  width: 60px;
  height: 100%;
  transform: translateY(-50%);
}
/deep/ .images__view .agile__nav-button:hover {
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: 0.3s;
}
/deep/ .images__view .agile__nav-button--prev {
  left: 0px;
  background: none;
  border: none;
}
/deep/ .images__view .agile__nav-button--next {
  right: 0px;
  background: none;
  border: none;
}
/deep/ .thumbnails .slides_thumnail.agile__slide.agile__slide--active {
  filter: brightness(60%);
}
.slides_thumnail {
  height: 155px;
}
.images_thumnail_one {
  height: 155px;
  width: 320px;
  object-fit: cover;
  cursor: pointer;
  padding: 0 5px;
  object-fit: 45%;
  border-radius: 12px;
}
.images_thumnail_two {
  height: 155px;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  padding: 0 5px;
  object-fit: 45%;
  border-radius: 12px;
}
.images_thumnail {
  height: 155px;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  padding: 0 5px;
  object-fit: 45%;
  border-radius: 12px;
}
.slides_thumnail:hover {
  opacity: 0.75;
}
.b-rating {
  box-shadow: none !important;
  border: none;
  padding: 0;
  background: #ffffff;
  font-size: 16px;
}
#rating-details {
  margin-bottom: 0 !important;
  height: 10px;
}
.b-rating:focus {
  background: #ffffff;
}
.title_details h2 {
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
}
.label_revies {
  font-family: 'Poppins', sans-serif;
  margin-top: 6px;
}
@media (max-width: 576px) {
  .title_details h2 {
    font-size: 20px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
  }
  .images_thumnail_one {
    width: 100%;
  }
}
</style>
