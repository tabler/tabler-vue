<template>
    <div class="header collapse d-lg-flex p-0" id="headerMenuCollapse">
        <container>
            <grid-row class="align-items-center">
                <grid-col lg="3" class="ml-auto">
                    <!--todo convert to a component-->
                    <!--<form class="input-icon my-3 my-lg-0">-->
                        <!--<input class="form-control header-search" placeholder="Search…" tabindex="1" type="search">-->
                        <!--<div class="input-icon-addon">-->
                            <!--<i class="fe fe-search"></i>-->
                        <!--</div>-->
                    <!--</form>-->
                </grid-col>

                <grid-col class="order-lg-first">
                    <t-nav tabbed class="border-0 flex-column flex-lg-row">
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
                        <nav-item to="/" icon="check-square" label="Forms"/>
                        <nav-item to="/" icon="image" label="Gallery"/>
                        <nav-item to="/" icon="file-text" label="Documentation"/>
                    </t-nav>
                </grid-col>
            </grid-row>
        </container>
    </div>
</template>

<script>
    import NavItem from '../Nav/NavItem.vue'
    import DropdownMenuItem from "../Dropdown/DropdownMenuItem.vue";

    export default {
        name: "site-nav",
        components: {
            DropdownMenuItem,
            NavItem
        }
    }
</script>

<style scoped>

</style>