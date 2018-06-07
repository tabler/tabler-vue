export default {
    name: 'progress-bar',
    props: {
        /**
         * Size of the progressbar [xs, md, lg, xl]
         */
        size: {default: '', type: String},

        /**
         * Percentage of the progress (0 - 100)
         */
        progress: {default: 0, type: Number},

        color: {default: 'yellow', type: String}
    },

    template: ` <div class="progress" :class="progressClassName">
                    <div role="progressbar" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100" class="progress-bar" :class="progressBarClassName" :style="progressBarStyle"></div>
                </div>`,

    computed: {
        progressClassName() {
            const className = {}
            className[`progress-${this.size}`] = true
            return className
        },

        progressBarClassName() {
            const className = {}
            className[`bg-${this.color}`] = true
            return className
        },

        progressBarStyle() {
            return {
                width: `${this.progress}%`
            }
        }
    }
}