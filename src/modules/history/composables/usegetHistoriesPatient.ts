import { ref } from 'vue'
import { useSharedStore } from '@s/store'
import { getHistoryPatient } from '@h/services/index'

export function useGetHistoriesPatient() {
  const shared = useSharedStore()

  const formInputs = ref({
    patient_id: localStorage.getItem('identification_number')
  })
  const onSubmit = async () => {
    if (formInputs.value.patient_id !== null) {
      shared.setLoading(true)
      const response = await getHistoryPatient({ patient_id: formInputs.value.patient_id })
    }
    shared.setLoading(false)
  }

  return { formInputs, onSubmit }
}
