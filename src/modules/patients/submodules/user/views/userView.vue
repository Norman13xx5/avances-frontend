<script setup>
import { defineAsyncComponent } from 'vue'

const FormUpdateProfile = defineAsyncComponent(() => import('@pau/components/FormUpdateProfile.vue'))
</script>

<template>
    <FormUpdateProfile />
</template>
