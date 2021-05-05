<template>
  <v-container>
    <v-grid>
      <v-row>
        <v-col>
          <v-row>
            <div
              class="col-md-3 col-sm-4 col-xs-12"
              :key="pro.id"
              v-for="pro in products"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="16 / 9"
                    height="200px"
                    :src="pro.src"
                  >
                    <v-card-title>{{ pro.type }} </v-card-title>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        <v-btn v-if="hover" outlined @click="shopItem(pro)"
                          >VIEW</v-btn
                        >
                      </div>
                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div>
                      <a href="/product" style="text-decoration: none">{{
                        pro.name
                      }}</a>
                    </div>
                    <div>${{ pro.price }}</div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-grid>
  </v-container>
</template>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
<script>
export default {
  data: () => ({
    products: [
      {
        id: 1,
        name: 'BLACK TEE',
        type: 'Jackets',
        price: 18.0,
        src: require('../assets/img/shop/1.jpg'),
      },
      {
        id: 2,
        name: 'WHITE TEE',
        type: 'Polo',
        price: 40.0,
        src: require('../assets/img/shop/2.jpg'),
      },
      {
        id: 3,
        name: 'Zara limited...',
        type: 'Denim',
        price: 25.0,
        src: require('../assets/img/shop/3.jpg'),
      },
      {
        id: 4,
        name: 'SKULL TEE',
        type: 'Jackets',
        price: 30.0,
        src: require('../assets/img/shop/4.jpg'),
      },
      {
        id: 5,
        name: 'MANGO WINTER',
        type: 'Sweaters',
        price: 50.0,
        src: require('../assets/img/shop/5.jpg'),
      },
      {
        id: 6,
        name: 'SHIRT',
        type: 'Denim',
        price: 34.0,
        src: require('../assets/img/shop/6.jpg'),
      },
      {
        id: 7,
        name: 'TRUCKER JACKET',
        type: 'Jackets',
        price: 38.0,
        src: require('../assets/img/shop/7.jpg'),
      },
      {
        id: 8,
        name: 'COATS',
        type: 'Jackets',
        price: 25.0,
        src: require('../assets/img/shop/8.jpg'),
      },
      {
        id: 9,
        name: 'MANGO WINTER',
        type: 'Sweaters',
        price: 50.0,
        src: require('../assets/img/shop/9.jpg'),
      },
      {
        id: 10,
        name: 'SHIRT',
        type: 'Denim',
        price: 34.0,
        src: require('../assets/img/shop/10.jpg'),
      },
      {
        id: 11,
        name: 'TRUCKER JACKET',
        type: 'Jackets',
        price: 38.0,
        src: require('../assets/img/shop/11.jpg'),
      },
      {
        id: 12,
        name: 'COATS',
        type: 'Jackets',
        price: 25.0,
        src: require('../assets/img/shop/12.jpg'),
      },
    ],
  }),

  methods: {
    shopItem(item) {
      if (item) {
        this.$router.push({ path: '/product', query: { item } });
      }
    },
  },
};
</script>
