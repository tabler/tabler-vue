<template>
    <div v-click-outside="close" @click="toggle" class="dropdown">
        <slot name="dropdown-toggle" >
            <t-button :outline="true" :aria-expanded="show">
                {{ label }}
            </t-button>
        </slot>
        <dropdown-menu :position="position" :show="show">
            <slot></slot>
        </dropdown-menu>
    </div>
</template>

<script>
    import ClickOutside from '../../directives/ClickOutSide'
    import DropdownMenu from "./DropdownMenu.vue";
    import TButton from "../Button";

    export default {
        name: "dropdown",
        props: {
            label: {default: 'Dropdown'},
            position: {default: 'left'}
        },
        data: () => ({
            show: false
        }),

        methods: {
            toggle() {
                this.show = !this.show
            },
            open(){
                this.show = true
            },
            close() {
                this.show = false
            }
        },
        directives: {ClickOutside},
        components: {
            TButton,
            DropdownMenu}
    }
</script>

<style scoped>

</style>