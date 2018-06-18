<template>
    <select v-model="inputValue" class="form-control custom-select" :name="name" :id="id">
        <slot>
            <option :value="getOptionValue(option)" v-for="(option, index) in options">{{ getOptionLabel(option) }}</option>
        </slot>
    </select>
</template>

<script>
  import formElementMixin from '../../mixins/formElement'
  export default {
    name: "form-select",
    props: {
      keyBy: {default: 'value', type: String},
      label: {default: 'label', type: String},
      options: {default: () => ([]), type: Array}
    },
    methods: {
      getOptionValue(option) {
        if (typeof option === 'object') {
          console.log(true)
          if(this.keyBy in option) {
            return option[this.keyBy]
          }
        }
        return option
      },

      getOptionLabel(option) {
        if(typeof option === 'object') {
          if(this.label in option) {
            return option[this.label]
          }
        }
        return option
      }
    },
    mixins: [formElementMixin]
  }
</script>

<style scoped>

</style>