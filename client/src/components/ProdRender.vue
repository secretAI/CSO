<template lang="pug">
div(class="container")
  div(v-if="prods" v-for="prod in prods") 
    h2 {{prod.title}}
    p {{prod.count}}
    p {{prod.price}}
  div(v-if="prods.length == 0")
    p Продукты не были получены..
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      prods: []
    }
  },
  async mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const response = await axios.post("http://127.0.0.1:5050/api/products", {});
      this.prods = response.data;
    }
  }
}
</script>

<style lang="scss" scoped>
  @mixin basicText {
    font-size: 25px;
    font-family: monospace;
    letter-spacing: -2.5px;
  }

  .container {
    width: calc(2em + 200px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 0;
    @include basicText();
    text-align: center;
  }
</style>