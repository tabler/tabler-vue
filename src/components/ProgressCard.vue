<template>
    <card>
        <card-body class="text-center">
            <div class="h5">{{ title }}</div>
            <div class="display-4 font-weight-bold mb-4">{{ total }}</div>
            <div class="progress progress-sm">
                <div :class="`progress-bar bg-${progressColor}`" :style="progressStyle"></div>
            </div>
        </card-body>
    </card>
</template>

<script>
    import Card from "./Card/Card.vue";
    import CardBody from "./Card/CardBody.vue";

    export default {
        name: "progress-card",
        props: {
            title: {required: true, type: String},
            total: {required: true, type: String},
            progress: {required: true, type: Number},
            progressColor: {default: 'green', type: String}
        },

        computed: {
            progressStyle() {
                return {width: `${this.progress}%`}
            }
        },

        components: {
            CardBody,
            Card
        }
    }
</script>

<style scoped>

</style>