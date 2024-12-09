<script setup>

</script>


<template>
  <div class="message-container">
    <div class="d-flex flex-column justify-content-center align-items-center h-100">
      <p class="fs-2 fw-semibold mb-0">Thank You!</p>
      <i class="mdi mdi-check text-info display-2"></i>
      <div class="btn-reset-form text-center">
        <i class="mdi mdi-reload fs-5"></i>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.message-container {
  background-color: #ffffff14;
  height: 230px;
}

.btn-reset-form {
  cursor: pointer;
  height: 2em;
  aspect-ratio: 1/1;
  padding-left: 2px;
  border-radius: 50%;
  transition: transform 0.4s linear;


  &:hover {
    background-color: var(--bs-secondary);
    transform: rotate(180deg);

    .mdi {
      filter: drop-shadow(0 0 5px #ffffffb2);
    }
  }
}
</style>