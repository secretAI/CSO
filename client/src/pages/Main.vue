<template lang="pug">
h1 {{message}}
ul Available routes: 
  li 
    router-link(to="/products" class="link") [Products]
</template>

<script>
export default {
  data() {
    return {
      message: "* App has started *"
    }
  }
}
</script>

<style lang="scss" scoped>
  @mixin basicText {
    font-size: 25px;
    font-family: monospace;
    letter-spacing: -2.5px;
    color: teal;
  }

  h1 {
    @include basicText();
    font-size: 35px;
  }

  .link, ul {
    @include basicText();
    user-select: none;
    text-decoration: none;
    &:visited {
      color: teal;
    }
  }

  ul {
    list-style: decimal-leading-zero;
    list-style-position:inside;
  }
</style>