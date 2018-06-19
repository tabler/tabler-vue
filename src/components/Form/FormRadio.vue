<template>
    <label class="custom-control custom-radio" :class="{'custom-control-inline': inline}">
        <input class="custom-control-input"
               v-bind="{name, checked: isChecked, disabled, inputValue}" @change="onChange"
               @focus="onFocus"
               @blur="onBlur"
               type="radio">
        <div class="custom-control-label">{{ label }}</div>
    </label>
</template>

<script>
  import checkboxMixin from '../../mixins/radioCheck'
  import formElementsMixin from '../../mixins/formElement'
  import FormInput from './FormInput'

  export default {
    name: "form-radio",
    methods: {
      onChange () {
        this.$emit('input', this.value)
      }
    },
    mixins: [formElementsMixin, checkboxMixin],
    components: {FormInput}
  }
</script>

<style scoped>

</style>