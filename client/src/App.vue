<template lang="pug">
form(@submit.prevent)
  input(type="text", v-bind:value="title", @input="title = $event.target.value", placeholder="Title")
  input(type="text", v-bind:value="about", @input="about = $event.target.value", placeholder="About")
  button(id="pressme", @click="createPost") Create New
div(class="container")
  div(class="wrapper", v-for="post in posts")
    h1(id="title") {{post.title}}
    h3(id="about") {{post.about}}
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1, 
          title: "JavaScript is so Enjoyable", 
          about: `Fukk da .NET. Fukk da C-Fam. Fukk da PHP'n'Ruby. I got my ECMA-bro JS! 
          We spent bout half year together n this man never let me ruin my proj's. 
          Luv im so Hard. SlaTT*/3`
        },
        {
          id: 2,
          title: "JavaScript is better than.. ANYthin'",
          about: `Fukk da .NET. Fukk da C-Fam. Fukk da PHP'n'Ruby. I got my ECMA-bro JS! 
          We spent bout half year together n this man never let me ruin my proj's. 
          Luv im so Hard. SlaTT*/3`
        },
        {
          id: 3,
          title: "Fukk dem other langs. Im on my ground",
          about: `Fukk da .NET. Fukk da C-Fam. Fukk da PHP'n'Ruby. I got my ECMA-bro JS! 
          We spent bout half year together n this man never let me ruin my proj's. 
          Luv im so Hard. SlaTT*/3`
        }
      ],
      title: "",
      about: ""
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        about: this.about
      }
      this.posts.push(newPost);
      this.title = this.about = "";
    }
  }
}
</script>

<style lang="scss">  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    input {
      width: 200px;
      height: 45px;
      border: 2px solid teal;
      border-radius: 8px;
      font-family: monospace;
      font-size: 20px;
      padding-inline: 8px;
      margin: 5px;
    }

    #pressme {
      width: 140px;
      height: 30px;
      cursor: pointer;
      font-family: monospace;
      font-size: 20px;
      border: 2px solid teal;
      border-radius: 6px;
      background: #FFF;
      letter-spacing: -2px;
      margin-top: 5px;
      &:hover {
        border-color: #000;
      }
    }
  }
  
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .wrapper {
      max-width: 830px;
      letter-spacing: -3px;
      border: 2px solid teal;
      padding: 15px;
      margin: 20px 0;
      &:first-child {
        margin-top: 40px;
      }
      &:hover {
        border-color: #000;
      }
    }

    #title, #about {
      font-family: monospace;
    }
    #title {
      font-size: 36px;
      text-decoration: underline;
      margin-bottom: 12px;
    }

    #about {
      font-size: 26px;
    } 
  }
</style>
