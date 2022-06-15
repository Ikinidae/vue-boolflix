<template>
    <div>
        <h3>{{objectCardFilm.title}}</h3>
        <p>{{objectCardFilm.original_title}}</p>
        <p>Lingua originale: <lang-flag :iso="objectCardFilm.original_language" /></p>
        <p>{{objectCardFilm.vote_average}}</p>
    </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    name: 'FilmCard',
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
