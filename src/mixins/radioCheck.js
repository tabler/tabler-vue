import {objectCompare} from '../utils'

export default {
  props: {
    inline: {default: false, type: Boolean},
    value: {},
    label: {type: String},
    checked: {default: false, type: Boolean},
    disabled: {default: false, type: Boolean},
    model: {type: [Array, String, Number]}
  },

  model: {
    prop: 'model',
    event: 'input'
  },

  computed: {
    inputValue () {
      return this.value || this.label
    },

    isChecked () {
      let checked = this.inputValue === this.model
      if(Array.isArray(this.model)) {
        checked = !!this.model.find(v => {
          if(typeof this.inputValue === 'object') {
            return objectCompare(this.inputValue, v)
          }
          return v === this.inputValue
        })
      }
      return this.checked || checked
    },
  }
}