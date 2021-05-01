<template>
  <v-form ref="form">
    <v-text-field v-model="name" label="Full Name"></v-text-field>
    <v-text-field v-model="userName" label="Username"></v-text-field>
    <v-text-field v-model="email" label="E-mail"></v-text-field>
    <v-text-field v-model="password" label="Password"></v-text-field>

    <v-btn @click="register">
      Validate
    </v-btn>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    fullName: '',
    userName: '',
    password: '',
    email: '',
  }),

  methods: {
    register() {
      console.log(this.name, this.email);
    },
  },
};
</script>
