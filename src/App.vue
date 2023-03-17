<template>
  <div id="app">
    <Card />
  </div>
</template>




<script>
import Card from "./Card.vue";
import { inject } from '@vercel/analytics';
 
inject();

export default {
  components: {
    Card,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
 