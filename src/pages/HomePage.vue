<script setup>
import Introduction from "@/components/Introduction.vue";
import Skills from "@/components/Skills.vue";


</script>

<template>
  <div class="row">
    <!-- SECTION Introduction and Photo -->
    <div class="col-7">
      <div class="row px-4">
        <Introduction />
      </div>
    </div>
    <div class="col-5">
      <div class="spacer"></div>
      <img
        src="https://images.unsplash.com/photo-1445499348736-29b6cdfc03b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="The feline placeholder" id="profileImg" class="rounded-1">
    </div>
    <!-- SECTION Skills and Experience -->
    <div class="col-12 mt-5 px-4">
      <Skills />
    </div>
    <!-- SECTION Projects -->
    <div class="col-12 mt-5 px-4">

    </div>
  </div>
</template>

<style scoped lang="scss">
#profileImg {
  object-fit: cover;
  object-position: center;
  max-width: 100%;
}

.spacer {
  height: 46px;
}
</style>
