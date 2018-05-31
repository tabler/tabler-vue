<template>
    <dropdown position="right" class="d-none d-md-flex">
        <template slot="dropdown-toggle" >
            <a class="nav-link icon">
                <i class="fe fe-bell"></i>
                <span class="nav-unread"></span>
            </a>
        </template>
        <dropdown-menu-item class="d-flex">
            <span class="avatar mr-3 align-self-center" style="background-image: url(demo/faces/male/41.jpg)"></span>
            <div>
                <strong>Nathan</strong> pushed new commit: Fix page load performance issue.
                <div class="small text-muted">10 minutes ago</div>
            </div>
        </dropdown-menu-item>

        <dropdown-menu-item class="d-flex">
            <span class="avatar mr-3 align-self-center" style="background-image: url(demo/faces/female/1.jpg)"></span>
            <div>
                <strong>Alice</strong> started new task: Tabler UI design.
                <div class="small text-muted">1 hour ago</div>
            </div>
        </dropdown-menu-item>

        <dropdown-menu-item class="d-flex">
            <span class="avatar mr-3 align-self-center" style="background-image: url(demo/faces/female/18.jpg)"></span>
            <div>
                <strong>Rose</strong> deployed new version of NodeJS REST Api V3
                <div class="small text-muted">2 hours ago</div>
            </div>
        </dropdown-menu-item>

        <dropdown-divider/>

        <dropdown-menu-item class="text-center text-muted-dark">
            Mark all as read
        </dropdown-menu-item>
    </dropdown>
</template>

<script>
    import Dropdown from './Dropdown/Dropdown.vue'
    import DropdownMenu from './Dropdown/DropdownMenu.vue'
    import DropdownMenuItem from './Dropdown/DropdownMenuItem.vue'
    import DropdownDivider from './Dropdown/DropdownDivider'
    export default {
        name: "notifications",
        components: {
            Dropdown,
            DropdownMenu,
            DropdownMenuItem,
            DropdownDivider
        }
    }
</script>

<style scoped>

</style>