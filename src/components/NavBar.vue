<template>
  <nav>
    <ul
      class="flex px-10 sm:px-20 text-2xl whitespace-nowrap gap-10 sm:gap-20 overflow-x-scroll  scrollbar-hide">
      <li
        class="transition duration-300 transform hover:scale-125 hover:text-white active:text-red-500"
        v-for="link of requests" :key="link.title">
        <button>{{ link.title }}</button>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import requests from "@/utils/request";

const genreList: string[] = [];

Object.entries(requests).forEach(([key, { title, url }]) => {
  genreList.push(title);
});
</script>