export default {
  name: 'icon',
  props: {
    icon: {required: true, type: String},
    prefix: {default: 'fe', type: String}
  },
  template: `<i :class="className"></i>`,
  computed: {
    className () {
      const className = {}
      className[`${this.prefix}`] = true
      className[`${this.prefix}-${this.icon}`] = true
      return className
    }
  }
}