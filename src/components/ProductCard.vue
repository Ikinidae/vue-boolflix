<template>
    <div>
        <img :src="'https://image.tmdb.org/t/p/w342' + objectCardFilm.poster_path" alt="">
        <h3>{{objectCardFilm.title}}</h3>
        <p>{{objectCardFilm.original_title}}</p>
        <p>Lingua originale: <lang-flag :iso="objectCardFilm.original_language" /></p>
        <p>{{objectCardFilm.vote_average}}</p>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
