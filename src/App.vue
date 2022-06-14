<template>
  <div id="app">
    <BoolflixHeader/>
    <BoolflixMain/>
  </div>
</template>

<script>
import BoolflixHeader from './components/BoolflixHeader.vue'
import BoolflixMain from './components/BoolflixMain.vue'

export default {
  name: 'App',
  components: {
    BoolflixHeader,
    BoolflixMain
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
