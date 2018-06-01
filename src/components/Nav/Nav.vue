<template>
    <ul :class="className">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "t-nav",
        props: {
            tabbed: {default: false}
        },
        computed: {
            className () {
                const className = {nav: true}
                className[`nav-tabs`] = this.tabbed !== false
                return className
            }
        }
    }
</script>

<style scoped>

</style>