<template>
    <div class="card">
        <div class="image">
            <img :src="'https://image.tmdb.org/t/p/w342' + objectCardFilm.poster_path" alt="">
        </div>
        <div class="details">
            <h3>{{objectCardFilm.title}}</h3>
            <p>{{objectCardFilm.original_title}}</p>
            <p>{{objectCardFilm.media_type}}</p>
            <p>Lingua originale: <lang-flag :iso="objectCardFilm.original_language" /></p>
            <p>Voto: {{Math.round(objectCardFilm.vote_average/2)}}</p>
            <span>
                <i v-for="(star, i) in voto" :key="i"><font-awesome-icon icon="fa-solid fa-star"/></i>
            </span>
            <span>
                <i v-for="(star, i) in (5 - voto)" :key="i"><font-awesome-icon icon="fa-regular fa-star"/></i>
            </span>
        </div>
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
        objectCardFilm: Object
    },
    data() {
        return {
            voto: Math.round(this.objectCardFilm.vote_average / 2)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
    width: 22%;
    margin-right: 15px;
    margin-left: 15px;
    position: relative;

    .details {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 20px;
        opacity: 0;
        height: 370px;
        color: white;

        &:hover {
            opacity: 1;
            background-color: rgba(0, 0, 0, 0.8);
        }
    }
    .image {
        width: 100%;
        height: 400px;

        img {
            width: 100%;

            // &:hover {
            // }
        }
    }
}
</style>
