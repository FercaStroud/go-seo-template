<template lang="pug">
.map
  l-map(
    v-model:zoom="zoom",
    :center="cords",
    :options="mapOptions",
    style="height: 400px; width: 98vw"
  )
    l-tile-layer(url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
    l-marker(:lat-lng="cords")
      l.tooltip Nuestra ubicación
</template>

<script>
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "GlassMap",
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
  },
  data() {
    return {
      zoom: 16,
      iconWidth: 25,
      iconHeight: 40,
      cords: [+this.$store.state.settings.latitude, +this.$store.state.settings.longitude],
      // cords: [25.5298807, -103.418228], // enmedio
      // cords: [25.5245941, -103.4312689], // zitro
      mapOptions: {
        scrollWheelZoom: false,
      },
    };
  },
  computed: {
    iconUrl() {
      return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },
  methods: {
    log(e) {
      console.log(e);
    },
    changeIcon() {
      this.iconWidth += 2;
      if (this.iconWidth > this.iconHeight) {
        this.iconWidth = Math.floor(this.iconHeight / 2);
      }
    },
  },
};
</script>

<style scoped>
.map {
  z-index: 0;
}
</style>
