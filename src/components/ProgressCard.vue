<template>
    <card>
        <card-body class="text-center">
            <div class="h5">{{ title }}</div>
            <div class="display-4 font-weight-bold mb-4">{{ total }}</div>
            <progress-bar size="sm" :color="progressColor" :progress="progress"/>
        </card-body>
    </card>
</template>

<script>
    import Card from "./Card/Card.vue";
    import CardBody from "./Card/CardBody.vue";
    import ProgressBar from './ProgressBar'

    export default {
        name: "progress-card",
        props: {
            title: {required: true, type: String},
            total: {required: true, type: String},
            progress: {required: true, type: Number},
            progressColor: {default: 'green', type: String}
        },
        components: {
            CardBody,
            Card,
            ProgressBar
        }
    }
</script>

<style scoped>

</style>