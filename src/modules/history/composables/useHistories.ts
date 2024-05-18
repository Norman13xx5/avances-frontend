import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSharedStore } from '@s/store'
import { getHistories, createHistory } from '@h/services'

export function useHistories() {
  const router = useRouter()
  const shared = useSharedStore()

  const arrayHistories = ref()

  const formInputs = ref({
    patient_id: '',
    patient_info: '',
    date_time: '',
    patient_status: '',
    medical_history: '',
    final_evolution: '',
    professional_concept: '',
    recommendations: ''
  })

  const redirect = (route: string) => {
    router.push({ name: route })
  }

  const onSubmit = async () => {
    shared.setLoading(true)
    if (
      formInputs.value.patient_id !== '' &&
      formInputs.value.patient_info !== '' &&
      formInputs.value.date_time !== '' &&
      formInputs.value.patient_status !== '' &&
      formInputs.value.medical_history !== '' &&
      formInputs.value.final_evolution !== '' &&
      formInputs.value.professional_concept !== '' &&
      formInputs.value.recommendations !== ''
    ) {
      const response = await createHistory({
        patient_id: Number(formInputs.value.patient_id),
        patient_info: formInputs.value.patient_info,
        date_time: formInputs.value.date_time,
        patient_status: formInputs.value.patient_status,
        medical_history: formInputs.value.medical_history,
        final_evolution: formInputs.value.final_evolution,
        professional_concept: formInputs.value.professional_concept,
        recommendations: formInputs.value.recommendations
      })
      shared.setLoading(false)
      if (response.status === 500) {
        shared.setErrorValidated(true)
        shared.setTimeoutErrorMessages()
      }

      if (response.status === 201) {
        redirect('history-home')
      }
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
