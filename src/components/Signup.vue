<script setup>
import { useStore } from '../store/index';
import { ref } from 'vue';
const store = useStore();
let email = ref("");
let password = ref("");
const submit = () => {
  store.signUp(email.value, password.value);
};

const signIn = () => {
  store.updatePage('signIn');
};
</script>

<template>
  <div class="m-20 p-20 border-2 border-vue-color-2 rounded-lg min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
    <div class="max-w-md w-full space-y-8">
      <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up your account</h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submit">
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="mb-5">
            <label for="exampleInputEmail1" class="sr-only">Email:</label>
            <input type="email" v-model="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div>
            <label for="exampleInputPassword1" class="sr-only">Password:</label>
            <input type="password" v-model="password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" id="exampleInputPassword1" placeholder="Enter password">
          </div>
        </div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vue-color-1 hover:bg-vue-color-1-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2">
          <p class="text-white">Sign Up</p>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>