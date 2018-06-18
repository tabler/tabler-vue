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
                                    <form-input disabled value="Well, she turned me into a newt."/>
                                </form-group>
                                <form-group>
                                    <form-label>Readonly</form-label>
                                    <form-input readonly value="Well, how'd you become king, then?" type="text"/>
                                </form-group>
                                <form-group>
                                    <form-label label="Textarea" label-small="56/100"/>
                                    <form-textarea rows="6" value="Oh! Come and see the violence inherent in the system! Help, help, I'm being repressed! We shall say 'Ni' again to you, if you do not appease us. I'm not a witch. I'm not a witch. Camelot!" />
                                </form-group>
                            </grid-col>
                            <grid-col md="6" lg="4">
                                <form-group>
                                    <form-label>Password</form-label>
                                    <form-input type="password" placeholder="Password.."/>
                                </form-group>
                                <form-group>
                                    <form-label>Valid State</form-label>
                                    <form-input valid placeholder="Valid State.."/>
                                    <form-input tick class="mt-3" value="Valid state"/>
                                </form-group>
                                <form-group>
                                    <form-label>Invalid State</form-label>
                                    <form-input invalid placeholder="Invalid State.."/>
                                    <form-invalid-feedback feedback="Invalid feedback"/>
                                    <form-input cross class="mt-3" value="Invalid state"/>
                                </form-group>
                                <form-group>
                                    <form-label>Country</form-label>
                                    <select class="form-control custom-select">
                                        <option value="">Germany</option>
                                    </select>
                                </form-group>
                            </grid-col>
                            <grid-col md="6" lg="4">
                                <form-group>
                                    <form-label>Radios</form-label>
                                    <div class="custom-controls-stacked">
                                        <form-radio checked name="example-radios" :value="1" label="Option 1"/>
                                        <form-radio name="example-radios" :value="2" label="Option 2"/>
                                        <form-radio name="example-radios" :value="3" disabled label="Option Disabled"/>
                                        <form-radio name="example-radios2" checked :value="4" disabled label="Option Disabled Checked"/>
                                    </div>
                                </form-group>
                                <form-group>
                                    <form-label>Inline Radios</form-label>
                                    <div class="custom-controls-stacked">
                                        <form-radio checked name="example-inline-radios" :value="1" label="Option 1" inline/>
                                        <form-radio name="example-inline-radios" :value="2" label="Option 2" inline/>
                                        <form-radio name="example-inline-radios" :value="3" label="Option 3" inline/>
                                    </div>
                                </form-group>
                                <form-group>
                                    <form-label>Checkboxes</form-label>
                                    <div class="custom-controls-stacked">
                                        <form-checkbox checked name="example-radios" value="option1" label="Option 1"/>
                                        <form-checkbox name="example-checkboxes" value="option2" label="Option 2"/>
                                        <form-checkbox name="example-checkboxes" value="option3" disabled label="Option Disabled"/>
                                        <form-checkbox name="example-checkboxes" checked value="option4" disabled label="Option Disabled Checked"/>
                                    </div>
                                </form-group>
                                <form-group>
                                    <form-label>Inline Checkboxes</form-label>
                                    <div class="custom-controls-stacked">
                                        <form-checkbox checked name="example-inline-checkboxes" value="option1" label="Option 1" inline/>
                                        <form-checkbox name="example-inline-checkboxes" value="option2" label="Option 2" inline/>
                                        <form-checkbox name="example-inline-checkboxes" value="option3" label="Option 3" inline/>
                                    </div>
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
    name: "forms-page",
    data: () => ({check: []})
  }
</script>

<style scoped>

</style>