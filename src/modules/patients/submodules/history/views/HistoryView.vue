<script setup>
import { useHistories } from '@pah/composables/useHistories'

const { arrayHistories, redirect } = useHistories()
</script>

<template>
    <tableData :title="'Historial'" @create-event="redirect('history-create')">
        <thead>
            <tr class="text-gray-400">
                <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200">
                    Id
                </th>
                <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200">
                    Professional Id
                </th>
                <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200">
                    Patient Info
                </th>
                <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200">
                    Date Time
                </th>
                <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200">
                    Patient Status
                </th>
                <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200">
                    Medical History
                </th>
                <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200">
                    Final Evolution
                </th>
                <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200">
                    professional_concept
                </th>
                <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200">
                    recomendaciones
                </th>
                <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200">
                    asistencias
                </th>
            </tr>
        </thead>
        <tbody class="text-gray-600">
            <tr v-for="history in arrayHistories" :key="history.id">
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                    {{ history.patient_id }}
                </td>
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                    {{ history.professional_id }}
                </td>
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                    {{ history.patient_info }}
                </td>
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                    {{ history.date_time }}
                </td>
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                    {{ history.patient_status }}
                </td>
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                    {{ history.medical_history }}
                </td>
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                    {{ history.final_evolution }}
                </td>
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                    {{ history.professional_concept }}
                </td>
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                    {{ history.recommendations }}
                </td>
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                    {{ history.assistance }}
                </td>
            </tr>
        </tbody>
    </tableData>
</template>