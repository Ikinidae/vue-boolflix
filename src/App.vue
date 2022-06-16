<template>
  <div id="app">
    <BoolflixHeader @mySearch="searchFilm" />
    <main>
      <ProductCard v-for="(item, i) in filmList" :key="i" :objectCardFilm="item" />
    </main>
  </div>
</template>

<script>
import axios from "axios"
import BoolflixHeader from './components/BoolflixHeader.vue'
import ProductCard from './components/ProductCard.vue';

export default {
  name: 'App',
  components: {
    BoolflixHeader,
    ProductCard
  },
  data() {
    return {
      apiUrlFilm: "https://api.themoviedb.org/3/search/multi?api_key=e110a76546d14ef00629c28529c7b91b&language=it-IT&page=1&include_adult=true",
      filmList: [],
      userText: "",
    }
  },
  created() {
    this.getFilm();
  },
  methods: {
    // per importare i dati da API
    getFilm() {
      if (this.userText !== "") {
        let currentUrl = this.apiUrlFilm + "&query=" + this.userText;
        axios
          .get(currentUrl)
          .then((result) => {
            this.filmList = result.data.results;
            console.log(this.filmList);
          })
          .catch((error) => {
            console.log("Errore", error);
          })
      }
    },
    searchFilm(textUser) {
      this.userText = textUser;
      console.log(this.userText);
      this.getFilm();
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
    background-color: gray;
    height: calc(100vh - 60px);
}
</style>
