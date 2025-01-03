<script setup>
import tes from "./components/header.vue";
import about from "./components/about.vue";
import skill from "./components/skill.vue";
import navbar from "./components/navbar.vue";
import resum from "./components/resum.vue";
import portofolio from "./components/portofolio.vue";
</script>

<template>
  <div class="container">
    <navbar />
    <tes />
    <about />
    <skill />
    <resum />
    <portofolio />
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
