<script setup>
import Contact from "@/components/Contact.vue";
import Introduction from "@/components/Introduction.vue";
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";


</script>

<template>
  <div class="container-fluid mt-5 rounded d-flex justify-content-center main-content fade-in">
    <div class="row py-3 px-2">
      <!-- SECTION Introduction and Photo -->
      <section class="col-12">
        <div class="row">
          <div class="col-7">
            <div class="row px-4">
              <Introduction />
            </div>
          </div>
          <div class="col-5 pe-4">
            <div class="spacer"></div>
            <img
              src="https://images.unsplash.com/photo-1445499348736-29b6cdfc03b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="The feline placeholder" id="profileImg" class="rounded-1">
          </div>
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
#profileImg {
  object-fit: cover;
  object-position: center;
  max-width: 100%;
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
