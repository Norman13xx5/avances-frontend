<script setup>
import { useAuth } from '@a/composables/useAuth'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const { formInputs, onSubmitChangePassword } = useAuth()
const route = useRoute()
const identificationNumber = ref(route.params.id)
</script>

<template>
  <form @submit.prevent="onSubmitChangePassword(identificationNumber)">
    <div class="divide-y divide-gray-200">
      <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        <InputBase id="password" name="password" type="text" placeholder="Contraseña" label="Contraseña"
          v-model="formInputs.password"></InputBase>
        <InputBase id="repassword" name="repassword" type="repassword" placeholder="Verificar contraseña"
          label="Verificar contraseña" v-model="formInputs.repassword"></InputBase>
        <BtnBase type="submit" text="Actualizar Contraseña" />
      </div>
    </div>
  </form>

  <ModalAlert v-if="formInputs.errorValidated" title="Parametros incorrectos" type="danger"></ModalAlert>
</template>
