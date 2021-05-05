<template>
  <div>
    <v-container>
      <p class="display-3 font-weight-light	text-center pa-4">
        {{ cart.length > 0 ? 'SHOPPING CART' : 'SHOPPING CART IS EMPTY' }}
      </p>
      <v-row v-if="cart.length > 0">
        <v-col :cols="12" md="9" sm="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">ITEM</th>
                  <th class="text-center">PRICE</th>
                </tr>
              </thead>
              <tbody v-if="cart.length > 0">
                <tr v-for="(item, index) in cart" :key="index">
                  <td>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img :src="item.src"></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{
                          item.type
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </td>
                  <td>${{ item.price }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>

        <!-- ORDER SUMMARY -->
        <v-col :cols="12" md="3" sm="12" style="background-color: lightgray">
          <p class="headline">Order Summary</p>
          <p class="overline">
            Shipping and additional costs are calculated based on values you
            have entered.
          </p>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>Total</td>
                  <td class="text-right" style="width: 50px;">
                    <b>${{ totalCostOfItems() }}</b>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
            <v-btn class="primary white--text mt-5" outlined
              >PROCEED TO PAY</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    cart: [],
  }),

  methods: {
    totalCostOfItems() {
      return this.cart
        .map((item) => item.price)
        .reduce((acc, price) => parseInt(price) + acc);
    },
  },
  created() {
    this.cart = JSON.parse(localStorage.getItem('cart'));

    console.log(this.cart);
  },
};
</script>
