<template>
    <div :class="className">
        <slot/>
    </div>
</template>
<script>
    export default {
        name: "dropdown-menu",

        props: {
            show: {default: false},
            position: {default: 'left'}
        },

        computed: {
            className() {
                const className = {
                    'dropdown-menu': true
                }

                className[`dropdown-menu-${this.position}`] = true
                className[`dropdown-menu-arrow`] = true
                className[`show`] = this.show
                return className
            }
        }
    }
</script>