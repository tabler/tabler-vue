export default {
    name: 'avatar',
    props: {
        /**
         * Avatar image url
         */
        imageUrl: {required: true, type: String},

        /**
         * Status color
         * Component will only show status if this option is defined
         */
        statusColor: {default: '', type: String}
    },

    template: `<div class="avatar d-block" :style="avatarStyle"><span v-if="hasStatus" class="avatar-status" :class="statusClassName"></span></div>`,

    computed: {
        /**
         * Generates css style to avatar component
         * @returns {{backgroundImage: string}}
         */
        avatarStyle() {
            return {
                backgroundImage: `url(${this.imageUrl})`
            }
        },

        /**
         * Generates classes to avatar status
         * @returns {{}}
         */
        statusClassName() {
            const className = {}
            className[`bg-${this.statusColor}`] = this.hasStatus
            return className
        },

        /**
         * Returns true if status is defined and otherwise false
         * @returns {boolean}
         */
        hasStatus() {
            return this.statusColor !== ''
        }
    }
}