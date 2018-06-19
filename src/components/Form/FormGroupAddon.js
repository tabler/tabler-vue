export default {
  name: 'form-group-addon',
  props: {
    addOn: {default: '', type: [Number, String]},
    append: {default: false, type: Boolean}
  },
  template: `<span :class="className"><slot><span class="input-group-text">{{ addOn }}</span></slot></span>`,
  computed: {
    className () {
      const className = {}
      className[`input-group-prepend`] = ! this.append
      className[`input-group-append`] = this.append
      return className
    }
  }
}