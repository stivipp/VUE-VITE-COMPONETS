<template>

    <ul>
        <li v-for="(dude, index) in characters" :key="index">
            {{ dude }}
        </li>
    </ul>
    

</template>



<script>
    export default {
        data() {
            return {
                characters: ['Hi I am Paul Atreides', "Hi I am WORM!!!", "FREMENS are FREE DESERT PEOPLE"],
            }
        },
    }
</script>



<style lang="scss" scoped>

</style>