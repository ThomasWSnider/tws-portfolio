<script setup>
import { AppState } from "@/AppState";
import { computed } from "vue";


const props = defineProps({ project: Object })
const projectIndex = computed(() => AppState.projects.findIndex((project) => props.project.title == project.title))
</script>


<template>
  <div v-if="projectIndex % 2" class="row mb-sm-5 mb-0 px-0">
    <div class="col-12 d-block d-sm-none">
      <p class="fs-3 fw-bold">{{ project.title }}</p>
    </div>
    <div class="col-sm-6 col-12  order-sm-0 order-1">
      <p class="fs-3 fw-bold d-none d-sm-block">{{ project.title }}</p>
      <p>{{ project.description }}</p>
    </div>
    <div class="col-sm-6 col-12 order-sm-1 order-0 p-0">
      <a :href="project.link">
        <img :src="project.img" :alt="`${project.title} Screenshot`" class="rounded mb-sm-0 mb-3">
      </a>
    </div>
  </div>
  <div v-else class="row mb-5">
    <div class="col-12 d-block d-sm-none">
      <p class="fs-3 fw-bold">{{ project.title }}</p>
    </div>
    <div class="col-sm-6 col-12 px-0">
      <a :href="project.link">
        <img :src="project.img" :alt="`${project.title} Screenshot`" class="rounded mb-sm-0 mb-3">
      </a>
    </div>
    <div class="col-sm-6 col-12">
      <p class="fs-3 fw-bold d-none d-sm-block">{{ project.title }}</p>
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

.mobile-padding {
  padding: 0;
}
</style>