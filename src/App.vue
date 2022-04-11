<script setup>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStore } from "./store/index";
import SignIn from "./components/Signin.vue";
import SignUp from "./components/Signup.vue";
import Voting from "./components/Voting.vue";

const auth = getAuth();
const store = useStore();
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.updateUser(user);
    const uid = user.uid;
    console.log("User is signed in", uid);
    console.log("page :", store.getPage);
  } else {
    console.log("User is signed out");
  }
});
</script>

<template>
  <Voting v-if="store.getUser && store.getPage === 'voting'"/>
  <SignIn v-else-if="store.getPage != 'signUp' && !store.getUser || store.getPage === 'signIn'"/>
  <SignUp v-else-if="store.getPage === 'signUp'"/>
</template>

<style>

</style>
