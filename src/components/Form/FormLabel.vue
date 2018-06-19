<template>
    <label class="form-label" :for="labelFor"><slot>{{ label }} <span v-if="labelSmall" class="form-label-small">{{ labelSmall }}</span></slot></label>
</template>

<script>
  export default {
    name: "form-label",
    props: {
      labelFor: {default: false, type: [Boolean, String]},
      label: {default: '', type: String},
      labelSmall: {default: '', type: String},
    }
  }
</script>

<style scoped>

</style>