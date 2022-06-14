<template>
    <div>
        <h3>{{objectCard.title}}</h3>
        <p>{{objectCard.original_title}}</p>
        <p>{{objectCard.original_language}}</p>
        <p>{{objectCard.vote_average}}</p>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',

    props: {
        objectCard: Object
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
