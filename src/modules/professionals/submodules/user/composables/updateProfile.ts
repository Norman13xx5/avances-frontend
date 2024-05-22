import { ref, onMounted } from 'vue'
import { useSharedStore } from '@s/store'
import { updateProfile as updateProfileService, userId } from '@pru/services'

export function updateProfile() {
  const shared = useSharedStore()
  const arrayUser = ref()

  const formInputs = ref({
    id: 0,
    identNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    location: '',
    password: '',
    type: ''
  })

  onMounted(async () => {
    shared.setLoading(true)

    const id = localStorage.getItem('identification_number')
    if (id) {
      try {
        const response = await userId(id)
        if (response.status === 200) {
          arrayUser.value = response.data
          formInputs.value.id = arrayUser.value.id || ''
          formInputs.value.identNumber = arrayUser.value.identification_number || ''
          formInputs.value.firstName = arrayUser.value.first_name || ''
          formInputs.value.lastName = arrayUser.value.last_name || ''
          formInputs.value.email = arrayUser.value.email || ''
          formInputs.value.phoneNumber = arrayUser.value.phone_number || ''
          formInputs.value.location = arrayUser.value.location || ''
          formInputs.value.type = arrayUser.value.type || ''
        } else if (response.status === 404) {
          console.log('Usuario no encontrado')
        }
      } catch (error) {
        console.error(error)
      } finally {
        shared.setLoading(false)
      }
    } else {
      shared.setLoading(false)
    }
  })

  const onSubmit = async () => {
    if (
      formInputs.value.id &&
      formInputs.value.identNumber &&
      formInputs.value.firstName &&
      formInputs.value.lastName &&
      formInputs.value.email &&
      formInputs.value.phoneNumber &&
      formInputs.value.location &&
      formInputs.value.password &&
      formInputs.value.type
    ) {
      shared.setLoading(true)
      try {
        const response = await updateProfileService({
          id: formInputs.value.id,
          identification_number: formInputs.value.identNumber,
          first_name: formInputs.value.firstName,
          last_name: formInputs.value.lastName,
          email: formInputs.value.email,
          phone_number: formInputs.value.phoneNumber,
          location: formInputs.value.location,
          password: formInputs.value.password,
          type: Number(formInputs.value.type)
        })
        if (response.status === 200) {
          console.log('Usuario actualizado exitosamente')
        } else if (response.status === 404) {
          shared.setErrorValidated(true)
          shared.setTimeoutErrorMessages()
          console.log('Usuario no encontrado')
        }
      } catch (error) {
        console.error(error)
      } finally {
        shared.setLoading(false)
      }
    }
  }

  return { formInputs, onSubmit, shared }
}
