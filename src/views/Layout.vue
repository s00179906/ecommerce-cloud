<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="primary"
    dark
  >
    <v-toolbar-title style="width: 350px">
      <v-btn text @click="changeRoute('/')">Cloudmmerce v1</v-btn>
    </v-toolbar-title>
    <h5 class="text-capitalize" v-if="user !== null">
      Welcome {{ user.fullName.S }}
    </h5>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search"
      class="hidden-sm-and-down pl-10 ml-4"
    />
    <v-spacer />
    <v-btn icon @click="logout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>

    <v-btn @click="changeRoute('/cart')" icon>
      <v-badge content="2" :value="numberOfItemsInCart" color="green" overlap>
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: 'T-Shirts' },
        { title: 'Jackets' },
        { title: 'Shirts' },
        { title: 'Jeans' },
        { title: 'Shoes' },
      ],
      activeBtn: 1,
      user: '',
      numberOfItemsInCart: '',
    };
  },

  methods: {
    logout() {
      this.$router.push('/login');
      localStorage.clear();
    },

    changeRoute(path) {
      this.$router.push(path);
    },
  },

  created() {
    this.user = JSON.parse(localStorage.getItem('user'));

    console.log(this.user);
    this.numberOfItemsInCart = localStorage.getItem('numberOfItemsInCart');
  },
};
</script>
