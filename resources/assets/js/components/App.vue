<template>
    <div id="wrapper">
        <topbar></topbar>
        <sidebar></sidebar>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <rightbar></rightbar>
    </div>
</template>

<script>

import Topbar from './Topbar.vue';
import Sidebar from './Sidebar.vue';
import Rightbar from './Rightbar.vue';

export default {
    components: {
        'topbar': Topbar,
        'sidebar': Sidebar,
        'rightbar': Rightbar
    }
}
</script>
