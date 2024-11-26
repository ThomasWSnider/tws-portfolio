<script setup>
defineProps({ title: String })
</script>


<template>
  <div class="d-flex align-items-center">
    <p class="fs-6 my-2 text-subtle fw-semibold text-uppercase">{{ title }}</p>
    <div class="section-header my-auto ms-2"></div>
  </div>
</template>


<style lang="scss" scoped>
.section-header {
  height: 0px;
  width: 120px;
  border-width: .5px 0px;
  border-color: var(--bs-warning);
  border-style: solid;
  display: inline-block;
}
</style>