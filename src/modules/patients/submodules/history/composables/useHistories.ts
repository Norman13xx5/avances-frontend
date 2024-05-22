import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSharedStore } from '@s/store'
import { getHistories, confirmAssistance } from '@pah/services'

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

  const onSubmit = async (id: number) => {
    console.log(id)
    shared.setLoading(true)
    const response = await confirmAssistance(id)
    if (response.status === 200) {
      shared.setLoading(false)
      console.log('Historia confirmada exitosamente')
      return
      //redirect('history')
    }
    if (response.status === 404) {
      shared.setLoading(false)
      console.log('Historia no encontrada o ya confirmada')
      return
    }
    shared.setLoading(false)
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

  return { arrayHistories, redirect, onSubmit, formInputs, shared }
}
