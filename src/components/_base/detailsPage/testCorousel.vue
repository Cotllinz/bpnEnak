<template>
  <section>
    <section>
      <VueSlickCarousel ref="jalan"  :asNavFor="asNavFor1" :focusOnSelect="true">
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </VueSlickCarousel>
    </section>
    <VueSlickCarousel
      ref="input"
      :asNavFor="asNavFor2"
      :slidesToShow="2"
      :focusOnSelect="true"
    >
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </VueSlickCarousel>
 
  </section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  data(){
      return {
    asNavFor1: [],
	  asNavFor2: [],
      }
  },
  methods: {},
   mounted () {
		this.asNavFor1.push(this.$refs.jalan)
		this.asNavFor2.push(this.$refs.input)
	}
}
</script>
