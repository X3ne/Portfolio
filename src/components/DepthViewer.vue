<script setup lang="ts">
import VueDepthViewer from "vue-depth-viewer"
import image from "../assets/images/image.png"
import depth from "../assets/images/depth.png"
import image1 from "../assets/images/image1.jpg"
import depth1 from "../assets/images/depth1.png"
import { ref } from "vue"
import "vue-depth-viewer/style.css"

const scenes = ref([
  {
    name: "Interior",
    image: image,
    depth: depth,
    options: {
      horizontalThreshold: 150,
      verticalThreshold: 180,
    },
  },
  {
    name: "Fate house",
    image: image1,
    depth: depth1,
    options: {
      horizontalThreshold: 150,
      verticalThreshold: 180,
    },
  },
])
const selectedScene = ref(1)
</script>

<template>
  <div class="flex flex-col justify-center items-center space-y-2">
    <select
      v-model="selectedScene"
      class="px-2 py-1 bg-background rounded-md cursor-pointer"
    >
      <option v-for="(scene, index) in scenes" :key="index" :value="index">
        {{ scene.name }}
      </option>
    </select>
    <div class="flex w-fit rounded-md overflow-hidden">
      <div class="w-fit relative">
        <img :src="scenes[selectedScene].image.src" class="w-48" />
        <p
          class="absolute bottom-1 left-1 bg-white/50 px-2 py-[1px] rounded-md text-base"
        >
          Original
        </p>
      </div>
      <div class="w-fit relative">
        <img :src="scenes[selectedScene].depth.src" class="w-48" />
        <p
          class="absolute bottom-1 left-1 bg-white/50 px-2 py-[1px] rounded-md text-base"
        >
          Depthmap
        </p>
      </div>
    </div>
    <div class="relative w-fit">
      <VueDepthViewer
        :img="scenes[selectedScene].image.src"
        :depth-img="scenes[selectedScene].depth.src"
        :options="{
          horizontalThreshold:
            scenes[selectedScene].options.horizontalThreshold,
          verticalThreshold: scenes[selectedScene].options.verticalThreshold,
          useScreen: true,
        }"
        class="rounded-md max-w-full h-auto"
      />
      <ul
        class="absolute bottom-1 left-1 z-30 bg-white/50 px-2 py-[1px] rounded-md text-base"
      >
        <li>
          horizontalThreshold:
          {{ scenes[selectedScene].options.horizontalThreshold }}
        </li>
        <li>
          verticalThreshold:
          {{ scenes[selectedScene].options.verticalThreshold }}
        </li>
        <li>useScreen: true</li>
      </ul>
    </div>
  </div>
</template>
