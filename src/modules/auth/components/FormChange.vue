<script setup>
import { useAuth } from '@a/composables/useAuth'

const { formInputs, onSubmitChangePassword } = useAuth()
</script>

<template>
  <form @submit.prevent="onSubmitChangePassword">
    <div class="divide-y divide-gray-200">
      <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        <InputBase id="password" name="password" type="text" placeholder="Numero de Identificación"
          label="Numero de Identificación" v-model="formInputs.password"></InputBase>
        <InputBase id="repassword" name="repassword" type="repassword" placeholder="Contraseña" label="Contraseña"
          v-model="formInputs.repassword"></InputBase>
        <BtnBase type="submit" text="Actualizar Contraseña" />
      </div>
    </div>
  </form>

  <ModalAlert v-if="formInputs.errorValidated" title="Parametros incorrectos" type="danger"></ModalAlert>
</template>
