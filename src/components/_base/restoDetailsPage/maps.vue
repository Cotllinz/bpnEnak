<template>
  <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      accessToken:
        'pk.eyJ1IjoibWlrZWhhbWlsdG9uMDAiLCJhIjoiNDVjS2puUSJ9.aLvWM5BnllUGJ0e6nwMSEg'
    }
  },
  computed: {
    ...mapGetters({
      resto: 'getResto'
    })
  },
  mounted() {
    this.restoData(this.$route.params.idResto).then(res => {
      if (res) {
        mapboxgl.accessToken = this.accessToken
        let maps = new mapboxgl.Map({
          container: 'mapContainer',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [Number(this.resto.resto_lng), Number(this.resto.resto_lat)],
          zoom: 14,
          logoPosition: 'top-left'
        })
        const nav = new mapboxgl.NavigationControl()
        maps.addControl(nav, 'bottom-left')

        new mapboxgl.Marker({
          color: 'red'
        })
          .setLngLat([
            Number(this.resto.resto_lng),
            Number(this.resto.resto_lat)
          ])
          .addTo(maps)
        const geolocate = new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        })
        maps.addControl(geolocate, 'top-right')
      }
    })
  },

  methods: {
    ...mapActions(['restoData'])
  }
}
</script>
<style scoped>
.basemap {
  width: 100%;
  height: 100%;

  border: none;
}
</style>
