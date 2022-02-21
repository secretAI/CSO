<template lang="pug">
h1 {{message}}
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

<style>
  h1 {
    font-family: monospace;
    font-size: 30px;
    letter-spacing: -2px;
    color: teal;
  }
</style>