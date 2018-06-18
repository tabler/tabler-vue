export default {
  props: {
    name: {default: false, type: [Boolean, String]},
    value: {}
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
  },

  methods: {
    onFocus () {
      this.$emit('focus')
    },
    onBlur () {
      this.$emit('blur')
    },

    onChange({target: {value}}) {
      this.$emit('change', value)
    }
  }
}