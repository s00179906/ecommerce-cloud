<template>
  <v-app>
    <v-main>
      <Layout v-if="currentRoute !== 'Register' && currentRoute !== 'Login'" />
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

  watch: {
    $route(to) {
      this.currentRoute = to.name;
    },
  },

  data: () => ({
    currentRoute: '',
  }),
};
</script>
