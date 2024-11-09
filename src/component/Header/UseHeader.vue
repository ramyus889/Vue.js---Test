<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { routeUrl } from '../../router/routes.js';
import UseDrawer from './UseDrawer.vue';

const isScrollingDown = ref(false);

let lastScrollTop = 0;

const handleScroll = () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollTop > lastScrollTop) {
    isScrollingDown.value = true;
  } else {
    isScrollingDown.value = false;
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div
    :class="[
      'fixed top-0 left-0 right-0 z-[1000]',
      { 'backdrop-blur max-[640px]:pb-5': isScrollingDown }
    ]"
  >
    <div
      class="flex sm:flex-row flex-col justify-between items-center gap-5 md:px-0 px-5 sm:py-[35px] min-[1800px]:mx-[400px] xl:mx-[200px] lg:mx-[100px] md:mx-[50px]"
    >
      <div class="w-full sm:hidden">
        <UseDrawer />
      </div>
      <div class="flex items-stretch max-[640px]:w-full md:gap-5 gap-3">
        <RouterLink
          :to="`${routeUrl[1].path}`"
          class="py-2.5 sm:px-6 bg-[#FE5F5F] rounded-full text-white font-semibold text-center -mt-2 w-full sm:w-auto"
          >Личный кабинет</RouterLink
        >
        <a href="#" class="hidden font-bold sm:block"> Каталог услуг </a>
        <RouterLink :to="`${routeUrl[0].path}`" class="hidden font-bold sm:block">
          Мой бизнес
        </RouterLink>
      </div>
      <div class="hidden sm:block">
        <a href="#">
          <img src="/testFigma/Frame13.png" class="md:w-[190px] w-[170px]" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>
