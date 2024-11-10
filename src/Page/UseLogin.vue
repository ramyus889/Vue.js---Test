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
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const form = ref({
  email: '',
  password: ''
});

const errors = ref({
  email: '',
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
      router.push('/Profile');
    }, 2000);
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
              <span v-if="isSubmitted && errors.email" class="text-red-500 text-[12px]">{{
                errors.email
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
            <button
              type="submit"
              :disabled="!isFormValid || isLoading"
              :class="{ 'opacity-50': !isFormValid || isLoading }"
              class="w-full pt-2 pb-2 text-white flex items-center justify-center disabled:cursor-not-allowed transition-all border-2 border-[#FE5F5F] outline-none cursor-pointer hover:border-black/65 hover:bg-black/65 rounded-2xl bg-[#FE5F5F]"
            >
              Войти
              <div v-if="isLoading" class="ml-2 loader"></div>
            </button>
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
