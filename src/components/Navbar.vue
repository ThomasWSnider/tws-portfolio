<script setup>
import { onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';

const theme = ref(loadState('theme') || 'dark')

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})
</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark px-3">
    <div class="navbar-brand d-flex">
      <div class="d-flex flex-column align-items-center">
        <p class="fs-1 fw-bold my-1 ms-5">Thomas Snider</p>
      </div>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end me-5" id="navbarText">
      <ul class="navbar-nav ms-4">
        <li>
          <div class="btn text-light lighten-30 selectable fs-6 fw-semibold">
            About
          </div>
        </li>
      </ul>
      <ul class="navbar-nav ms-4">
        <li>
          <div class="btn text-light lighten-30 selectable fs-6 fw-semibold">
            Resume
          </div>
        </li>
      </ul>
      <ul class="navbar-nav ms-4">
        <li>
          <div class="btn text-light lighten-30 selectable fs-6 fw-semibold">
            Projects
          </div>
        </li>
      </ul>
      <ul class="navbar-nav ms-4">
        <li>
          <div class="btn text-light lighten-30 selectable fs-6 fw-semibold">
            Contact
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

nav {
  background-color: #000000b0;
}

@media screen and (min-width: 576px) {
  nav {
    height: 70px;
  }
}
</style>
