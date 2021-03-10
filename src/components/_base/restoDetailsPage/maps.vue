<template>
  <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
export default {
  data() {
    return {
      accessToken:
        'pk.eyJ1IjoibWlrZWhhbWlsdG9uMDAiLCJhIjoiNDVjS2puUSJ9.aLvWM5BnllUGJ0e6nwMSEg'
    }
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken
    let maps = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [117.30080728007346, -0.514359739545597],
      zoom: 10,
      logoPosition: 'top-left'
    })
    const nav = new mapboxgl.NavigationControl()
    maps.addControl(nav, 'bottom-left')

    new mapboxgl.Marker({
      color: 'red'
    })
      .setLngLat([117.30080728007346, -0.514359739545597])
      .addTo(maps)
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    })
    maps.addControl(geolocate, 'top-right')
  },

  methods: {}
}
</script>
<style scoped>
.basemap {
  width: 100%;
  height: 100%;

  border: none;
}
</style>
