<template>
  <section class="main mt-lg-4 mt-3 ">
    <b-container>
      <section class="title__newTaste d-flex align-items-end">
        <div>
          <h3>New Taste</h3>
          <p class="mt-1 mt-lg-0">
            New in the city with more variant and new taste is here.
          </p>
        </div>
      </section>
    </b-container>
    <b-container fluid>
      <section class="slick">
        <VueSlickCarousel v-if="turnOnSlider" class="px-lg-4" v-bind="settings">
          <section
            v-for="(items, index) in newMenu"
            :key="index"
            class="list_foods pr-3"
          >
            <b-card
              @click="goFood(items)"
              class="images_corousel"
              :img-src="`${imageUrl}menu/${items.menu_image.image_name}`"
              img-alt="Card image"
              img-top
            >
              <b-card-text>
                <section class="desc_title">
                  <h4>{{ items.menu_name }}</h4>
                  <h5>
                    {{ items.resto_kelurahan }}, {{ items.resto_kecamatan }}
                  </h5>
                </section>
              </b-card-text>
            </b-card>
          </section>
        </VueSlickCarousel>
      </section>
    </b-container>
  </section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CorouselFoods',
  components: { VueSlickCarousel },
  data() {
    return {
      imageUrl: process.env.VUE_APP_URL_IMAGE,

      settings: {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 2999,
            settings: {
              slidesToShow: 6
            }
          },
          {
            breakpoint: 896,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 4001,
            settings: {
              slidesToShow: 7
            }
          },
          {
            breakpoint: 1481,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 396,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 4
            }
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({ newMenu: 'getNewMenu', turnOnSlider: 'turnOnSlider' })
  },
  created() {
    this.newMenus()
  },
  methods: {
    ...mapActions(['newMenus']),
    goFood(items) {
      const foodName = items.menu_name.replace(/\s/g, '')
      this.$router.push({
        name: 'fooDetails',
        params: {
          idFood: items.menu_id
        },
        query: {
          restoId: items.resto_id,
          foodName: foodName
        }
      })
    }
  }
}
</script>
<style scoped>
.main {
  overflow: hidden;
}
.slick {
  min-width: 108vw;
}
.title__newTaste h3 {
  font-size: 27px;
  margin-bottom: 0;
  font-family: 'Arvo', serif;
}
.title__newTaste p {
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.02em;
  color: #9c9c9c;
}
.card {
  border-radius: 10px;
  margin-bottom: 17px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}

.desc_title h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1em;
  font-weight: 500;
}
.desc_title h5 {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 0.9em;
}
.images_corousel .card-img-top {
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  height: 200px;
  object-position: 45%;
}
@media (max-width: 576px) {
  .card {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 17px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  }
  .slick {
    min-width: 125vw;
  }
  .title__newTaste p {
    font-size: 14px;
  }

  @media (max-width: 450px) {
    .slick {
      min-width: 160vw;
    }
  }
  @media (max-width: 393px) {
    .card {
      width: 250px;
      border-radius: 10px;
      margin-bottom: 17px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    }

    .slick {
      min-width: 135vw;
    }
  }
  @media (max-width: 375px) {
    .slick {
      min-width: 140vw;
    }
  }
  @media (max-width: 363px) {
    .slick {
      min-width: 145vw;
    }
  }
  @media (max-width: 353px) {
    .slick {
      min-width: 150vw;
    }
  }
  @media (max-width: 320px) {
    .slick {
      min-width: 165vw;
    }
  }
}
</style>
