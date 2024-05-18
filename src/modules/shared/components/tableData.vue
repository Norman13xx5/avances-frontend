<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
defineEmits(['createEvent'])
</script>

<template>
    <div class="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white sticky top-0">
        <div class="flex w-full items-center">
            <div class="flex items-center text-3xl text-gray-900 mb-4 mt-2">
                {{ title }}
            </div>
            <div class="ml-auto">
                <BtnBase type="button" text="Crear Registro" @click="$emit('createEvent')" />
            </div>
        </div>
    </div>
    <div class="sm:p-7 p-4">
        <table class="w-full text-left">
            <slot></slot>
        </table>
    </div>
</template>