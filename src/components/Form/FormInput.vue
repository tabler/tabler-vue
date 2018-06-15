<template>
    <input class="form-control" :placeholder="placeholder" :type="type" v-model="internalValue" @input="onInput" >
</template>

<script>
  export default {
    name: "form-input",
    props: {
      type: {default: 'text', type: String},
      placeholder: {default: '', type: String},
      value: {},
    },

    data: () => ({
      internalValue: null
    }),

    methods: {
      onInput() {
        this.$emit('input', this.internalValue)
      }
    },

    watch: {
      value (value) {
        this.internalValue = value
      }
    }
  }
</script>

<style scoped>

</style>