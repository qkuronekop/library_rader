  <script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'MapScreen',
    setup(props) {
      const isLoading = ref(true);
      const center = ref([139.7673068, 35.6809591]);
      const projection = ref('EPSG:4326');
      const zoom = ref(16);
      const rotation = ref(0);
      return {
        center,
        projection,
        zoom,
        rotation,
        isLoading,
      }
    },
    mounted() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.center = [position.coords.longitude, position.coords.latitude];
            this.isLoading = false;
          },
          (error) => {
            alert("位置情報の取得に失敗しました。");
            this.isLoading = false;
          }
        );
      }
    }
  });
  </script>
  <template>
    <div class="w-full h-full">
      <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:100%">

        <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" 
        :projection="projection" />

        <ol-tile-layer>
            <ol-source-osm />
        </ol-tile-layer>

      </ol-map>
    </div>
    <div>
    </div>
  </template>
