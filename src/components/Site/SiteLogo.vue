<template>
    <a class="header-brand" href="/"><img :src="imageUrl" class="header-brand-img" :alt="alt"></a>
</template>

<script>
    export default {
        name: "site-logo",
        props: ['imageUrl', 'alt']
    }
</script>

<style scoped>

</style>