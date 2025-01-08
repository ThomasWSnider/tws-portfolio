<script setup>
import SectionHeader from "./globals/SectionHeader.vue";


</script>


<template>
  <div class="section-header-padding mb-3 mb-sm-0">
    <SectionHeader title="About" />
  </div>
  <div class="col-sm-7 col-12 order-1 order-sm-0">
    <div class="row">
      <div class="col-12 text-center text-sm-start">
        <p class="fs-1 fw-bold my-0">Hello There!</p>
      </div>
      <div class="col-12 mt-sm-3 mt-0 px-0 text-center text-sm-start">
        <p>I am a driven and versatile web developer with a
          passion for problem
          solving. I
          recently graduated from Boise Codeworks, a 12 week coding bootcamp, where I learned the ins and outs of web
          development
          with
          an emphasis on MVC architecture. My commitment to growth is reflected in my continuous pursuit of mastering
          new
          tools and technologies. I thrive in collaborative environments that encourage innovation and enjoy
          leveraging my analytical mindset to solve new and complex challenges. Whether I am working on front-end
          interfaces
          or back-end logic, my goal is to create solutions that not only meet objectives but also delight users.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-5 col-12 order-0 order-sm-1 mb-3 mb-sm-0 pe-sm-0 pe-md-1">
    <div class="spacer"></div>
    <img src="../../public/img/Me.jpg" alt="Thomas Snider" id="profileImg" class="rounded-1 d-none d-sm-block">
    <img src="../../public/img/MeForMobile.jpg" alt="Thomas Snider" id="profileImg" class="rounded-1 d-sm-none d-block">
  </div>
</template>


<style lang="scss" scoped>
#profileImg {
  object-fit: cover;
  object-position: center;
  max-width: 100%;
}
</style>