<script setup>
const items = [
  {
    id: 1,
    image: '/testFigma/flex1.png',
    numTitle: '482',
    delay: 100,
    delay2: 150,
    delay3: 200,
    title: 'Организаций поддержки по Российской Федерации'
  },
  {
    id: 2,
    image: '/testFigma/flex2.png',
    numTitle: '5240',
    delay: 250,
    delay2: 300,
    delay3: 350,
    title: 'Оказано услуг государственной поддержки'
  },
  {
    id: 3,
    image: '/testFigma/flex3.png',
    numTitle: '1360',
    delay: 400,
    delay2: 450,
    delay3: 500,
    title: 'Зарегестрировано участников проекта'
  }
];
</script>
<template>
  <div class="flex place-content-center mt-[180px] px-5">
    <div class="">
      <div class="flex items-center gap-3 place-content-center">
        <img
          src="/testFigma/Vector.png"
          class="w-[12px]"
          alt=""
          data-aos="fade-up"
          data-aos-delay="50"
        />
        <div class="font-bold sm:text-[40px] text-[32px]" data-aos="fade-up" data-aos-delay="100">
          Преимущества
        </div>
        <img
          src="/testFigma/Vector.png"
          class="w-[12px]"
          alt=""
          data-aos="fade-up"
          data-aos-delay="50"
        />
      </div>
      <div class="flex flex-wrap place-content-center gap-[100px] mt-[70px]">
        <div v-for="item in items" :key="item.id" class="flex flex-col items-center gap-1">
          <div class="" data-aos="fade-up" :data-aos-delay="item.delay">
            <img :src="item.image" alt="" />
          </div>
          <div
            class="text-[#3865A7] text-[50px] font-bold"
            data-aos="fade-up"
            :data-aos-delay="item.delay2"
          >
            {{ item.numTitle }}
          </div>
          <div
            data-aos="fade-up"
            :data-aos-delay="item.delay3"
            class="text-[20px] font-bold max-w-[290px] text-center"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
