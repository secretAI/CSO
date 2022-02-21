<template lang="pug">
div(id="app")
  router-view
  button(id="pressme" @click.prevent="getProds") GetGoods
  div(class="container")
    div(v-for="prod in prods")
      h2 Наименование: {{prod.title}}
      h4 Количество на складе: {{prod.count}}
      h4 Стоимость: {{prod.price}}

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      prods: []
    }
  },
  methods: {
    async getProds() {
      const response = await axios.post("http://127.0.0.1:5050/api/products", {});
      console.log(response);
      this.prods = response.data
    }
  }
}
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    #pressme {
      cursor: pointer;
      user-select: none;
      width: 140px;
      height: 50px;
      border: 2.5px solid teal;
      border-radius: 6px;
      font-family: monospace;
      font-size: 20px;
      letter-spacing: -2px;
      background-color: white;
    }
    .container {
      width: 100%;
      margin: 100px 0;
      display: flex;
      justify-content: space-evenly;
      text-align: center;
      tran
      & * {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        letter-spacing: -1px;
        font-weight: 400;
        color: teal;
      }
    }
  }
</style>