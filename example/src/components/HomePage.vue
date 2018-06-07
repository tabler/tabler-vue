<template>
  <page title="Dashboard">
    <grid-row cards>

      <grid-col :key="stat.label" v-for="stat in stats" xs="6" sm="4" lg="2">
        <stats-card :movement="stat.movement" :total="stat.total" :label="stat.label"/>
      </grid-col>

      <grid-col lg="6">
        <card>
          <card-header title="Development Activity"/>
          <t-table cards vertical-align="center">
            <table-head>
              <table-row>
                <table-cel colspan="2" header>User</table-cel>
                <table-cel header>Commit</table-cel>
                <table-cel header>Date</table-cel>
                <table-cel header></table-cel>
              </table-row>
            </table-head>
            <table-body>
              <table-row>
                <table-cel class="w-1"><avatar image-url="/static/demo/faces/male/9.jpg"/></table-cel>
                <table-cel>Ronald Bardley</table-cel>
                <table-cel>Initial commit</table-cel>
                <table-cel class="text-norwap">May 6, 2018</table-cel>
                <table-cel class="w-1"><a href="#" class="icon"><i class="fe fe-trash"></i></a></table-cel>
              </table-row>
              <table-row>
                <table-cel class="w-1"><avatar image-url="/static/demo/faces/female/1.jpg"/></table-cel>
                <table-cel>Beverly Armstrong</table-cel>
                <table-cel>Left sidebar adjustments</table-cel>
                <table-cel class="text-norwap">Apirl 15, 2018</table-cel>
                <table-cel class="w-1"><a href="#" class="icon"><i class="fe fe-trash"></i></a></table-cel>
              </table-row>
              <table-row>
                <table-cel class="w-1"><avatar image-url="/static/demo/faces/male/4.jpg"/></table-cel>
                <table-cel>Boddy Knight</table-cel>
                <table-cel>Topbar dropdown style</table-cel>
                <table-cel class="text-norwap">Apirl 8, 2018</table-cel>
                <table-cel class="w-1"><a href="#" class="icon"><i class="fe fe-trash"></i></a></table-cel>
              </table-row>
              <table-row>
                <table-cel class="w-1"><avatar image-url="/static/demo/faces/female/11.jpg"/></table-cel>
                <table-cel>Sharon Wells</table-cel>
                <table-cel>Fixes #625</table-cel>
                <table-cel class="text-norwap">Apirl 9, 2018</table-cel>
                <table-cel class="w-1"><a href="#" class="icon"><i class="fe fe-trash"></i></a></table-cel>
              </table-row>
            </table-body>
          </t-table>
        </card>
      </grid-col>

      <grid-col lg="6">
        <alert type="primary">Are you in trouble? <alert-link to="/documentation" label="Read our documentation"/> with code samples.</alert>

        <grid-row>
          <grid-col sm="6">
            <card title="Chart title"></card>
          </grid-col>

          <grid-col sm="6">
            <card title="Chart title"></card>
          </grid-col>

          <grid-col sm="6">
            <progress-card title="New feedback" total="62" :progress="68" progress-color="red"/>
          </grid-col>
          <grid-col sm="6">
            <progress-card title="Today profit" total="$652" :progress="84"/>
          </grid-col>
        </grid-row>
      </grid-col>

      <grid-col sm="6" lg="3">
        <stamp-card icon="dollar-sign" footer="12 waiting payments"><a href="#">132 <small>Sales</small></a></stamp-card>
      </grid-col>
      <grid-col sm="6" lg="3">
        <stamp-card color="green" icon="shopping-cart" footer="32 shipped"><a href="#">78 <small>Orders</small></a></stamp-card>
      </grid-col>
      <grid-col sm="6" lg="3">
        <stamp-card color="red" icon="users" footer="163 registered today"><a href="#">1352 <small>Members</small></a></stamp-card>
      </grid-col>
      <grid-col sm="6" lg="3">
        <stamp-card color="yellow" icon="message-square" footer="16 waiting"><a href="#">132 <small>Comments</small></a></stamp-card>
      </grid-col>
    </grid-row>

    <grid-row cards>
      <grid-col xs="12">
        <card>
          <t-table responsive hover cards outline vertical-align="center" className="text-nowrap">
            <table-head>
              <table-row>
                <table-cel header class="text-center w-1"></table-cel>
                <table-cel header>User</table-cel>
                <table-cel header>Usage</table-cel>
                <table-cel header class="text-center">Payment</table-cel>
                <table-cel header>Activity</table-cel>
                <table-cel header class="text-center">Satisfaction</table-cel>
                <table-cel header class="text-center"></table-cel>
              </table-row>
            </table-head>
            <table-body>
              <table-row>
                <table-cel class="text-center">
                  <avatar image-url="/static/demo/faces/female/26.jpg" status-color="green"/>
                </table-cel>
                <table-cel>
                  <div>Elizabeth Martin</div>
                  <div class="small text-muted">Registered: Mar 19, 2018</div>
                </table-cel>

                <table-cel>
                  <div class="clearfix">
                    <div class="float-left">
                      <strong>42%</strong>
                    </div>
                    <div class="float-right">
                      <small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <progress-bar size="xs" color="yellow" :progress="42" />
                </table-cel>

                <table-cel class="text-center">
                  <i class="payment payment-visa"></i>
                </table-cel>

                <table-cel>
                  <div class="small text-muted">Last login</div>
                  <div>4 minutes ago</div>
                </table-cel>

                <table-cel class="text-center">
                  <div class="mx-auto chart-circle chart-circle-xs" data-value="0.42" data-thickness="3" data-color="blue">
                    <div class="chart-circle-value">42%</div>
                  </div>
                </table-cel>

                <table-cel>
                  <dropdown position="right" class="item-action">
                    <template slot="dropdown-toggle">
                      <a href="javascript:void(0)" class="icon"><i class="fe fe-more-vertical"></i></a>
                    </template>
                    <dropdown-menu-item label="Hello"/>
                  </dropdown>
                </table-cel>
              </table-row>
            </table-body>
          </t-table>
        </card>
      </grid-col>
    </grid-row>
  </page>
</template>

<script>
    export default {
      name: "home-page",
      data: () => ({
        stats: [
          {label: 'New Tickets', movement: 6, total: 43},
          {label: 'Closed Today', movement: -3, total: 17},
          {label: 'New Replies', movement: 9, total: 7},
          {label: 'Followers', movement: 3, total: '27.3K'},
          {label: 'Daily Earnings', movement: -2, total: '$95'},
          {label: 'Products', movement: -1, total: 621}
        ],
        process: [
          {label: 'New feedback', movement: 6, total: 62},
          {label: 'Today profit', movement: -3, total: '$652'}
        ]
      })
    }
</script>

<style scoped>

</style>
