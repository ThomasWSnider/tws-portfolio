<script setup>
import { Project } from "@/models/Project";


defineProps({ project: Project })
</script>


<template>
  <div class="row mb-5">
    <div class="col-5">
      <img :src="project.img" :alt="`${project.title} Screenshot`" class="rounded">
    </div>
    <div class="col-7">
      <p class="fs-3 fw-bold">{{ project.title }}</p>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  object-fit: cover;
  object-position: center;
  height: 325px;
  width: 100%;
}
</style>