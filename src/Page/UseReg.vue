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
import { ref, computed } from 'vue';
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

const isLoading = ref(false);
const isSubmitted = ref(false);

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
    errors.value.firstName = 'Имя должна содержать минимум 3 буквы';
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

const isFormValid = computed(() => validateForm());

const router = useRouter();

const handleSubmit = (event) => {
  event.preventDefault();
  isSubmitted.value = true;
  if (isFormValid.value) {
    isLoading.value = true;
    console.log('Form submitted', form.value);
    setTimeout(() => {
      isLoading.value = false;
      router.push('/Login');
    }, 2000);
  }
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen px-5">
    <div class="border-2 border-[#FE5F5F] rounded-2xl max-[640px]:w-full">
      <div class="flex place-content-center">
        <div
          class="px-4 pb-2 text-2xl font-bold text-center border-t-0 border-b-2 border-[#FE5F5F] border-x-2 rounded-b-2xl"
        >
          Регистрация
        </div>
      </div>
      <form @submit="handleSubmit">
        <div class="grid items-center grid-cols-1 gap-5 p-5 sm:grid-cols-2 place-content-center">
          <div class="flex flex-col gap-5 max-[640px]:w-full">
            <div class="flex flex-col gap-1">
              <input
                v-model="form.lastName"
                type="text"
                placeholder="Фамилия"
                class="py-2 text-black bg-white border-2 border-black outline-none ps-5 rounded-2xl"
              />
              <span v-if="isSubmitted && errors.lastName" class="text-red-500 text-[12px]">{{
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
              <span v-if="isSubmitted && errors.firstName" class="text-red-500 text-[12px]">{{
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
              <span v-if="isSubmitted && errors.middleName" class="text-red-500 text-[12px]">{{
                errors.middleName
              }}</span>
            </div>
          </div>
          <div class="flex flex-col gap-5 max-[640px]:w-full">
            <div class="flex flex-col gap-1">
              <input
                v-model="form.email"
                type="email"
                placeholder="Email"
                class="py-2 text-black bg-white border-2 border-black outline-none ps-5 rounded-2xl"
              />
              <span v-if="isSubmitted && errors.email" class="text-red-500 text-[12px]">{{
                errors.email
              }}</span>
            </div>
            <div class="flex flex-col gap-1">
              <input
                v-model="form.phone"
                type="tel"
                placeholder="+7 (999) 999-99-99"
                class="py-2 text-black bg-white border-2 border-black outline-none ps-5 rounded-2xl"
              />
              <span v-if="isSubmitted && errors.phone" class="text-red-500 text-[12px]">{{
                errors.phone
              }}</span>
            </div>
            <div class="flex flex-col gap-1">
              <input
                v-model="form.password"
                type="password"
                placeholder="Пароль"
                class="py-2 text-black bg-white border-2 border-black outline-none ps-5 rounded-2xl"
              />
              <span v-if="isSubmitted && errors.password" class="text-red-500 text-[12px]">{{
                errors.password
              }}</span>
            </div>
          </div>
        </div>
        <div class="flex px-5 place-content-center">
          <button
            type="submit"
            :disabled="!isFormValid || isLoading"
            :class="{ 'opacity-50': !isFormValid || isLoading }"
            class="w-full pt-2 pb-2 text-white flex items-center justify-center disabled:cursor-not-allowed transition-all border-2 border-[#FE5F5F] outline-none cursor-pointer hover:border-black/65 hover:bg-black/65 rounded-2xl bg-[#FE5F5F]"
          >
            Зарегистрироваться
            <div v-if="isLoading" class="ml-2 loader"></div>
          </button>
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

<style scoped>
.loader {
  width: 18px;
  aspect-ratio: 1;
  display: grid;
}
.loader::before,
.loader::after {
  content: '';
  grid-area: 1/1;
  --c: no-repeat radial-gradient(farthest-side, #25b09b 92%, #0000);
  background:
    var(--c) 50% 0,
    var(--c) 50% 100%,
    var(--c) 100% 50%,
    var(--c) 0 50%;
  background-size: 12px 12px;
  animation: l12 1s infinite;
}
.loader::before {
  margin: 4px;
  filter: hue-rotate(45deg);
  background-size: 8px 8px;
  animation-timing-function: linear;
}

@keyframes l12 {
  100% {
    transform: rotate(0.5turn);
  }
}
</style>
