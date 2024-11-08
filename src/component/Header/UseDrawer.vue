<template>
  <div class="sticky top-0 bottom-0">
    <Drawer
      v-model:visible="visible"
      header="Test"
      position="top"
      class="!bg-white !h-[200px] !text-black"
    >
      <div class="flex flex-col gap-1 pt-3 border-t border-t-black">
        <a href="#" @click="visible = false" class="font-bold underline">Каталог услуг</a>
        <a href="#" @click="visible = false" class="font-bold underline">Онлайн помощник</a>
      </div>
    </Drawer>
    <div class="w-full">
      <button
        ref="scrollButton"
        @click="visible = true"
        class="flex justify-center w-full py-3 overflow-hidden bg-green-400 rounded-b-full"
      >
        <img src="/testFigma/arrowdown.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import Drawer from 'primevue/drawer';
import { onMounted, onUnmounted, ref } from 'vue';

const visible = ref(false);
let lastScrollTop = 0;
const scrollButton = ref(null);

const handleScroll = () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    gsap.to(scrollButton.value, { opacity: 0, height: 0, duration: 0.2 });
  } else {
    gsap.to(scrollButton.value, { opacity: 1, height: 'auto', duration: 0.2 });
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
