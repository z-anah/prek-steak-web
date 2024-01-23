<script lang="ts">

import { defineComponent } from "vue";
import {
  onSnapshot,
  orderBy,
  query,
  addDoc,
  setDoc, doc, deleteDoc,
} from "firebase/firestore";
import { onUnmounted } from 'vue';
import { PS_SNACK } from "../firebase";
import type {  PsSnack } from "@/Model";

export default defineComponent({
  name: 'App',
  components: {},
  methods: {
    resetItem() {
      this.$data.item = {
        label: "",
        harga: "",
      } as PsSnack;
    },
    async updateSnack(label: string, harga: string, id: string) {
      await setDoc(doc(PS_SNACK.COL, id), {
        label,
        harga: parseInt(harga),
        date_updated: new Date(),
      });
    },
    async createSnack(label: string, harga: string) {
      await addDoc(PS_SNACK.COL, {
        label,
        harga: parseInt(harga),
        date_created: new Date(),
      });
      this.resetItem();
    },
    async deleteSnack(id: string) {
      await deleteDoc(doc(PS_SNACK.COL, id));
    }
  },
  data: () => {
    return {
      snacks: [] as PsSnack[],
      item: {
        label: "",
        harga: "",
      } as PsSnack,
    }
  },
  async mounted() {
    const latestQuery = query(PS_SNACK.COL, orderBy(PS_SNACK.LABEL, "asc"));
    const liveSnacks = onSnapshot(latestQuery, (snapshot) => {
      this.$data.snacks = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          harga: doc.data().harga,
          label: doc.data().label,
          date_created: doc.data().date_created,
        }
      });
    });
    onUnmounted(liveSnacks)
  }
});

</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-16 py-3">
            <span class="sr-only">Poto</span>
          </th>
          <th scope="col" class="px-6 py-3">
            Label
          </th>
          <th scope="col" class="px-6 py-3">
            Harga (Rp)
          </th>
          <th scope="col" class="px-6 py-3">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="p-4">
            <img src="https://img.icons8.com/?size=48&id=xZiTPdO57ltQ&format=png" class="w-8 max-h-full"
              alt="Apple Watch">
          </td>
          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required v-model="item.label">
          </td>
          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white text-end">
            <input type="number"
              class="text-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required v-model="item.harga">
          </td>
          <td class="px-6 py-4">
            <button @click="createSnack(item.label, item.harga)" href="#"
              class="font-medium text-green-600 dark:text-green-500 hover:underline">Tambah</button>
          </td>
        </tr>
        <tr v-for="item in snacks" :key="item.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="p-4">
            <img src="https://img.icons8.com/?size=48&id=xZiTPdO57ltQ&format=png" class="w-8 max-h-full"
              alt="Apple Watch">
          </td>
          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required v-model="item.label">
          </td>
          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white text-end">
            <input type="number"
              class="text-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required v-model="item.harga">
          </td>
          <td class="px-6 py-4">
              <button @click="updateSnack(item.label, item.harga, item.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Ubah
              </button>
               | 
              <button @click="deleteSnack(item.id)" class="font-medium text-red-600 dark:text-red-500 hover:underline">
                Hapus
              </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
