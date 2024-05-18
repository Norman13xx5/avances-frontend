<script setup>
import { defineAsyncComponent } from 'vue'

const FormUpdateProfile = defineAsyncComponent(() => import('@u/components/FormUpdateProfile.vue'))
</script>

<template>
    <FormUpdateProfile />
</template>
