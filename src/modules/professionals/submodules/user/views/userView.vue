<script setup>
import { defineAsyncComponent } from 'vue'

const FormUpdateProfile = defineAsyncComponent(() => import('@pru/components/FormUpdateProfile.vue'))
</script>

<template>
    <FormUpdateProfile />
</template>
