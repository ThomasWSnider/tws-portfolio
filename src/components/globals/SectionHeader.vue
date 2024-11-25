<script setup>
defineProps({ title: String })
</script>


<template>
  <div class="d-flex align-items-center">
    <p class="fs-6 my-2 text-subtle fw-semibold text-uppercase">{{ title }}</p>
    <div class="section-header"></div>
  </div>
</template>


<style lang="scss" scoped>
.section-header {
  height: 1.2px;
  width: 120px;
  background-color: var(--bs-warning);
  margin: 4px 10px 0px;
  display: inline-block;
}
</style>