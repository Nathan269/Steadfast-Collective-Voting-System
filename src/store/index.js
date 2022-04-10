import { defineStore } from 'pinia';
import { getApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  increment,
  query,
  where,
  Timestamp,
} from 'firebase/firestore';

export const useStore = defineStore('main', {
  // other options...
  state: () => ({
    // all these properties will have their type inferred automatically
    page: 'voting',
    user: null,
    question: null,
    canVote: false,
    questionId: 'AdzPUug5kVXVgpH8rVCX'
  }),
  getters: {
    getPage(state) {
      return state.page;
    },
    getUser(state) {
      return state.user;
    },
    getQuestion(state) {
      return state.question;
    },
    getCanVote(state) {
      return state.canVote;
    },
  },
  actions: {
    updatePage(page) {
      this.page = page;
    },
    updateUser(user) {
      this.user = user;
    },
    async updateQuestion() {
      // gets the latest one question of the day for the user
      // if the user has already voted, it will get the next question
      // this function is for later

      const db = getFirestore(getApp());
      const questionRef = doc(db, 'question', this.questionId);
      const questionDoc = await getDoc(questionRef);
      if (questionDoc.exists) {
        const data = questionDoc.data();
        this.question = {
          title: data.question,
          options: [
            { id: 1, name: data.options[0] },
            { id: 2, name: data.options[1] },
            { id: 3, name: data.options[2] },
            { id: 4, name: data.options[3] },
          ],
        };
      } else {
        console.log('No such document!');
      }
    },
    async signUp(email, password) {
      
      const db = getFirestore(getApp());
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((snap) => {
          const user = snap.user;
          console.log(user.uid)
          setDoc(doc(db, "users", user.uid), {
          created_at: Timestamp.fromDate(new Date()),
          email,
          userId: user.uid
          });
          this.updatePage('voting');
        })
      // TODO: setuser info on the users collection
    },
    signIn(email, password) {
      const auth = getAuth();
      console.log('test under auth');
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log('test in then');
          this.updatePage('voting');
        })
      // TODO: setuser info on the users collection
    },
    async signOut() {
      const auth = getAuth();
      await auth.signOut();
      this.user = null;
      this.updatePage('signIn');
    },
    async setCanVote() {
      // checks if the user has already voted
      // if they have, it will the canVote property to false
      // if they dont haven't, it will set the canVote property to true
      const db = getFirestore(getApp());
      const userVoteQuery = query(
        collection(db, `question/${this.questionId}/user_votes`),
        where('userId', '==', this.user.uid),
      );

      const querySnapshot = await getDocs(userVoteQuery);
      this.canVote = (querySnapshot.docs.length === 0)? true : false;
    },

    async setVote(optionId) {
      const db = getFirestore(getApp());

      //set the vote for the user
      const questionRef = doc(
        db,
        `question/${this.questionId}/user_votes/${this.user.uid}`,
      );
      await setDoc(questionRef, {
        option2: optionId,
        userId: this.user.uid,
      });
      console.log('set vote');
      //increment the total votes for the option by 1
      const optionRef = doc(db, `question/${this.questionId}`);
      const optName = `opt${optionId}`;
      await updateDoc(optionRef, { [optName]: increment(1) });
      this.canVote = false;
    },
  },
});
