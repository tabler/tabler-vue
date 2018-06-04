<template>
    <a href="#" class="dropdown-item">
        <slot>
            <span v-if="!!badge" class="float-right"><span :class="`badge badge-${type}`">{{ badge }}</span></span>
            <i v-if="!!icon" :class="`${iconPrefix} ${iconPrefix}-${icon}`" class="dropdown-icon"></i>
            {{ label }}
        </slot>
    </a>
</template>

<script>
    export default {
        name: "dropdown-menu-item",
        props: {
            icon: {default: false},
            iconPrefix: {default: 'fe'},
            label: {default: 'Dropdown Item'},
            badge: {default: false},
            type: {default: 'primary'}
        }
    }
</script>

<style scoped>

</style>