import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSharedStore } from '@s/store'
import { getHistories, createHistory } from '@pah/services'

export function useHistories() {
  const router = useRouter()
  const shared = useSharedStore()

  const arrayHistories = ref()

  const formInputs = ref({
    patientId: '',
    patientInfo: '',
    dateTime: '',
    patientStatus: '',
    medicalHistory: '',
    finalEvolution: '',
    proffesionalConcept: '',
    recommendations: ''
  })

  const redirect = (route: string) => {
    router.push({ name: route })
  }

  const onSubmit = async () => {
    shared.setLoading(true)
    const identNumber = localStorage.getItem('identification_number')
    if (
      identNumber !== null &&
      formInputs.value.patientId !== '' &&
      formInputs.value.patientInfo !== '' &&
      formInputs.value.dateTime !== '' &&
      formInputs.value.patientStatus !== '' &&
      formInputs.value.medicalHistory !== '' &&
      formInputs.value.finalEvolution !== '' &&
      formInputs.value.proffesionalConcept !== '' &&
      formInputs.value.recommendations !== ''
    ) {
      const response = await createHistory({
        identNumber: identNumber,
        patient_id: Number(formInputs.value.patientId),
        patient_info: formInputs.value.patientInfo,
        date_time: formInputs.value.dateTime,
        patient_status: formInputs.value.patientStatus,
        medical_history: formInputs.value.medicalHistory,
        final_evolution: formInputs.value.finalEvolution,
        professional_concept: formInputs.value.proffesionalConcept,
        recommendations: formInputs.value.recommendations
      })
      if (response.status === 201) {
        redirect('history-home')
      }
      if (response.status === 500) {
        shared.setErrorValidated(true)
        shared.setTimeoutErrorMessages()
      }
      shared.setLoading(false)
    }
  }

  onMounted(async () => {
    shared.setLoading(true)
    const id = localStorage.getItem('identification_number')
    if (id !== null) {
      const response = await getHistories(id.toString())
      arrayHistories.value = response
    }
    shared.setLoading(false)
  })

  return { arrayHistories, redirect, formInputs, onSubmit, shared }
}
