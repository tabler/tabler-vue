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
            const className = {}
            className[`col-xs${this.xs ? '-' + this.xs : '' }`] = this.xs !== 0
            className[`col-sm${this.sm ? '-' + this.sm : '' }`] = this.sm !== 0
            className[`col-md${this.md ? '-' + this.md : '' }`] = this.md !== 0
            className[`col-lg${this.lg ? '-' + this.lg : '' }`] = this.lg !== 0
            className[`col-xl${this.xl ? '-' + this.xl : '' }`] = this.xl !== 0
            return className
        }
    }
}