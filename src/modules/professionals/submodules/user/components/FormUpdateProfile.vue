<script setup>
import { updateProfile } from '@pru/composables/updateProfile'

const { formInputs, onSubmit, shared } = updateProfile()
</script>

<template>
    <section class="m-8">
        <form @submit.prevent="onSubmit">
            <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <InputBase hidden id="id" name="id" type="text" placeholder="Numero de Identificación"
                        label="Numero de Identificación" v-model="formInputs.id" />
                    <InputBase id="identNumber" name="identNumber" type="text" placeholder="Numero de Identificación"
                        label="Numero de Identificación" v-model="formInputs.identNumber" />
                    <InputBase id="firstName" name="firstName" type="text" placeholder="Nombre de usuario"
                        label="Nombre de usuario" v-model="formInputs.firstName" />
                    <InputBase id="lastName" name="lastName" type="text" placeholder="Apellido de usuario"
                        label="Apellido de usuario" v-model="formInputs.lastName" />
                    <InputBase id="email" name="email" type="email" placeholder="Correo electronico"
                        label="Correo electronico" v-model="formInputs.email" />
                    <InputBase id="phoneNumber" name="phoneNumber" type="text"
                        placeholder="Numero de celular o telefono" label="Numero de celular o telefono"
                        v-model="formInputs.phoneNumber" />
                    <InputBase id="location" name="location" type="text" placeholder="Locación" label="Locación"
                        v-model="formInputs.location" />
                    <InputBase id="password" name="password" type="password" placeholder="Contraseña"
                        label="Contraseña" v-model="formInputs.password" />
                    <InputSelect id="tipo" name="tipo" placeholder="Selecciona el tipo de usuario"
                        v-model="formInputs.type">
                        <option value="1">Profesional</option>
                        <option value="2">Paciente</option>
                    </InputSelect>
                    <div class="flex justify-between">
                        <BtnBase type="submit" text="Guardar cambios" />
                    </div>
                </div>
            </div>
        </form>
    </section>

    <ModalAlert v-if="shared.errorValidated" title="Parametros incorrectos" type="danger" />
</template>
