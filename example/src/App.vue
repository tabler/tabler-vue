<template>
  <site-wrapper>
    <site-header imageUrl="/static/demo/brand/tabler.svg">
      <div class="nav-item">
        <t-button :outline="true" size="sm" href="https://github.com/tabler/tabler-vue"
                  target="_blank">Source code
        </t-button>
      </div>
      <notifications/>
      <account-dropdown/>
    </site-header>
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
