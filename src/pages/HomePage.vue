<script setup>
import Introduction from "@/components/Introduction.vue";


</script>

<template>
  <div class="row">
    <div class="col-7">
      <div class="row ps-4">
        <Introduction />
      </div>
    </div>
    <div class="row">

    </div>
    <div class="col-5"></div>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
