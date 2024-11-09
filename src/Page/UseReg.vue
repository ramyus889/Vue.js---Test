<script>
export default {
  name: 'UseReg',
  mounted() {
    document.title = 'Регистрация';
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
  if (form.value.lastName.length < 3) {
    errors.value.lastName = 'Фамилия должна содержать минимум 3 буквы';
    isValid = false;
  }
  if (form.value.firstName.length < 3) {
    errors.value.firstName = 'Имя должно содержать минимум 3 буквы';
    isValid = false;
  }
  if (form.value.middleName.length < 3) {
    errors.value.middleName = 'Отчество должно содержать минимум 3 буквы';
    isValid = false;
  }
  if (form.value.phone.length < 10) {
    errors.value.phone = 'Телефон должен содержать 11 цифр';
    isValid = false;
  }

  return isValid;
};

const router = useRouter();

const handleSubmit = (event) => {
  event.preventDefault();
  if (validateForm()) {
    console.log('Form submitted', form.value);
    router.push('/Login');
  }
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen px-5">
    <div class="border-2 border-[#FE5F5F] rounded-2xl">
      <div class="flex place-content-center">
        <div
          class="px-4 pb-2 text-2xl font-bold text-center border-t-0 border-b-2 border-[#FE5F5F] border-x-2 rounded-b-2xl"
        >
          Регистрация
        </div>
      </div>
      <form @submit="handleSubmit">
        <div class="grid items-center grid-cols-2 gap-5 p-5 place-content-center">
          <div class="flex flex-col gap-5 max-[550px]:w-full">
            <div class="flex flex-col gap-1">
              <input
                v-model="form.lastName"
                type="text"
                placeholder="Фамилия"
                class="py-2 text-black bg-white border-2 border-black outline-none ps-5 rounded-2xl"
              />
              <span v-if="errors.lastName" class="text-red-500 text-[12px]">{{
                errors.lastName
              }}</span>
            </div>
            <div class="flex flex-col gap-1">
              <input
                v-model="form.firstName"
                type="text"
                placeholder="Имя"
                class="py-2 text-black bg-white border-2 border-black outline-none ps-5 rounded-2xl"
              />
              <span v-if="errors.firstName" class="text-red-500 text-[12px]">{{
                errors.firstName
              }}</span>
            </div>
            <div class="flex flex-col gap-1">
              <input
                v-model="form.middleName"
                type="text"
                placeholder="Отчество"
                class="py-2 text-black bg-white border-2 border-black outline-none ps-5 rounded-2xl"
              />
              <span v-if="errors.middleName" class="text-red-500 text-[12px]">{{
                errors.middleName
              }}</span>
            </div>
          </div>
          <div class="flex flex-col gap-5 max-[550px]:w-full">
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
                v-model="form.phone"
                type="tel"
                placeholder="+7 (999) 999-99-99"
                class="py-2 text-black bg-white border-2 border-black outline-none ps-5 rounded-2xl"
              />
              <span v-if="errors.phone" class="text-red-500 text-[12px]">{{ errors.phone }}</span>
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
          </div>
        </div>
        <div class="flex px-5 place-content-center">
          <input
            type="submit"
            value="Зарегистрироваться"
            class="w-full pt-2 pb-2 text-white transition-all border-2 border-[#FE5F5F] outline-none cursor-pointer hover:border-black/65 hover:bg-black/65 rounded-2xl bg-[#FE5F5F]"
          />
        </div>
      </form>
      <div class="flex justify-between w-full mt-[30px]">
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
            :to="`${routeUrl[2].path}`"
            class="px-4 pb-2 text-xl font-bold text-center border-t-2 border-b-0 border-l-2 border-r-0 border-[#FE5F5F] rounded-tl-2xl"
          >
            Вход
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
