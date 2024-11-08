<template>
  <div class="w-full">
    <Drawer v-model:visible="visible" header="Drawer" position="top">
      <div class="flex flex-col gap-1">
        <a href="#" @click="visible = false">Каталог услуг</a>
        <a href="#" @click="visible = false">Онлайн помощник</a>
      </div>
    </Drawer>
    <Button icon="pi pi-arrow-down" @click="visible = true" class="!w-full" />
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import { ref } from 'vue';

const visible = ref(false);
</script>
