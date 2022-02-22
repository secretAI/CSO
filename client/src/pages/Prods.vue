<template lang="pug">
glo-button
  router-link(to="/" class="link") Go back
div(class="container" onloads)
  div(v-if="prods" v-for="prod in prods") 
    h2 {{prod.title}}
    p {{prod.count}}
    p {{prod.price}}
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

<style lang="scss">
  @mixin basicText {
    font-size: 25px;
    font-family: monospace;
    letter-spacing: -2.5px;
  }

  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    @include basicText();
    word-spacing: -10px;
    line-height: 0;
    text-align: center;
  }

  .link{
    @include basicText();
    user-select: none;
    text-decoration: none;
    &:visited {
      color: teal;
    }
  }
</style>