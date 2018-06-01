export default {
    name: 'grid-col',
    props: {
        xs: {default: 0},
        sm: {default: 0},
        md: {default: 0},
        lg: {default: 0},
        xl: {default: 0}
    },
    template: `<div :class="className"><slot/></div>`,
    computed: {
        className() {
            const className = {col: true}
            className[`col-${this.xs}`] = this.xs
            className[`col-${this.sm}`] = this.sm
            className[`col-${this.md}`] = this.md
            className[`col-lg-${this.lg}`] = this.lg
            className[`col-lg-${this.xl}`] = this.xl
            return className
        }
    }
}