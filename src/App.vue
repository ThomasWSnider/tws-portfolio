<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="container-fluid mt-5 rounded d-flex justify-content-center">
      <div class="row py-3 mt-5 main-content">
        <div class="col-12 mt-5">
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

.main-content {
  background-color: #000000e6;
  max-width: 85dvw;
}

div.container-fluid {
  margin-bottom: 60px;
}
</style>
