<template>
  <site-wrapper>
    <site-header :imageUrl="logoImage"></site-header>

    <site-nav></site-nav>

    <page title="Dashboard">
      <grid-row cards>
        <grid-col :key="stat.label" v-for="stat in stats" xs="6" sm="4" lg="2">
          <stats-card :movement="stat.movement" :total="stat.total" :label="stat.label"/>
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
      {label: 'Daily Earnings', movement: -1, total: 621},
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
