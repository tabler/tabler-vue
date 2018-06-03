<template>
    <card class="p-3">
        <div class="d-flex align-items-center">
                    <span class="stamp stamp-md mr-3" :class="stampClassName">
                      <i :class="`fe fe-${icon}`"></i>
                    </span>
            <div>
                <h4 class="m-0"><slot>{{ header }}</slot></h4>
                <small class="text-muted"><slot name="footer">{{ footer }}</slot></small>
            </div>
        </div>
    </card>
</template>

<script>
    export default {
        name: "stamp-card",
        props: {
            icon: {type: String, required: true},
            color: {type: String, default: 'blue'},
            header: {},
            footer: {}
        },

        computed: {
            stampClassName() {
                const className = {}
                className[`bg-${this.color}`] = true
                return className
            }
        }
    }
</script>

<style scoped>

</style>