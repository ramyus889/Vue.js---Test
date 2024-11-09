<script setup>
const items = [
  {
    id: 1,
    image: '/testFigma/Screenshot_1.png',
    title: 'Пекарня “Русские традиции”',
    classFlex: 'lg:flex-row',
    delay: 100,
    delay2: 150,
    delay3: 200,
    redText:
      'Как говорит сам Владимир: «мне хотелось, чтобы все узнали, что такое русская кухня», «обьяснить, что она жива».',
    text: ' Чтобы мини-пекарня стала рентабельным бизнесом, необходимы строгие расчеты, учет рисков и перспектив, анализ рынка, налаживание сбыта.'
  },
  {
    id: 2,
    image: '/testFigma/Screenshot_2.png',
    title: 'Автомастерская',
    classFlex: 'lg:flex-row-reverse',
    delay: 250,
    delay2: 300,
    delay3: 350,
    redText:
      'Первые дни независимости. Когда не нужно рано вставать, когда не нужно отпрашиваться, что бы успеть съездить в магазин, когда удобно.',
    text: 'Встреча в городе Н с моими будущими партнерами была плодотворной. Я не смог заснуть до пяти утра – не потому что не спалось, но потому что мысли о будущих перспективах просто взрывали мой мозг. '
  },
  {
    id: 3,
    image: '/testFigma/Screenshot_3.png',
    title: 'Салон красоты “Эмират”',
    classFlex: 'lg:flex-row',
    delay: 400,
    delay2: 450,
    delay3: 500,
    redText:
      'Когда же появилась возможность открыть свой бизнес, я рассматривала различные варианты, изучала всевозможные направления.'
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
          Истории успеха
        </div>
        <img
          src="/testFigma/Vector.png"
          class="w-[12px]"
          alt=""
          data-aos="fade-up"
          data-aos-delay="50"
        />
      </div>
      <div
        v-for="item in items"
        :key="item.id"
        class="flex flex-col gap-20 lg:gap-10 mb-20 mt-[50px]"
      >
        <div :class="item.classFlex" class="flex flex-col items-center gap-10 lg:gap-20">
          <div class="" data-aos="fade-up" :data-aos-delay="item.delay">
            <img :src="item.image" alt="" class="w-[350px]" />
          </div>
          <div class="text-center lg:text-start">
            <div
              class="text-[24px] font-bold my-4"
              data-aos="fade-up"
              :data-aos-delay="item.delay2"
            >
              {{ item.title }}
            </div>
            <div class="flex items-center gap-5 my-4">
              <div class="hidden lg:flex">
                <img
                  src="/testFigma/flexColGroup.png"
                  alt=""
                  data-aos="fade-up"
                  :data-aos-delay="item.delay2"
                />
                <img
                  src="/testFigma/flexColGroup.png"
                  alt=""
                  data-aos="fade-up"
                  :data-aos-delay="item.delay3"
                />
              </div>
              <div
                data-aos="fade-up"
                :data-aos-delay="item.delay"
                class="lg:max-w-[520px] max-w-[400px] text-[#FE5F5F] font-bold"
              >
                {{ item.redText }}
              </div>
            </div>
            <div
              data-aos="fade-up"
              :data-aos-delay="item.dela2"
              class="lg:max-w-[580px] max-w-[400px] font-semibold my-4"
            >
              {{ item.text }}
            </div>
            <div class="flex lg:place-content-start place-content-center">
              <button
                data-aos="fade-up"
                :data-aos-delay="item.delay3"
                class="flex items-baseline gap-3 bg-[#3864A7] py-[11px] px-[33px] text-white rounded-full"
              >
                Читать историю <img src="/testFigma/arrowright.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
