<script setup>
import { useStore } from '../store/index';
import { ref } from 'vue';
const store = useStore();
let email = ref('');
let password = ref('');
const submit = () => {
  store.signIn(email.value, password.value);
  console.log('sent auth: ', email.value, password.value);
};

const signUp = () => {
  store.updatePage('signUp');
};
</script>

<template>
  <div class="m-20 p-20 border-2 border-vue-color-2 rounded-lg min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submit">
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="mb-5">
            <label for="email-address" class="sr-only" type="email">Email address</label>
            <input id="email-address" v-model="email" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only" type="password">Password</label>
            <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vue-color-1 hover:bg-vue-color-1-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2">
            <p class="text-white">Sign in</p>
          </button>
          <button @click="signUp" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vue-color-2 hover:bg-vue-color-2-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <p class="text-white">Sign Up</p>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
