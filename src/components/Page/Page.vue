<template>
    <page-wrapper>
        <page-header :title="title"/>
        <slot/>
    </page-wrapper>
</template>

<script>
    import PageWrapper from "./PageWrapper.vue";
    import PageHeader from "./PageHeader.vue";

    export default {
        name: "page",
        props: {
            title: {default: '', type: String}
        },
        components: {
            PageHeader,
            PageWrapper
        }
    }
</script>

<style scoped>

</style>