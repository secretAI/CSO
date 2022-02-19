<template lang="pug">
h1(id="title") We on air!
</template>

<script>
  const title = document.getElementById("title");
  console.log(`Hi, ${title}`);
</script>

<style lang="scss">
  $grey: #778899;

  .title {
    font-family: monospace;
    font-size: 36px;
    color: $grey;
  }
</style>
