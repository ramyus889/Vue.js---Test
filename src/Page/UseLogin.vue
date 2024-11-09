<script>
export default {
  name: 'UseLogin',
  mounted() {
    document.title = 'Вход';
  }
};
</script>
<script setup>
import { routeUrl } from '@/router/routes';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const form = ref({
  lastName: '',
  firstName: '',
  middleName: '',
  email: '',
  phone: '',
  password: ''
});

const errors = ref({
  lastName: '',
  firstName: '',
  middleName: '',
  email: '',
  phone: '',
  password: ''
});

const validateForm = () => {
  let isValid = true;

  for (const key in errors.value) {
    errors.value[key] = '';
  }

  if (form.value.password.length < 3) {
    errors.value.password = 'Пароль должен содержать минимум 3 буквы';
    isValid = false;
  }
  if (form.value.email.length < 3) {
    errors.value.email = 'Email должна содержать минимум 3 буквы';
    isValid = false;
  }

  return isValid;
};

const router = useRouter();

const handleSubmit = (event) => {
  event.preventDefault();
  if (validateForm()) {
    console.log('Form submitted', form.value);
    router.push('/Profile');
  }
};
</script>
<template>
  <div class="flex items-center justify-center min-h-screen px-5">
    <div class="border-2 border-[#FE5F5F] rounded-2xl max-w-[500px] w-full">
      <div class="flex place-content-center">
        <div
          class="px-4 pb-2 text-2xl font-bold text-center border-t-0 border-b-2 border-[#FE5F5F] border-x-2 rounded-b-2xl"
        >
          Вход
        </div>
      </div>
      <form @submit="handleSubmit">
        <div class="flex flex-wrap gap-5 p-5 place-content-center">
          <div class="flex flex-col w-full gap-5">
            <div class="flex flex-col gap-1">
              <input
                v-model="form.email"
                type="email"
                placeholder="Email"
                class="py-2 text-black bg-white border-2 border-black outline-none ps-5 rounded-2xl"
              />
              <span v-if="errors.email" class="text-red-500 text-[12px]">{{ errors.email }}</span>
            </div>
            <div class="flex flex-col gap-1">
              <input
                v-model="form.password"
                type="password"
                placeholder="Пароль"
                class="py-2 text-black bg-white border-2 border-black outline-none ps-5 rounded-2xl"
              />
              <span v-if="errors.password" class="text-red-500 text-[12px]">{{
                errors.password
              }}</span>
            </div>
            <input
              type="submit"
              value="Войти"
              class="pt-2 pb-2 text-white transition-all border-2 border-[#FE5F5F] outline-none cursor-pointer hover:border-[#f24c4c] hover:bg-[#f24c4c] rounded-2xl bg-[#FE5F5F]"
            />
          </div>
        </div>
      </form>
      <div class="flex justify-between w-full mt-[20px]">
        <div class="flex place-content-start">
          <RouterLink
            :to="`${routeUrl[0].path}`"
            class="px-4 pb-2 text-xl font-bold text-center border-t-2 border-b-0 border-l-0 border-r-2 border-[#FE5F5F] rounded-tr-2xl"
          >
            Назад
          </RouterLink>
        </div>
        <div class="flex place-content-start">
          <RouterLink
            :to="`${routeUrl[1].path}`"
            class="px-4 pb-2 text-xl font-bold text-center border-t-2 border-b-0 border-l-2 border-r-0 border-[#FE5F5F] rounded-tl-2xl"
          >
            Регистрация
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
