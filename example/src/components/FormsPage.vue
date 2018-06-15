<template>
    <page>
        <grid-row>
            <grid-col sm="12">
                <card>
                    <card-header title="Form elements"/>
                    <card-body>
                        <grid-row>
                            <grid-col md="6" lg="4">
                                <form-grup>
                                    <form-label>Static</form-label>
                                    <form-static-text value="Username"/>
                                </form-grup>
                                <form-grup>
                                    <form-label>Text</form-label>
                                    <form-input placeholder="Text.."/>
                                </form-grup>
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