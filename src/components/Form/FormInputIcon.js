export default {
  name: 'form-input-icon',
  props: {
    icon: {required: true, type: String},
    prefix: {default: 'fe', type: String},
    right: {default: false, type: Boolean}
  },
  render (createElement) {
    const addOn = createElement('span', {class: ['input-icon-addon']}, [createElement('icon', {props: {icon: this.icon, prefix: this.prefix}})])
    const elements = [addOn, this.$slots.default]
    return createElement('div', {
      class: ['input-icon']
    }, this.right ? elements.reverse() : elements)
  }
}