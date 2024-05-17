import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSharedStore } from '@s/store'
import { loginService } from '@a/services'

export function useAuth() {
  const router = useRouter()
  const shared = useSharedStore()

  const formInputs = ref({
    identNumber: '',
    password: '',
    repassword: '',
    type: ''
  })

  const onSubmit = async () => {
    if (
      formInputs.value.identNumber !== '' &&
      formInputs.value.password !== '' &&
      formInputs.value.type !== ''
    ) {
      shared.setLoading(true)
      const response = await loginService({
        identification_number: formInputs.value.identNumber,
        password: formInputs.value.password,
        type: Number(formInputs.value.type)
      })
      shared.setLoading(false)

      if (response.authorization?.token) {
        shared.setToken(response.authorization.token)
      }

      if (response.status === 200) {
        // router.push({ name: 'auth-change-password' })
      }

      if (response.status === 403) {
        router.push({ name: 'auth-change-password' })
      }
    }
    shared.setErrorValidated(true)
    shared.setTimeoutErrorMessages()
  }

  const onSubmitChangePassword = async () => {
    if (formInputs.value.password === formInputs.value.repassword) {
      shared.setLoading(true)
      const response = await loginService({
        identification_number: formInputs.value.identNumber,
        password: formInputs.value.password,
        type: Number(formInputs.value.type)
      })
      shared.setLoading(false)

      if (response.status === 200) {
        // router.push({ name: 'auth-change-password' })
      }
    }
    shared.setErrorValidated(true)
    shared.setTimeoutErrorMessages()
  }

  return {
    formInputs,
    onSubmit,
    onSubmitChangePassword,
    shared
  }
}
