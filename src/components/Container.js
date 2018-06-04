export default {
    name: 'container',
    props: {
      maxWidth: 0
    },
    template: `<div class="container"><slot/></div>`,
    computed: {
        style() {
            const style = {maxWidth: this.maxWidth}
            return style
        }
    }
}