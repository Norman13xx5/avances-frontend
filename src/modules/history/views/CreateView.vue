<script setup>
import { defineAsyncComponent } from 'vue'

const FormUpdateProfile = defineAsyncComponent(() => import('@h/components/FormHistory.vue'))
</script>

<template>
    <FormUpdateProfile />
</template>
