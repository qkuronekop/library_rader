<script lang="ts">
import { defineComponent, ref, inject, reactive } from "vue";
import searchService from "../service/SearchService";
import markerIcon from "../assets/icon/pin.png";
import selectIcon from "../assets/icon/select_pin.png";
import { Library } from "../models/Library";

export default defineComponent({
  name: "MapScreen",
  setup(props) {
    type User = {
      firstName?: string;
      lastName?: string;
      phoneNumber?: string;
    };

    const firstName = ref("");
    const lastName = ref("");
    const phoneNumber = ref("");

    const user = reactive<User>({});
    const libraries = ref(Array<Library>());
    const showMap = ref(true);
    const isLoading = ref(true);
    const center = ref([139.7673068, 35.6809591]);
    const projection = ref("EPSG:4326");
    const zoom = ref(14.5);
    const rotation = ref(0);
    const coordinate = ref([0]);
    const featureSelected = (event) => {
      console.log(event.select);
    };
    const selectConditions = inject("ol-selectconditions");
    const selectCondition = selectConditions.pointerMove;
    const selectInteactionFilter = (feature) => {
      console.log(feature.values_.name);
      return feature.values_.name != undefined;
    };
    let data = localStorage.getItem("favorite_libralies") ?? "[]";
    const favorites = ref(JSON.parse(data) as Array<Library>);
    return {
      showMap,
      libraries,
      favorites,
      center,
      projection,
      zoom,
      rotation,
      isLoading,
      coordinate,
      markerIcon,
      selectIcon,
      selectCondition,
      featureSelected,
      selectInteactionFilter,
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // this.center = [position.coords.longitude, position.coords.latitude];
          // const res = searchService.getLiblaries(`${this.center[0]}` + "," + `${this.center[1]}`);
          const res = searchService.getLiblaries(
            `139.7673068` + "," + `35.680959`
          );
          res.then((value) => {
            this.libraries = value;
            console.log(this.libraries);
            this.coordinate = value.flatMap((e) => {
              const str = e.geocode.split(",");
              return [Number(str[0]), Number(str[1])];
            });
            console.log(value);
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
  methods: {
    onClickList() {
      this.showMap = !this.showMap;
    },
    onClickFavorite(library: Library) {
      this.favorites.push(library);
      localStorage.setItem(
        "favorite_libralies",
        JSON.stringify(this.favorites)
      );
    },
  },
});
</script>
<template>
  <div class="w-full h-full z-0">
    <div
      @click="onClickList"
      class="z-10 bottom-16 right-4 absolute w-16 h-16 bg-primary text-lg font-bold rounded-full container shadow-md shadow-gray-500 py-4 px-4"
    >
      <img src="../assets/icon/list.png" />
    </div>

    <ol-map
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
      style="height: 100%"
      v-if="showMap"
    >
      <ol-view
        ref="view"
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection"
      />

      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>

      <ol-overlay :position="center">
        <template v-slot="slotProps">
          <div class="w-6 h-6">
            <img src="../assets/icon/own.png" />
          </div>
        </template>
      </ol-overlay>

      <ol-vector-layer>
        <ol-source-vector>
          <ol-feature>
            <ol-geom-multi-point
              :coordinates="coordinate"
            ></ol-geom-multi-point>
            <ol-style>
              <ol-style-icon :src="markerIcon" :scale="0.1"></ol-style-icon>
            </ol-style>
          </ol-feature>
        </ol-source-vector>
      </ol-vector-layer>
    </ol-map>
    <div class="mt-4" v-else>
      <div v-for="library in libraries" :key="library.libid">
        <div class="p-3">
          <div @click="onClickFavorite(library)">
            <img
              v-if="favorites.map((e) => e.libid).includes(library.libid)"
              class="float-right w-8 h-8"
              src="../assets/icon/favorite.png"
            />
            <img
              v-else
              class="float-right w-8 h-8"
              src="../assets/icon/favorite_outline.png"
            />
          </div>
          <p class="w-fit font-bold text-xs mb-2 bg-slate-200">
            {{ library.city }}
          </p>
          <p class="w-fit font-medium">{{ library.short }}</p>
          <p class="w-fit text-left text-sm">{{ library.address }}</p>
          <p class="text-right">{{ library.distance.toFixed(2) }}km</p>
        </div>
        <hr class="mr-6" />
      </div>
    </div>
  </div>
</template>
