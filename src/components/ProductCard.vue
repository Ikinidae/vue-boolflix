<template>
    <div>
        <h3>{{objectCard.title}}</h3>
        <p>{{objectCard.original_title}}</p>
        <p><lang-flag :iso="objectCard.original_language" /></p>
        <p>{{objectCard.vote_average}}</p>
        
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
        objectCard: Object
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
