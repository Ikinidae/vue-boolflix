<template>
    <div>
        <h1>Main</h1>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: 'BoolflixMain',
    data() {
        return {
            apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=e110a76546d14ef00629c28529c7b91b&language=it-IT&query=Fight+Club&page=1&include_adult=true",
            filmList: []
        }
    },
    created() {
        this.getFilm();
    },
    methods: {
        getFilm () {
            axios
                .get(this.apiUrl)
                .then((result) => {
                    this.filmList = result.data.results;
                    console.log(this.filmList);
                })
                .catch((error) => {
                    console.log("Errore", error);
                })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
