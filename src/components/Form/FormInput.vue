<template>
    <input class="form-control" v-model="internalValue" @input="onInput" >
</template>

<script>
  export default {
    name: "form-input",
    props: {
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