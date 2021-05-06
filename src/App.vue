<template>
  <v-app>
    <v-main>
      <Layout />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Layout from '@/views/Layout.vue';
export default {
  name: 'App',

  components: {
    Layout,
  },
  data: () => ({
    //
  }),
};
</script>
