<template>
  <site-wrapper>
    <site-header :imageUrl="logoImage"></site-header>

    <site-nav></site-nav>

    <page title="Dashboard">
      <grid-row cards>

        <grid-col :key="stat.label" v-for="stat in stats" xs="6" sm="4" lg="2">
          <stats-card :movement="stat.movement" :total="stat.total" :label="stat.label"/>
        </grid-col>

        <grid-col lg="6">
          <card title="Development Activity"></card>
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
          </grid-row>
        </grid-col>
      </grid-row>
    </page>

  </site-wrapper>
</template>

<script>
import Logo from './assets/demo/brand/tabler.svg'

export default {
  name: 'App',
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
  }),
  computed: {
    logoImage () {
      return Logo
    }
  }
}
</script>

<style>
  @import "../../dist/css/dashboard.css";
  /**./assets/logo.png**/
</style>
