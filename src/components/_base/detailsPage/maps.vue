<template>
  <div>
    <MglMap
      container="map-test"
      :center="markerCoordinates"
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      :zoom="3"
    >
      <MglMarker
        :coordinates="markerCoordinates"
        @click="clickie"
        color="green"
      />
    </MglMap>
  </div>
</template>

<script>
import { MglMap, MglMarker } from 'vue-mapbox'
export default {
  components: {
    MglMap,
    MglMarker
  },
  data() {
    return {
      accessToken:
        'pk.eyJ1IjoibWlrZWhhbWlsdG9uMDAiLCJhIjoiNDVjS2puUSJ9.aLvWM5BnllUGJ0e6nwMSEg',
      mapStyle: 'mapbox://styles/mapbox/streets-v11',
      center: [-122.486052, 37.830348],
      markerCoordinates: [106.816666, -6.2]
    }
  },
  methods: {
    clickie(position) {
      console.log(position)
      /*   _lngLat: nh
lat: 39.014
lng: 248.450332 */
    }
  }
}
</script>
