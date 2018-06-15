<template>
    <textarea class="form-control" v-model="internalValue"></textarea>
</template>

<script>
  export default {
    name: "form-textarea",
    props: {
      value: {default: '', type: String}
    },

    data: () => ({
      internalValue: ''
    }),

    mounted () {
      this.internalValue = this.value
    },

    methods: {
      onInput() {
        this.$emit('input', this.internalValue)
      }
    },

    watch: {
      value () {
        this.internalValue = this.value
      }
    }
  }
</script>

<style scoped>

</style>