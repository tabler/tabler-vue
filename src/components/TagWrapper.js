export default {
    name: 'tag-wrapper',
    props: {
        tag: {default: 'div', types: String}
    },

    render(h) {
        return h(
            this.tag,
            this.$slots.default
        )
    }
}