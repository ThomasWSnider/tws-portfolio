<script setup>
import ContactForm from "./ContactForm.vue";
import SectionHeader from "./globals/SectionHeader.vue";


</script>


<template>
  <div class="section-header-padding">
    <SectionHeader title="Contact" />
  </div>
  <p class="fs-2 fw-bold">Send Me A Message</p>
  <div class="pb-4 pt-0">
    <div class="form-container rounded">
      <ContactForm />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.form-container {
  background-color: #ffffff14;
}
</style>