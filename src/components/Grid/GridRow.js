export default {
    name: 'grid-row',
    props: {
        /**
         * Mark as true if this row contains cards
         */
        cards: {default: false, types: Boolean}
    },

    computed: {
        className () {
            const classNames = {row: true}
            classNames['row-cards'] = this.cards !== false
            return classNames
        }
    },
    template: `<div :class="className"><slot/></div>`
}