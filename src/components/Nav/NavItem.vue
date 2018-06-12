<template>
    <tag-wrapper :tag="tag" class="nav-item">
        <a v-click-out-side="hideDropdown" @click="onClick" :class="className">
            <icon v-if="icon" :icon="icon" :prefix="iconPrefix"/>
            {{ label }}
        </a>
        <dropdown-menu :show="dropdownVisible">
            <slot></slot>
        </dropdown-menu>
    </tag-wrapper>
</template>

<script>
    import TagWrapper from "../TagWrapper";
    import DropdownMenu from "../Dropdown/DropdownMenu.vue";
    import ClickOutSide from '../../directives/ClickOutSide'
    export default {
        name: "nav-item",
        props: {
            tag: {default: 'li', type: String},
            active: {default: false, type: Boolean},
            label: {default: '', type: String},
            icon: {default: '', type: String},
            iconPrefix: {default: 'fe', type: String},
            to: {default: ''}
        },

        data: () => ({
            dropdownVisible: false
        }),

        methods: {
            onClick (e) {
                e.preventDefault()
                if(this.hasSubItems){
                    this.toggleDropdown()
                } else {
                    this.$router.push(this.to)
                }
            },

            toggleDropdown() {
                this.dropdownVisible = !this.dropdownVisible
            },

            hideDropdown() {
                this.dropdownVisible = false
            }
        },

        computed: {
            className() {
                const className = {'nav-link': true}
                return className
            },

            iconClassName() {
                const iconClass = {}
                iconClass[`${this.iconPrefix}`] = true
                iconClass[`${this.iconPrefix}-${this.icon}`] = true
                return iconClass
            },

            hasSubItems() {
                return ('default' in this.$slots)
            }
        },
        components: {
            DropdownMenu,
            TagWrapper
        },
        directives: {
            ClickOutSide
        }
    }
</script>

<style scoped>

</style>