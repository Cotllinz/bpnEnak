<template>
  <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

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
      zoom: 7,
      logoPosition: 'top-left'
    })
    /*  const nav = new mapboxgl.NavigationControl()
    maps.addControl(nav, 'top-right') */
    /*
    Try Maps
    maps.on('style.load', function() {
      maps.on('click', function(e) {
        var coordinates = e.lngLat
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML('you clicked here: <br/>' + coordinates)
          .addTo(maps)
      })
    })
    */

    /*   Geo Search ======================== */
    /*  maps.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      }),
      'bottom-left'
    ) */
    /*  var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: 'Rechercher'
    }).addTo(maps)
    if (geocoder) {
      geocoder.on('results', function(results) {
        console.log(results)
      })
    }
 */
    var marker = new mapboxgl.Marker({
      color: 'red'
    })
      .setLngLat([117.30080728007346, -0.514359739545597])
      .addTo(maps)

    /*
    =============== Geo Locate Function ====================
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    })
    maps.addControl(geolocate, 'top-right')
    */

    /*
    ================ dragMarker Function  =================
    function onDragEnd() {

      var lngLat = marker.getLngLat()
      console.log(lngLat)
      marker.setLngLat([lngLat.lng, lngLat.lat]).addTo(maps)
      maps.flyTo({
        center: lngLat
      })
    }
    */
    maps.on('click', marker, function(e) {
      /*   console.log(e) */
      maps.flyTo({
        center: e.lngLat /* ,
        zoom: 15 */
      })
    })

    /*
      set Maps Marker
      marker.setLngLat(e.lngLat).addTo(maps)
    */
    /*  geolocate.on('geolocate', onDragEnd) */
    /*   geolocate.on('trackuserlocationstart', onDragEnd) */
    /*  marker.on('dragend', onDragEnd) */
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
<style scoped>
.basemap {
  width: 100%;
  height: 100%;
}
</style>
