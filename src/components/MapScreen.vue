  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import searchService from '../service/SearchService';
  import markerIcon from '../assets/icon/pin.png'


  export default defineComponent({
    name: 'MapScreen',
    setup(props) {
      const isLoading = ref(true);
      const center = ref([139.7673068, 35.6809591]);
      const projection = ref('EPSG:4326');
      const zoom = ref(14.5);
      const rotation = ref(0);
      const coordinate = ref([0]);
      const radius = ref(8)
      const strokeWidth = ref(4)
      const strokeColor = ref('red')
      const fillColor = ref('white')
      return {
        center,
        projection,
        zoom,
        rotation,
        isLoading,
        coordinate,
        radius,
        strokeWidth,
        strokeColor,
        fillColor,
        markerIcon,
      }
    },
    mounted() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.center = [position.coords.longitude, position.coords.latitude];
            const res = searchService.getLiblaries(`${this.center[0]}` + "," + `${this.center[1]}`);
            res.then((value) => {
              this.coordinate = value.flatMap((e) => {
                const str = e.geocode.split(",");
                return [Number(str[0]), Number(str[1])]
              });
              // console.log(value);
            });
            this.isLoading = false;
          },
          (error) => {
            alert("位置情報の取得に失敗しました。");
            this.isLoading = false;
          }
        );
      }
    },
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

        <ol-overlay :position=center>
          <template v-slot="slotProps">
            <div class="w-6 h-6">
              <img src="../assets/icon/own.png"/>
            </div>
          </template>
        </ol-overlay>

        <ol-vector-layer>
          <ol-source-vector>
              <ol-feature>
                  <ol-geom-point :coordinates="coordinate"></ol-geom-point>
                  <ol-style>
                    <ol-style-icon :src="markerIcon" :scale="0.1"></ol-style-icon>
                  </ol-style>
              </ol-feature>
          </ol-source-vector>
        </ol-vector-layer>

      </ol-map>
    </div>
  </template>
