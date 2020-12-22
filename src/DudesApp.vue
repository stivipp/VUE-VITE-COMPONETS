<template>

    <ul>
        <li v-for="(dude, index) in characters" :key="index">
            <Dude :name="dude" title="hello FREMENS :D" />
        </li>
    </ul>

    <create-dude-form /> 

    <p>
        {{ newDude }}
    </p>
    

</template>



<script>
    import Dude from "./components/Dude.vue"
    import CreateDudeForm from "./components/CreateDudeForm.vue"


    export default {
        components: {
            Dude,
            CreateDudeForm
        },
        data() {
            return {
                newDude: '',
                characters: ['Hi I am Paul Atreides', "Hi I am WORM!!!", "FREMENS are FREE DESERT PEOPLE"],
            }
        },
    }
</script>



<style lang="scss" scoped>

</style>