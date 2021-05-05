<template>
  <v-card>
    <v-footer>
      <v-btn text :to="to">
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
};
</script>

<style></style>
