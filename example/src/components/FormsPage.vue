<template>
    <page>
        <grid-row>
            <grid-col sm="12">
                <card>
                    <card-header title="Form elements"/>
                    <card-body>
                        <grid-row>
                            <grid-col md="6" lg="4">
                                <form-group>
                                    <form-label>Static</form-label>
                                    <form-static-text value="Username"/>
                                </form-group>
                                <form-group>
                                    <form-label>Text</form-label>
                                    <form-input placeholder="Text.."/>
                                </form-group>
                                <form-group>
                                    <form-label>Disabled</form-label>
                                    <form-input disabled placeholder="Well, she turned me into a newt."/>
                                </form-group>
                                <form-group>
                                    <form-label>Readonly</form-label>
                                    <form-input readonly placeholder="Well, how'd you become king, then?" type="text"/>
                                </form-group>
                                <form-group>
                                    <form-label label="Textarea" label-small="56/100"/>
                                    <form-input readonly placeholder="Well, how'd you become king, then?" type="text"/>
                                </form-group>
                            </grid-col>
                        </grid-row>
                    </card-body>
                </card>
            </grid-col>
        </grid-row>
    </page>
</template>

<script>
  export default {
    name: "forms-page"
  }
</script>

<style scoped>

</style>