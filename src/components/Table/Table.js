export default {
    name: 't-table',
    props: {
        /**
         * Marks if table element should be wrapped inside a .table-responsive div container
         */
        responsive: {default: true},

        /**
         * Marks if table should contain .table-hover class
         */
        hover: {default: false},

        /**
         * Adds a .table-stripped class to table element
         */
        stripped: {default: false},

        /**
         * Adds a .table-outline class to table element
         */
        outline: {default: false},

        /**
         * Optimise table for display cards
         */
        cards: {default: false},

        /**
         * Table vertical alignment
         * Allowed values ['center']
         */
        verticalAlign: {type: String},

        /**
         * Classes for the table element
         * It can be Object or String
         */
        className: {}
    },

    render(createElement) {
        /**
         * Conditionally wraps table element inside .table-responsive div container
         * based on the responsive property
         */
        if(!!this.responsive) {
            return this.createTable(createElement)
        } else {
            return createElement('div', {
                class: {'table-responsive': true}
            }, [
                this.createTable(createElement)
            ])
        }
    },

    methods: {
        /**
         * Creates an html table element with proper classes
         * @param createElementFn createElement function from render function
         * @returns {*}
         */
        createTable(createElementFn) {
            return createElementFn('table', {
                class: this.tableClassName
            }, [
                this.$slots.default
            ])
        }
    },

    computed: {
        /**
         * Returns table element classes
         * @returns Object
         */
        tableClassName () {
            let className = {table: true}
            className[`table-hover`] = this.hover !== false
            className[`table-stripped`] = this.stripped !== false
            className[`table-outline`] = this.outline !== false
            className[`card-table`] = this.cards !== false

            className[`table-vcenter`] = this.verticalAlign === 'center'

            // join classes with the ones provided by the user
            if ('object' === typeof this.className) {
                className = {
                    ...className,
                    ...this.className
                }
            } else {
                className[`${this.className}`] = true
            }

            return className
        }
    }
}