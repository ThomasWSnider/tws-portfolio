<script setup>
import { AppState } from "@/AppState";
import { Project } from "@/models/Project";
import { computed } from "vue";


const props = defineProps({ project: Project })
const projectIndex = computed(() => AppState.projects.findIndex((project) => props.project.title == project.title))
</script>


<template>
  <div v-if="projectIndex % 2" class="row mb-5">
    <div class="col-6">
      <img :src="project.img" :alt="`${project.title} Screenshot`" class="rounded">
    </div>
    <div class="col-6">
      <p class="fs-3 fw-bold">{{ project.title }}</p>
      <p>{{ project.description }}</p>
    </div>
  </div>
  <div v-else class="row mb-5">
    <div class="col-6">
      <p class="fs-3 fw-bold">{{ project.title }}</p>
      <p>{{ project.description }}</p>
    </div>
    <div class="col-6">
      <img :src="project.img" :alt="`${project.title} Screenshot`" class="rounded">
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  object-fit: cover;
  object-position: top;
  height: 325px;
  width: 100%;
}
</style>