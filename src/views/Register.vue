<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Register today.</h1>
        <Form />
      </v-col>
    </v-row>

    <Footer text="Already have an account? " to="/login" action="Login" />
  </v-container>
</template>

<script>
import Form from '@/components/Form.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Register',

  components: {
    Form,
    Footer,
  },
};
</script>

<style></style>
