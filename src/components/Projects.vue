<script setup>
import { AppState } from "@/AppState";
import SectionHeader from "./globals/SectionHeader.vue";
import { computed } from "vue";
import ProjectCard from "./ProjectCard.vue";

const projects = computed(() => AppState.projects)
</script>


<template>
  <div class="section-header-padding mb-3 mb-sm-0">
    <SectionHeader title="Projects" />
  </div>
  <div class="row mt-2">
    <div v-for="project in projects" :key="project.title" class="col-12">
      <ProjectCard :project="project" />
    </div>
  </div>
</template>


<style lang="scss" scoped></style>