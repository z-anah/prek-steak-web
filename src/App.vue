
<script lang="ts">
import { defineComponent } from "vue";
// firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  onSnapshot,
  collection,
  doc,
  deleteDoc,
  setDoc,
  addDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {ref,onUnmounted} from 'vue';

const firebaseConfig = {
  apiKey: "AIzaSyBQQdDLImj_2kxfOUUlBLhITt2Z682d95k",
  authDomain: "perso-news-app.firebaseapp.com",
  projectId: "perso-news-app",
  storageBucket: "perso-news-app.appspot.com",
  messagingSenderId: "906006395441",
  appId: "1:906006395441:web:a03165775f4621fe123310",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);




export default defineComponent({
  name: 'App',
  components: {},
  methods: {
  },
  data:()=> {
    return {
      messages: [] as { id: string; label: string; harga: string }[],
    }
  },
  mounted() {
    console.log("mounted");
    
    const latestQuery = query(collection(db, "ps_menu"), orderBy("label", "desc"));
    const livemessages = onSnapshot(latestQuery,(snapshot)=>{
      this.$data.messages = snapshot.docs.map((doc) => {
        console.log(doc);
        
        return {
          ...doc.data(),
          id:doc.id,
          harga:doc.data().harga,
          label:doc.data().label
        }
      });
    });
    onUnmounted(livemessages)
    console.log(this.$data.messages);
    
  }
});

</script>

<template>
  <p>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <router-view></router-view>
  <!-- list messages -->
  <ul>
    <li v-for="item in messages" :key="item.id">
    {{ item.label }} - {{ item.harga }}
    </li>
  </ul>
</template>

<style scoped></style>
