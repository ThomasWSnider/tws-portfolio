<script setup>
import { AppState } from "@/AppState";
import SectionHeader from "./globals/SectionHeader.vue";
import { computed } from "vue";
import SkillCard from "./SkillCard.vue";

const skills = computed(() => AppState.skills)


</script>


<template>
  <div class="section-header-padding">
    <SectionHeader title="Skills" />
  </div>
  <div class="row">
    <div v-for="skill in skills" :key="skill.name" class="col-3">
      <SkillCard :skill="skill" />
    </div>
  </div>
</template>


<style lang="scss" scoped></style>