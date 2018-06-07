<template>
    <div class="header py-4">
        <container>
            <div class="d-flex">
                <slot name="site-logo">
                    <site-logo :image-url="imageUrl" :href="href" :alt="alt"/>
                </slot>

                <div class="d-flex order-lg-2 ml-auto">
                    <slot></slot>
                </div>
                <a class="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse"
                   data-target="#headerMenuCollapse"><span class="header-toggler-icon"></span></a></div>
        </container>
    </div>
</template>

<script>
    export default {
        name: "site-header",
        props: {
            imageUrl: {default: '/'},
            href: {default: ''},
            alt: {default: 'Tabler Vue'},
        }
    }
</script>

<style scoped>

</style>