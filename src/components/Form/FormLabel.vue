<template>
    <label class="form-label" :for="labelFor"><slot>{{ label }}</slot></label>
</template>

<script>
  export default {
    name: "form-label",
    props: {
      labelFor: {default: '', type: String},
      label: {default: '', type: String},
    }
  }
</script>

<style scoped>

</style>