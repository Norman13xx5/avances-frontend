import { ref } from 'vue'
import { useSharedStore } from '@s/store'
import { loginService } from '@a/services'

export function useAuth() {
  const shared = useSharedStore()

  const formInputs = ref({
    identNumber: '',
    password: '',
    type: '',
    errorValidated: false
  })

  const onSubmit = async () => {
    if (
      formInputs.value.identNumber !== '' &&
      formInputs.value.password !== '' &&
      formInputs.value.type !== ''
    ) {
      const response = await loginService({
        identification_number: formInputs.value.identNumber,
        password: formInputs.value.password,
        type: Number(formInputs.value.type)
      })

      if (response.authorization?.token) {
        shared.setToken(response.authorization.token)
      }
      console.log(shared.getToken)
      return
    }
    formInputs.value.errorValidated = true
    setTimeout(() => {
      formInputs.value.errorValidated = false
    }, 1000)
  }

  return {
    formInputs,
    onSubmit
  }
}
