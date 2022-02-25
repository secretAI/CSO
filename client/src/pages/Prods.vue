<template lang="pug">
glo-button
  router-link(to="/" class="link") Go back
  prod-render/
</template>

<script>
import ProdRender from "../components/ProdRender.vue";
export default {
  components: {
    ProdRender
  }
}   
</script>

<style lang="scss">
  @mixin basicText {
    font-size: 25px;
    font-family: monospace;
    letter-spacing: -2.5px;
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