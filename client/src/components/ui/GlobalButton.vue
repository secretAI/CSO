<template lang="pug">
button(id="pressme")
  slot
</template>

<script>
export default {
  name: "glo-button"
}
</script>

<style lang="scss" scoped>
@mixin basicText {
    font-size: 25px;
    font-family: monospace;
    letter-spacing: -2px;
}

#pressme {
    width: 100px;
    height: 50px;
    cursor: pointer;
    @include basicText();
    border: 2px solid teal;
    background-color: none;
  }
</style>