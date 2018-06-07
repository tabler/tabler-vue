<template>
  <site-wrapper>
    <site-header imageUrl="/static/demo/brand/tabler.svg"></site-header>

    <site-nav></site-nav>
    <router-view/>
  </site-wrapper>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "../../dist/css/dashboard.css";
  /**./assets/logo.png**/
</style>
