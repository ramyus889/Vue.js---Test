<script setup>
import { routeUrl } from '../router/routes.js';
import UseDrawer from './UseDrawer.vue';
</script>

<template>
  <div
    class="flex sm:flex-row flex-col justify-between items-center gap-5 min-[1800px]:mx-[400px] xl:mx-[200px] lg:mx-[100px] md:mx-[50px] md:px-0 px-5 sm:py-[35px]"
  >
    <div class="block sm:hidden">
      <UseDrawer />
    </div>
    <div class="flex items-center w-full gap-5">
      <RouterLink
        :to="`${routeUrl[0].path}`"
        class="py-2.5 sm:px-6 bg-[#FE5F5F] rounded-full text-white font-semibold text-center w-full sm:w-auto"
        >Личный кабинет</RouterLink
      >
      <a href="#" class="hidden font-bold sm:block"> Каталог услуг </a>
    </div>
    <div class="hidden sm:block">
      <a href="#">
        <img src="/testFigma/Frame13.png" alt="" />
      </a>
    </div>
  </div>
</template>
