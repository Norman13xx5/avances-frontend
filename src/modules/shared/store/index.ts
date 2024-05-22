import { defineStore } from 'pinia'
import type { SharedState } from './State'

export const useSharedStore = defineStore('shared', {
  // Definición del estado inicial
  state: (): SharedState => ({
    serverApiUrl: 'http://127.0.0.1:8000/api/',
    token: localStorage.getItem('token') || '',
    identification_number: localStorage.getItem('identification_number') || '',
    loading: false,
    modal: false,
    errorValidated: false,
    errorMessages: '',
    url_sesion: localStorage.getItem('url_sesion') || ''
  }),
  // Getters
  getters: {
    getToken(state): string {
      return localStorage.getItem('token') || state.token
    },
    getIdentificationNumber(state) {
      return localStorage.getItem('identification_number') || state.identification_number
    }
  },
  // Acciones
  actions: {
    setToken(token: string, identification_number: string) {
      localStorage.setItem('token', token)
      localStorage.setItem('identification_number', identification_number)
      this.token = token
      this.identification_number = identification_number
    },
    setLoading(loading: boolean) {
      this.loading = loading
    },
    setModal() {
      this.modal = !this.modal
    },
    setErrorValidated(errorValidated: boolean) {
      this.errorValidated = errorValidated
    },
    setErrorMessages(errorMessages: string) {
      this.errorMessages = errorMessages
    },
    setTimeoutErrorMessages() {
      setTimeout(() => {
        this.errorValidated = false
      }, 1000)
    },
    setUrlSesion(url_sesion: string) {
      localStorage.setItem('url_sesion', url_sesion)
      this.url_sesion = url_sesion
    }
  }
})
