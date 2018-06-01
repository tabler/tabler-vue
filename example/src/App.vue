<template>
  <div id="app">
    <site-header :imageUrl="logoImage">
    </site-header>
    <site-nav></site-nav>
  </div>
</template>

<script>
import Logo from './assets/demo/brand/tabler.svg'
export default {
  name: 'App',
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
