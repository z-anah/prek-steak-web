<!-- import header -->
<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
export default defineComponent({
  name: 'App',
  components: {
    Header
  }
})
</script>

<template>
    <div v-if="$route.fullPath !== '/arab'">
      <Header/>
    </div>
  <router-view></router-view>  
</template>

<style scoped></style>
