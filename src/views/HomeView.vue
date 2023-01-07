<template>
  <div class="HomeView h-full p-4 w-full">
    <el-divider>路由跳转</el-divider>
    <router-link to="login">
      <el-button>LoginView</el-button>
    </router-link>
    <router-link to="about">
      <el-button>AboutView</el-button>
    </router-link>
  </div>
</template>

<script setup name="HomeView" lang="ts"></script>

<style scoped></style>
