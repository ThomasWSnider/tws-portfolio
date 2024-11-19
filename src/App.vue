<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

:root {
  --main-height: calc(100vh - 32px - 70px);
}

#navbar-container {
  border-right: 1px solid var(--bs-border-color-translucent);
}
</style>
