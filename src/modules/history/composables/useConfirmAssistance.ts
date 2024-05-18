import { ref } from 'vue'
import { useSharedStore } from '@s/store'
import { confirmAssistance } from '@h/services/index'

export function useConfirmAssistance() {
  const shared = useSharedStore()

  const formInputs = ref({
    id: null
  })
  const onSubmit = async () => {
    if (formInputs.value.id !== null) {
      shared.setLoading(true)
      const response = await confirmAssistance(formInputs.value.id)
    }
    shared.setLoading(false)
  }

  return { formInputs, onSubmit }
}
