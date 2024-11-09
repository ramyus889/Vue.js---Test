<script setup>
import { ref } from 'vue';
import UseStats from './components/UseStats.vue';

const profile = ref({
  name: 'Рамазан Юсупов',
  email: 'frontend@example.com',
  avatarUrl: '/img/Code/frontend.jpg',
  location: 'Москва, Россия',
  socialLinks: {
    dev: 'https://dev.to/',
    hh: 'https://hh.ru/'
  },
  experience: 'Опыт Frontend разработки  1.6 лет.'
});
</script>

<template>
  <div class="px-5 mt-[150px]">
    <div class="">
      <div class="flex items-center pb-5 border-b">
        <img
          :src="profile.avatarUrl"
          data-aos="fade-up"
          data-aos-delay="100"
          alt="Profile Picture"
          class="w-24 h-24 mr-4 rounded-full"
        />
        <div>
          <h2 class="text-xl font-bold" data-aos="fade-up" data-aos-delay="150">
            {{ profile.name }}
          </h2>
          <p class="text-gray-600" data-aos="fade-up" data-aos-delay="200">{{ profile.email }}</p>
          <p class="text-gray-600" data-aos="fade-up" data-aos-delay="250">
            {{ profile.location }}
          </p>
        </div>
      </div>

      <div class="mt-4">
        <h3 class="text-lg font-semibold" data-aos="fade-up" data-aos-delay="100">Опыт</h3>
        <p class="text-gray-700" data-aos="fade-up" data-aos-delay="150">
          {{ profile.experience }}
        </p>
      </div>
      <div class="mt-4">
        <h3 class="text-lg font-semibold" data-aos="fade-up" data-aos-delay="200">
          Социальные сети
        </h3>
        <ul class="list-none">
          <li data-aos="fade-up" data-aos-delay="250">
            <a :href="profile.socialLinks.dev" target="_blank" class="text-blue-500">Dev.to</a>
          </li>
          <li data-aos="fade-up" data-aos-delay="300">
            <a :href="profile.socialLinks.hh" target="_blank" class="text-blue-500">HeadHunter</a>
          </li>
        </ul>
      </div>
    </div>
    <UseStats />
  </div>
</template>
