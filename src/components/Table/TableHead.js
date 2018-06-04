export default {
    name: 'table-head',
    render(createElement) {
        return createElement(
            'thead',
            this.$slots.default
        )
    }
}