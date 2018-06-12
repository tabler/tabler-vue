<template>
    <card class="p-3">
        <div class="d-flex align-items-center">
                    <span class="stamp stamp-md mr-3" :class="stampClassName">
                      <icon :icon="icon"/>
                    </span>
            <div>
                <h4 class="m-0"><slot>{{ header }}</slot></h4>
                <small class="text-muted"><slot name="footer">{{ footer }}</slot></small>
            </div>
        </div>
    </card>
</template>

<script>
    import Icon from './Icon'
    import Card from './Card/Card'
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
        },

      components: {
            Card,
            Icon
      }
    }
</script>

<style scoped>

</style>