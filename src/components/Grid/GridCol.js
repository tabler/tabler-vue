export default {
    name: 'grid-col',
    props: {
        width: {default: 0}
    },
    template: `<div class="col"><slot/></div>`,
    computed: {
        className() {
            const className = {col: true}
            className[`col-${this.width}`] = width
        }
    }
}