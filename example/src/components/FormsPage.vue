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
                                    <form-textarea rows="6"
                                                   value="Oh! Come and see the violence inherent in the system! Help, help, I'm being repressed! We shall say 'Ni' again to you, if you do not appease us. I'm not a witch. I'm not a witch. Camelot!"/>
                                </form-group>
                                <form-group>
                                    <form-label>Input group</form-label>
                                    <form-input-group>
                                        <form-input placeholder="Username"/>
                                        <form-group-addon append>
                                            <t-button>Go!</t-button>
                                        </form-group-addon>
                                    </form-input-group>
                                </form-group>
                                <form-group>
                                    <form-label>Input group buttons</form-label>
                                    <form-input-group>
                                        <form-input placeholder="Username"/>
                                        <form-group-addon append>
                                            <t-button>Action</t-button>
                                            <t-button><icon icon="chevron-down"/></t-button>
                                        </form-group-addon>
                                    </form-input-group>
                                </form-group>
                                <form-group>
                                    <form-label>Icon input</form-label>
                                    <form-input-icon icon="search" right class="mb-3">
                                        <form-input placeholder="Search for..."/>
                                    </form-input-icon>
                                    <form-input-icon icon="user" class="mb-3">
                                        <form-input placeholder="Username"/>
                                    </form-input-icon>
                                </form-group>
                                <form-group>
                                    <form-label>Separated input</form-label>
                                    <grid-row class="gutters-xs">
                                        <grid-col sm>
                                            <form-input placeholder="Search for..."/>
                                        </grid-col>
                                        <grid-col class="col-auto">
                                            <t-button><icon icon="search"></icon></t-button>
                                        </grid-col>
                                    </grid-row>
                                </form-group>
                                <form-group>
                                    <form-label>Zip Code</form-label>
                                    <grid-row class="gutters-xs">
                                        <grid-col sm>
                                            <form-input placeholder="Search for..."/>
                                        </grid-col>
                                        <grid-col class="col-auto align-self-center">
                                            <form-help>
                                                <p>ZIP Code must be US or CDN format. You can use an extended ZIP+4 code to determine address more accurately.</p>
                                                <p class='mb-0'><a href=''>USP ZIP codes lookup tools</a></p>
                                            </form-help>
                                        </grid-col>
                                    </grid-row>
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
                                <form-group>
                                    <form-label>Bootstrap's Custom File Input</form-label>
                                    <form-file-input/>
                                </form-group>
                                <form-group>
                                    <form-label>Date of birth</form-label>
                                    <grid-row class="gutters-xs">
                                        <grid-col sm="5">
                                            <form-select :options="months" value="June"/>
                                        </grid-col>
                                        <grid-col sm="3">
                                            <form-select :options="days" value="20"/>
                                        </grid-col>
                                        <grid-col sm="4">
                                            <form-select :options="years" value="1989"/>
                                        </grid-col>
                                    </grid-row>
                                </form-group>
                                <form-group>
                                    <form-label>Username</form-label>
                                    <form-input-group>
                                        <form-group-addon add-on="@"/>
                                        <form-input placeholder="Username"/>
                                    </form-input-group>
                                </form-group>
                                <form-group>
                                    <form-label>Your vanity URL</form-label>
                                    <form-input-group>
                                        <form-group-addon add-on="https://example.com/users/"/>
                                        <form-input/>
                                    </form-input-group>
                                </form-group>
                                <form-group>
                                    <form-label>Price</form-label>
                                    <form-input-group>
                                        <form-group-addon add-on="$"/>
                                        <form-input/>
                                        <form-group-addon add-on=".00" append/>
                                    </form-input-group>
                                </form-group>

                                <form-group>
                                    <form-label>Button input</form-label>
                                    <form-input-group>
                                        <form-group-addon>
                                            <dropdown label="Action">
                                                <dropdown-menu-item label="Action"/>
                                                <dropdown-menu-item label="Another action"/>
                                                <dropdown-menu-item label="Something else here"/>
                                                <dropdown-divider/>
                                                <dropdown-menu-item label="Separated link"/>
                                            </dropdown>
                                        </form-group-addon>
                                        <form-input/>
                                        <form-group-addon add-on=".00" append/>
                                    </form-input-group>
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
    import {months, days, years} from '../dummy'

    export default {
    name: "forms-page",
    computed: {
      months: () => months,
      days: () => days,
      years
    }
  }
</script>

<style scoped>

</style>