export default {
    name: 'table-body',
    render(createElement) {
        return createElement(
            'tbody',
            this.$slots.default
        )
    }
}