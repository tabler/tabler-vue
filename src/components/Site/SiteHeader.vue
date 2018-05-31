<template>
    <div class="header py-4">
        <container>
            <div class="d-flex">
                <slot name="site-logo">
                    <site-logo :image-url="imageUrl" :href="href" :alt="alt"/>
                </slot>

                <div class="d-flex order-lg-2 ml-auto">
                    <div class="nav-item" v-if="navItems">
                        <a class="nav-link d-none d-md-flex"></a>
                        <slot name="nav-items">
                            <t-button :outline="true" size="sm" href="https://github.com/tabler/tabler-vue"
                                      target="_blank">Source code
                            </t-button>
                        </slot>
                    </div>

                    <notifications/>

                    <account-dropdown/>
                </div>
                <a class="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse"
                   data-target="#headerMenuCollapse"><span class="header-toggler-icon"></span></a></div>
        </container>
    </div>
</template>

<script>
    import Notifications from "../Notifications.vue";
    import AccountDropdown from "../AccountDropdown.vue";

    export default {
        name: "site-header",
        props: {
            imageUrl: {default: '/'},
            href: {default: ''},
            alt: {default: 'Tabler Vue'},
            navItems: {default: true}
        },
        components: {
            AccountDropdown,
            Notifications
        }
    }
</script>

<style scoped>

</style>