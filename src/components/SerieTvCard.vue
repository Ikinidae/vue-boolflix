<template>
    <div>
        <h3>{{objectCardSerieTv.name}}</h3>
        <p>{{objectCardSerieTv.original_name}}</p>
        <p>Lingua originale: <lang-flag :iso="objectCardSerieTv.original_language" /></p>
        <p>{{objectCardSerieTv.vote_average}}</p>
    </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    name: 'SerieTvCard',
    components: {
        LangFlag
    },
    props: {
        objectCardSerieTv: Object
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
