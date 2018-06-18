<template>
    <input class="form-control" :class="className" v-model="internalValue" @input="onInput" >
</template>

<script>
  export default {
    name: "form-input",
    props: {
      value: {},
      invalid: { default: false, type: Boolean },
      valid: { default: false, type: Boolean },
      tick: {default: false, type: Boolean},
      cross: {default: false, type: Boolean}
    },

    data: () => ({
      internalValue: null
    }),

    computed: {
      className () {
        const className = {}
        className['is-valid'] = this.valid
        className['state-valid'] = this.tick
        className['is-invalid'] = this.invalid
        className['state-invalid'] = this.cross
        return className
      }
    },

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