<script setup>
import Panel from 'primevue/panel';
import ProgressBar from 'primevue/progressbar';
import { ref } from 'vue';
import UseDialogA from './UseDialogA.vue';

import { itemsProgressVue } from '../itemsStats';

const visible = ref(false);
</script>
<template>
  <div class="flex flex-col gap-10 mt-[100px] mb-[180px]">
    <div class="">
      <div data-aos="fade-up" data-aos-delay="100" class="text-2xl font-bold sm:text-3xl">
        Уровень навыков (Vue.js)
      </div>
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-6 max-w-[1200px]"
      >
        <div v-for="item in itemsProgressVue" :key="item.id" class="flex flex-col gap-3">
          <div data-aos="fade-up" :data-aos-delay="item.delay" class="">
            <Panel :header="item.name" toggleable :collapsed="!visible" class="">
              <ProgressBar :value="item.value"></ProgressBar>
              <div v-if="item.headerName ? true : false" class="">
                <UseDialogA :name="item.name" :headerName="item.headerName" />
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
