<template>
    <div>
        <input type="text" placeholder="Scrivi qui il nome del film"
            v-model="inputText"
        />
        <button @click="$emit('mySearch', inputText)">Cerca</button>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return{
            inputText: "",
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
