<template>
    <div class="header collapse d-lg-flex p-0" :class="{show: !collapsed}">
        <container>
            <grid-row class="align-items-center">
                <grid-col lg="3" class="ml-auto">
                    <!--todo convert to a component-->
                    <!--<form class="input-icon my-3 my-lg-0">-->
                        <!--<input class="form-control header-search" placeholder="Search…" tabindex="1" type="search">-->
                        <!--<div class="input-icon-addon">-->
                            <!--<i class="fe fe-search"></i>-->
                        <!--</div>-->
                    <!--</form>-->
                </grid-col>

                <grid-col lg class="order-lg-first">
                    <t-nav tabbed class="border-0 flex-column flex-lg-row">
                        <slot></slot>
                    </t-nav>
                </grid-col>
            </grid-row>
        </container>
    </div>
</template>

<script>
    import NavItem from '../Nav/NavItem.vue'
    import DropdownMenuItem from "../Dropdown/DropdownMenuItem.vue";

    export default {
        name: "site-nav",
        props: {
          collapsed: {default: true, type: Boolean}
        },
        components: {
            DropdownMenuItem,
            NavItem
        }
    }
</script>

<style scoped>

</style>