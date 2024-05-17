<script setup>
import { useAuth } from '@a/composables/useAuth'

const { formInputs, onSubmit, shared } = useAuth()
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="divide-y divide-gray-200">
      <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        <InputBase id="identNumber" name="identNumber" type="text" placeholder="Numero de Identificación"
          label="Numero de Identificación" v-model="formInputs.identNumber"></InputBase>
        <InputBase id="password" name="password" type="password" placeholder="Contraseña" label="Contraseña"
          v-model="formInputs.password"></InputBase>
        <InputSelect id="tipo" name="tipo" placeholder="Selecciona el tipo de usuario" v-model="formInputs.type">
          <option value=1>Profesional</option>
          <option value=2>Paciente</option>
        </InputSelect>
        <BtnBase type="submit" text="Iniciar Sesión" />
      </div>
    </div>
  </form>

  <ModalAlert v-if="shared.errorValidated" title="Parametros incorrectos" type="danger"></ModalAlert>
</template>
