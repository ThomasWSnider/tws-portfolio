<script setup>
import Icon from "./globals/Icon.vue";


defineProps({ skill: Object })
</script>


<template>
  <div class="skill-card mt-2 my-3 p-3 align-items-center">
    <Icon :name="skill.logo" :color="skill.color" size="xxx-large" />
    <p class="mb-0 ms-3">{{ skill.name }}</p>
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