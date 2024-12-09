<script setup>
import { AppState } from "@/AppState";
import { computed } from "vue";


const props = defineProps({ project: Object })
const projectIndex = computed(() => AppState.projects.findIndex((project) => props.project.title == project.title))
</script>


<template>
  <div v-if="projectIndex % 2" class="row mb-5">
    <div class="col-6">
      <p class="fs-3 fw-bold">{{ project.title }}</p>
      <p>{{ project.description }}</p>
    </div>
    <div class="col-6">
      <a :href="project.link">
        <img :src="project.img" :alt="`${project.title} Screenshot`" class="rounded">
      </a>
    </div>
  </div>
  <div v-else class="row mb-5">
    <div class="col-6">
      <a :href="project.link">
        <img :src="project.img" :alt="`${project.title} Screenshot`" class="rounded">
      </a>
    </div>
    <div class="col-6">
      <p class="fs-3 fw-bold">{{ project.title }}</p>
      <p>{{ project.description }}</p>
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