<script setup>
import { defineAsyncComponent } from 'vue'
const layoutComponent = defineAsyncComponent(() => import('@s/components/dashboardViews.vue'))
</script>

<template>
    <layoutComponent>
        <router-view />
    </layoutComponent>
</template>