<template>
    <card>
        <card-body class="p-3 text-center">
            <div :class="movementClassName" class="text-right">{{ movement }}% <i :class="movementIconClassName"></i></div>
            <div class="h1 m-0">{{ total }}</div>
            <div class="text-muted mb-4">{{ label }}</div>
        </card-body>
    </card>
</template>

<script>
    import Card from "./Card/Card.vue";
    import CardBody from "./Card/CardBody.vue";

    export default {
        name: "stats-card",

        props: {
            movement: {type: Number, required: true},
            label: {type: String, required: true},
            total: {type: String|Number, required: true}
        },

        computed: {
            movementClassName() {
                const color = !this.movement ? "yellow" : this.movement > 0 ? "green" : "red"
                const className = {}
                className[`text-${color}`] = true
                return className
            },

            movementIconClassName() {
                const className = {}
                className['fe fe-chevron-up'] = this.movement >= 0
                className['fe fe-chevron-down'] = this.movement < 0
                return className
            }
        },

        components: {
            CardBody,
            Card
        },
    }
</script>

<style scoped>

</style>