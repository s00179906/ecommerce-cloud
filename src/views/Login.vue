<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Welcome back.</h1>
        <Form />
      </v-col>
    </v-row>
    <Footer text="Don't have an account? " to="/register" action="Register" />
  </v-container>
</template>

<script>
import Form from '@/components/Form.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Login',

  components: {
    Form,
    Footer,
  },
};
</script>

<style></style>
