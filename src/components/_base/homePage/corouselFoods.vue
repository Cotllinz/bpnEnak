<template>
  <section class="main mt-lg-4 mt-3">
    <b-container>
      <section class="title__newTaste">
        <h3>New Taste</h3>
        <p class="mt-1 mt-lg-0">
          New in the city with more variant and new taste is here.
        </p>
      </section>
    </b-container>
    <b-container fluid>
      <section class="slick">
        <VueSlickCarousel class="px-lg-4" v-bind="settings">
          <section
            v-for="(items, index) in data"
            :key="index"
            class="list_foods pr-3"
          >
            <b-card
              class="images_corousel"
              :img-src="
                require('../../../assets/Images/SecondaryThema/ExempleCorousel.jpg')
              "
              img-alt="Card image"
              img-top
            >
              <b-card-text>
                <section class="desc_title">
                  <h4>Nasi Kuning Mbak Mamiek Cantik</h4>
                  <h5>Klandasan, Balikpapan Kota</h5>
                </section>
              </b-card-text>
            </b-card>
          </section>
          <button class="btn__showmore py-3">Show More</button>
        </VueSlickCarousel>
      </section>
    </b-container>
  </section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'CorouselFoods',
  components: { VueSlickCarousel },
  data() {
    return {
      data: 6,
      settings: {
        infinite: false,
        slidesToShow: 6,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 1281,
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
.btn__showmore {
  width: 140px !important;
  font-family: 'Poppins', sans-serif;
  border-radius: 13px;
  font-weight: 700;
  border: none;
  color: #ffffff;
  background: #ff4545;
  position: absolute;
  top: 50%;
  transform: translate(10%, -50%);
}
.btn__showmore:hover {
  background: #fd2a2a;
  transition: 0.3s;
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
    min-width: 150vw;
  }
  .btn__showmore {
    width: 140px !important;
    font-family: 'Poppins', sans-serif;
    border-radius: 13px;
    font-weight: 700;
    border: none;
    color: #ffffff;
    background: #ff4545;
    position: absolute;
    top: 40%;
    margin-left: -40px;

    transform: rotateZ(90deg);
  }
  @media (max-width: 393px) {
    .card {
      width: 130px;
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
