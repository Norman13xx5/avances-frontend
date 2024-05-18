<script setup>
import { defineAsyncComponent } from 'vue'

const FormUpdateProfile = defineAsyncComponent(() => import('@u/components/FormUpdateProfile.vue'))
</script>

<template>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
            <div>
                <h1 class="text-2xl font-semibold">Formulario de datos personales</h1>
            </div>
            <FormUpdateProfile />
        </div>
    </div>
</template>
