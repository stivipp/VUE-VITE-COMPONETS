<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <h1>Hello World</h1>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped >
  img {
    width: 30%;
    padding: 6rem;
    box-shadow: 0 0 10px black; 
    background: 	#5189ff;
  }

</style>