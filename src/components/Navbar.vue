<script setup>
import { onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';

const theme = ref(loadState('theme') || 'dark')
const activeSection = ref('projects')
const sectionIds = ref([
  'about',
  'skills',
  'projects',
  'contact'
])

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})

function handleIntersection() {

}

function scrollToTop() {
  window.scrollTo({ top: 0 })
}

</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark px-3 fixed-top fade-in">
    <div class="navbar-brand d-flex">
      <div class="d-flex flex-column align-items-center">
        <p class="display-5 fw-bold my-1 ms-5">Thomas Snider</p>
      </div>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end me-5" id="navbarText">
      <ul class="navbar-nav ms-4">
        <li>
          <a href="#about" @click.prevent="scrollToTop" :class="{ 'active-section': activeSection == 'about' }"
            class="btn text-light lighten-30 fs-6 fw-semibold">
            About
            <div class="navbar-border"></div>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav ms-4">
        <li>
          <a href="#skills" :class="{ 'active-section': activeSection == 'skills' }"
            class="btn text-light lighten-30 fs-6 fw-semibold">
            Skills
            <div class="navbar-border"></div>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav ms-4">
        <li>
          <a href="#projects" :class="{ 'active-section': activeSection == 'projects' }"
            class="btn text-light lighten-30 fs-6 fw-semibold">
            Projects
            <div class="navbar-border"></div>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav ms-4">
        <li>
          <a href="#contact" :class="{ 'active-section': activeSection == 'contact' }"
            class="btn text-light lighten-30 fs-6 fw-semibold">
            Contact
            <div class="navbar-border"></div>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  text-transform: uppercase;
}

a {
  text-decoration: none;
  min-width: 80px;

  >div.navbar-border {
    height: 100%;
    width: 14px;
    border-bottom: 3px solid var(--bs-warning);
    position: relative;
    bottom: -3px;
    left: 0;
    transition: width 0.15s ease-in-out;
  }

  &:hover>div.navbar-border {
    width: 45%;
  }

  &.active-section>div.navbar-border {
    width: 66%;
  }
}

nav {
  background-color: #000000e6;
}

@media screen and (min-width: 576px) {
  nav {
    height: 70px;
  }
}
</style>
