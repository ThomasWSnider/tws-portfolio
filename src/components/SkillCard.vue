<script setup>
import { Skill } from "@/models/Skill";
import Icon from "./globals/Icon.vue";


defineProps({ skill: Skill })
</script>


<template>
  <div class="skill-card my-3 p-3 align-items-center">
    <Icon :name="skill.logo" :color="skill.color" size="xx-large" />
    <p class="mb-0 ms-2">{{ skill.name }}</p>
  </div>
</template>


<style lang="scss" scoped>
.skill-card {
  background-color: #ffffff14;
  width: 100%;
  display: flex;
}

p {
  font-size: 16px;
  font-weight: 700;
}
</style>