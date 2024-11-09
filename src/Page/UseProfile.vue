<script>
export default {
  name: 'UseProfile',
  mounted() {
    document.title = 'Профиль';
  }
};
</script>
<script setup>
import UseFooter from '@/component/Footer/UseFooter.vue';
import UseMainProfile from './UseMainProfile.vue';
</script>
<template>
  <div class="min-[1800px]:mx-[400px] xl:mx-[200px] lg:mx-[100px] md:mx-[50px]">
    <UseMainProfile />
  </div>
  <div class="mt-[50px]">
    <UseFooter />
  </div>
</template>
