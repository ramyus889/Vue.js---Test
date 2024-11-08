<script setup>
import { routeUrl } from '../../router/routes.js';
import UseDrawer from './UseDrawer.vue';
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 min-[1800px]:mx-[400px] xl:mx-[200px] lg:mx-[100px] md:mx-[50px] z-[1000]"
  >
    <div
      class="flex sm:flex-row flex-col justify-between items-center gap-5 md:px-0 px-5 sm:py-[35px]"
    >
      <div class="w-full sm:hidden">
        <UseDrawer />
      </div>
      <div class="flex items-center max-[640px]:w-full gap-5">
        <RouterLink
          :to="`${routeUrl[0].path}`"
          class="py-2.5 sm:px-6 bg-[#FE5F5F] rounded-full text-white font-semibold text-center -mt-2 w-full sm:w-auto"
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
  </div>
</template>
