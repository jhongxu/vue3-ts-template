<template>
  <div class="relative w-full h-full">
    <video
      class="absolute top-0 left-0 w-full h-full -z-10"
      :src="backgroundVideo"
    ></video>
    <RouterView />
  </div>
</template>
<script setup name="App" lang="ts">
import backgroundVideo from '@/assets/videos/background.mp4'
</script>
<style scoped lang="scss">
.background {
  position: relative;
}
</style>
