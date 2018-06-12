<template>
    <a href="#" class="dropdown-item">
        <slot>
            <span v-if="!!badge" class="float-right"><span :class="`badge badge-${type}`">{{ badge }}</span></span>
            <icon v-if="!!icon" :icon="icon" :prefix="iconPrefix" class="dropdown-icon"/>
            {{ label }}
        </slot>
    </a>
</template>

<script>
    import Icon from '../Icon'

    export default {
      components: {Icon},
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