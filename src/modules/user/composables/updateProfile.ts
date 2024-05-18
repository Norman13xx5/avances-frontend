import { ref } from 'vue'
import { useSharedStore } from '@s/store'
import { useRouter } from 'vue-router'
import { updateProfile as updateProfileService, logOut as logOutService } from '@u/services'

export function updateProfile() {
  const shared = useSharedStore()
  const router = useRouter()

  const formInputs = ref({
    identNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    location: '',
    password: '',
    type: ''
  })

  const onSubmit = async () => {
    if (
      formInputs.value.identNumber !== '' &&
      formInputs.value.firstName !== '' &&
      formInputs.value.lastName !== '' &&
      formInputs.value.email !== '' &&
      formInputs.value.phoneNumber !== '' &&
      formInputs.value.location !== '' &&
      formInputs.value.password !== '' &&
      formInputs.value.type !== ''
    ) {
      shared.setLoading(true)
      const response = await updateProfileService({
        identification_number: formInputs.value.identNumber,
        first_name: formInputs.value.firstName,
        last_name: formInputs.value.lastName,
        email: formInputs.value.email,
        phone_number: formInputs.value.phoneNumber,
        location: formInputs.value.location,
        password: formInputs.value.password,
        type: Number(formInputs.value.type)
      })
      shared.setLoading(false)
      if (response.status === 404) {
        shared.setErrorValidated(true)
        shared.setTimeoutErrorMessages()
      }

      if (response.status === 200) {
        return 'Usuario actualizado exitosamente'
      }
    }
  }

  const LogOut = async () => {
    shared.setLoading(true)
    const response = await logOutService()
    shared.setLoading(false)
    if (response.status === 200) {
      router.push({
        name: 'auth-login'
      })
    }
  }

  return { formInputs, onSubmit, shared, LogOut }
}
