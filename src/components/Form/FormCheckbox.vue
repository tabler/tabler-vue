<template>
    <label class="custom-control custom-checkbox" :class="{'custom-control-inline': inline}">
        <input class="custom-control-input"
               v-bind="{name, checked: isChecked, disabled, value: inputValue}"
               @focus="onFocus"
               @blur="onBlur"
               @change="onChange"
               type="checkbox">
        <div class="custom-control-label">{{ label }}</div>
    </label>
</template>

<script>
  import radioCheckMixin from '../../mixins/radioCheck'
  import formElementMixin from '../../mixins/formElement'
  import {objectCompare} from '../../utils'

  export default {
    name: "form-checkbox",
    props: {
      model: {default: () => ([]), type: Array}
    },
    methods: {
      onChange ({target: {checked}}) {
        let value = this.model
        if (checked) {
          value.push(this.inputValue)
        } else {
          // remove current value from selection
          value = value.filter(v => {
            if (typeof this.inputValue === 'object') {
              return !objectCompare(this.inputValue, v)
            }
            return v !== this.inputValue
          })

        }
        console.log(value, this.model)
        this.$emit('input', value)
      }
    },
    mixins: [radioCheckMixin, formElementMixin]
  }
</script>

<style scoped>

</style>