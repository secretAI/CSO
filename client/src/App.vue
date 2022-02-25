<template>
<div id="app">
  <the-nav/>
  <router-view>
  </router-view>
</div>
</template>

<script>
import axios from "axios";
import TheNav from "./components/TheNav.vue";
export default {
  components: {
    TheNav
  },
  async mounted() {
    try {
      const response = await axios.get("http://127.0.0.1:5050/api/");
      console.log("<Server> OK");
      console.log(response.data);
    }
    catch(err) {
      console.log(err);
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
  }
</style>