export default {
    name: 'table-row',
    render(createElement) {
        return createElement(
            'tr',
            this.$slots.default
        )
    }
}