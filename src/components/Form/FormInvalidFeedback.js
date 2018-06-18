export default {
  name: 'form-invalid-feedback',
  props: {
    feedback: {default: '', type: String}
  },
  template: `<div class="invalid-feedback"><slot>{{ feedback }}</slot></div>`
}