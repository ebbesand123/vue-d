<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/platonic">
          Platonische Körper
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
