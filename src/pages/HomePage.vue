<script setup>
import Contact from "@/components/Contact.vue";
import Introduction from "@/components/Introduction.vue";
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";


</script>

<template>
  <div class="container-fluid mt-sm-5 mt-2 rounded d-flex justify-content-center main-content fade-in">
    <div class="row py-3 px-2">
      <!-- SECTION Introduction and Photo -->
      <section class="col-12" id="about">
        <div class="row mb-5">
          <Introduction />
        </div>
      </section>
      <!-- SECTION Skills and Experience -->
      <section class="col-12 mt-5 px-4 position-relative">
        <div class="position-absolute section-id" id="skills"></div>
        <Skills />
      </section>
      <!-- SECTION Projects -->
      <section class="col-12 mt-5 px-4 position-relative">
        <div class="position-absolute section-id" id="projects"></div>
        <Projects />
      </section>
      <!-- SECTION Contact Form -->
      <section class="col-12 mt-5 px-4 position-relative">
        <div class="position-absolute section-id" id="contact"></div>
        <Contact />
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-content {
  background-color: #000000e6;
  max-width: 85dvw;

  @media (max-width: 575.98px) {
    max-width: 100dvw;
    margin: 0;
  }
}

.spacer {
  height: 46px;
}

.section-id {
  top: -70px;
  width: 1px;
  height: 1px;
  background-color: transparent;
}
</style>
