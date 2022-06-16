<template>
  <header>
    <h1>BOOLFLIX</h1>
    <div>
        <input type="text" placeholder="Scrivi qui il nome del film"
            v-model="inputText"
        />
        <button @click="$emit('mySearch', inputText)">Cerca</button>
    </div>
</header>
</template>

<script>
export default {
  name: "BoolflixHeader",
  data() {
    return{
        inputText: "",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  h1 {
    color: red;
  }
}
</style>
