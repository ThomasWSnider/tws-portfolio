<script setup>
import { AppState } from "@/AppState";
import SectionHeader from "./globals/SectionHeader.vue";
import { computed } from "vue";

const projects = computed(() => AppState.projects)
</script>


<template>
  <div class="section-header-padding">
    <SectionHeader title="Projects" id="projects" />
  </div>
  <div class="row">
    <div class="col-12">
      <img src="/img/keepr-screenshot.png" alt="Keepr Screenshot">
    </div>
  </div>
</template>


<style lang="scss" scoped></style>