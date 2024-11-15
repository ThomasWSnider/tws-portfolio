<script setup>
import { onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';

const theme = ref(loadState('theme') || 'dark')

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}

</script>

<template>
  <nav class="d-flex flex-column">
    <div class="navbar-brand d-flex justify-content-center align-items-center mt-5" :to="{ name: 'Home' }">
      <div class="picture-container d-flex justify-content-center align-items-center">
        <img alt="logo" src="/img/cw-logo.png" />
      </div>
    </div>
    <div class="navbar-collapse d-flex flex-column mt-5" id="navbarText">
      <ul class="navbar-nav mx-auto mb-4">
        <li>
          <router-link :to="{ name: 'About' }" class="btn fs-6 text-light lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav mx-auto mb-4">
        <li>
          <router-link :to="{ name: 'About' }" class="btn fs-6 text-light lighten-30 selectable text-uppercase">
            Skills
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav mx-auto mb-4">
        <li>
          <router-link :to="{ name: 'About' }" class="btn fs-6 text-light lighten-30 selectable text-uppercase">
            Projects
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav mx-auto mb-4">
        <li>
          <router-link :to="{ name: 'About' }" class="btn fs-6 text-light lighten-30 selectable text-uppercase">
            Contact Me
          </router-link>
        </li>
      </ul>
      <div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a:hover {
  text-decoration: none;
}

img {
  height: 8em;
  aspect-ratio: 1/1;
  border-radius: 50%;
}

nav {
  height: 100dvh;
}

.picture-container {
  height: 15em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: var(--bs-page);
  margin-top: 30px;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  font-weight: bold;
}
</style>
