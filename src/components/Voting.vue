<script setup>
import { useStore } from '../store/index';
import { ref } from 'vue';

const store = useStore();

const signOut = () => {
  store.signOut();
};

const vote = (id) => {
  store.setVote(id);
};

store.setCanVote();
store.updateQuestion();
</script>

<template>
  <div>
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Steadfast Collective Voting System</h2>
    </div>
    <div class="bg-slate-50 m-20 p-20 border-2 border-gray-800 rounded-lg">
      <div v-if="store.getCanVote">
        <h4 class="mt-6 text-center text-2xl font-extrabold text-gray-900 mb-5" v-if="store.getQuestion">{{ store.getQuestion.title }}</h4>
        <h4 v-else>loading...</h4>
        <div class="quest-options flex flex-col items-center" v-if="store.getQuestion">
          <button
            class="mb-5 w-full h-12 px-6 text-white transition-colors duration-150 bg-vue-color-1 hover:bg-vue-color-1-hover rounded-lg focus:shadow-outline"
            v-for="option in store.getQuestion.options"
            :key="option.id"
            @click="vote(option.id)"
          >
            {{ option.name }}
          </button>

          <button @click="signOut" class="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vue-color-2 hover:bg-vue-color-2-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <p class="text-white">Sign Out</p>
          </button>
        </div>
      </div>
      <div v-else>
        <h2 class="mb-5">You have successfully submitted your vote!🎊 This account will no longer be able to vote again.</h2>
        <button @click="signOut" class="group py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vue-color-2 hover:bg-vue-color-2-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <p class="text-white">Sign Out</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
