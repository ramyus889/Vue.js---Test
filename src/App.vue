<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import UseHeader from './component/Header/UseHeader.vue';

const show = ref(true);
const route = useRoute();

watch(
  () => route.path,
  (newPath) => {
    if (newPath === '/Reg' || newPath === '/Login') {
      show.value = false;
    } else {
      show.value = true;
    }
  }
);
</script>

<template>
  <div>
    <div v-if="show">
      <UseHeader />
    </div>
    <RouterView />
  </div>
</template>
