<template>
    <div>
        <h1>Main</h1>

        <SearchBar @mySearch="searchFilm"/>

        {{userText}}

        <ProductCard
            v-for="(item, i) in filmList"
            :key="i"
            :objectCard="item"
        />
    </div>
</template>

<script>
import axios from "axios"
import ProductCard from "./ProductCard.vue"
import SearchBar from "./SearchBar.vue";

export default {
    name: "BoolflixMain",
    components: {
    ProductCard,
    SearchBar
},
    data() {
        return {
            apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=e110a76546d14ef00629c28529c7b91b&language=it-IT&query=Fight+Club&page=1&include_adult=true",
            filmList: [],
            userText: "",
        }
    },
    created() {
        this.getFilm();
    },
    methods: {
        getFilm() {
            axios
                .get(this.apiUrl)
                .then((result) => {
                this.filmList = result.data.results;
                console.log(this.filmList);
            })
                .catch((error) => {
                console.log("Errore", error);
            });
        },
        searchFilm(textUser) {
            this.userText = textUser;
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
