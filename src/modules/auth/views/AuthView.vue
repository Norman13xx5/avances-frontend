<script setup>
import { defineAsyncComponent } from 'vue'

const FormLogin = defineAsyncComponent(() => import('@a/components/FormLogin.vue'))
</script>

<template>
  <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
    <div class="max-w-md mx-auto">
      <div>
        <h1 class="text-2xl font-semibold">Formulario de Inicio de Sesión</h1>
      </div>
      <FormLogin />
    </div>
  </div>
</template>
