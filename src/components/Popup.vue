<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="primary white--text mt-5"
          outlined
          dark
          v-bind="attrs"
          v-on="on"
        >
          PROCEED TO PAY
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Credit Card Details
        </v-card-title>

        <v-card-text>
          <v-text-field
            label="Card Holder Name"
            v-model="cardHolderName"
          ></v-text-field>
          <v-text-field
            label="Card Number"
            v-model="creditCardNumber"
          ></v-text-field>
          <v-text-field label="SVC" type="number" v-model="svc"></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="success" @click="makePayment">
            Buy
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
    transactionAmount: Number,
  },

  data: () => ({
    cardHolderName: '',
    creditCardNumber: '',
    svc: '',
    dialog: false,
  }),

  methods: {
    async makePayment() {
      if (
        this.cardHolderName !== '' &&
        this.svc !== '' &&
        this.creditCardNumber !== '' &&
        this.user.email.S !== '' &&
        this.transactionAmount !== ''
      ) {
        console.log(
          this.cardHolderName,
          this.svc,
          this.creditCardNumber,
          this.user.email.S,
          this.transactionAmount
        );
        const response = await axios.post(
          'https://ycvkvjp3eb.execute-api.eu-west-1.amazonaws.com/dev/api/sqs/send',
          {
            creditCardNumber: this.creditCardNumber,
            cardHolderName: this.cardHolderName,
            svc: this.svc,
            email: this.user.email.S,
            transactionAmount: this.transactionAmount.toString(),
          }
        );

        console.log(response.data);

        if (response.data.messageId !== '') {
          localStorage.removeItem('cart');
          localStorage.setItem('cart', JSON.stringify([]));
          this.dialog = false;
        }
      }
    },
  },

  created() {
    console.log('user : ', this.user);
    console.log('transaction amount : ', this.transactionAmount);
  },
};
</script>
