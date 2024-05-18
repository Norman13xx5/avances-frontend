import { ref } from 'vue'
import { useSharedStore } from '@s/store'
import { getHistories } from '@h/services/index'

export function useGetHistories() {
  const shared = useSharedStore()

  const formInputs = ref({
    professional_id: localStorage.getItem('identification_number')
  })
  const onSubmit = async () => {
    if (formInputs.value.professional_id !== null) {
      shared.setLoading(true)
      const response = await getHistories({ professional_id: formInputs.value.professional_id })
    }
    shared.setLoading(false)
  }

  return { formInputs, onSubmit }
}
