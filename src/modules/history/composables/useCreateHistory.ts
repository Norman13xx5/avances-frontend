import { ref } from 'vue'
import { useSharedStore } from '@s/store'
import { createHistory } from '@h/services/index'

export function useHistory() {
  const shared = useSharedStore()

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

  const onSubmit = async () => {
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
      shared.setLoading(true)
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
        return 'Usuario actualizado exitosamente'
      }
    }
  }
}
