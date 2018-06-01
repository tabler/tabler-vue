<template>
    <div :class="`alert-${type}`" class="alert"><slot></slot></div>
</template>

<script>
    export default {
        name: "alert",
        props: {
            type: {default: 'success', type: String}
        }
    }
</script>

<style scoped>

</style>