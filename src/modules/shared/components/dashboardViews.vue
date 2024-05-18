<script setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useSharedStore } from '@s/store'
import { useAuth } from '@a/composables/useAuth'
import BtnBase from './BtnBase.vue';

const router = useRouter()
const shared = useSharedStore()
const { closeSession } = useAuth()

const redirect = (route) => {
    router.push({ name: route })
}

onBeforeMount(() => {
    if (localStorage.getItem('token') === null || localStorage.getItem('token') === "") {
        router.push({ name: 'auth-login' })
    }
})
</script>

<template>
    <div class="bg-gray-100 text-gray-600 h-screen flex overflow-hidden text-sm">
        <div class="bg-white w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex">

            <div class="flex mx-auto flex-grow mt-10 flex-col text-gray-400 space-y-4">
                <button @click="redirect('user-home')" class="h-10 w-12 rounded-md flex items-center justify-center">
                    <svg class="h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                            d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </button>
                <button @click="redirect('history-home')" class="h-10 w-12 rounded-md flex items-center justify-center">
                    <svg class="h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="flex-grow overflow-hidden h-full flex flex-col">
            <div class="h-16 lg:flex w-full border-b border-gray-200 hidden px-10">
                <div class="ml-auto flex items-center space-x-7">

                    <button @click="shared.setModal()" class="flex items-center">
                        <span class="ml-2">Profile</span>
                        <svg viewBox="0 0 24 24" class="w-4 ml-1 flex-shrink-0" stroke="currentColor" stroke-width="2"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex-grow flex overflow-x-hidden">

                <div class="flex-grow bg-white overflow-y-auto">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
    <ModalAlert v-if="shared.modal" type="danger" title="Cerrrar Sesión" btn="Cerrar" @close-event="shared.setModal()">
        <BtnBase type="button" text="Cerrar sesion" @click="closeSession"></BtnBase>
    </ModalAlert>
</template>