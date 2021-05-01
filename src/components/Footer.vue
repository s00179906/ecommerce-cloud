<template>
  <v-card>
    <v-footer>
      <v-btn fill="clear" :to="to">
        {{ text }} <strong>{{ action }}</strong>
      </v-btn>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: 'Footer',

  props: {
    text: String,
    action: String,
    to: String,
  },

  created() {
    console.log(this.to);
  },
};
</script>

<style></style>
