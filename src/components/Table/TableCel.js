export default {
    name: 'table-cel',
    props: {
        header: {default: false},
    },
    render(createElement) {
        const tag = this.header !== false ? 'th' : 'td'
        return createElement(
            tag,
            this.$slots.default
        )
    }
}