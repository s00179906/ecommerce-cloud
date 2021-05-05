<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Register today.</h1>

        <v-form @submit.prevent="register">
          <v-text-field v-model="fullName" label="Full Name"></v-text-field>
          <v-text-field v-model="userName" label="Username"></v-text-field>
          <v-text-field v-model="email" label="E-mail"></v-text-field>
          <v-text-field v-model="password" label="Password"></v-text-field>

          <v-btn type="submit">
            Register
          </v-btn>
        </v-form>
      </v-col>
    </v-row>

    <Footer text="Already have an account?" to="/login" action="Login" />
  </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default {
  name: 'Register',

  components: {
    Footer,
  },

  data: () => ({
    fullName: '',
    userName: '',
    password: '',
    email: '',
  }),

  methods: {
    async register() {
      const response = await axios.post(
        'https://ycvkvjp3eb.execute-api.eu-west-1.amazonaws.com/dev/api/user/register',
        {
          email: this.email,
          userName: this.userName,
          fullName: this.fullName,
          password: this.password,
        }
      );

      if (response.data) {
        this.$router.push('/login');
      }
    },
  },
};
</script>

<style></style>
