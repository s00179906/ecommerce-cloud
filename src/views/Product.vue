<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-img :src="item.src"></v-img>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <div class="pl-6">
            <p class="display-1 mb-0">{{ item.name }}</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">${{ item.price }}</p>
              <v-spacer></v-spacer>
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              tincidunt eget nullam non. Tincidunt arcu non sodales neque
              sodales ut etiam. Lectus arcu bibendum at varius vel pharetra.
              Morbi tristique senectus et netus et malesuada.
            </p>

            <p class="title">ITEMS</p>
            <v-btn
              class="primary white--text"
              outlined
              tile
              dense
              @click="addToCart"
              ><v-icon>mdi-cart</v-icon> ADD TO CART</v-btn
            >
            <v-btn class="ml-4" outlined tile>ADD TO WISHLIST</v-btn>
          </div>
        </div>
      </div>

      <v-card class="accent">
        <v-container>
          <v-row no-gutters>
            <v-col class="col-12 col-md-4 col-sm-12">
              <v-row>
                <v-col
                  class="col-12 col-sm-3 pr-4 hidden-sm-only"
                  align="right"
                >
                  <v-icon class="display-2">mdi-truck</v-icon>
                </v-col>
                <v-col class="col-12 col-sm-9 pr-4">
                  <h3 class="font-weight-light">FREE SHIPPING & RETURN</h3>
                  <p class="font-weight-thin">Free Shipping over $300</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="col-12 col-md-4 col-sm-12">
              <v-row>
                <v-col class="col-12 col-sm-3 pr-4" align="right">
                  <v-icon class="display-2">mdi-cash-usd</v-icon>
                </v-col>
                <v-col class="col-12 col-sm-9 pr-4">
                  <h3 class="font-weight-light">MONEY BACK GUARANTEE</h3>
                  <p class="font-weight-thin">30 Days Money Back Guarantee</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="col-12 col-md-4 col-sm-12">
              <v-row>
                <v-col class="col-12 col-sm-3 pr-4" align="right">
                  <v-icon class="display-2">mdi-headset</v-icon>
                </v-col>
                <v-col class="col-12 col-sm-9 pr-4">
                  <h3 class="font-weight-light">020-800-456-747</h3>
                  <p class="font-weight-thin">24/7 Available Support</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    item: '',
    itemCount: 1,
  }),

  methods: {
    addToCart() {
      const cart = JSON.parse(localStorage.getItem('cart'));

      cart.push(this.item);
      localStorage.setItem('cart', JSON.stringify(cart));
    },
  },

  created() {
    this.item = this.$route.query.item;
  },
};
</script>
