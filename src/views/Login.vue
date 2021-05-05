<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Welcome back.</h1>

        <v-form @submit.prevent="login">
          <v-text-field v-model="email" label="E-mail"></v-text-field>
          <v-text-field v-model="userName" label="Username"></v-text-field>

          <v-btn type="submit">
            Login
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <Footer text="Don't have an account? " to="/register" action="Register" />
  </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default {
  name: 'Login',

  components: {
    Footer,
  },

  data: () => ({
    userName: '',
    password: '',
    email: '',
  }),

  methods: {
    async login() {
      if (this.userName && this.email) {
        try {
          const response = await axios.post(
            'https://ycvkvjp3eb.execute-api.eu-west-1.amazonaws.com/dev/api/user/fetch',
            {
              email: this.email,
              userName: this.userName,
            }
          );

          if (response.data) {
            this.$router.push('/');
            localStorage.setItem('user', JSON.stringify(response.data));

            localStorage.setItem('cart', JSON.stringify([])); // create a cart
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style></style>
