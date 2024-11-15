<script setup>

</script>

<template>
  <div class="row">
    <div class="col-7">
      <div class="row ps-4">
        <div class="col-12">
          <p class="fs-5 mt-5">Hello!</p>
        </div>
        <div class="col-12 mt-3">
          <p class="display-3">I'm <span class="fw-semibold text-warning">Thomas Snider</span></p>
        </div>
        <div class="col-12 mt-5">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ducimus sapiente excepturi, quibusdam
            inventore magni quidem eveniet accusantium distinctio iure veritatis ratione animi atque, temporibus facilis
            sunt ipsam. Sint minima totam quae accusamus nisi, fuga rem libero alias aspernatur atque, earum laudantium
            optio, eum mollitia odit commodi omnis repudiandae et eveniet maiores sequi debitis. Ratione nam ullam
            necessitatibus voluptates odio.</p>
        </div>
      </div>
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
