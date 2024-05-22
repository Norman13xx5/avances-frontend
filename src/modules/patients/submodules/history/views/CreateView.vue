<script setup>
import { defineAsyncComponent } from 'vue'

const FormUpdateProfile = defineAsyncComponent(() => import('@pah/components/FormHistory.vue'))
</script>

<template>
    <FormUpdateProfile />
</template>
