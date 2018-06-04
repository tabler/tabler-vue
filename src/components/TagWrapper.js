export default {
    name: 'tag-wrapper',
    functional: true,
    props: {
        tag: {default: 'div', types: String}
    },

    render(h, {children, props, data}) {
        return h(
            props.tag,
            {
                class: data.staticClass
            },
            children
        )
    }
}