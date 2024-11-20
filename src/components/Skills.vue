<script setup>
import { AppState } from "@/AppState";
import SectionHeader from "./globals/SectionHeader.vue";
import { computed } from "vue";

const skills = computed(() => AppState.skills)


</script>


<template>
  <div>
    <SectionHeader title="Skills" id="skills" />
  </div>
  <div class="row">
    <div v-for="skill in skills" :key="skill.name" class="col-3">
      A Skill
    </div>
  </div>
</template>


<style lang="scss" scoped></style>