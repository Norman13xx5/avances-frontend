<script setup>
import { defineAsyncComponent } from 'vue'

const FormUpdateProfile = defineAsyncComponent(() => import('@prh/components/FormHistory.vue'))
</script>

<template>
    <FormUpdateProfile />
</template>
