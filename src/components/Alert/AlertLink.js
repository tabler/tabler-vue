export default {
    name: 'alert-link',
    props: {
        // href: {default: '', type: String},
        to: {default: true},
        label: {default: '', required: true, type: String},
        target: {default: false}
    },

    template: `<router-link class="alert-link" :target="false" :to="to">{{ label }}</router-link>`
}