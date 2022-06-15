<template>
    <div>
        <h1>Main</h1>

        <SearchBar @mySearch="searchFilm"/>

        <FilmCard
            v-for="(item, i) in filmList"
            :key="i"
            :objectCardFilm="item"
        />

        <SerieTvCard
            v-for="(item, i) in serieTvList"
            :key="i"
            :objectCardSerieTv="item"
        />
    </div>
</template>

<script>
import axios from "axios"
import FilmCard from "./FilmCard.vue"
import SearchBar from "./SearchBar.vue";
import SerieTvCard from "./SerieTvCard.vue";

export default {
    name: "BoolflixMain",
    components: {
    FilmCard,
    SearchBar,
    SerieTvCard
},
    data() {
        return {
            apiUrlFilm: "https://api.themoviedb.org/3/search/movie?api_key=e110a76546d14ef00629c28529c7b91b&language=it-IT&page=1&include_adult=true",
            apiUrlSerieTv: "https://api.themoviedb.org/3/search/tv?api_key=e110a76546d14ef00629c28529c7b91b&language=it-IT&page=1&include_adult=true",
            filmList: [],
            serieTvList: [],
            userText: "",
        }
    },
    created() {
        this.getFilm();
        this.getSerieTv();
    },
    methods: {
        // per importare i dati da API
        getFilm() {
            if (this.userText !== "") {
                let currentUrl = this.apiUrlFilm + "&query=" + this.userText;
                // console.log(currentUrl);
                axios
                    .get(currentUrl)
                    .then((result) => {
                    this.filmList = result.data.results;
                    console.log(this.filmList);
                })
                    .catch((error) => {
                    console.log("Errore", error);
                }),
                this.getSerieTv()
            }
        },
        getSerieTv() {
            if (this.userText !== "") {
                let currentUrl = this.apiUrlSerieTv + "&query=" + this.userText;
                // console.log(currentUrl);
                axios
                    .get(currentUrl)
                    .then((result) => {
                    this.serieTvList = result.data.results;
                    console.log(this.serieTvList);
                })
                    .catch((error) => {
                    console.log("Errore", error);
                });
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
