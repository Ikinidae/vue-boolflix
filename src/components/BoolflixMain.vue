<template>
    <div>
        <h1>Main</h1>

        <SearchBar @mySearch="searchFilm"/>

        <ProductCard
            v-for="(item, i) in filmList"
            :key="i"
            :objectCardFilm="item"
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
    SearchBar,
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
        
        // per salvare il testo della searchbar
        searchFilm(textUser) {
            this.userText = textUser;
            console.log(this.userText);
            this.getFilm();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
