<template>
  <site-wrapper>
    <site-header imageUrl="/static/demo/brand/tabler.svg" @toggle-menu="toggleMenu">
      <div class="nav-item">
        <t-button :outline="true" size="sm" href="https://github.com/tabler/tabler-vue"
                  target="_blank">Source code
        </t-button>
      </div>
      <notifications/>
      <account-dropdown imageUrl="/static/demo/faces/female/25.jpg"/>
    </site-header>
    <site-nav :collapsed="menuCollapsed">
      <nav-item to="/" icon="home" label="Home"/>
      <nav-item to="/interface" icon="box" label="Interface">
        <dropdown-menu-item label="Cards design"/>
        <dropdown-menu-item label="Charts"/>
        <dropdown-menu-item label="Pricing cards"/>
      </nav-item>
      <nav-item to="/pages" icon="calendar" label="Components">
        <dropdown-menu-item label="Maps"/>
        <dropdown-menu-item label="Icons"/>
        <dropdown-menu-item label="Blog"/>
        <dropdown-menu-item label="Carousel"/>
      </nav-item>
      <nav-item to="/pages" icon="file" label="Pages">
        <dropdown-menu-item label="Profile"/>
        <dropdown-menu-item label="Login"/>
        <dropdown-menu-item label="Register"/>
        <dropdown-menu-item label="Forgot password"/>
        <dropdown-menu-item label="400 error"/>
        <dropdown-menu-item label="401 error"/>
        <dropdown-menu-item label="403 error"/>
        <dropdown-menu-item label="404 error"/>
        <dropdown-menu-item label="500 error"/>
        <dropdown-menu-item label="503 error"/>
        <dropdown-menu-item label="Email"/>
        <dropdown-menu-item label="Empty page"/>
        <dropdown-menu-item label="RTL mode"/>
      </nav-item>
      <nav-item to="/forms" icon="check-square" label="Forms"/>
      <nav-item to="/" icon="image" label="Gallery"/>
      <nav-item to="/" icon="file-text" label="Documentation"/>
    </site-nav>
    <router-view/>
  </site-wrapper>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
      menuCollapsed: true
  }),
  methods: {
    toggleMenu() {
      this.menuCollapsed = !this.menuCollapsed
    }
  }
}
</script>

<style>
    @import "../../dist/css/dashboard.css";
    /**./assets/logo.png**/
</style>
