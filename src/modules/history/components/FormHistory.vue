<script setup>
import { useHistories } from '@h/composables/useHistories'

const { formInputs, onSubmit, shared } = useHistories()

</script>

<template>
    <section class="m-8">
        <form @submit.prevent="onSubmit">
            <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <InputBase hidden id="historyId" name="historyId" type="text" placeholder="Paciente"
                        label="Paciente" v-model="formInputs.historyId"></InputBase>
                    <InputBase id="patientId" name="patientId" type="text" placeholder="Paciente" label="Paciente"
                        v-model="formInputs.patientId"></InputBase>
                    <InputBase id="patientInfo" name="patientInfo" type="text" placeholder="Información del paciente"
                        label="Información del paciente" v-model="formInputs.patientInfo"></InputBase>
                    <InputBase id="dateTime" name="dateTime" type="date" placeholder="Fecha y hora" label="Fecha y hora"
                        v-model="formInputs.dateTime"></InputBase>
                    <InputBase id="patientStatus" name="patientStatus" type="text" placeholder="Estado del paciente"
                        label="Estado del paciente" v-model="formInputs.patientStatus"></InputBase>
                    <InputBase id="medicalHistory" name="medicalHistory" type="text" placeholder="Historial médico"
                        label="Historial médico" v-model="formInputs.medicalHistory"></InputBase>
                    <InputBase id="finalEvolution" name="finalEvolution" type="text" placeholder="Final de evolución"
                        label="Final de evolución" v-model="formInputs.finalEvolution"></InputBase>
                    <InputBase id="proffesionalConceept" name="proffesionalConceept" type="text"
                        placeholder="Concepto Profesional" label="Concepto Profesional"
                        v-model="formInputs.proffesionalConcept"></InputBase>
                    <InputBase id="recommendations" name="recommendations" type="text" placeholder="Recomendaciones"
                        label="Recomendaciones" v-model="formInputs.recommendations"></InputBase>
                    <div class="flex justify-between">
                        <BtnBase type="submit" text="Guardar historia" />
                    </div>
                </div>
            </div>
        </form>
    </section>

    <ModalAlert v-if="shared.errorValidated" title="Parametros incorrectos" type="danger"></ModalAlert>
</template>
