<template>
    <div v-if="title.length" class="page-header">
        <h1 class="page-title">{{ title }}</h1>
    </div>
</template>

<script>
    export default {
        name: "page-header",
        props: {
            title: {default: '', type: String}
        }
    }
</script>

<style scoped>

</style>