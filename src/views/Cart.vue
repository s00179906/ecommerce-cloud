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
          <Popup
            v-if="user"
            :user="user"
            :transactionAmount="totalCostOfItems()"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
// import axios from 'axios';
import Popup from '@/components/Popup.vue';

export default {
  components: {
    Popup,
  },

  data: () => ({
    cart: [],
    user: '',
    userData: Object,
  }),

  methods: {
    totalCostOfItems() {
      if (this.cart.length > 0) {
        return this.cart
          .map((item) => item.price)
          .reduce((acc, price) => parseInt(price) + acc);
      }
    },
  },
  created() {
    this.cart = JSON.parse(localStorage.getItem('cart'));

    console.log(this.cart);
    this.user = JSON.parse(localStorage.getItem('user'));

    const s = this.totalCostOfItems();
    console.log(s);

    // if (this.user !== null) {
    //   this.userData = {
    //     email: this.user.email.S,
    //     transactionAmount: this.totalCostOfItems(),
    //   };
    // }
  },
};
</script>
