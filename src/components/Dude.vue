<template>
  <article>
      {{ name }}
      <span>{{ title }}</span>
  </article>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
            },
            title: {
                type: String,
                default: "this is some words about me xD",
            }, 
        },
    }
</script>

<style lang="scss" scoped>

</style>