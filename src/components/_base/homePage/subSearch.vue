<template>
  <section class="subSearch mt-lg-4">
    <b-container>
      <h4 class="title_district">District</h4>
      <b-row cols-lg="3" cols="2" class="mt-lg-3">
        <b-col>
          <section class="subDistrict mb-3 mb-lg-4">
            <button
              @mouseover="animationOn1 = true"
              @mouseleave="animationOn1 = false"
              @click="onClickSearch('balikpapan kota')"
              class="btn__subDistrict"
            >
              Balikpapan Kota (62)
              <b-icon
                class="icons_arrows"
                :class="{ active: animationOn1 }"
                icon="arrow-right-short"
              ></b-icon>
            </button>
          </section>
        </b-col>
        <b-col>
          <section class="subDistrict mb-3 mb-lg-4">
            <button
              @mouseover="animationOn2 = true"
              @mouseleave="animationOn2 = false"
              @click="onClickSearch('balikpapan tengah')"
              class="btn__subDistrict"
            >
              Balikpapan Tengah (44)
              <b-icon
                class="icons_arrows"
                :class="{ active: animationOn2 }"
                icon="arrow-right-short"
              ></b-icon>
            </button>
          </section>
        </b-col>
        <b-col>
          <section class="subDistrict mb-3 mb-lg-4">
            <button
              @mouseover="animationOn3 = true"
              @mouseleave="animationOn3 = false"
              @click="onClickSearch('balikpapan timur')"
              class="btn__subDistrict"
            >
              Balikpapan Timur (27)
              <b-icon
                class="icons_arrows"
                :class="{ active: animationOn3 }"
                icon="arrow-right-short"
              ></b-icon>
            </button>
          </section>
        </b-col>
        <b-col>
          <section class="subDistrict mb-3 mb-lg-0">
            <button
              @mouseover="animationOn4 = true"
              @mouseleave="animationOn4 = false"
              @click="onClickSearch('balikpapan selatan')"
              class="btn__subDistrict"
            >
              Balikpapan Selatan (32)
              <b-icon
                class="icons_arrows"
                :class="{ active: animationOn4 }"
                icon="arrow-right-short"
              ></b-icon>
            </button>
          </section>
        </b-col>
        <b-col>
          <section class="subDistrict mb-3 mb-lg-0">
            <button
              @mouseover="animationOn5 = true"
              @mouseleave="animationOn5 = false"
              @click="onClickSearch('balikpapan utara')"
              class="btn__subDistrict"
            >
              Balikpapan Utara (34)
              <b-icon
                class="icons_arrows"
                :class="{ active: animationOn5 }"
                icon="arrow-right-short"
              ></b-icon>
            </button>
          </section>
        </b-col>
        <b-col>
          <section class="subDistrict mb-3 mb-lg-0">
            <button
              @mouseover="animationOn6 = true"
              @mouseleave="animationOn6 = false"
              @click="onClickSearch('balikpapan barat')"
              class="btn__subDistrict"
            >
              Balikpapan Barat (29)
              <b-icon
                class="icons_arrows"
                :class="{ active: animationOn6 }"
                icon="arrow-right-short"
              ></b-icon>
            </button>
          </section>
        </b-col>
      </b-row>
    </b-container>
    <section class="showMore mt-lg-5 mt-3">
      <b-container>
        <button class="btn_showMore py-2 px-5">
          Show More
          <b-icon class="arrow_Btnmore" icon="arrow-right-short"></b-icon>
        </button>
      </b-container>
    </section>
  </section>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'subSearch',
  data() {
    return {
      animationOn1: false,
      animationOn2: false,
      animationOn3: false,
      animationOn4: false,
      animationOn5: false,
      animationOn6: false
    }
  },
  methods: {
    ...mapMutations(['resetOnDistrict', 'restartLimit']),
    onClickSearch(e) {
      this.restartLimit()
      this.resetOnDistrict(e)
      this.$router.push('/Bppsearch')
    }
  }
}
</script>
<style scoped>
.title_district {
  font-family: 'Arvo', serif;
  font-size: 26px;
}
.icons_arrows {
  font-size: 33px;
  color: #b8b8b8;
  top: 0;
  position: absolute;
  right: 0;
}
.active {
  animation: arrowmove 1s linear infinite alternate;
}
@keyframes arrowmove {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10%, 0%);
  }
}
button.btn__subDistrict {
  background: none;
  border-radius: 7px;
  border: 1.5px solid #b8b8b8;
  position: relative;
  width: 100%;
  font-weight: 500;
  text-align: left;
  padding: 5px 10px;
  font-family: 'Poppins', sans-serif;
}
.btn_showMore {
  position: relative;
  display: block;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  border-radius: 10px;
  border: none;
  font-weight: 400;
  background: #d01010;
  color: #ffffff;
}
.arrow_Btnmore {
  position: absolute;
  font-size: 20px;
  transform: translate(30%, 13%);
}
@media (max-width: 576px) {
  .col {
    padding-right: 10px;
  }
  .icons_arrows {
    font-size: 33px;
    color: #b8b8b8;
    top: 17px;
    position: absolute;
    right: 0;
  }
}
</style>
