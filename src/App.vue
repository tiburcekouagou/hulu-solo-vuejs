<template>
  <HeaderComp />
  <main>
    <NavBar />

    <!-- partie qui sera rendue dynamiquement -->
    <!-- <router-view></router-view> -->
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import HeaderComp from "@/components/HeaderComp.vue";
import NavBar from "./components/NavBar.vue";
</script>