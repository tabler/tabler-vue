<template>
    <div class="card-header">
        <slot><h3 class="card-title">{{ title }}</h3></slot>
        <div class="card-options">
            <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
            <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card-header",
        props: {
            title: {default: '', type: String},
        }
    }
</script>

<style scoped>

</style>