import { defineStore } from 'pinia'
import type { SharedState } from './State'

export const useSharedStore = defineStore('shared', {
  // Definición del estado inicial
  state: (): SharedState => ({
    serverApiUrl: 'http://127.0.0.1:8000/api/',
    token: localStorage.getItem('token') || '',
    loading: false,
    errorValidated: false,
    errorMessages: ''
  }),
  // Getters
  getters: {
    getToken(state): string {
      return localStorage.getItem('token') || state.token
    }
  },
  // Acciones
  actions: {
    setToken(token: string) {
      localStorage.setItem('token', token)
      this.token = token
    },
    setLoading(loading: boolean) {
      this.loading = loading
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
    }
  }
})
