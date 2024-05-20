<script setup>
import { defineAsyncComponent } from 'vue'
const layoutComponent = defineAsyncComponent(() => import('@s/components/dashboardViews.vue'))
</script>

<template>
  <layout-component>
    <router-view />
  </layout-component>
</template>
