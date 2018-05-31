export default {
    name: 't-button',
    props: {
        size: {default: false},
        outline: {default: false},
        type: {default: 'primary'}
    },
    template: `<a :class="className"><slot>Button</slot></a>`,
    computed: {
        className () {
            const className = {btn: true}
            className[`btn-outline-${this.type}`] = this.outline
            className[`btn-${this.type}`] = !this.outline
            className[`btn-${this.size}`] = !!this.size
            return className
        }
    }
}