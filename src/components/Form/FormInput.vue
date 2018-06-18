<template>
    <input class="form-control" :class="className" v-model="inputValue">
</template>

<script>
  export default {
    name: "form-input",
    props: {
      value: {default: '', type: String},
      invalid: {default: false, type: Boolean},
      valid: {default: false, type: Boolean},
      tick: {default: false, type: Boolean},
      cross: {default: false, type: Boolean}
    },

    computed: {
      inputValue: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      },
      className () {
        const className = {}
        className['is-valid'] = this.valid
        className['state-valid'] = this.tick
        className['is-invalid'] = this.invalid
        className['state-invalid'] = this.cross
        return className
      }
    }
  }
</script>

<style scoped>

</style>