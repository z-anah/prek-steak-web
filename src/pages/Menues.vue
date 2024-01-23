<script lang="ts">

import { defineComponent } from "vue";
import {
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { onUnmounted } from 'vue';
import { PS_MENU } from "../firebase";

export default defineComponent({
  name: 'App',
  components: {},
  methods: {
  },
  data: () => {
    return {
      messages: [] as { id: string; label: string; harga: string }[],
    }
  },
  mounted() {
    const latestQuery = query(PS_MENU.COL, orderBy(PS_MENU.LABEL, "asc"));
    const livemessages = onSnapshot(latestQuery, (snapshot) => {
      this.$data.messages = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          harga: doc.data().harga,
          label: doc.data().label,
        }
      });
    });
    onUnmounted(livemessages)
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
            Produk
          </th>
          <th scope="col" class="px-6 py-3">
            Unit
          </th>
          <th scope="col" class="px-6 py-3">
            Harga
          </th>
          <th scope="col" class="px-6 py-3">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in messages" :key="item.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="p-4">
            <img src="https://img.icons8.com/?size=48&id=xZiTPdO57ltQ&format=png" class="w-8 max-h-full"
              alt="Apple Watch">
          </td>
          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {{ item.label }}
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <button
                class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button">
                <span class="sr-only">Quantity button</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 1h16" />
                </svg>
              </button>
              <div>
                <input type="number" id="first_product"
                  class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="1" required>
              </div>
              <button
                class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button">
                <span class="sr-only">Quantity button</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 1v16M1 9h16" />
                </svg>
              </button>
            </div>
          </td>
          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white text-end">
            Rp {{ item.harga }}
          </td>
          <td class="px-6 py-4">
          <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Hapus</a>
        </td>
      </tr>
    </tbody>
  </table>
</div></template>

<style scoped></style>
