<template>
        <main class="min-h-screen flex items-start bg-gradient-to-b from-myBlue-100 to-myWhite-100">
            <div class="max-w-8xl mx-auto p-8">

                <ul class="font-mono text-lg">
                    <li v-for="(dude, index) in characters" :key="index">
                        <Dude :name="dude" title="hello FREMENS :D" />
                    </li>
                </ul>
       

                <create-dude-form 
                    @new-preview="newDude = $event"
                    @add-dude="characters.push($event)"
                /> 

                <p>
                    {{ newDude }}
                </p>

            </div>
        </main>
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