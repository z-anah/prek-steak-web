<script lang="ts">

import { defineComponent } from "vue";
import {
    onSnapshot,
    query,
} from "firebase/firestore";
import { onUnmounted } from 'vue';
import { FR_AR } from "../firebase";

export default defineComponent({
    name: 'App',
    components: {},
    methods: {
    },
    data: () => {
        return {
            messages: [] as { id: string; fr: string; ar: string }[],
        }
    },
    mounted() {
        const latestQuery = query(FR_AR.COL);
        const livemessages = onSnapshot(latestQuery, (snapshot) => {
            this.$data.messages = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    fr: doc.data().fr,
                    ar: doc.data().ar,
                }
            });
        });
        onUnmounted(livemessages)
    }
});
</script>

<template>
    <div class="p-3">
        <div class="max-w-sm" v-for="message in messages" :key="message.id">
            <p>{{ message.fr }}</p>
            <br>
            <p class="text-right text-4xl" >{{ message.ar }}</p>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
        </div>
    </div>
</template>

<style scoped></style>
