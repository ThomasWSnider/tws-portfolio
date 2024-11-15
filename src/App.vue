<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';

</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div id="navbar-container" class="col-lg-3 col-md-4 col-12 bg-dark">
          <Navbar />
        </div>
        <div class="col-lg-9 col-md-8 col-12">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

:root {
  --main-height: calc(100vh - 32px - 64px);
}

#navbar-container {
  border-right: 1px solid var(--bs-border-color-translucent);
}
</style>
