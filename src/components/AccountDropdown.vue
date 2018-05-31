<template>
    <dropdown position="right">
        <template slot="dropdown-toggle">
            <a class="nav-link pr-0 leading-none">
                <span class="avatar" style="background-image: url(&quot;./demo/faces/female/25.jpg&quot;);"></span>
                <span class="ml-2 d-none d-lg-block">
                    <span class="text-default">Jane Pearson</span><small
                        class="text-muted d-block mt-1">Administrator</small></span>
            </a>
        </template>

        <dropdown-menu-item icon="user" label="Profile"/>
        <dropdown-menu-item icon="settings" label="Settings"/>
        <dropdown-menu-item icon="mail" label="Inbox" badge="6"/>
        <dropdown-menu-item icon="send" label="Message"/>
        <dropdown-divider/>
        <dropdown-menu-item icon="help-circle" label="Need help?"/>
        <dropdown-menu-item icon="log-out" label="Sign out"/>
    </dropdown>
</template>

<script>
    import Dropdown from "./Dropdown/Dropdown.vue";
    import DropdownMenuItem from "./Dropdown/DropdownMenuItem.vue";
    import DropdownDivider from "./Dropdown/DropdownDivider";

    export default {
        components: {
            DropdownDivider,
            DropdownMenuItem,
            Dropdown},
        name: "account-dropdown"
    }
</script>

<style scoped>

</style>