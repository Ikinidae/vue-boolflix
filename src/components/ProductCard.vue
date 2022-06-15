<template>
    <div>
        <img :src="'https://image.tmdb.org/t/p/w342' + objectCardFilm.poster_path" alt="">
        <h3>{{objectCardFilm.title}}</h3>
        <p>{{objectCardFilm.original_title}}</p>
        <p>{{objectCardFilm.media_type}}</p>
        <p>Lingua originale: <lang-flag :iso="objectCardFilm.original_language" /></p>
        <p>Voto: {{Math.round(objectCardFilm.vote_average/2)}}</p>
        <font-awesome-icon v-for="i in getStars(objectCardFilm.vote_average)" :key="i" icon="fa-solid fa-star"/>
        <font-awesome-icon v-for="i in getEmptyStars(objectCardFilm.vote_average)" :key="i" icon="fa-regular fa-star"/>
    </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    name: 'ProductCard',
    components: {
        LangFlag
    },
    props: {
        objectCardFilm: Object,
    },
    methods: {
        getStars(vote) {
            let calc = parseInt(Math.round(vote/2));
            return calc;
        },
        getEmptyStars(vote) {
            let pippo = parseInt(Math.round(5-(vote/2)));
            return pippo;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
