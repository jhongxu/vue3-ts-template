<template>
  <div class="about w-full h-full">
    <h1>This is an about page</h1>
    <p>count: {{ count }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <el-button @click="counter.increment">增加</el-button>
  </div>
</template>
<script setup lang="ts" name="AboutView">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
const { count, doubleCount } = storeToRefs(counter)
</script>
<style></style>
