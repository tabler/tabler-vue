<template>
    <label class="custom-control custom-radio" :class="{'custom-control-inline': inline}">
        <input class="custom-control-input" v-bind="{name, checked: isChecked, disabled, value: radioValue}" @change="onChange" type="radio">
        <div class="custom-control-label">{{ label }}</div>
    </label>
</template>

<script>
  import FormInput from './FormInput'

  export default {
    name: "form-radio",
    props: {
      inline: {default: false, type: Boolean},
      value: {type: [Boolean, String, Number]},
      label: {type: String},
      checked: {default: false, type: Boolean},
      disabled: {default: false, type: Boolean},
      name: {default: '', type: String}
    },

    computed: {
      radioValue () {
        return this.$attrs.value
      },

      isChecked () {
        return this.checked || this.radioValue === this.value
      }
    },

    methods: {
      onChange () {
        this.$emit('input', this.radioValue)
      }
    },

    components: {FormInput}
  }
</script>

<style scoped>

</style>