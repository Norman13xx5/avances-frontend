import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSharedStore } from '@s/store'
import { loginService, changePassword, logOut } from '@a/services'

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

      if ((response.authorization?.token, response.authorization?.identification_number)) {
        shared.setToken(response.authorization.token, response.authorization.identification_number)
      }

      const url = response.typeUser === 'professional' ? 'professional' : 'patients'
      shared.setUrlSesion(url)

      if (response.status === 200) {
        router.push({ name: `${url}-home` })
      }

      if (response.status === 403) {
        router.push({
          name: 'auth-change-password',
          params: { id: response.authorization?.identification_number }
        })
      }
      return
    }
    shared.setErrorValidated(true)
    shared.setTimeoutErrorMessages()
  }

  const onSubmitChangePassword = async (id: string) => {
    if (
      (formInputs.value.password !== '' && formInputs.value.repassword !== '') ||
      formInputs.value.password === formInputs.value.repassword
    ) {
      shared.setLoading(true)
      const response = await changePassword({
        identification_number: id,
        password: formInputs.value.password
      })
      shared.setLoading(false)
      if (response.status === 201) {
        router.push({ name: `${localStorage.getItem('url_sesion')}-home` })
      }
      return
    }
    shared.setErrorValidated(true)
    shared.setTimeoutErrorMessages()
    return
  }

  const closeSession = async () => {
    shared.setLoading(true)
    const response = await logOut()
    shared.setLoading(false)
    localStorage.removeItem('token')
    localStorage.removeItem('identification_number')
    localStorage.removeItem('url_sesion')
    if (response.status === 200) {
      router.push({
        name: 'auth-login'
      })
      shared.setModal()
    }
  }

  return {
    formInputs,
    onSubmit,
    onSubmitChangePassword,
    closeSession,
    shared
  }
}
