<template>
  <section>
    <b-container v-if="getLoading">
      <section>
        <img
          @click="onBack"
          class="backArrow  d-block d-md-none mb-3"
          src="../../../assets/Images/Logo/previous.svg"
          alt="backArrow"
        />
      </section>
      <agile v-if="show" class="food__slider" :options="options1">
        <div
          class="slide__foodDetails d-flex align-items-center"
          v-for="(items, index) in menu.image"
          :key="index"
        >
          <img
            class="images_content"
            :src="`${imageUrl}menu/${items.image_name}`"
            alt="images_foodDetails"
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
    </b-container>
  </section>
</template>
<script>
import { VueAgile } from 'vue-agile'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'foodDetailsCaraousel',
  components: { agile: VueAgile },
  data() {
    return {
      show: false,
      imageUrl: process.env.VUE_APP_URL_IMAGE,
      options1: {
        fade: true,
        autoplay: true,
        infinite: true
      }
    }
  },
  computed: {
    ...mapGetters({ getLoading: 'getLoadingMenu', menu: 'getMenu' })
  },
  created() {
    this.menuData(this.$route.params.idFood).then(() => {
      this.$nextTick(() => {
        this.show = true
      })
    })
  },
  methods: {
    onBack() {
      this.$router.push('/Bppsearch')
    },
    ...mapActions(['menuData'])
  }
}
</script>
<style scoped>
.slide__foodDetails {
  height: 350px;
  border-radius: 7px;
  width: 100%;
}
.backArrow {
  cursor: pointer;
  width: 35px;
  height: 35px;
  margin-top: -20px;
}
.images_content {
  object-fit: cover;
  height: 350px;
  border-radius: 7px;
  width: 100%;
}
/deep/ .food__slider .agile__nav-button {
  position: absolute;
  top: 50%;
  border-radius: 7px 7px 7px 7px;
  width: 60px;
  height: 100%;
  transform: translateY(-50%);
}
/deep/ .food__slider .agile__nav-button:hover {
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: 0.3s;
}
/deep/ .food__slider .agile__nav-button--prev {
  left: 0px;
  background: none;
  border: none;
}
/deep/ .food__slider .agile__nav-button--next {
  right: 0px;
  background: none;
  border: none;
}
/deep/ .food__slider .agile__dots {
  bottom: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
}
/deep/ .food__slider .agile__dot {
  margin: 0 10px;
}
/deep/ .food__slider .agile__dot button {
  background-color: transparent;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  margin: 0;
  padding: 0;
  transition-duration: 0.5s;
  width: 10px;
}
/deep/ .food__slider .agile__dot--current button {
  border-radius: 10px;
  width: 35px;
  height: 15px;
}
/deep/ .food__slider .agile__dot--current button,
.agile__dot:hover button {
  background-color: #fff;
}
</style>
