<template>

    <form @submit.prevent="formSubmitted" class="add-new">
        <input @input="valueChanged" v-model="newName" type="text" />
    </form>

</template>

<script>
    export default {
        methods: {
            formSubmitted() {
                this.$emit('add-dude', this.newName)
            },
            valueChanged(e) {
               this.$emit('new-preview', this.newName)
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>